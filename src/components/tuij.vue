<template>
    <div class="tuij">
      <div class="tui" >
        <span>热销推荐</span>
      </div>
      <div class="tuipi" v-for="item in lpage.recommendList">
        <div class="imgg">
          <img :src="item.imgUrl" alt="">
        </div>
            <div class="zit">
              <ul>
                <li class="one">{{item.title}}</li>
                <li class="two">{{item.desc}}</li>
                <li class="three" @click="detail()">查看详情</li>
              </ul>
            </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'tuij',
  props: ['lpage'],
  methods: {
    detail () {
      this.$router.push('/detail')
    }
  }
}
</script>

<style scoped lang="less">
.tui{
  background: #eeeeee;
  height: 0.8rem;
  width: 100%;
 span{
    font-size: 0.3rem;
    display: block;
    padding-top: 0.27rem;
    margin-left: 0.2rem;
  }
}
.tuipi {
  height: 1.89rem;
  width: 100%;
  border-bottom: 1px solid  #cccccc;
  display: flex;
  .imgg{
    height: 1.7rem;
    width: 1.7rem;
    /*background: #7e8c8d;*/
    margin: 0.1rem 0.2rem 0 0.1rem;
    img{
      height: 1.7rem;
      width: 1.7rem;
    }
  }
  .zit{
    margin-top: 0.2rem;
    li{
      font-size: 0.26rem;
    }
    li+li{
      margin-top: 0.24rem;
    }
    .one{
     font-size: 0.4rem;
    }
    .two{
      color: #cccccc;
    }
    .three{
      width: 1.4rem;
      padding: 0.1rem 0.2rem;
      background: #ff9300;
      color: #fff;
      border-radius: 0.1rem;
    }
  }
}
</style>
