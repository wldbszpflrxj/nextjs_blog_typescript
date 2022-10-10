# Next.js로 블로그페이지 구현

## 데모

[🚀데모페이지](https://nextjs-blog-typescript-rouge.vercel.app/)

## 실행방법

```
npm install
npm run start
```

## 과제 내용

### 목표

Next.js로 마크다운으로 작성한 블로그를 정적 페이지(SSG)로 작성

### 기간

2022.10.08 ~ 10.10

### 요구사항

- [x] 1. \_\_posts 폴더에 작성된 마크다운 파일(.md)를 작성

- [x] 2. 블로그에 작성된 게시물을 렌더링하는 목록 페이지와 개별 게시물을 렌더링하는 상세 페이지로 나누어 작성

  - `/` - 목록 페이지
  - `/[id]` - 상세 페이지

- [x] 3. Next.js에서 지원하는 Prefetching 메서드를 적절히 사용
  - 정적 페이지를 생성할 때 필요한 데이터 생성 → `getStaticProps`
  - 각 포스트를 그려줄 상세 페이지 경로를 생성 → `getStaticPaths`

### 해결방법

- `gray-matter` 라이브러리를 활용하여 front-matter를 파싱
- `remark`, `remark-html` 라이브러리를 활용하여 마크다운을 html로 변환
- 게시물에 날짜를 기준으로 소팅
