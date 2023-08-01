<script>
import Student from "@/components/StudentItem.vue";

export default {
  name: "CollegeItem",
  props: ["name"],
  data() {
    return {
      students: [
        {
          name: "小明",
          sex: "男",
        },
        {
          name: "小王",
          sex: "女",
        }
      ],
    };
  },
  components: {
    Student,
  },
};
</script>

<template>
  <div class="college">
    <div class="title">{{ name }}</div>
    <Student v-for="(student, index) in students" :info="student" :key="index"></Student>
  </div>
</template>

<style scoped>
.college {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  margin: 10px;
}

.college .title {
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px dashed red;
  margin: 10px;
}
</style>
