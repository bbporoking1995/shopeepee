<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel trigger="click" height="50vh">
      <el-carousel-item v-for="item in 4" :key="item"> </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.block {
  width: 70%;
  height: 60vh;
  margin: auto;
  margin-top: 10px;
}
/* .el-carousel__item:nth-of-type(1) { */
.el-carousel__item:nth-child(3) {
  background: url("../assets/img/slide-1.png");
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.el-carousel__item:nth-child(4) {
  background: url("../assets/img/slide-2.png");
  background-position: center;
  background-repeat: no-repeat;
}
.el-carousel__item:nth-child(5) {
  background: url("../assets/img/slide-3.png");

  background-position: center;
  background-repeat: no-repeat;
}

.el-carousel__item:nth-child(6) {
  background: url("../assets/img/slide-4.png");
  background-position: center;
  background-repeat: no-repeat;
}
</style>
