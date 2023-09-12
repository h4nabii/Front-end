<!--  -->
<template>
  <div>
    <ul>
        <li v-for="(item,index) in students" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
        students:['a','b','c']
    }
  }
}
</script>

<style lang='less' scoped>

</style>
