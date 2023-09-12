<script>
export default {
  name: "ComputerStudent",
  data() {
    return {
      students: [
        "小明", "小花", "小王", "小马"
      ],
    };
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="(student, index) in students" :key="index">
        {{ index + 1 }}: {{ student }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
