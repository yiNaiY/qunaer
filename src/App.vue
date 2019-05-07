<template>
  <div id="App">
    <div  v-if="!page" class="top"><p><img src="@/assets/123456.gif" alt=""></p></div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import axios from '../node_modules/axios'
export default {
  name: 'App',
  created () {
    // console.log(store)
    this.$store.dispatch('get')
  },
  computed: {
    page () {
      return this.$store.state.page
    }
  }

}
</script>
<style  scoped lang="less">
.top{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height: 100%;
    width: 100%;
  }
}
</style>
