# yarn workspaces for service monorepo

마이크로 서비스에서 공통으로 사용하는 패키지를 가볍지만 효율적으로 관리하기 위해 모노레포

## workspaces 가이드

- https://classic.yarnpkg.com/en/docs/cli/workspaces
- https://classic.yarnpkg.com/en/docs/cli/workspace

## yarn 설치

> npm install -g yarn@1.22.10

## 프로젝트 인스톨

```
yarn install
```

## Scaffolding

```
 ├─ packages : 모노레포에서 사용할 공통 코드 모음
 │
 ├─ scripts : packages.json에서 사용할 scripts 모음
 │
 ├─ services : 서비스 모음
```

## scripts

모노레포는 yarn workspace로 구성되어있지만,<br>
젠킨스 배포 스크립트를 위해 npm 커멘드로 스크립트가 동작하도록 정의해둔 내용입니다.

### 프로젝트 시작

```
npm run start <serviceName>
```

### 프로젝트 빌드

```
npm run build <serviceName>
```

#### package.json 내부에서 프로젝트별 커멘트 실행

```json
"scripts": {
  "yarn-install": "yarn install", // 젠킨스에서 yarn으로 npm_modules를 설치하기 위한 스크립트
  "start": "scripts/script.sh start",
  "build": "scripts/script.sh build"
}
```

#### script.sh 내부에서 yarn workspace 수행

```json
echo "yarn workspace $2 $1"
yarn workspace $2 $1
```

## FAQ

### packages 폴더에 신규 모듈 추가하기

- 새로운 package가 추가됬다면 루트에서 yarn install 이후 사용 가능합니다.
