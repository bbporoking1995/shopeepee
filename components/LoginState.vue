<template>
  <div class="login">
    <div v-if="getIdNull" class="loginBtn">
      <router-link to="/login">
        <h3>會員登入</h3>
      </router-link>
    </div>
    <div v-else class="logout">
      <p>哈囉，{{ getId }}</p>
      <el-button type="info" size="mini" @click="goLogout">登出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      reName: "",
      login: true,
    };
  },
  computed: {
    getId() {
      return this.$store.state.userId;
    },
    getIdNull() {
      return this.getId === "";
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goLogout() {
      this.$store.dispatch("updateId", this.reName);
      return this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.logout {
  display: flex;
  width: 100%;
  margin-left: 20px;
  align-items: center;
}
.logout p {
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  /* margin: 20px; */
}

a {
  text-decoration: none;
}
</style>
