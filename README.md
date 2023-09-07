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

## 🚀 배포 링크

<!-- 배포 링크: [wanted-pre-onboarding-12th-2week.s3-website.ap-northeast-2.amazonaws.com](http://wanted-pre-onboarding-12th-2week.s3-website.ap-northeast-2.amazonaws.com) -->

<br/>

## 🎬 프로젝트 로컬 실행 방법

1. 본 repository를 clone합니다.

```bash
$ git clone https://github.com/pre-onboarding-12th-team3/pre-onboarding-12th-3-3.git
```

2. 의존성 패키지를 설치합니다.

```bash
npm install
```

3. json-server를 실행합니다.

```bash
npm run server
```

4. 개발 서버를 실행합니다.

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

| 이름   | 의견 |
| ------ | ---- |
| 성지현 |      |
| 신재일 |
| 윤혜영 |      |
| 조병현 |      |
| 채하은 |      |
| 홍성욱 |      |

#### **Best Practice**

- 세션 스토리지를 사용해서 캐시 데이터 보관
  - 프론트엔드 서버 메모리와 분리된 storage를 사용
  - Page Reload되어도 캐시 데이터 유지
- cache data stale 여부에 따라 API Call
- 커스텀훅(캐싱여부확인) 사용하여 관심사 분리
- 스토리지 get,set 유틸함수로 관리

<br/>

### **[Assignment 2] EXPIRE TIME 구현**

> - 캐싱 기능의 성능을 위해 EXPIRE TIME 기능 구현

| 이름   | 의견 |
| ------ | ---- |
| 성지현 |      |
| 신재일 |
| 윤혜영 |      |
| 조병현 |      |
| 채하은 |      |
| 홍성욱 |      |

#### **Best Practice**

- const UNIT = 1000*60*5;
- stale로 전환되는 시간 `Date.now() + UNIT`을 추천 검색어 데이터와 함께 저장
- 세션 스토리지에서 데이터를 꺼내왔을 때, Date.now()와 비교해서 데이터의 stale 여부 판단
- `Date.now()`는 `new Date().getTime()`과 의미론적으로 동일하지만 중간에 `Date` 객체를 만들지 않는다는 점이 다릅니다. 따라서 `new Date().getTime()`를 사용하는 것보다 빠르고 가비지 컬렉터의 일을 덜어준다는 장점이 있음.

<br/>

### **[Assignment 3] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행**

> - 무의미한 API호출을 줄이기 위한 전략 수립

| 이름   | 의견 |
| ------ | ---- |
| 성지현 |      |
| 신재일 |
| 윤혜영 |      |
| 조병현 |      |
| 채하은 |      |
| 홍성욱 |      |

#### **Best practice**

- useDebounce훅(400ms) 만들어서 api 호출
- 잘못된 검색할 시 api호출 통제

<br/>

### **[Assignment 4] 키보드만으로 추천 검색어들로 이동 가능하도록 구현**

> - 검색어 입력 시 나오는 추천 검색어를 키보드로 이동, 선택이 가능하도록 구현

| 이름   | 의견 |
| ------ | ---- |
| 성지현 |      |
| 신재일 |
| 윤혜영 |      |
| 조병현 |      |
| 채하은 |      |
| 홍성욱 |      |

#### **Best practice**

- 검색 Input Focus,Blur 조건으로 KeyDown 동작
  - 유저 경험 향상
- 검색어 수정 시 목록 아이템 선택 값 초기화
- 스크롤 대응하여 지속적인 선택 아이템 표시

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
