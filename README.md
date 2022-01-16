# buttons-admin

- [yarn2](https://yarnpkg.com/getting-started/install) # no npm
- node v16.13.2

# project setting processes

``` bash
create-react-app buttons-admin --template typescript
cd buttons-admin
git remote add origin ~~~~/sundaytycoon/buttons-admin 
git add .
git commit -m "init project"

npm run eject
git add .
git commit -m "cra eject"

nvm use v16.13.2
npm install -g yarn
yarn init -2
# merge old.package.json // new package.json // 아마 기존에 쓰던 내용이 yarn init-2 하자 마자 바로 사라져있을거라 git 기록으로 복구해서 쓸만한건 복구하세용.
rm -rf node_modules package-lock.json

yarn install # 새롭게 node_modules가 install 될거임
yarn start
git add .
git commit -m "setting up yarn2"

yarn add --global eslint
eslint --init

```

# getting started

``` bash
nvm use v16.13.2
npm install -g yarn
yarn init -2



```

