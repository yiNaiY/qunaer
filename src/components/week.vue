<template>
    <div>
      <div class="top">
        <span>周末去哪儿</span>
      </div>
      <div class="boti" v-for="(item,index) in lpage.weekendList" :key="index">
        <img :src="item.imgUrl">
        <div class="paih">
          <ul>
            <li>{{item.title}}</li>
            <li>{{item.desc}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'week',
  props: ['lpage']
}
</script>

<style scoped lang="less">
.top{
  height: 0.8rem;
  background: #eeeeee;
  span{
    display: block;
    font-size: 0.3rem;
    padding-top: 0.27rem;
    margin-left: 0.2rem;
  }
}
.boti{
  img{
    display: block;
    height: 2.6rem;
    width: 100%;
  }
  .paih{
    height: 1.13rem;
    background: #eeeeee;
    ul{
     padding: 0.22rem 0 0 0.1rem;
      li{
        font-size: 0.32rem;
      }
      li+li{
        margin-top: 0.21rem;
        font-size: 0.3rem;
       color: #cccccc;
      }
    }
  }
}
</style>
