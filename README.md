# [Week 3] Best Practice of Wanted Pre-onboarding Assignment

원티드 프리온보딩 인턴십 3팀 3주차 과제 레포지토리입니다.

## 🔎 프로젝트 소개

- **주제** : 임상 시험 DB에서 검색기능, 로컬캐싱기능을 갖는 검색 사이트 구축
- **작업 기간** : 2023.09.05 ~2023.09.08
- **진행 방식** :
  - 같은 주제의 프로젝트를 개인이 작업한 후 코드 리뷰 시간을 가지고 Best Practice를 선정합니다.
  - 정해진 기준에 맞게 각자 맡은 기능의 리팩토링을 진행합니다.

<br/>

## 💁‍♂️ 팀원 소개

| 성지현                                                                                                    | 신재일                                                                                                    | 윤혜영                                                                                                        | 조병현                                                                                                         | 채하은                                                                                                      | 홍성욱                                                                                                  |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/69228045?v=4" alt='@jhsung23' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/101620064?v=4" alt='@JaeIl00' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/93719660?v=4" alt='@creamy-ocean' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/102468625?v=4" alt='@ChoByungHyun' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/103991310?v=4" alt='@chaehaeun' width="130" height="130"> | <img src="https://avatars.githubusercontent.com/u/86929961?v=4" alt='@ukssss' width="130" height="130"> |
| [@jhsung23](https://github.com/jhsung23/)                                                                 | [@JaeIl00](https://github.com/JaeIl00/)                                                                   | [@creamy-ocean](https://github.com/creamy-ocean/)                                                             | [@ChoByungHyun](https://github.com/ChoByungHyun/)                                                              | [@chaehaeun](https://github.com/chaehaeun/)                                                                 | [@ukssss](https://github.com/ukssss/)                                                                   |
| <p style='text-align:center'>프로젝트 세팅,<br/>배포</p>                                                  | <p style='text-align:center'>캐싱커스텀훅<br/> (캐싱, expire 담당)</p>                                    | <p style='text-align:center'>추천검색어<br/>(키보드로 이동)</p>                                               | <p style='text-align:center'>유틸함수, 문서작성<br/>(세션스토리지)</p>                                         | <p style='text-align:center'>Input과 List 컴포넌트,<br/>스타일링</p>                                        | <p style='text-align:center'>디바운스훅, 라우터,<br />api</p>                                           |

<br/>

## 🚀 배포 링크 및 서버 레포

- 배포 링크: [pre-onboarding-12th-3-3.vercel.app](pre-onboarding-12th-3-3.vercel.app)
- 서버 레포 : [https://github.com/walking-sunset/assignment-api](https://github.com/walking-sunset/assignment-api)

<br/>

## 🎬 프로젝트 로컬 실행 방법

1. 상단 [서버 레포](https://github.com/walking-sunset/assignment-api)에 접속해 git clone, npm start를 하여 서버를 실행합니다.

2. 본 repository를 clone합니다.

```bash
$ git clone https://github.com/pre-onboarding-12th-team3/pre-onboarding-12th-3-3.git
```

3. .env파일 설정

```bash
폴더 최상단 루트에 .env파일을 생성하고 안에
VITE_API_URL = 'http://localhost:4000/'
를 작성하고 저장해주세요
```

4. 의존성 패키지를 설치합니다.

```bash
npm install
```

5. 개발 서버를 실행합니다.

```bash
npm run dev
```

브라우저가 자동으로 실행되지 않는다면 로컬호스트에 직접 접속해 주세요.

<br/>

## 🛠️ 기술 스택

<div>
   <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white">
   <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
   <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
   <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
   <img src="https://img.shields.io/badge/ESlint-4B32C3?style=flat&logo=eslint&logoColor=white">
   <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=white">
   <br/>
   <img src="https://img.shields.io/badge/husky-efefef?style=flat&logo=husky&logoColor=white">
   <img src="https://img.shields.io/badge/lint staged-efefef?style=flat&logo=lint staged&logoColor=white">
   <img src="https://img.shields.io/badge/vite tsconfig paths-efefef?style=flat&logo=vite tsconfig paths&logoColor=white">
</div>

<br/>

## 🎖️ 과제 요구 사항 및 Best Practice

### **[Assignment 1] API 호출별로 로컬 캐싱 구현**

> - 캐싱 기능을 제공하는 라이브러리 사용하지 않고 로컬 캐싱 구현

| 이름   | 의견                                                                                                                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 성지현 | 빠른 속도로 데이터를 가져올 수 있다는 이점이 있는 브라우저의 캐시 스토리지에 저장하였고, 이를 사용하기 위한 인터페이스 코드 작성                                                                       |
| 신재일 | 외부 상황에 의존적이지 않고 데이터를 온전히 다루기 위해 useContext를 사용하여 캐시 데이터 보관. 캐시 데이터와 API Call 실행 여부 판별하는 커스텀훅 구현                                                |
| 윤혜영 | 웹 브라우저의 localStorage에 검색어별 캐시 데이터 보관. 검색어를 입력하면 getCachedKeywords 함수를 사용해 1) 이미 캐싱된 데이터가 존재하는 경우 해당 데이터를 받아오고 2) 그렇지 않은 경우 api를 호출. |
| 조병현 | 세션스토리지에 캐시 데이터 보관.                                                                                                                                                                       |
| 채하은 | 세션스토리지에 캐시 데이터 보관.                                                                                                                                                                       |
| 홍성욱 | cache 상태변화(useState)를 통해 캐시 데이터 보관                                                                                                                                                       |

#### **Best Practice**

- 세션 스토리지를 사용해서 캐시 데이터 보관

  - 이유 :
    - 프론트엔드 서버 메모리와 분리된 storage를 사용
  - 전역으로 관리하는 것에 비해 Page Reload되어도 캐시 데이터 유지
  - 다른 브라우저 스토리지랑 다르게 탭을 닫으면 데이터가 삭제되므로 관리가 원활

- cache data stale 여부에 따라 API Call
  - 이유 : 최신화된 데이터를 제공
- 커스텀훅(캐싱여부확인) 사용하여 관심사 분리
- 세션스토리지 get,set 유틸함수로 관리
  <br/>

### **[Assignment 2] EXPIRE TIME 구현**

> - 캐싱 기능의 성능을 위해 EXPIRE TIME 기능 구현

| 이름   | 의견                                                                                                                                                                                         |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 성지현 | api 요청 전, 캐시 스토리지에 캐싱된 응답이 있는지 확인하고 응답 저장 시간과 현재 시간을 비교하여 만료 시간이 지나지 않았다면 api 요청 없이 캐싱된 응답을 사용                                |
| 신재일 | new Date().getTime(); 과 CACHE_TIME 더하여 ms 시간을 캐시 데이터에 포함. stale한지 판단하는 시점의 현재 시간과 케시 데이터의 deadDate를 비교하여 API Call 실행 여부 판단                     |
| 윤혜영 | Date.now()에 EXPIRE_TIME을 더한 만료 시간을 캐시 데이터에 포함하여 저장. 캐싱된 데이터를 가져올 때 Date.now()가 만료 시간보다 큰 경우 스토리지에서 해당 데이터를 삭제하고 새롭게 api를 호출. |
| 조병현 | 데이터를 요청하기 전에Date.now() - timestamp > CACHE_EXPIRY_MS; 조건을 통해 현재 데이터가 stale한지 확인 후 stale하다면 데이터 교체.                                                         |
| 채하은 | 세션스토리지에서 데이터를 받아올 때 Date.now() - cache[keyword].timestamp < CACHE_EXPIRE_TIME 로 현재 데이터의 stale 여부 판단.                                                              |
| 홍성욱 | 데이터를 요청하기 전에 new Date().getTime() - cache[diseaseName].timestamp > expireTime 로 현재 데이터의 stale 여부 판단                                                                     |

#### **Best Practice**

- const UNIT = 1000*60*5;
- stale로 전환되는 시간 `Date.now() + UNIT`을 추천 검색어 데이터와 함께 저장
- 세션 스토리지에서 데이터를 꺼내왔을 때, Date.now()와 비교해서 데이터의 stale 여부 판단
- 이유 :
  - stale한 데이터의 기준을 5분으로 설정해서 5분 이후에 오는 데이터 요청일 경우 stale하다고 판단하고 최신화된 데이터를 제공.
  - `Date.now()`는 `new Date().getTime()`과 의미론적으로 동일하지만 중간에 `Date` 객체를 만들지 않는다는 점이 다름. 따라서 현재 프로젝트에서는 `Date.now()`를 사용하는 것이 더 빠르고 가비지 컬렉터의 일을 덜어준다는 장점이 있음.

<br/>

### **[Assignment 3] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행**

> - 무의미한 API호출을 줄이기 위한 전략 수립

| 이름   | 의견                                                                                                                                                          |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 성지현 | 콜백이 연속으로 호출될 경우 마지막 호출만 실행시키는 useDebounce 커스텀 훅을 만들어 0.3초 간 입력이 없다면 api 요청을 전송                                    |
| 신재일 | useDebounce에 콜백함수와 딜레이 시간을 전달 후 검색어 Change 함수에서 디바운스 함수 실행. 유저가 검색어 타자를 끝내고 0.4초 후 추천 검색어 결과를 보도록 구현 |
| 윤혜영 | useDebounce 커스텀 훅을 구현해 해당 훅에 검색어를 전달. 훅 내부에서 setTimeout을 이용해 0.2초 동안 추가 입력이 없으면 전달한 검색어를 리턴.                   |
| 조병현 | useDebounce 커스텀 훅을 통해 0.4초 이내에 입력이 들어오면 API를 호출하지 않고, 빈문자열, 영어, 숫자, 특수문자가 들어올 경우 API를 호출하지않도록 구현         |
| 채하은 | useDebounceSearch 커스텀 훅을 통해 0.3초 이내에 입력이 들어오면 API를 호출하지 않도록 구현                                                                    |
| 홍성욱 | useLocalCache 훅에서 getDiseaseList() 함수를 useDebounce 훅을 사용해 0.5초 후 실행되도록 구현                                                                 |

#### **Best practice**

- useDebounce훅을 만들어서 0.4초간 입력이 없다면 api 요청을 하도록 구현
  - 이유 : 검색어 입력 시 입력마다 API호출을 방지
- 정규표현식을 통해 영문, 숫자를 검색할 시 api호출 방지
  - 이유 : 현재 json데이터에서 한글로 된 데이터를 다루고 있기에 다른 문자를 입력했을 때 API호출을 방지

<br/>

### **[Assignment 4] 키보드만으로 추천 검색어들로 이동 가능하도록 구현**

> - 검색어 입력 시 나오는 추천 검색어를 키보드로 이동, 선택이 가능하도록 구현

| 이름   | 의견                                                                                                                                                                                                           |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 성지현 | 검색창(input) 컴포넌트에 포커스되어 있을 때, arrow up 키와 arrow down 키를 눌러 onKeyDown 이벤트가 트리거될 경우 선택한 아이템의 인덱스 번호를 가지는 상태를 업데이트                                          |
| 신재일 | window.addEventListener keydown 타입 이벤트 등록. 키보드로 update되는 State 값과 목록 인덱스 값이 일치하는 요소의 스타일 변화. 선택된 요소가 화면에서 벗어나지 않도록 Scroll 자동 이동 구현.                   |
| 윤혜영 | input 태그에 onKeyDown 이벤트 핸들러를 추가해 방향 키를 사용하면 selectedItem state 값이 변하도록 구현. 추천 검색어 리스트에서 map을 이용해 index 값과 selectedItem 값이 같으면 해당 검색어를 하이라이트 처리. |
| 조병현 | window.addEventListener 에 keydown 이벤트를 등록해 방향키로 검색어 이동, 확인 가능하도록 구현                                                                                                                  |
| 채하은 | onKeyDown 이벤트 헨들러를 통해 키보드 화살표로 추천 검색어들을 이동할 수 있도록 구현                                                                                                                           |
| 홍성욱 | window.addEventListener 에 keydown 이벤트 등록해 방향키로 이동, 조건에 따라 인덱스 값 변경을 통해 방향키로 검색어 이동이 가능하게 구현함.                                                                      |

#### **Best practice**

- 검색 Input Focus,Blur 조건으로 KeyDown 동작
- 검색어 수정 시 목록 아이템 선택 값 초기화
- 스크롤 대응하여 지속적인 선택 아이템 표시
  - 이유 : 유저 경험 향상

<br/>

## 📑 컨벤션

Husky / lint-staged 적용

### 폴더 구조

```
root
└── src/
    ├── components/
    │   ├── common/
    │   └── domain/
    ├── hooks/
    ├── types/
    ├── constants/
    ├── pages/
    ├── routes/
    ├── types/
    ├── utils/
    └── apis/
```

### 커밋 규칙 (commit convention)

| 태그 이름   | 설명                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------- |
| [Feat]      | 새로운 기능을 추가                                                                            |
| [Fix]       | 버그 수정                                                                                     |
| [Design]    | CSS 등 사용자 UI 디자인 변경                                                                  |
| [Style]     | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                                         |
| [Refactor]  | 프로덕션 코드 리팩토링                                                                        |
| [Comment]   | 프로덕션 코드 리팩토링                                                                        |
| [Docs]      | 문서를 수정한 경우                                                                            |
| [Test]      | 테스트 코드, 리팩토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음       |
| [Chore]     | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |
| [Rename]    | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                            |
| [Remove]    | 파일을 삭제하는 작업만 수행한 경우                                                            |
| [Type]      | 타입 수정                                                                                     |
| [!BREAKING] | CHANGE 커다란 API 변경의 경우                                                                 |
| [!HOTFIX]   | 급하게 치명적인 버그를 고쳐야 하는 경우                                                       |

### Eslint 설정

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '{react}',
            group: 'builtin',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
```

### Prettier

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "auto"
}
```
