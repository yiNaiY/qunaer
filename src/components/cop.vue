<template>
    <div class="top">
      <div class="t-os">
        <p class="iconfont" @click="fan()">&#xe517;<span>城市选择</span></p>
        <div class="t-i">
          <input type="text" placeholder="输入城市名或拼音 " v-model="shru">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cop',
  data () {
    return {
      shru: ''
    }
  },
  methods: {
    fan () {
      this.$router.back()
    }
  },
  watch: {
    shru () {
      this.$emit('iop', this.shru)
    }
  }
}
</script>

<style scoped lang="less">
  @font-face {
    font-family: 'iconfont';
    src: url('../../font_bh9d1ok69hp/iconfont.eot');
    src: url('../../font_bh9d1ok69hp/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../font_bh9d1ok69hp/iconfont.woff2') format('woff2'),
    url('../../font_bh9d1ok69hp/iconfont.woff') format('woff'),
    url('../../font_bh9d1ok69hp/iconfont.ttf') format('truetype'),
    url('../../font_bh9d1ok69hp/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.top{
  height:1.52rem;
  width: 100%;
  background: #00bcd4;
  .t-os{
    padding-top: 0.23rem;
    margin: 0 0.11rem;
    p{
      color: #fff;
      font-size: 0.4rem;
      span{
        margin-left: 2.3rem;
      }
    }
    .t-i{
      height: 0.62rem;
      background: #fff;
      border-radius: 0.2rem;
      margin-top: 0.2rem;
      display: flex;
      justify-content:  center;
      input{
        font-size: 0.3rem;
        outline: none;
        text-align: center;
      }
    }
  }
}
</style>
