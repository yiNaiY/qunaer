<template>
  <div>
<wheads></wheads>
  <lupl :lpage="ipage"></lupl>
    <folu :fpage="ipage"></folu>
    <iidex :lpage="hot"></iidex>
    <tuij :lpage="ipage"></tuij>
    <week :lpage="ipage"></week>
  </div>
</template>

<script>
import wheads from './Wheads.vue'
import lupl from './Lupl.vue'
import folu from './folu.vue'
import tuij from './tuij.vue'
import week from './week.vue'
import iidex from './iidex.vue'
import store from '../vuex'
export default {
  name: 'index',
  data () {
    return {
      ipage: '',
      hot: ''
    }
  },
  components: {
    wheads,
    lupl,
    folu,
    tuij,
    week,
    iidex
  },
  created () {
    this.ipage = store.state.page
    this.hot = store.state.hot
    // console.log(this.$parent.page)
  }
}
</script>

<style scoped lang="less">

</style>
