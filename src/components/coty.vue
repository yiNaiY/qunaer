<template>
    <div>
      <div>
       <div class="ity">
        <p>当前城市</p>
       </div>
       <div class="cshu">
        <span >{{change}}</span>
       </div>
      </div>
      <div>
        <div class="ity">
          <p>热门城市</p>
        </div>
        <div class="cshu">
          <span v-for="(item,index) in ocity.hotCities" @click="add(item.name)" :key="index">
            {{item.name}}
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'coty',
  data () {
    return {
      change: '常熟'
    }
  },
  props: ['ocity'],
  created () {
    this.change = this.$route.query.id
    // console.log(this)
  },
  methods: {
    add (e) {
      this.$router.push('/index?id=' + e)
    }
  }
}
</script>

<style scoped lang="less">
  .ity{
    height: 0.52rem;
    background: #eeeeee;
    border-bottom: 1px solid #cccccc;
    p{
      padding-top: 0.15rem;
      margin-left: 0.2rem;
      font-size: 0.3rem;
  }
  }
  .cshu{
    border-bottom: 1px solid #cccccc;
    display: flex;
    flex-wrap: wrap;
    span{
      color: #333333;
      font-size: 0.3rem;
      margin-top: 0.2rem;
      margin-bottom: 0.1rem;
      margin-left: 0.2rem;
      padding: 0.1rem 0.8rem;
      border: 1px solid #cccccc;
      border-radius: 0.1rem;
    }
  }
</style>
