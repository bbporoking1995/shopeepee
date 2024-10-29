<template>
  <div class="homeIndex">
    <NavBar class="header" />
    <router-view class="banner" />
    <FooterItem />
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import FooterItem from "../components/FooterItem.vue";

export default {
  components: { NavBar, FooterItem },
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
.homeIndex {
  min-height: 100vh;
}
.header {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
