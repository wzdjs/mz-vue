<template>
  <div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <button @click="toCity">去城市页面</button>
    <ul>
      <router-link tag="li" to="detail/11">喜剧之王</router-link >
      <router-link tag="li" to="detail/22">家和万事惊</router-link >
      <router-link tag="li" to="detail/33">流浪地球</router-link >
      <router-link tag="li" to="detail/44">疯狂外星人</router-link ></ul>
    <!-- <div style="height: 2000px;"></div> -->
    <!-- <div class="film-list-content"> -->
      <!-- <div class="nowPlayingList-wrap" data-enter-time="1551346722"> -->
        <!-- <ul
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="100"
          class="nowPlayingList"
        >
          <li class="nowPlayingFilm-item">
            <a href="#/film/4533" class="nowPlayingFilm-wrap">
              <div
                data-v-fa55ebd6
                class="lazy-img nowPlayingFilm-img"
                alt="film"
                style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;"
              >
                <div
                  data-v-fa55ebd6
                  class="padding"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249);"
                >
                  <img
                    data-v-fa55ebd6
                    src="data:image/png;base64,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"
                    width="64px"
                    alt="img"
                  >
                </div>
                <div
                  data-v-fa55ebd6
                  class="lazy-img-wrap"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249); opacity: 1; display: block;"
                >
                  <img
                    data-v-fa55ebd6
                    src="https://pic.maizuo.com/usr/movie/e2faa90be5a512de432b30d23398f052.jpg?x-oss-process=image/quality,Q_70"
                    class="target-img"
                  >
                </div>
              </div>
              <div class="nowPlayingFilm-info" style="float: left;">
                <div class="nowPlayingFilm-name info-col">
                  <span class="name">阿丽塔：战斗天使</span>
                  <span class="item">2D</span>
                </div>
                <div class="nowPlayingFilm-grade info-col" style="visibility: visible;">
                  <span class="label">观众评分</span>
                  <span class="grade">7.6</span>
                </div>
                <div class="nowPlayingFilm-actors info-col">
                  <span class="label">主演：罗伯特·罗德里格兹 克里斯托弗·沃尔兹 罗莎·萨拉查 基恩·约翰逊 詹妮弗·康纳利 艾德·斯克林</span>
                </div>
                <div class="nowPlayingFilm-detail info-col">
                  <span class="label">美国 加拿大 阿根廷 | 100分钟</span>
                </div>
              </div>
              <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
            </a>
          </li>
          <li class="nowPlayingFilm-item">
            <a href="#/film/4539" class="nowPlayingFilm-wrap">
              <div
                data-v-fa55ebd6
                class="lazy-img nowPlayingFilm-img"
                alt="film"
                style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;"
              >
                <div
                  data-v-fa55ebd6
                  class="padding"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249);"
                >
                  <img
                    data-v-fa55ebd6
                    src="data:image/png;base64,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"
                    width="64px"
                    alt="img"
                  >
                </div>
                <div
                  data-v-fa55ebd6
                  class="lazy-img-wrap"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249); opacity: 1; display: block;"
                >
                  <img
                    data-v-fa55ebd6
                    src="https://pic.maizuo.com/usr/movie/394c418ad9a14e301438176f3dd65028.jpg?x-oss-process=image/quality,Q_70"
                    class="target-img"
                  >
                </div>
              </div>
              <div class="nowPlayingFilm-info" style="float: left;">
                <div class="nowPlayingFilm-name info-col">
                  <span class="name">驯龙高手3</span>
                  <span class="item">2D</span>
                </div>
                <div class="nowPlayingFilm-grade info-col" style="visibility: hidden;">
                  <span class="label">观众评分</span>
                  <span class="grade"></span>
                </div>
                <div class="nowPlayingFilm-actors info-col">
                  <span class="label">主演：迪恩·德布洛斯 杰伊·巴鲁切尔 亚美莉卡·费雷拉 凯特·布兰切特</span>
                </div>
                <div class="nowPlayingFilm-detail info-col">
                  <span class="label">美国 | 7分钟</span>
                </div>
              </div>
              <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
            </a>
          </li>
          <li class="nowPlayingFilm-item">
            <a href="#/film/4487" class="nowPlayingFilm-wrap">
              <div
                data-v-fa55ebd6
                class="lazy-img nowPlayingFilm-img"
                alt="film"
                style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;"
              >
                <div
                  data-v-fa55ebd6
                  class="padding"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249);"
                >
                  <img
                    data-v-fa55ebd6
                    src="data:image/png;base64,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"
                    width="64px"
                    alt="img"
                  >
                </div>
                <div
                  data-v-fa55ebd6
                  class="lazy-img-wrap"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249); opacity: 1; display: block;"
                >
                  <img
                    data-v-fa55ebd6
                    src="https://pic.maizuo.com/usr/movie/bed8f7edd414e5b8afd788be30b92f9f.jpg?x-oss-process=image/quality,Q_70"
                    class="target-img"
                  >
                </div>
              </div>
              <div class="nowPlayingFilm-info" style="float: left;">
                <div class="nowPlayingFilm-name info-col">
                  <span class="name">流浪地球</span>
                  <span class="item">2D</span>
                </div>
                <div class="nowPlayingFilm-grade info-col" style="visibility: visible;">
                  <span class="label">观众评分</span>
                  <span class="grade">7.9</span>
                </div>
                <div class="nowPlayingFilm-actors info-col">
                  <span class="label">主演：郭帆 屈楚萧 李光洁 吴孟达 赵今麦</span>
                </div>
                <div class="nowPlayingFilm-detail info-col">
                  <span class="label">中国大陆 | 100分钟</span>
                </div>
              </div>
              <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
            </a>
          </li>
          <li class="nowPlayingFilm-item">
            <a href="#/film/4537" class="nowPlayingFilm-wrap">
              <div
                data-v-fa55ebd6
                class="lazy-img nowPlayingFilm-img"
                alt="film"
                style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;"
              >
                <div
                  data-v-fa55ebd6
                  class="padding"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249);"
                >
                  <img
                    data-v-fa55ebd6
                    src="data:image/png;base64,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"
                    width="64px"
                    alt="img"
                  >
                </div>
                <div
                  data-v-fa55ebd6
                  class="lazy-img-wrap"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249); opacity: 1; display: block;"
                >
                  <img
                    data-v-fa55ebd6
                    src="https://pic.maizuo.com/usr/movie/5cb44c8aa86c4d42ac62e708c2833908.jpg?x-oss-process=image/quality,Q_70"
                    class="target-img"
                  >
                </div>
              </div>
              <div class="nowPlayingFilm-info" style="float: left;">
                <div class="nowPlayingFilm-name info-col">
                  <span class="name">绿皮书</span>
                  <span class="item">2D</span>
                </div>
                <div class="nowPlayingFilm-grade info-col" style="visibility: hidden;">
                  <span class="label">观众评分</span>
                  <span class="grade"></span>
                </div>
                <div class="nowPlayingFilm-actors info-col">
                  <span class="label">主演：彼得·法雷里 马赫沙拉·阿里 塞巴斯蒂安·马尼斯科 维果·莫腾森 琳达·卡德里尼</span>
                </div>
                <div class="nowPlayingFilm-detail info-col">
                  <span class="label">美国 | 130分钟</span>
                </div>
              </div>
              <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
            </a>
          </li>
          <li class="nowPlayingFilm-item">
            <a href="#/film/4535" class="nowPlayingFilm-wrap">
              <div
                data-v-fa55ebd6
                class="lazy-img nowPlayingFilm-img"
                alt="film"
                style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;"
              >
                <div
                  data-v-fa55ebd6
                  class="padding"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249);"
                >
                  <img
                    data-v-fa55ebd6
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAACvlBMVEVHcEwAAADu7u7w8PDMzMzw8PCAgIDw8PDv7+/w8PDw8PDv7+/w8PDu7u7v7++qqqrb29vo6Ojw8PDw8PDq6urv7+/V1dXw8PDv7+/w8PC/v7/v7+/r6+vw8PDw8PDw8PDw8PDv7+/v7+/u7u7u7u7r6+vs7Ozw8PDv7+/f39/w8PDt7e3v7+/w8PDv7+/v7+/v7+/v7+/v7+/w8PDw8PDv7+/p6eno6Ojv7+/v7+/w8PDv7+/v7+/v7+/t7e3v7+/w8PDt7e3w8PDw8PDw8PDv7+/u7u7w8PDw8PDv7+/v7+/s7Ozs7Ozw8PDv7+/v7+/v7+/v7+/t7e3v7+/v7+/w8PDt7e3v7+/v7+/u7u7w8PDv7+/v7+/u7u7v7+/w8PDm5ubw8PDv7+/u7u7v7+/v7+/v7+/v7+/u7u7w8PDv7+/t7e3v7+/u7u7w8PDv7+/v7+/u7u7q6urv7+/p6env7+/u7u7w8PDv7+/w8PDv7+/v7+/v7+/u7u7w8PDj4+Pv7+/s7Ozw8PDv7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/m5ubv7+/n5+fs7Ozv7+/w8PDv7+/t7e3r6+vu7u7u7u7r6+vv7+/w8PDv7+/v7+/v7+/t7e3w8PDw8PDv7+/q6urw8PDt7e3w8PDv7+/v7+/u7u7w8PDv7+/v7+/w8PDv7+/w8PDr6+vw8PDw8PDt7e3v7+/w8PDw8PDw8PDw8PDw8PDw8PDv7+/u7u7v7+/v7+/u7u7v7+/v7+/v7+/w8PDv7+/w8PDk5OTw8PDj4+Pv7+/w8PDv7+/w8PDv7+/v7+/s7Ozu7u7v7+/w8PDu7u7u7u7v7+/v7+/v7+/u7u7u7u7u7u7u7u7w8PDv7+/v7+/u7u7u7u7t7e3r6+vw8PDv7+/v7+/t7e3v7+/v7+/u7u7v7+/u7u7w8PB33Vq/AAAA6XRSTlMAAQ/4Bf0CdVD8ufb7aTADBwv+6QzyBthw3ARAGfoh6mM+43s9Jjbonwh2HJRmwrK84H63208XFt9eEfMvEEe/7g61ltlxisntYaQ1G+e98G/1Kl/vVTn01UnGoYJYjPkUl04uXaCBHx53tB3iW5Xxs0sk4SNBOzKtuI7Rk0qoCcEpdKxusZLAP+QgCsUVKKu2zzgnZ4sNm6Z8xGJWU7rTJaVGhr6AejOP0t1RqRrXmToxhCLHZevMonjlg1mN0HOnfYgTyxJt2rC7kdQ3bN7KmlyvkFJrTC08982uaixFNMiefytgo3nmWsZHeAUAAAWUSURBVBgZ7cEDk2RnFAbgd2a6+3YPdmzbs7Zt27YZZ8Pd2LZt27Ztv/8iqaRqMzP3fN2zlf6691bO80AppZRSSimllFJKKaWUUkoppZRSSiml7Nv8zrDiISPhcVPGXlWeSqb0XDssAO/KeL6Kh/SeDK/q353tTZ8Nb0q8hR2FKuBFgQZ2NngfPOg0uo0/G57zxXwKfoHXJB5HyUkBeMwyirbvgbfULKfsM3hKRhsNWuEps2niwEsS76PJRHhJGo2GwUMyF9BkQjM8ZCmNNsFD0qfRqC885KgkmvT2wUNupsl7e+AhZ+fTYH4xjjAJvqEl9548696Sl30J6OxRmmzEkSOxdueMO75+pPDM+uzc3PL6p+764fS3xq46ORGH1GXT4GAjjgwrKm87vU8SBcsLN/30XX/8JefqbBqkzMORYP3AE3syrN3dn77t8gU0Wov4Gzr31An8j5K6Id5uuHUM/7tRCYivoz6Yw2hYg7ia1TCTUVHejDgqeWkEo6Q34idhYCGj5kXEzZ57GEVBxMsfVYyipNsRH5e1MKrmrEdcXNzG6KofiXjYO4BRNjUHcfBhLqNtag5iLy2VUTehBDHXlMrom/k5Yi2NNmSdgBhrDdGKAsTW3Sm042jEVN1jtGT3IMTQlHzakrUQsePbQXsWI3aq2RX+33usdK6p7PaXmrkFB96sCrErRpQhVvamMKKUq648Y1AC2htU4wwfzMjWIUaG3slI8tcNSYDk5+o7GUl5GWJjGSM4riIRRplL2xhBA2LiohSG1ac1B2EVPfM2w0o9ATHgu4XhlH68AhENemgww7kwE/atYTj5N6FLHviK4cyAdSOvZxhvTEEXrVjMMKr6wbYChnFsHros0CtEs2pYllhII7+Dw/JNiEZn9oNdFTQKnYLD9GkpjaphVeN4GvXCYZtBoz4jYdOwLJpcHoBow7zKyu/7QXYzjbbCphtp0pYJwbmntZWTDFV9NDcPAl93mlyXDns2j6BB9nkQbH2dhyyqgWDDXTRIWQ17WmlSAbe8Y9lebgUEfVNp0Av29KbBqHS4tbCj0EAIFtNgvA+2PDydssEPwq2VneVOhltZNmXLh8CWgTQ4Hm7N9XTpUQS3K2lQAFt+pWzOLrgtoZt/IdzO3U3ZBbDksjGUrYRbTj4FkyC4lbKp/WHH6hBFSZPhVldKQc8cuO3aTlFWMeyYSNnwdLhdTcmX30JwPmVNsOMAZWkQNFHiL4bgWspOhBUJPSjKrYXAoagvBP2mUvR4BmzIHEDRogAEDkVBSDZRlF0CG8q2U7QMEoeiICQFFPmHwIaaEEXXQOJQFISkOERRX9jwCUVJtZA4FAUhmTKBotdgQxpFA16FxKEoCIlvAUVLYEM1RYuKIHEoCkI0iqJtsOFZinZA5FAUhKiBokmwYSVFayFyKApCdClFV8CG0RQdD5FDURCicRQlw4bRFLVA5FAUhGgcRT1gw2iKWiByKApCNI6iZNgwmqIWiByK7oZoHEUvwIZtFG2DqIminRBdStGNsGEdRXdAVEBJ6UUQLaHoftiwhqJLIFpIyfRmiJZSNBY21M6nIOl2iM4aQcE5RRDtmkmBvw42BKZRcI4PooRRFGyELP0CCt5vhBXXZtFtKwx2+ulS3wyDVVl0mw07is6nS3IGDAJH0+UUmKSfSpdpGbBkwxh2suUGGK3vw06658Focz472VILa7oVsoMB+xDG5J7s4KT+CGP1GHawZR4sOmsH2zl4HsK6eDj/5f9xKMIqO4btTJsFq3wTx6fyb/7n0vYjgv3vXs9/lA5fhUjyJr4S4t/8F17SCNt8+5qeSE6+4re9jeiCzJt63XPdMQ1j6wLogrzKjZOSkyc9eUYGlFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSqn/mT8BgomzlnrI//YAAAAASUVORK5CYII="
                    width="64px"
                    alt="img"
                  >
                </div>
                <div
                  data-v-fa55ebd6
                  class="lazy-img-wrap"
                  style="width: 66px; height: 94px; background: rgb(249, 249, 249); opacity: 1; display: block;"
                >
                  <img
                    data-v-fa55ebd6
                    src="https://pic.maizuo.com/usr/movie/4adb3df0b3540bd5fc3f0bda86ccb3f7.jpg?x-oss-process=image/quality,Q_70"
                    class="target-img"
                  >
                </div>
              </div>
              <div class="nowPlayingFilm-info" style="float: left;">
                <div class="nowPlayingFilm-name info-col">
                  <span class="name">朝花夕誓</span>
                  <span class="item">2D</span>
                </div>
                <div class="nowPlayingFilm-grade info-col" style="visibility: visible;">
                  <span class="label">观众评分</span>
                  <span class="grade">7</span>
                </div>
                <div class="nowPlayingFilm-actors info-col">
                  <span class="label">主演：冈田磨里 筱原俊哉 入野自由 石见舞菜香</span>
                </div>
                <div class="nowPlayingFilm-detail info-col">
                  <span class="label">日本 | 115分钟</span>
                </div>
              </div>
              <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
            </a>
          </li>
        </ul> -->
        <!---->
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import MzBanner from '@/components/MzBanner/index';
import MzTabs from '@/components/MzTabs/index';
export default {
  components: {
    MzBanner,
    MzTabs
  },
  methods: {
    toCity () {
      /*  path     字符串传参
       *  paeams    对象传参
       *  query     查询字符串传参
       *  name       根据name 传参
       *  path和params不可以一起使用
       */
      // this.$router.push('/city');
      this.$router.push({
        path: '/city',
        // params: {
        //   id: 100
        // },
        query: {
          id: 100
        },
        name: 'PgCity'
      });
    }
  }
};
</script>

<style lang="less">
@import url('index.less');
</style>
