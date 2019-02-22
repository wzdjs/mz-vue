<template>
  <div>
    这是详情页
    <div>
      这个页面的ID是{{  $route.params.id}}
    </div>
  </div>
</template>

<script>
export default {
  created () {
    // 根据ID去请i去参数
    console.log(this.$route.params.id);
    console.log(this.$route);
  }
}
</script>
