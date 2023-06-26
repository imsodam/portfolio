
## Project start

npm run serve

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 반응형 적용할때

- npm i -D vue-mq
- main.js 에 아래내용 붙여넣기
  import VueMq from 'vue-mq'
  Vue.use(VueMq, {
  breakpoints: {
  mobile: 500,
  // tablet: 1024,
  pc: Infinity,
  }
  })

### firebase 세팅시

firebase login
firebase init
제일 긴 hosting 선택
(public) 삭제하고 dist 입력
이후 모두 n

### 내용 수정한후 firebase 에 반영

ctrl + c 해서 작업 종료
npm run build
dist 폴더에 내용 들어감
firebase deploy (에러나면 sudo firebase deploy)

firebase 로그인해서 해당 프로젝트 선택하고
hosting 에서 도메인 클릭하면 만든 프로젝트 나옴
