<template>
  <div>
    <h1>Edit Courses</h1>
    <h1>Edit Course</h1>
    <form v-on:submit.prevent="editCourse">
      <p>title: <input type="text" v-model="course.title" /></p>
      <p>instructor: <input type="text" v-model="course.instructor" /></p>
      <p>description: <input type="text" v-model="course.description" /></p>
      <p>total_student: <input type="text" v-model="course.total_student" /></p>
      <p>status: <input type="text" v-model="course.status" /></p>
      <p>type: <input type="text" v-model="course.type" /></p>
      <p><button type="submit">edit course</button></p>
    </form>
    <hr />
    <div>
      <p>title: {{ course.title }}</p>
      <p>instructor: {{ course.instructor }}</p>
      <p>description: {{ course.description }}</p>
      <p>total_student: {{ course.total_student }}</p>
      <p>status: {{ course.status }}</p>
      <p>type: {{ course.type }}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";
export default {
  data() {
    return {
      course: {
        "title": "Server Side Programming",
        "instructor": "Dr. Nattapon Kumyaito",
        "description": "Client-server web architecture, overview of server-side programming languages, server-side programming basics including types, arrays, loops, functions, handling form input and validation; database connections and making database queries, object-oriented approaches to server-side programming, designing and writing web services, authentication techniques and session management, use of server-side frameworks, web organization and standards",
        "total_student": "50",
        "status": "active",
        "type": "core subject"
      }
    };
  },
  methods: {
    async editCourse() {
      try {
        await UsersService.put(this.course);
        this.$router.push({
          name: "courses"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let courseId = this.$route.params.courseId;
      this.course = (await UsersService.show(courseId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
