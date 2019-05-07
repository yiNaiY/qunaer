<template>
  <div id="app">
    <div id="nav">
      <span class="iconfont">&#xe517;</span>
      <div class="jin">
        <img src="@/assets/sousuo.png"/>
        <input placeholder="输入城市/景点/游玩主题"/>
      </div>
        <span @click="city(cont)">{{cont}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Wheads',
  data () {
    return {
      cont: '常熟'
    }
  },
  created () {
    if (this.$route.query.id) {
      this.cont = this.$route.query.id
    }else
    {
      this.cont ='常熟'
    }
    // console.log(this)
  },
  methods: {
    city (e) {
      this.$router.push('/city?id=' + e)
    }
  }
}
</script>

<style  scoped lang="less">
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
  #app{
    /*display: flex;*/
  }
  #nav {
    height: 0.86rem;
    width: 100%;
    background: #00bcdc;
    display: flex;
    justify-content: space-around;
    span {
      color: #fff;
      font-size: 0.5rem;
      display: block;
      line-height: 0.86rem;
    }
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color: #cccccc;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: #cccccc;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: #cccccc;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #cccccc;
    }
    .jin {
      position: relative;
      display: flex;
      align-items: center;
      img{
        position: absolute;
        left: 0;
        height: 0.4rem;
        width: 0.4rem;
        color:#cccccc;
      }
      input {
        border-radius: 0.1rem;
        font-size: 0.3rem;
        width: 5rem;
        height: 0.64rem;
        padding-left: 0.42rem;
        color: #cccccc;
        outline: none;
      }
    }
   span{
     font-size:0.3rem;
   }
  }
</style>
