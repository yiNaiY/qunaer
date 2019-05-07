<template>
 <div>
   <div class="beo">
     <img :src="detil.bannerImg" >
     <div class="fan" @click="backk()">
     </div>
     <div class="two">
       2
     </div>
     <div class="one">
       {{detil.sightName}}
     </div>
   </div>
   <div>
     <ul >
       <li class="ontr" v-for="(item, index) in detil.categoryList" :key="index">
         <p class="qwe">{{item.title}}</p>
         <div v-for= "(iten, val) in item.children" class="asd" :key="val">
          <p>{{iten.title}}</p>
           <div v-for="(itep,nums) in iten.children" class="zxc" :key="nums">
           <p>{{itep.title}}</p>
           </div>
         </div>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
import store from '../vuex'
export default {
  name: 'detail',
  data () {
    return {
      detil: ''
    }
  },
  methods: {
    backk () {
      this.$router.back()
    }
  },
  created () {
    this.detil = store.state.detail
    console.log(this.detil)
  }
}
</script>

<style scoped lang="less">
.beo{
  position: relative;
 img{
   vertical-align: bottom;
   height: 3rem;
   width: 100%;
 }
  .fan{
    height: 0.82rem;
    width: 0.82rem;
    border-radius: 50% 50%;
    background: rgba(0,0,0,0.8);
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
  }
  .two{
    height: 0.3rem;
    width:2rem;
    border-radius: 0.3rem;
    background: rgba(0,0,0,0.8);
    position: absolute;
    bottom: 0.2rem;
    right: 0;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.3rem;
    color: #fff;
  }
  .one{
    position: absolute;
    bottom: 0.2rem;
    left: 0.2rem;
    font-size: 0.3rem;
    color: #fff;
  }
}
.ontr{
  font-size: 0.3rem;
  padding: 0.25rem 0;
  .qwe{
    padding-left: 0.6rem;
  }
  .asd{
    padding-left: 0.8rem;
  }
  .zxc{
    padding-left: 0.6rem;
  }
}
</style>
