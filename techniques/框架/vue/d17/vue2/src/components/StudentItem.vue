<script>
export default {
  name: "StudentsItem",
  props: ["info"],
};
</script>

<template>
  <div class="student">
    <div class="stu-name">{{ info.name }}</div>
    <div class="stu-sex">{{ info.sex }}</div>
  </div>
</template>

<style scoped>
.student {
  height: 20px;
  padding: 5px 0;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  border: 1px dashed blue;
}
.student .stu-name {
  width: 100px;
}
.student .stu-sex {
  width: 100px;
}
</style>
