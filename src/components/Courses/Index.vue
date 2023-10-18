<template>
  <div>
    <h1>Get All Courses</h1>
    <div>จํานวนผู้ใช้งาน {{ courses.length }}</div>
    <div v-for="course in courses" v-bind:key="course.id">
      <div>id: {{ course.id }}</div>
      <div>title: {{ course.title }}</div>
      <div>instructor: {{ course.instructor }}</div>
      <div>description: {{ course.description }}</div>
      <div>total_student: {{ course.total_student }}</div>
      <div>status: {{ course.status }}</div>
      <div>type: {{ course.type }}</div>
      <p>
        <button v-on:click="navigateTo('/course/' + course.id)">
          ดูข้อมูลคอร์ส
        </button>
        <button v-on:click="navigateTo('/course/edit/' + course.id)">
          แก้ไขข้อมูล
        </button>
        <button v-on:click="deleteCourse(course)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import UserServices from "@/services/UserService";
export default {
  data() {
    return {
      courses: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteCourse(course) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UserServices.delete(course);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.courses = (await UserServices.index()).data;
    }
  },
  async created() {
    this.courses = (await UserServices.index()).data;
  }
};
</script>
<style scoped></style>
