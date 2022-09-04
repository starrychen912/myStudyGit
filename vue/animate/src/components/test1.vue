<template>
  <div class="student">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group 
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" key="1">hello</h1>
      <h1 v-show="isShow" key="2">xxx</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "test1",
  props: {
    msg: String,
  },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background-color: #42b983;
  /* transition: 0.5s linear; */
}


</style>
