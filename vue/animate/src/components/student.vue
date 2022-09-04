<template>
  <div class="student">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">hello</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Student",
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
}
.v-enter-active {
  animation: kary 1s;
}
.v-leave-active {
  animation: kary 1s reverse;
}
@keyframes kary {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
