## Getting Start

### 소스 구조

```
  ├── components
  |   ├── Layout.jsx          //
  |   ├── NavBar.jsx          //
  |   └── Seo.jsx             // Head 컴포넌트
  ├── pages
  |   ├── _app.js             // 전체 페이지 컨트롤
  |   ├── about.jsx           //
  |   └── index.jsx           // 메인페이지
  ├── public
  ├── styles
  |   └── global.css
  └── next.config.js
```

### 설치 및 실행 방법

- `/seo_hyun_git` 디렉토리 위치에서 아래 명령어를 실행하여 해당 폴더에 접근합니다.

```
$ cd next-js
```

- `/seo_hyun_git/next-js` 디렉토리 위치에서 아래 명령어를 실행하여 서버를 실행합니다.

```
$ npm run dev
```

### style

#### styled-jsx 이해하기

- 문법 : <style jsx>{``}</style>
- 각각의 component들의 독립적인 style을 위해 존재하며, 해당 컴포넌트 내에서만 사용 가능하기 때문에 재사용이 불가능하다.
  하지만 string template(``)을 사용해 props를 전달 받아 사용할 수 있다.(color: ${props.color})

### \_app.js

- global을 사용하기 위해 컴포넌트들의 청사진이 필요하다. 다른 컴포넌트를 렌더링 하기 전에 해당 파일을 먼저 확인한다.
- props는 {Component, pageProps}를 전달한다.
- 문법 :

  ```
  export default function App({ Component, pageProps }) {
    return (
      <Component {...pageProps} />
    );
  }
  ```

### redirect, rewrite
