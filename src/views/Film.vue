<template>
  <div>
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <MzFooter></MzFooter>
  </div>
</template>

<script>
import MzBanner from '../components/MzBanner/index';
import MzFooter from '../components/MzFooter/index';
import MzTabs from '../components/MzTabs/index';
export default {
  components: {
    MzBanner,
    MzTabs,
    MzFooter
  }
};
</script>
