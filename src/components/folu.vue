<template>
    <div class="wfolu">
      <swiper >
        <swiper-slide v-for="(item,indexx) in flip"  :key="indexx">
          <ul>
            <li v-for="(ittem,inde) in item" :key="inde"><img :src="ittem.imgUrl" >
              <span>{{ittem.desc}}</span>
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'folu',
  props: ['fpage'],
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    flip () {
      // console.log(this.fpage)
      let arr = this.fpage.iconList
      let newArr = []
      for (let i = 0; i < arr.length; i += 8) {
        newArr.push(arr.slice(i, i + 8))
      }
      // console.log(newArr)
      return newArr
    }
  }
}
</script>

<style scoped lang="less">
.wfolu{
  height: 4.06rem;
  ul{
    display: flex;
    flex-wrap: wrap;
  }
  li{
    img{
    width: 1.1rem;
    height:1.1rem;
    margin-right: 0.64rem;
      margin-top: 0.2rem;
      margin-bottom: 0.22rem;
    }
    span{
      display: block;
      color: #333333;
      font-size :0.3rem;
    }
  }
  li:nth-child(1){
     margin-left: 0.33rem;
   }
  li:nth-child(5){
    margin-left: 0.33rem;
  }
}
</style>
