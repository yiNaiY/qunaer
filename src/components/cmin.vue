<template>
    <div>
      <div v-for="(value,key,index) in ocity.cities" :key="index">
        <div class="top" >
        <p ref="list">{{key}}</p>
        </div>
        <div>
          <ul>
            <li class="loi" v-for="(item,index) in value" :key="index">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>
      <!--<div class="hjk">-->
        <!--<ul>-->
          <!--<li v-for="(item,key,index) in ocity.cities" @click="adds(index)" :key="index">{{key}}</li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'cmin',
  props: ['ocity', 'qwe'],
  mounted () {
    this.scroll = new BScroll(this.$parent.$refs.cituy, { probeType: 3, click: true })
  },
  watch: {
    qwe () {
      this.scroll.scrollToElement(this.$refs.list[this.qwe], 1000)
    }
  }
}
</script>

<style scoped lang="less">
.top{
  height: 0.52rem;
  background: #eeeeee;
  border-bottom: 1px solid #cccccc;
  p{
    font-size: 0.26rem;
    padding-top: 0.16rem;
    margin-left: 0.2rem;
  }
}
.loi{
  font-size: 0.3rem;
  padding-left: 0.2rem;
 margin-top: 0.26rem;
  padding-bottom: 0.16rem;
  border-bottom: 1px solid #cccccc;
}
</style>
