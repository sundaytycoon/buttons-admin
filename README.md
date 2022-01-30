# buttons-admin

- [yarn2](https://yarnpkg.com/getting-started/install) # no npm
- node v16.13.2
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
- recoil
- direnv



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

npm i -g react-app-rewired # 이런저런 웹팩설정 너무 귀찮아서 
# 어차피; 어드민이니까 자동으로 다 되었으면 좋겠어서 사용
# package.json 내용 변경
# create config-overrides.js
# tsconfig그냥 복붙함
# config-verrides.js 그냥 다 불러옴 webpack내용관리하는데 쓰임
# scrtips/ config/ 디렉토리 제거함
git add .
git commit -m "fix: project struct changed to react-app-rewired"

```

# getting started

``` bash\
yarn server # locally run
yarn client # locally run

cd ../buttons-api # git clone git@github.com:sundaytycoon/buttons-api.git
docker-compose up --build -d
go run cmd/main.go entd migration
go run cmd/main.go server start
```

20220124 @drakejin dailylog

[한일]
- h3 admin page 제작
- buttons
  - Google Login작성완료.

[할일]
- h3
  - hoian-webapp 에게 줄 rpc production배포하기
  - admin에 permerlink만들기 - url공유시 바로 사용할 수 있도록
- 금지어 프로젝트 structure 구조 만들기
- 오전 회의
- 오후 회의
- 퇴근후 헬스장

[아무말]
- 내일 백신맞으러 가유.
