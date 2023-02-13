<template>
  <div class="container">
    <div class="home-wrapper">
      <header>
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        </div>
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
        <svg t="1675434097650" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="3446" width="200" height="200">
          <path
            d="M528.252661 950.942077l295.703769-289.705148c9.624195-9.380648 9.624195-24.707728 0-34.138518-9.576099-9.381671-25.222451-9.381671-34.848693 0L535.495622 875.592972 535.495622 88.901773c0-13.3214-11.048637-24.142863-24.642237-24.142863-13.597693 0-24.645306 10.821463-24.645306 24.142863l0 786.690176L232.574475 627.098411c-9.603729-9.381671-25.248034-9.381671-34.847669 0-4.836145 4.76349-7.194866 10.939143-7.194866 17.116843 0 6.1777 2.405793 12.355399 7.194866 17.116843l295.723212 289.704125c9.602705 9.383718 25.244964 9.383718 34.850739 0L528.252661 950.942077z"
            p-id="3447"></path>
        </svg>
      </div>
    </div>
    <section id="skill">
      <div class="scott-title">技能</div>
      <div class="skill-list">
        <div class="favlink">
          <img src="https://zhheo.com/img/%E6%95%B2%E6%9C%A8%E9%B1%BC.webp" alt="" />
          <div class="info">
            <p class="title">Javascript</p>
            <p class="desc">熟练度：奥术大师多</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

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
  background: url('./../assets/bg.png') no-repeat center;
  position: relative;
  background-size: cover;

  header {
    width: 100%;
    height: 100px;
    position: absolute;
    font-family: 'moonbridge';
    top: 0;
    right: 0;
    z-index: 2;

    .logo {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        width: 24px;
        height: 24px;
        fill: #fff;
      }
    }

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

        a {
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 0px;
          color: #fff;
          text-decoration: none;
        }

        cursor: pointer;
      }
    }
  }

  &::after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.65;
    background: rgba(14, 14, 27, 1);
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
      background: linear-gradient(90deg, rgba(255, 226, 125, 1) 0%, rgba(255, 181, 67, 1) 29.17%, rgba(97, 255, 213, 1) 73.44%, rgba(63, 181, 255, 1) 99.11%);
      -webkit-background-clip: text;
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
    width: 35px;
    height: 50px;
    position: absolute;
    bottom: 20px;
    right: 50%;
    margin-right: -20px;
    border-radius: 999px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #fff;
    animation: 1s infinite alternate ease-in-out bounce;

    svg {
      width: 20px;
      height: 20px;
      fill: #fff;
    }
  }
}

section {
  width: 100%;
  height: 100vh;
  background: f5f4f8;
  padding: 30px 100px;

  .scott-title {
    font-size: 48px;
    font-weight: bold;
  }

  .skill-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    .favlink {
      padding: 14px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      position: relative;
      cursor: pointer;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 6px;
        transition: 0.35s;
        z-index: 1;
        opacity: 0;
        background: linear-gradient(135deg, #59c3fb 10%, #268df7 100%);
      }

      img {
        width: 60px;
        height: 60px;
        border-radius: 999px;
        margin-right: 10px;
        position: relative;
        z-index: 2;
      }

      .info {
        flex: 1;
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;

        p {
          margin: 0;
          transition: 0.35s;

          &.title {
            font-weight: bold;
            font-size: 18px;
          }
        }
      }

      &:hover {

        // box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        &:after {
          opacity: 1;
        }

        .info p {
          color: #fff;
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
    transform: translateY(-10px);
  }
}
</style>
