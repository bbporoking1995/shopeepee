<template>
  <div class="footer">
    <div class="footerItem">
      <div class="pic" @click="goHome">
        <img src="../assets/img/logo-3.png" />
      </div>
      <div class="terms">
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=vUvKjM73x9A"
              target="_blank"
            >
              免責聲明</a
            >
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=vUvKjM73x9A"
              target="_blank"
            >
              隱私權政策</a
            >
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=vUvKjM73x9A"
              target="_blank"
            >
              服務條款</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="text">
      <p>新加坡商蝦皮娛樂電商有限公司台灣分公司 © 2024 Shopee. 版權所有。</p>
    </div>
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
  methods: {
    goHome() {
      return this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: black;
}
.footerItem {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.pic {
  width: 9%;
  cursor: pointer;
}

.pic img {
  width: 100%;
}

.terms {
  flex: flex;
  flex-direction: column;
  width: 30%;
}
ul {
  display: flex;
  justify-content: end;
}
li {
  list-style: none;
  margin: 0.5rem;
  font-size: 0.9rem;
}
a {
  display: inline-block;
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
  padding-bottom: 0.1rem;
  transition: all 0.3s ease;
}

.text {
  display: flex;
  justify-content: center;
  color: white;
}

li:hover a {
  color: orangered;
  border-bottom: 1px solid orangered;
}
</style>
