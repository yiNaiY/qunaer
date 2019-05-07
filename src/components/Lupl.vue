<template>
    <div class="lupl">
      <swiper >
        <swiper-slide v-for=" item in lpage.swiperList"><img :src="item.imgUrl" ></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'lupl',
  props: ['lpage'],
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style  scoped lang="less">
.lupl{
  height:2.34rem;
  width: 100%;
  img{
    height: 2.34rem;
  }
}
</style>
