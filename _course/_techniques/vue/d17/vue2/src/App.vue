<script>
import ComputerUniversity from "@/components/ComputerUniversity.vue";
import ComputerStudent from "@/components/ComputerStudent.vue";
import CollegeItem from "@/components/CollegeItem.vue";

export default {
  name: "App",
  components: {
    CollegeItem,
    ComputerUniversity,
    ComputerStudent,
  }
};
</script>

<template>
  <div id="app">
    <div class="main">
      <h1 class="title">计量大学前端开发班</h1>
      <div class="college-list">
        <CollegeItem name="信息工程学院"></CollegeItem>
        <CollegeItem name="量新学院"></CollegeItem>
        <CollegeItem name="马克思主义学院"></CollegeItem>
      </div>
      <ComputerUniversity></ComputerUniversity>
      <ComputerStudent></ComputerStudent>
    </div>
  </div>
</template>

<style>
/* default */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  border: 5px solid gray;
  height: 800px;
}

.main .college-list {
  display: flex;
}
</style>
