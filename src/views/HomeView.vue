<template>
  <v-app id="home">
    <Navbar />
    <v-container fluid>
      <v-row>
        <div class="mx-auto col1">
          <v-col cols="3" class="d-none d-sm-flex">
            <div class="mainBox" :style="colImg">
              <div class="col1Inner">
                <div class="item outer-land"></div>
                <div class="item inner-land"></div>
                <div class="item shuriken"></div>
                <div class="item totem"></div>
                <div class="item cloud"></div>
                <div class="item coin"></div>
              </div>
              <div class="item img"></div>
            </div>
          </v-col>
          <v-col cols="4" class="col1text">
            <h3>
              <span>H</span>
              <span>E</span>
              <span>L</span>
              <span>L</span>
              <span>O</span>
              <span>!</span>
            </h3>
            <h2 class="mt-10">I'M</h2>
            <h1 class="name">LIMSODAM</h1>
            <!-- <p class="grey--text font-weight-bold">프론트엔드 개발자를 준비하고 있습니다.</p> -->
            <router-link to="#about" tag="v-btn" @click.prevent>
              <v-btn tile color="#7986CB" darr class="white--text rounded-xl" @click="moveTo">about me</v-btn>
            </router-link>
          </v-col>
        </div>

        <v-col cols="12" class="col2 first" id="about" ref="aboutme">
          <v-row>
            <v-col cols="12">
              <v-row class="aboutBox">
                <h1 class="white--text my-14 about">ABOUT</h1>
                <h1 class="blue--text text--lighten-4 aboutme">ABOUT ME</h1>
              </v-row>

              <div class="col2inner second">
                <v-row class="child1 bgColor1">
                  <v-icon color="#111111" x-large class="ml-3 mb-xl-14">fa-sharp fa-regular fa-lightbulb</v-icon>
                  <h1 class="black--text ml-3 mb-xl-14">INFORMATION</h1>
                  <v-row class="px-4">
                    <h2 class="grey--text ml-6 mt-xl-6">NAME</h2>
                    <p class="black--text font-weight-bold ml-5 mt-4 mt-xl-10">임소담</p>
                    <h2 class="grey--text ml-6 mt-xl-6">BIRTHDAY</h2>
                    <p class="black--text font-weight-bold ml-5 mt-4 mt-xl-10">1991. 01. 05</p>
                    <h2 class="grey--text ml-6 mt-xl-6">E-MAIL</h2>
                    <p class="black--text font-weight-bold ml-5 mt-4 mt-xl-10">ssodam0105@naver.com</p>
                    <h2 class="grey--text ml-6 mt-xl-6">PHONE</h2>
                    <p class="black--text font-weight-bold ml-5 mt-4 mt-xl-10">010 - 6305 - 1854</p>
                    <h2 class="grey--text ml-6 mt-xl-6">MAJOR</h2>
                    <p class="black--text font-weight-bold ml-5 mt-4 mt-xl-10">건국대학교 국어국문학과졸업</p>
                  </v-row>
                </v-row>

                <v-row class="child1 bgColor1">
                  <v-icon color="#111111" x-large class="ml-3 mb-xl-14" dark>mdi-shopping</v-icon>
                  <h1 class="black--text ml-3 mb-xl-14">EDUCATION</h1>
                  <v-row class="eduInner">
                    <p class="black--text font-weight-bold ml-3 mt-xl-6 p2">
                      [스마트웹&콘텐츠개발] 자바기반의 웹&앱 개발자 양성과정
                      <span class="grey--text">| 2021-11-09 - 2022-05-03</span>
                    </p>
                    <p class="black--text font-weight-bold ml-3 mt-xl-6 p2">
                      프로젝트기반 프론트엔드(React, Vue)웹&앱 SW 개발자 양성 과정
                      <span class="grey--text">| 2022-12-30 - 2023-06-27</span>
                    </p>
                  </v-row>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" id="project" class="col3">
          <v-row>
            <v-col cols="12">
              <v-row class="projectBox">
                <h1 class="black--text my-14 project">PROJECT</h1>
                <h1 class="blue--text text--lighten-4 aboutme">MY PORTFOLIO</h1>
              </v-row>
            </v-col>

            <v-carousel cycle hide-delimiters height="600">
              <!-- <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item> -->
              <v-carousel-item v-for="(item, i) in items" :key="i" class="px-6">
                <v-row class="projectInner">
                  <v-col class="col-lg-6">
                    <v-img :src="items[i].src"></v-img>
                  </v-col>
                  <v-col class="col-lg-6 d-flex flex-column">
                    <div class="text-xl-h2 text-xs-h3 ma-2 pa-2 box1">
                      {{ item.title }}
                    </div>
                    <div class="ma-2 pa-6 box2 d-none d-sm-flex" :style="{ fontSize: '20px' }">
                      {{ item.content }}
                    </div>
                    <div class="text-xl-h5 ma-2 pa-2 box3 text-center rounded-xl">TOOL</div>
                    <div class="ma-2 pa-xl-6 fontsize">{{ item.tools }}</div>
                    <v-btn color="#7986CB" class="white--text rounded-xl ml-2 ml-xl-4" width="160" :href="item.url" target="_blank">view more</v-btn>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-col>

        <v-col cols="12" class="second" id="skills">
          <v-row>
            <v-col cols="12">
              <v-row class="skillBox">
                <h1 class="white--text my-14 about">SKILLS</h1>
                <h1 class="blue--text text--lighten-4 aboutme">MY SKILLS</h1>
              </v-row>

              <v-row class="chart">
                <Chart class="flex-xl chartBox"></Chart>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" id="contact">
          <v-fow>
            <v-col cols="12">
              <v-row class="contactBox">
                <h1 class="white--text my-14 project">CONTACT</h1>
                <h1 class="blue--text text--lighten-4 aboutme">CONTACT ME</h1>
              </v-row>

              <v-row class="contact">
                <Contact></Contact>
              </v-row>
            </v-col>
          </v-fow>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Chart from "@/components/Chart.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Chart,
    Contact,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          src: "./project1.png",
          title: "1. MARKET VEGAN",
          content:
            "프로젝트 주제는 비건을 위한 푸드 쇼핑몰 사이트입니다. 회원관리, 상품관리, 장바구니기능, 주문기능, 공지게시판, 관리자페이지를 구현했습니다. 팀프로젝트이고 제가 맡은 부분은 관리자페이지 회원목록, 회원조회와 상품목록, 상품등록/수정/삭제, 주문 목록/기간/상태, 키워드검색, 페이징입니다.",
          tools: "eclipse/ jdk1.8/ Oracle",
          url: "https://github.com/imsodam/marketvegan",
        },
        {
          id: 2,
          src: "./project2.png",
          title: "2. ORION",
          content: "기존 오리온 사이트를 리뉴얼하여 반응형으로 제작했습니다. 로그인, 회원가입, 검색부분을 추가하고 메인페이지와 서브페이지는 기존페이지의 정보를 바탕으로 새롭게 구성했습니다. 자바스크립트와 제이쿼리를 사용했습니다.",
          tools: "VSCODE",
          url: "https://github.com/imsodam/orion",
        },
        {
          id: 3,
          src: "./project3.png",
          title: "3. 캠핑장 찾기 사이트",
          content:
            "프로젝트 주제는 전국의 캠핑장을 찾을 수 있는 사이트입니다. 사이트 이름은 'LECAMP' 이고 카카오 API를 사용하여 검색기능을 구현했습니다. 팀프로젝트이고 제가 맡은 부분은 메인페이지, 로그인, 회원가입입니다. 자바스크립트와 제이쿼리를 사용했습니다. ",
          tools: "VSCODE",
          url: "https://github.com/imsodam/lecamp",
        },
        {
          id: 4,
          src: "./project4.png",
          title: "4. portfolio",
          content: "VUE 로 만든 포트폴리오 입니다. 파이어베이스와 연동하여 CONTACT 부분의 정보가 저장될 수 있게 하였고 반응형도 적용했습니다.",
          tools: "VSCODE",
          url: "https://contact-c3614.web.app/",
        },
        {
          id: 5,
          src: "./project5.png",
          title: "5. 예비집사 판별기",
          content: "React 의 문법을 이해하여 MBTI를 기반으로 한 서비스, 수익창출을 위해 광고 추가, 설계, netlify 를 이용한 배포까지 구현하였습니다.",
          tools: "VSCODE",
          url: "https://mbtitesttypescript.netlify.app/",
        },
        {
          id: 6,
          src: "./project6.png",
          title: "6. 쇼핑몰 사이트",
          content: "React 의 문법을 이해하여 메인페이지, 아이템디테일페이지, 장바구니 기능을 구현했습니다. SQL 서버를 연결해서 로그인, 회원가입 기능을 추가하였습니다.",
          tools: "VSCODE",
          url: "http://reactproject.cafe24app.com/",
        },
      ],
      // text: "HELLO",
    };
  },
  computed: {
    colImg() {
      return {
        "--acceleration-default": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
        "--acceleration-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "--border-circular": "50%",
        "--border-soft": "21%",
        "--color-land": "#559284",
        "--color-cloud": "#B9FFF8",
        "--color-shuriken": "#DAF5FF",
        "--color-shuriken-accent": "#F2D7D9",
        "--color-coin": " #feed78",
        "--color-coin-accent": "#c6ac00",
        "--color-totem": "linear-gradient(to top, rgb(176, 30, 104) 0%, rgb(79, 32, 13) 100%)",
        "--color-hollow": "linear-gradient(to left, rgba(255, 255, 255, 0) 32%, #382c1f 33%, #382c1f 66%, rgba(255, 255, 255, 0) 67%)",
        "--color-grass-bright": "linear-gradient(to top, rgb(255, 225, 93) 0%, rgb(244, 157, 26) 100%)",
        "--color-grass": "linear-gradient(to top, rgb(247, 149, 64) 0%, rgb(252, 79, 0) 100%)",
      };
    },
  },
  methods: {
    moveTo() {
      window.scrollTo({ top: 857, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", function () {
      console.log(this.window.scrollY);
    });
  },
};
</script>

<style scoped>
.col1 {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 150px;
}

.mainBox {
  position: relative;
  height: 100vh;
  width: 100%;
  transition: transform 600ms ease;
  transform: rotateX(45deg) rotateY(0deg) rotateZ(45deg);
  /* -webkit-transform-origin: 50% 50%; */
  will-change: transform, opacity;
  /* -webkit-backface-visibility: hidden; */
  /* animation: worldCamera 10s linear infinite; */
}

.col1Inner {
  position: absolute;
  top: 80%;
  left: 90%;
}

.item {
  position: absolute;
  left: calc(50% - var(--item-half-width));
  top: calc(50% - var(--item-half-height));
  /* -webkit-backface-visibility: hidden; */
  /* -webkit-transform-style: preserve-3d; */
}

.item:before,
.item:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  outline: 1px solid transparent;
}

.outer-land {
  width: 300px;
  height: 300px;
  --item-half-width: 150px;
  --item-half-height: 150px;
  border-radius: var(--border-circular);
  background-image: var(--color-grass);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.inner-land {
  width: 128px;
  height: 128px;
  --item-half-width: 64px;
  --item-half-height: 64px;
  background: rgba(0, 171, 224, 0.34);
  border-radius: var(--border-soft);
  background-image: var(--color-grass-bright);
}

.cloud {
  width: 60px;
  height: 60px;
  --item-half-width: 34px;
  --item-half-height: 34px;
  border-radius: var(--border-circular);
  background: var(--color-cloud);
  animation: cloudOrbit 30s linear infinite;
}

.cloud:before,
.cloud:after {
  border-radius: var(--border-circular);
  background: var(--color-cloud);
}

.cloud:before {
  transform: translate3d(-13px, 8px, 0) scale(0.6, 0.6);
  animation-direction: alternate;
}

.cloud:after {
  transform: translate3d(13px, -8px, 0) scale(0.6, 0.6);
  animation-direction: alternate;
}

.totem {
  width: 64px;
  height: 64px;
  --item-half-width: 32px;
  --item-half-height: 32px;
}

.totem:after {
  border-radius: var(--border-soft);
  transform-style: preserve-3d;
  background-image: var(--color-totem);
  border-bottom: 8px solid transparent;
  background-size: 100% 120%;
  border-image: var(--color-hollow) 8 stretch;
}

.shuriken,
.shuriken:before {
  width: 30px;
  height: 30px;
  --item-half-width: 5px;
  --item-half-height: 5px;
  border-radius: var(--border-soft);
  background: var(--color-shuriken);
  animation: shurikenSpin 4s var(--acceleration-default) infinite;
  animation-direction: alternate;
}

.shuriken:before {
  border-radius: 0;
  transform: scaleY(1.15) rotateZ(45deg);
  animation: none;
}

.coin,
.coin:after,
.coin:before {
  width: 20px;
  height: 20px;
  --item-half-width: 12px;
  --item-half-height: 12px;
  border-radius: var(--border-circular);
  background: var(--color-coin-accent);
}

.coin {
  animation: coinJump 4s var(--acceleration-back) infinite;
}

.coin:before {
  background: var(--color-coin-accent);
  box-shadow: var(--gold-shadow);
  transform: scale(0, 0);
  animation: coinScale 4s ease infinite;
}

.coin:after {
  background: var(--color-coin);
  transform: translate3d(-3px, -3px, 0);
}

.col1 .img {
  background-image: url(../assets/4444.png);
  background-size: contain;
  border-radius: 55px;
  width: 500px;
  height: 560px;
  animation: imgAppear 4s var(--acceleration-back) infinite;
  /* box-shadow: rgba(0,0,0,0.35) 0px 5px 15px; */
  /* box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; */
  transform: skew(45deg, -45deg);
  margin-top: -100px;
}

@keyframes cloudOrbit {
  0% {
    transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(150px) rotate(-360deg);
  }
}

@keyframes shurikenSpin {
  0% {
    transform: translate3d(0, 0, 0) rotateZ(0) scale(0.5, 0.5);
    opacity: 0;
  }
  6% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  14% {
    transform: translate3d(0, 64px, 0) rotateZ(0);
  }
  28% {
    transform: translate3d(64px, 64px, 0) rotateZ(360deg);
  }
  42% {
    transform: translate3d(64px, -64px, 0) rotateZ(0);
  }
  56% {
    transform: translate3d(-64px, -64px, 0) rotateZ(180deg);
  }
  70% {
    transform: translate3d(-64px, 64px, 0) rotateZ(360deg);
  }
  84% {
    transform: translate3d(0, 64px, 0) rotateZ(0);
  }
  90% {
    opacity: 1;
  }
  94% {
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0) rotateZ(0) scale(0.5, 0.5);
    opacity: 0;
  }
}

@keyframes coinJump {
  0%,
  90%,
  100% {
    transform: translate3d(0, 0, 0) scale(1, 1);
  }
  94% {
    transform: translate3d(-5px, -5px, 0) scale(1.25, 1.23);
  }
}

@keyframes coinScale {
  0%,
  90% {
    transform: scale(0, 0);
    opacity: 1;
  }
  96% {
    transform: scale(1.5, 1.5);
    opacity: 1;
  }
  100% {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
}

@keyframes imgAppear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.col1text {
  margin: 0 0 200px 640px;
}

.col1text h3 {
  height: 100px;
}
.col1text h3 span {
  position: relative;
  top: 20px;
  display: inline-block;
  animation: bounce 0.7s ease infinite alternate;
  font-size: 80px;
  color: #111;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}
@keyframes bounce {
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc, 0 50px 25px rgba(0, 0, 0, 0.2);
  }
}

.name {
  font-size: 55px;
  -webkit-text-stroke: 2px #111111;
  -webkit-text-fill-color: #ffffff;
}

.col1text p {
  font-size: 25px;
}
.first {
  width: 100%;
  background: linear-gradient(to right, #181818, #181818 50%, #111111 50%, #111111 50%);
  text-align: center;
  color: #ffffff;
}
.projectBox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about {
  font-size: 160px;
  -webkit-text-stroke: 1px #ffffff;
  -webkit-text-fill-color: #181818;
}
.aboutme {
  position: absolute;
  font-size: 40px;
}
.col2inner {
  display: flex;
  flex-direction: column;
}
.child1 {
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  padding: 50px 100px;
  align-items: center;
  justify-content: center;
}
.child1 h1 {
  font-size: 35px;
}

.eduInner {
  display: flex;
  flex-direction: column;
}
.second {
  width: 100%;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
  height: 90vh;
}
.col3 {
  height: 100vh;
}
.project {
  font-size: 160px;
  -webkit-text-stroke: 1px #181818;
  -webkit-text-fill-color: #ffffff;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bgColor1 {
  background-color: #ffffff;
}
.v-progress-circular {
  margin: 1rem;
  font-size: 30px;
}

.col3 .box1 {
  background: #111;
  color: #fff;
}

.col3 .box3 {
  background: #64b5f6;
  color: #fff;
  width: 100px;
}

.chart,
.contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.fontsize.mobile {
  font-size: 15px !important;
}

.fontsize.pc {
  font-size: 25px !important;
}

@media (max-width: 500px) {
  .col1 {
    height: 70vh;
    align-items: flex-start;
    justify-content: normal;
    margin-top: 200px;
  }

  .col1text {
    margin: 0 0 0px 0px;
  }

  .col1text h3 {
    height: 100px;
    display: flex;
    flex-direction: row;
  }

  .about {
    font-size: 120px;
    -webkit-text-stroke: 1px #ffffff;
    -webkit-text-fill-color: #181818;
  }

  .child1 {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    padding: 10px 0px;
    align-items: center;
    justify-content: center;
  }

  .child1 h1 {
    font-size: 20px;
    margin-bottom: 0px;
  }

  .child1 h2,
  .child1 p {
    font-size: 15px;
    margin-top: 0px;
  }

  .child1 .p2 {
    font-size: 15px;
    padding: 13px;
  }

  .project {
    font-size: 100px;
    -webkit-text-stroke: 1px #181818;
    -webkit-text-fill-color: #ffffff;
  }

  .projectInner {
    display: flex;
    flex-direction: column;
  }

  .second {
    width: 100%;
    background: #181818;
    text-align: center;
    padding: 2rem 2rem;
    height: 120vh;
  }
}
</style>
