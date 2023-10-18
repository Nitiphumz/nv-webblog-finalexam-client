<template>
  <div>
    <h1>Show Course</h1>
    <p>id: {{ course.id }}</p>
    <p>title: {{ course.title }} </p>
    <p>instructor: {{ course.instructor }}</p>
    <p>description: {{ course.description }}</p>
    <p>total_student: {{ course.total_student }}</p>
    <p>status: {{ course.status }}</p>
    <p>type: {{ course.type }}</p>

  </div>
</template>
<script>
import UserService from "@/services/UserService";

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
  async created() {
    let courseId = this.$route.params.courseId;
    this.course = (await UserService.show(courseId)).data
    console.log(this.courseId)
  }
};
</script>
<style scoped></style>
