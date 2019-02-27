<template>
  <div class="main">
    <div class="city-list">
      <!-- 头 -->
      <div class="header">
        <div class="left">
          <i class="iconfont icon-tubiaoguifan2" style="font-size: 19px;">X</i>
        </div>
        <!-- <div class="title">当前城市 -</div> -->
        <MzHeader></MzHeader>
      </div>
      <!-- 搜索框 -->
      <div class="search-city-input">
        <div class="input-wrap">
          <i class="search-icon iconfont icon-sousuo-sousuofangdajing" style="font-size: 20px;">?</i>
          <input type="text" placeholder="输入城市名或拼音" class="search-input">
          <div class="clean-icon">
            <i class="iconfont icon-chongzhi-qingchu" style="font-size: 20px; display: none;"></i>
          </div>
          <div class="cancel-btn">取消</div>
        </div>
        <!---->
      </div>
      <!--  -->
      <div class="mint-indexlist city-index">
        <ul class="mint-indexlist-content" style="margin-right: 17px; height: 553px;">
          <div class="recommend-city">
            <div class="gprs-city">
              <div class="city-index-title">GPS定位你所在城市</div>
              <ul class="city-index-detail cleanfix">
                <li class="city-item-detail city-item-detail-gprs">
                  <div class="city-item-text">定位失败</div>
                </li>
              </ul>
            </div>
            <div class="hot-city">
              <div class="city-index-title">热门城市</div>
              <ul class="city-index-detail cleanfix">
                <li class="city-item-detail">
                  <div class="city-item-text">北京</div>
                </li>
                <li class="city-item-detail">
                  <div class="city-item-text">上海</div>
                </li>
                <li class="city-item-detail">
                  <div class="city-item-text">广州</div>
                </li>
                <li class="city-item-detail">
                  <div class="city-item-text">深圳</div>
                </li>
              </ul>
            </div>
          </div>
          <li
            class="lv-indexsection"
            v-for="(item, index) in filterCityData"
            :key="index"
            :id="item.py"
          >
            <p class="lv-indexsection__index">{{ item.py }}</p>
            <ul>
              <li
              >{{ city.name }}</li>
            </ul>
          </li>
          <!--<li class="mint-indexsection city-index-section">
            <p class="mint-indexsection-index">A</p>
            <ul>
              <li cityid="152900" pinyin="ala" class="city-item-detail-white">
                <div class="city-item-text in-section">阿拉善盟</div>
              </li>
            </ul>
          </li>
          -->
        </ul>
        <div class="mint-indexlist-nav">
          <ul class="mint-indexlist-navlist">
            <li>{{ item.py }}</li>
            <!-- <li class="mint-indexlist-navitem">A</li>
            <li class="mint-indexlist-navitem">B</li>
            <li class="mint-indexlist-navitem">C</li>
            <li class="mint-indexlist-navitem">D</li>
            <li class="mint-indexlist-navitem">E</li>
            <li class="mint-indexlist-navitem">F</li>
            <li class="mint-indexlist-navitem">G</li>
            <li class="mint-indexlist-navitem">H</li>
            <li class="mint-indexlist-navitem">J</li>
            <li class="mint-indexlist-navitem">K</li>
            <li class="mint-indexlist-navitem">L</li>
            <li class="mint-indexlist-navitem">M</li>
            <li class="mint-indexlist-navitem">N</li>
            <li class="mint-indexlist-navitem">P</li>
            <li class="mint-indexlist-navitem">Q</li>
            <li class="mint-indexlist-navitem">R</li>
            <li class="mint-indexlist-navitem">S</li>
            <li class="mint-indexlist-navitem">T</li>
            <li class="mint-indexlist-navitem">W</li>
            <li class="mint-indexlist-navitem">X</li>
            <li class="mint-indexlist-navitem">Y</li>
            <li class="mint-indexlist-navitem">Z</li>-->
          </ul>
        </div>
        <div class="mint-indexlist-indicator" style="display: none;"></div>
      </div>
      <!--  -->
      <div class="city-search-result" style="display: none;">
        <div class="empty-result">
          <img src alt>
          <p>没有找到匹配的城市</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import url("./index.less");
</style>

<script>
import MzHeader from '@/components/MzHeader/index.vue';

import axios from "axios";
export default {
  components: {
    MzHeader
  },
  data () {
    return {
      // 城市数据列表
      cityData: []
    };
  },

  computed: {
    /**
     * 处理后的城市数据
     */
    filterCityData () {
      let hash = {};
      let i = 0;
      let res = [];
      this.cityData.forEach(item => {
        // 存在  得到首字母
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
        // console.log(item.pinyin);
        if (hash[firstLetter]) {
          // 存在
          let index = hash[firstLetter] - 1;
          res[index].list.push(item);
        } else {
          // 不存在
          hash[firstLetter] = ++i;
          let obj = {};
          obj.pinyin = firstLetter;
          obj.list = [item];
          res.push(obj);
        }
      });
      return res;
    },
    methods: {
      getCityData () {
        axios.get("./cities.json").then(Response => {
          let res = Response.data;
          if (res.status === 0) {
            this.cityData = res.data.cities;
          } else {
            alert(res.msg);
          }
        });
      }
    },
    changeCity (city) {
      this.curCityName = city.name;
    },
    created () {
      this.getCityData();
    }
  }
};
</script>
