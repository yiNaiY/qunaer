<template>
  <div ref="cituy" class="tops">
    <div>
      <div v-if= "mnb">
      <cop @iop="zxc"></cop>
        <div>
          <div v-for="(item,val) in mathh " class="tio"  :key="val">{{item}}</div>
        </div>
      </div>
      <div v-else>
        <cop @iop="zxc"></cop>
      <coty :ocity="ccity"></coty>
      <cmin :ocity="ccity" :qwe="asd" ></cmin>
      </div>
    </div>
    <div class="hjk">
      <ul>
        <li v-for="(item,key,index) in ccity.cities" @click="adds(index)" :key="index">{{key}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import cop from './cop.vue'
import coty from './coty.vue'
import cmin from './cmin.vue'
import store from '../vuex'

export default {
  name: 'city',
  components: {
    cop,
    coty,
    cmin
  },
  data () {
    return {
      ccity: '',
      asd: '',
      mnb: ''
    }
  },
  computed: {
    mathh () {
      let arr = []
      let awe = Object.values(this.ccity.cities)
      awe.map(item => {
        item.map(item => {
          if (item.spell.startsWith(this.mnb) || item.name.startsWith(this.mnb)) {
            arr.push(item.name)
          }
        })
      })
      return arr
    }
  },
  created () {
    console.log(store.state.city)
    this.ccity = store.state.city
    // console.log(this.ccity)
  },
  methods: {
    adds (e) {
      this.asd = e
      // console.log(this.asd)
    },
    zxc (e) {
      this.mnb = e
    }
  }
}
</script>

<style scoped lang="less">
.tops{
  height: 100vh;
}
.hjk{
  position: fixed;
  z-index: 1;
  right: 0;
  top:2.9rem;
  ul{
    li{
      color: aquamarine;
      font-size:0.3rem;
      margin-bottom: 0.1rem;
    }
  }
}
  .tio{
    font-size:0.4rem;
    border-bottom: 1px solid #eeeeee;
  }
</style>
