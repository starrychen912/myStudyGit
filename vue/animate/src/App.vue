<template>
  <div id="app">
   <!-- <Student/> -->
   <!-- <test/> -->
   <test1/>
  </div>
</template>

<script>
import Student from "./components/student.vue";
import test from "./components/test.vue"
import test1 from "./components/test1"

export default {
  name: "App",
  components: {
    Student,
    test,
    test1
  },
 
};
</script>

<style>
</style>
