<template>
  <div class="container">
    <section class="home-wrapper" id="home">
      <header>
        <ul class="menu">
          <li><a href="#home">首页</a></li>
          <li><a href="#skill">技能</a></li>
          <li><a href="#project">项目</a></li>
          <li><a href="https://blog.scott-studio.cn" target="_blank">博客</a></li>
          <li><a href="#about">关于我</a></li>
        </ul>
      </header>
      <a class="info">
        <p class="title">SCOTT STUDIO</p>
        <p class="desc">不知名前端攻城狮，分享编程经验和技术干货。</p>
      </a>
      <a href="#skill" class="more">
        <!-- <div class="more"> -->
        <div class="text">SCROLL</div>
        <div class="scrollIndicator__arrow">
          <div data-ui="leftLine" class="leftLine" style="transform: scale(1.5, 1);"></div>
          <div data-ui="rightLine" class="rightLine" style="transform: scale(1, 1.5);"></div>
        </div>
      </a>
      <!-- </div> -->
      <div class="top-bar"></div>
      <div class="bottom-bar"></div>
    </section>
    <section id="skill">
      <div class="scott-title">
        <p class="title" data-text="SKILL">技能</p>
      </div>
      <p class="section-info">
        多年前端开发经验，熟练使用vue、react、nodejs、webpack、typescript、git等前端技术栈，熟悉前端工程化、组件化、模块化开发，熟悉前端性能优化、前端安全、前端工程化、前端自动化、前端架构等相关知识。
      </p>
      <div class="skill-list">
        <div class="fav-link" v-for="item in skillList" :key="item.title">
          <div class="icon" :style="{ background: item.bg }">
            <img :src="`https://ethanwp.oss-cn-shenzhen.aliyuncs.com/blog/${item.title}.png`" alt="" />
          </div>
          <div class="info">
            <p class="title">{{ item.title }}</p>
            <!-- <div class="desc">
              <p class="fill" :style="{ width: item.percent + '%' }"></p>
              <p class="out"></p>
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <section id="project">
      <div class="scott-title">
        <p class="title" data-text="PROJECT">项目</p>
      </div>
      <p class="section-info">
        个人项目，包括博客、小游戏、工具等。其中不包含工作项目，工作项目不便公开。开源项目欢迎star。
      </p>
      <div class="skill-list project-list">
        <div class="project-item" v-for="item in projectList" :key="item.title">
          <img :src="item.cover" alt="">
          <div class="item-info">
            <div class="info-group">
              <p class="title">{{ item.title }}</p>
              <p class="desc">{{ item.desc }}</p>
            </div>
            <a :href="item.link" target="_blank" class="action">访问</a>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="scott-title">
        <p class="title" data-text="ABOUT">关于我</p>
      </div>
      <main>
        <div class="about-info" data-cursor>
          <p>你好，很高兴认识你👋</p>
          <p class="name-title">我叫彭锐南 SCOTT</p>
          <p>是一名 前端攻城狮、独立开发者、博主。</p>
          <p>喜欢唱歌、游戏、看电影，热爱生活，热爱编程。</p>
        </div>
      </main>
    </section>
    <footer>
      <p class="info">Copyright © 2022-2023 SCOTT-STUDIO 保留所有权利。</p>
      <p class="info">备案号：<a
          href="https://beian.miit.gov.cn/" target="_blank">赣ICP备19001528号-2</a> </p>
    </footer>

    <div class="cursor" />
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted } from 'vue';
import Cursor from '../cursor'
onMounted(() => {

  nextTick(() => {
    // eslint-disable-next-line no-new
    Cursor(document.querySelector('.cursor'))
  })
})
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

const projectList = [
  { cover: "https://ethanwp.oss-cn-shenzhen.aliyuncs.com/blog/peeps-avatar%20%281%29.png", title: "scott-studio", desc: "我的个人博客", link: "https://blog.scott-studio.cn" },
  { cover: "https://ethanwp.oss-cn-shenzhen.aliyuncs.com/blog/peeps-avatar-2.png", title: "Salary", desc: "nvPress博客主题，去往心中的远方。", link: "https://blog.scott-studio.cn/salary" },
  { cover: "https://ethanwp.oss-cn-shenzhen.aliyuncs.com/blog/peeps-avatar-4.png", title: "vscode-settings", desc: "我的VSCode个人配置", link: "https://github.com/iscottt/vscode-settings" },
  { cover: "https://ethanwp.oss-cn-shenzhen.aliyuncs.com/blog/peeps-avatar-3.png", title: "wechat-push", desc: "微信早安推送nodejs服务", link: "https://github.com/iscottt/wechat-push" },
  { cover: "https://ethanwp.oss-cn-shenzhen.aliyuncs.com/blog/peeps-avatar-1.png", title: "Duang了个Duang", desc: "仿羊了个羊小游戏", link: "https://github.com/iscottt/zlegez" },
  { cover: "https://ethanwp.oss-cn-shenzhen.aliyuncs.com/blog/peeps-avatar-5.png", title: "scott-linksubmit", desc: "nvPress百度收录插件，方便快捷的将你的文章提交到百度收录", link: "https://github.com/iscottt/scott-linksubmit" },
]

</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  /* 在父容器上面使用 scroll-snap-type 属性 */
  scroll-snap-type: y mandatory;
  overflow: auto;
  scroll-behavior: smooth;
}

.home-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(131deg, #4E5868 -19%, #273344 66%);
  position: relative;
  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  transition: .35s;

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
    // height: 100px;
    position: fixed;
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
        cursor: pointer;

        a {
          display: inline-block;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 0px;
          padding: 40px 20px;
          color: #fff;
          text-decoration: none;
          // opacity: .5;
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
      cursor: pointer;

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
    bottom: 20px;
    position: absolute;
    right: 40px;
    display: flex;
    padding: 20px;
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
  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  transition: .35s;

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
        content: attr(data-text);
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

    &.project-list {

      grid-template-columns: repeat(3, 1fr);
    }

    .fav-link {
      padding: 14px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      margin-bottom: 20px;
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
          width: 70%;
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

    .project-item {
      display: flex;
      width: 100%;
      margin-bottom: 60px;
      margin-right: 20px;

      img {
        width: 122px;
        height: 122px;
        border-radius: 28px;
        object-fit: cover;
      }

      .item-info {
        flex: 1;
        margin-left: 36px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 122px;
        color: #fff;

        .info-group {

          display: flex;
          flex-direction: column;

          p {
            margin: 0;

            &.title {
              font-size: 24px;
              line-height: 1;
              margin-bottom: 8px;
              width: fit-content;
              position: relative;
            }

            &.desc {
              font-size: 14px;
              width: fit-content;
              max-width: 220px;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              opacity: .5;
            }
          }

        }

        .action {
          padding: 8px 24px;
          display: flex;
          background: #1C1C1F;
          color: #fff;
          font-size: 16px;
          box-shadow: 0px 12px 12px -9px rgb(0 0 0 / 29%);
          border-radius: 21px;
          transition: ease-in-out 0.3s;
          width: fit-content;
          white-space: nowrap;
          text-decoration: none;

          &:hover {
            cursor: pointer;
            background: #4375ff;
            box-shadow: 0px 12px 12px -9px rgb(5 51 137 / 29%);
          }
        }

      }
    }
  }
}

#project {
  .title {
    color: #fff;
  }

  background: linear-gradient(135deg, #172231 0%, #7c808c 100%);
}

#skill {
  background: linear-gradient(137deg, #172231 -11%, #0B1421 78%);

  .title {
    color: #fff;
  }
}

#about {
  background: url('../assets/imgs/bg.png') no-repeat center;
  background-size: cover;
  // background-color: linear-gradient(137deg, #172231 -11%, #0B1421 78%);
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;

  .title {
    color: #fff;
  }

  main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .about-info {
      margin-left: 100px;
      color: #fff;
      font-size: 20px;
      padding: 20px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      line-height: 48px;

      p {
        display: inline;
      }

      .name-title {
        color: transparent;
        background: linear-gradient(119deg, #fff -8%, #C2C4CC 12%, #fff 33%, #C2C4CC 57%, #BEC2C8 83%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        opacity: 1;
        margin: 0;
        font-size: 60px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 88px;
      }
    }
  }
}

footer {
  padding: 60px;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #e1e3ea;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;

  .info {
    font-size: 14px;
    opacity: 0.6;
    margin: 4px 0;
    color: #333;

    a {
      text-decoration: none;
      color: #333;
      transition: ease-in-out 0.3s;

      &:hover {
        color: #000;
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

@media screen and (max-width:768px) {
  .container {
    overflow-x: hidden;
  }

  .home-wrapper {
    padding: 0 20px;

    header {
      height: 64px;

      .menu {
        padding: 0;
        justify-content: center;
      }
    }

    .info {
      width: 100%;

      .title {
        font-size: 42px;
        line-height: 1.5;
      }

      .desc {
        width: 60%;
        line-height: 1.5;
        margin-top: 10px;
      }
    }

    .top-bar {
      width: 100vw;
      height: 30px;
      left: 20px;
    }

    .bottom-bar {
      width: 100vw;
      left: 10px;
    }

    .more {
      right: 20px;
      bottom: 20px;
    }
  }

  section {
    padding: 20px;
    justify-content: space-between;

    .scott-title {
      margin-bottom: 0;
      margin-top: 80px;
    }

    .section-info {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .skill-list {
      grid-template-columns: repeat(3, 1fr);

      &.project-list {
        grid-template-columns: repeat(1, 1fr);
      }

      .fav-link {
        margin-bottom: 10px;

        .icon {
          width: 60px;
          height: 60px;
          margin-bottom: 10px;
        }

        .info p {
          margin: 0;
        }
      }

      .project-item {
        margin-bottom: 20px;

        img {
          width: 60px;
          height: 60px;
        }

        .item-info {
          margin-left: 10px;
          height: 60px;
          flex-direction: row;
          align-items: center;

          .info-group p.title {
            font-size: 16px;
          }

          .action {
            padding: 4px 12px;
            font-size: 12px;
            height: fit-content;
          }
        }
      }

    }

  }

  #about {
    main .about-info {
      margin-left: 0;
      line-height: 36px;
      font-size: 16px;

      .name-title {
        font-size: 40px;
        line-height: 1.5;
      }
    }
  }

  footer {
    padding: 20px
  }
}


.cursor {
  position: fixed;
  z-index: 9999;
  width: 100px;
  height: 100px;
  pointer-events: none;
  will-change: all;
  transform: scale(0);
  top: 0;

  &:before {
    background: #000;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

@media (max-width:1040px) {
  .cursor {
    display: none
  }
}

[data-cursor] {
  cursor: pointer;
}
</style>
