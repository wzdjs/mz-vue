<template>
  <div class="mz-city">
    <!-- this.$store.commit('ma/chgName') -->
    <!-- <button @click="chgName({ name: '张三' })">修改 a 中的 name</button>
    <button @click="$store.commit('updateName')">修改 c 中的 name</button> -->
    <div class="header">
      <div class="left">
        <i class="iconfont icon-tubiaoguifan2" style="font-size: 19px;">X</i>
        </div>
        <div class="title">
            当前城市 -
        </div>
    </div>
    <MzHeader></MzHeader>

    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail">
                <div class="city-item-text">上海</div>
              </li>
              <li class="city-item-detail">
                <div class="city-item-text">天津</div>
              </li>
            </ul>
          </div>
        </div>
        <li class="lv-indexsection"
          v-for="(item, index) in filterCityData"
          :key="index"
          :id="item.py"
          >
          <p class="lv-indexsection__index">{{ item.py }}</p>
          <ul>
            <li
              v-for="city in item.list"
              :key="city.cityId"
              >
              {{ city.name }}
            </li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li
            v-for="(item, index) in filterLetters"
            :key="index"
            @click="pinyinFirst(item)"
            >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MzHeader from '@/components/MzHeader/index.vue';
import axios from 'axios';
export default {
  comments: {
    MzHeader
  },
  data () {
    return {
      // 城市数据
      cityData: []
    };
  },
  computed: {
    // 处理后的城市数据
    filterCityData () {
      let hash = {};
      let i = 0;
      let res = [];
      this.cityData.forEach(item => {
        // 存在   得首字母
        let filterLetter = item.pinyin.substr(0, 1).toUpperCase();
        // console.log(filterLetter);
        if (hash[filterLetter]) {
          // 第一次出现
          let index = hash[filterLetter] - 1;
          res[index].list.push(item);
        } else {
        // 不存在
        hash[filterLetter] = ++i;
        let obj = {};
        obj.py = filterLetter;
        obj.list = [item];
        res.push(obj);
        }
      })
      let temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      });
      return temp
    },
    filterLetters () {
      return this.filterCityData.map(item => {
        return item.py;
      })
    }
  },
  methods: {
    // 城市数据
    getCityData () {
      axios.get('./city.json').then(Response => {
        let res = Response.data;
        if (res.status === 0) {
          this.cityData = res.data.cities
        } else {
        }
      });
    },
    pinyinFirst (py) {
      // 字母到顶部的距离
      let el = document.getElementById(py);
      // 左边滚动条到底部的距离
      let top = document.getElementById('lv-indexlist__content').scrollTop
      top = el.offsetTop;
      console.log(top)
    }
  },
  created () {
    this.getCityData();
  }
};
</script>

<style lang="less">
@import url('./index.less');
</style>
