<template>
  <nav class="main-nav">
    <div class="logo">
      <div class="pic" @click="goHome">
        <img src="../assets/img/logo-2.jpg" />
      </div>
      <div class="text" @click="goHome">
        <h2>蝦皮購物</h2>
      </div>
    </div>
    <div class="login-option">
      <LoginState />
    </div>
  </nav>
</template>

<script>
import LoginState from "../components/LoginState.vue";
export default {
  components: { LoginState },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goHome() {
      return this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.main-nav {
  display: flex;
  width: 100%;
  background: linear-gradient(orangered 60%, rgb(250, 129, 86));
  box-shadow: 0px 1px 3px 0px black;
}
.logo {
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.pic {
  cursor: pointer;
  width: 75px;
}
.pic img {
  width: 100%;
}

.text {
  cursor: pointer;
  color: white;
  margin: 0 10px;
}
</style>
