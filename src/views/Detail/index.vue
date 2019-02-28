<template>
  <div>
    这是详情页
    <div>
      这个页面的ID是{{ id }}
    </div>
  </div>
</template>

<script>
export default {
  // 路由组件传参
  props: {
    id: String
  },
  created () {
    // 根据ID去请i去参数
    console.log(this.id);
    console.log(this.$route);
  }
}
</script>
