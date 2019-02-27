<template>
  <div class="mz-city">
    {{ maName }}
    {{ mbName }}
    {{ mcName }}

    <!-- this.$store.commit('ma/chgName') -->
    <button @click="chgName({ name: '张三' })">修改 a 中的 name</button>
    <button @click="$store.commit('updateName')">修改 c 中的 name</button>

    <MzHeader :title="'当前城市-' + curCityName"></MzHeader>

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
              @click="changeCity(city)"
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
            @click="hh(item)"
            >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MzHeader from '@/components/MzHeader/Index';

/*
  PS: mapState mapGetters 用在 computed
      mapMutations mapActions 用在 methods
*/
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    MzHeader
  },

  data () {
    return {
      // curCityName: '深圳', // 自身不要，而是用仓库中的curCityName
      // 城市数据列表
      // cityData: []
    }
  },

  computed: {
    // 对象展开运算符
    ...mapState([
      'cityData',
      'curCityName'
    ]),
    ...mapState('ma', {
      'maName': (state) => state.name
    }),
    ...mapState('mb', {
      'mbName': (state) => state.name
    }),
    ...mapGetters([
      'filterCityData',
      'filterLetters'
    ]),

    mcName () {
      return this.$store.state.mc.name;
    }

  },

  methods: {
    // 给组件加一个方法，这个方法其实是 mutation
    ...mapMutations([
      'chgCityName',
      'chgCityData'
    ]),
    ...mapMutations('ma', [
      'chgName'
    ]),

    ...mapActions([
      'getCityData'
    ]),

    /**
     * 右侧的拼音首字母点击
     * @param {String} py 点击的首字母
     */
    hh (py) {
      // 1. 得到左侧距离顶部的距离。
      let el = document.getElementById(py);
      console.log(el.offsetTop);
      // 2. 操作滚动条进行滚动
      document.getElementById('lv-indexlist__content').scrollTop = el.offsetTop;
    },

    /**
     * 切换城市
     * @param {Object} city 城市对象
     */
    changeCity (city) {
      this.curCityName = city.name;
      // this.$store.state.curCityName = city.name; ×

      // this.$store.commit('chgCityName', {
      //   name: city.name,
      //   age: 18
      // });

      this.chgCityName({
        name: city.name,
        age: 18
      })
    }
  },

  created () {
    // this.getCityData();
    // 调用 仓库中的 action
    this.$store.dispatch('getCityData')
    this.getCityData();
  }
}
</script>

<style lang="less">
@import url('./index.less');
</style>
