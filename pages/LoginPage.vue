<template>
  <div class="login">
    <div class="loginContent">
      <span>提示：貴賓您好，請先輸入您的帳號！ </span>
      <div class="loginId">
        <label for="id">帳號： </label>
        <input
          id="id"
          type="text"
          placeholder="在這裡輸入"
          v-model="userName"
        />
      </div>
      <div v-if="userName !== ''">
        <router-link to="/">
          <button @click="$store.dispatch('updateId', userName)">登入</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    getId() {
      return this.$store.state.userId;
    },
  },
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
.login {
  margin: auto;
  width: 60%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginContent {
  margin-top: 10vh;
  box-shadow: 0px 1px 3px 0px black;
  width: 50%;
  height: 40vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
