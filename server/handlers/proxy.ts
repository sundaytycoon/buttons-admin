import express from 'express';
import axios, {Method} from 'axios';
import logger from '@server/logger';

const handlerProxy = async (req:express.Request, res:express.Response) => {
  const proxyUrl = 'http://localhost:5000';
  const proxyUri = `${proxyUrl}${req.url}`;
  const startDate = new Date();

  const proxyHeader:Record<string, string> = {
    'cookie': req.headers.cookie || '',
    'user-agent': req.headers['user-agent'] || '',
  };

  for (const property in req.headers) {
    if (property.toLowerCase().indexOf('x-') === 0) {
      const headerProperty = req.headers[property];

      if (Array.isArray(headerProperty)) {
        proxyHeader[property] = headerProperty[0];
        return;
      }

      proxyHeader[property] = headerProperty || '';
    }
  }
  try {
    const proxyRes = await axios({
      url: proxyUri,
      method: req.method as Method,
      data: req.body,
      headers: proxyHeader,
    });
    res.status(proxyRes.status);
    res.send(proxyRes.data);

    logger.info('message 입니다.', {
      router: req.baseUrl,
      requestUrl: proxyUri,
      method: req.method,
      body: req.body,
      resStatus: proxyRes.status,
      resBody: proxyRes.data,
      durationMs: (new Date().getMilliseconds() - startDate.getMilliseconds()),
    });
  } catch (e: any) {
    const status = e.response?.status ?? 404;
    const data = e.response?.data ?? undefined;

    res.status(status);
    res.send(data);

    logger.error('message 입니다.', {
      router: req.baseUrl,
      requestUrl: proxyUri,
      method: req.method,
      body: req.body,
      resStatus: status,
      resBody: data,
      durationMs: (new Date().getMilliseconds() - startDate.getMilliseconds()),
    });
  }
};
export default handlerProxy;
