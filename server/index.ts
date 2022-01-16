import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as path from 'path';
import express from 'express';
import handlerProxy from '@server/handlers/proxy'

const isDev = process.env.NODE_ENV !== 'production';
const PORT = parseInt(process.env.SERVER_PORT || '4000', 10);

const initializeServer = async () => {
    const server = express();

    server.use(express.json({ limit: '50mb' }));
    server.use(express.urlencoded({ extended: true }))
    server.use(cookieParser());
    server.use(cors());
    // 정적 서빙
    !isDev && server.use(express.static(path.join(__dirname, '../build')));

    if(!isDev) {
        server.get('*', (_, res) => {
            res.sendFile(path.join(__dirname, '../build/index.html'));
        });
    }

    server.use("/proxy", handlerProxy);

    server.listen(PORT, () => {
        console.log(`Server Running, PORT: ${PORT}`);
    });
};

(initializeServer)();
