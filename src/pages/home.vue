<template>
  <div class="container">
    <div class="home-wrapper">
      <header>
        <ul class="menu">
          <li><a href="#home">首页</a></li>
          <li><a href="#skill">技能</a></li>
          <li><a href="#project">项目</a></li>
          <li><a href="#experience">经历</a></li>
          <li><a href="#about">关于我</a></li>
        </ul>
      </header>
      <div class="info">
        <p class="title">SCOTT STUDIO</p>
        <p class="desc">不知名前端攻城狮，分享编程经验和技术干货。</p>
      </div>
      <div class="more">
        <div class="text">SCROLL</div>
        <div class="scrollIndicator__arrow">
          <div data-ui="leftLine" class="leftLine" style="transform: scale(1.5, 1);"></div>
          <div data-ui="rightLine" class="rightLine" style="transform: scale(1, 1.5);"></div>
        </div>
      </div>
      <div class="top-bar"></div>
      <div class="bottom-bar"></div>
    </div>
    <section id="skill">
      <div class="scott-title">
        <p class="title">技能</p>
      </div>
      <p class="section-info">
        多年前端开发经验，熟练使用vue、react、nodejs、webpack、typescript、git等前端技术栈，熟悉前端工程化、组件化、模块化开发，熟悉前端性能优化、前端安全、前端工程化、前端自动化、前端架构等相关知识。
      </p>
      <div class="skill-list">
        <div class="favlink" v-for="item in skillList" :key="item.title">
          <div class="icon" :style="{ background: item.bg }">
            <img :src="`https://ethanwp.oss-cn-shenzhen.aliyuncs.com/blog/${item.title}.png`" alt="" />
          </div>
          <div class="info">
            <p class="title">{{ item.title }}</p>
            <div class="desc">
              <p class="fill" :style="{ width: item.percent + '%' }"></p>
              <p class="out"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const skillList = [
  { title: "html", percent: 80, bg: "#e9572b" },
  { title: "css3", percent: 80, bg: "#2c51db" },
  { title: "js", percent: 80, bg: "#f7cb4f" },
  { title: "typescript", percent: 70, bg: "#1296db" },
  { title: "vue", percent: 70, bg: "#fff" },
  { title: "react", percent: 70, bg: "#e65164" },
  { title: "nodejs", percent: 70, bg: "#1afa29" },
  { title: "webpack", percent: 70, bg: "#fff" },
  { title: "git", percent: 70, bg: "#8f55ba" },
  { title: "ps", percent: 70, bg: "#001e36" },
]
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}

.home-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(131deg, #4E5868 -19%, #273344 66%);
  position: relative;

  .top-bar,
  .bottom-bar {
    position: absolute;
    left: 80px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .top-bar {
    top: 64px;
    width: 992px;
    height: 19px;
    background-image: url('../assets/imgs/top-bar.png');
  }

  .bottom-bar {
    top: 756px;
    width: 771px;
    height: 84px;
    background-image: url('../assets/imgs/bottom-bar.png');
  }

  header {
    width: 100%;
    height: 100px;
    position: absolute;
    font-family: 'moonbridge';
    top: 0;
    right: 0;
    z-index: 2;

    .menu {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 100px;

      li {
        list-style: none;
        margin: 0 20px;
        cursor: pointer;

        a {
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 0px;
          color: #fff;
          text-decoration: none;
          opacity: .5;
          transition: .35s;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  .info {
    width: 800px;
    text-align: center;
    vertical-align: top;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;

    .title {
      opacity: 1;
      margin: 0;
      /** 文本1 */
      font-size: 60px;
      font-weight: 600;
      letter-spacing: 0px;
      line-height: 88px;
      color: transparent;
      background: linear-gradient(119deg, #FFFFFF -8%, #C2C4CC 12%, #FFFFFF 33%, #C2C4CC 57%, #BEC2C8 83%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    .desc {
      width: 800px;
      height: 25px;
      opacity: 1;
      margin-top: 20px;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 0px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0px;
      line-height: 0px;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      vertical-align: top;
    }
  }

  .more {
    bottom: 40px;
    position: absolute;
    right: 60px;
    display: flex;
    font-family: moonbridge;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.1;
    text-transform: uppercase;
    cursor: pointer;
    animation: 1s infinite alternate ease-in-out bounce;

    .text {
      position: relative;
      margin-right: 10px;
      color: #fff;
    }

    .scrollIndicator__arrow {
      height: 10px;
      overflow: visible;
      position: relative;
      top: -0.3em;
      transform: rotate(-45deg);
      width: 10px;

      .leftLine,
      .rightLine {
        background-color: #fff;
        position: absolute;
      }

      .leftLine {
        bottom: 0;
        left: 0;
        top: 0;
        transform-origin: left bottom;
        width: 1px;
      }

      .rightLine {
        bottom: 0;
        height: 1px;
        left: 5px;
        right: 0;
        transform-origin: left bottom;
      }
    }
  }
}

section {
  width: 100%;
  height: 100vh;
  background: #f5f4f8;
  padding: 30px 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  .scott-title {
    margin: 20px 0;

    .title {
      width: 144px;
      height: 50px;
      opacity: 1;
      font-size: 36px;
      font-weight: normal;
      line-height: 50px;
      letter-spacing: 0px;
      color: #0D0F1A;
      position: relative;
      z-index: 2;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 142px;
        height: 25px;
        opacity: 1;
        background: #DADCE0;
        z-index: -1;
      }

      &::before {
        content: "SKILL";
        position: absolute;
        top: -100%;
        opacity: 0.4;
        font-size: 68px;
        font-weight: normal;
        line-height: 101px;
        letter-spacing: 0px;
        color: rgba(194, 197, 204, 0);
        -webkit-text-stroke: #A6AAB2 1px;
      }
    }
  }

  .section-info {
    width: 1120px;
    height: 64px;
    opacity: 1;
    font-size: 18px;
    font-weight: normal;
    line-height: 32px;
    letter-spacing: 0px;
    color: #8B8F99;

  }

  .skill-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;

    .favlink {
      padding: 14px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      cursor: pointer;

      .icon {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        transform: rotate(45deg);
        box-shadow: 40px 40px 80px 0px rgba(0, 0, 0, 0.06);
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          max-width: 100%;
          transform: rotate(-45deg);
          border-radius: 10px;
          width: 60%;
        }

      }

      // react

      .info {
        flex: 1;
        position: relative;
        z-index: 2;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;

        p {
          margin: 0;
          margin-bottom: 10px;
          transition: 0.35s;
          font-family: moonbridge;

          &.title {
            width: 100%;
            text-align: center;
            font-size: 20px;
            font-weight: normal;
            line-height: 28px;
            letter-spacing: 0px;
            color: #0D0F1A;
            text-transform: capitalize;
          }

        }

        .desc {
          width: 80%;
          height: 50px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          .fill {
            height: 10px;
            opacity: 1;
            background: rgba(83, 144, 235, 1);
            border-radius: 20px 10px 10px 20px;
            box-shadow: 0 2px 10px rgba(115, 171, 255, 0.3);
            margin-right: 5px;
          }

          .out {
            flex: 1;
            height: 10px;
            opacity: 1;
            border-radius: 10px 20px 20px 10px;
            box-shadow: 0 2px 10px rgba(200, 234, 234, 0.3);
            background: rgba(200, 234, 234, 1);
          }
        }
      }
    }
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-5px);
  }
}
</style>
