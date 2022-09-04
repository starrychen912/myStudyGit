<template>
  <div class="student">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">hello</h1>
      <h1 v-show="isShow" key="2">kary</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "test",
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
/* 进入的起点 */
.hello-enter{
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to{
  transform: translateX(0);
}
/* 过程中 */
.hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
}
/* 离开的起点 */
.hello-leave{
  transform: translateX(0%);
}
/* 离开的终点 */
.hello-leave-to{
  transform: translateX(-100%);
}


</style>
