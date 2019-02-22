<template>
  <div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <button @click="goCity">去城市页面</button>
    <ul>
      <router-link tag="li" to="detail/11">喜剧之王</router-link >
      <router-link tag="li" to="detail/22">家和万事惊</router-link >
      <router-link tag="li" to="detail/33">流浪地球</router-link >
      <router-link tag="li" to="detail/44">疯狂外星人</router-link >
    </ul>
  </div>

</template>

<script>
import MzBanner from '../components/MzBanner/index';
import MzTabs from '../components/MzTabs/index';
export default {
  components: {
    MzBanner,
    MzTabs
  },
  methods: {
    goCity () {
      /*  path     字符串传参
       *  paeams    对象传参
       *  query     查询字符串传参
       * name       根据name 传参
       * path和params不可以一起使用
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
      })
    }
  }
};
</script>
