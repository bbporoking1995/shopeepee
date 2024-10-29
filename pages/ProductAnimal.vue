<template>
  <div class="product">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="凶猛">
        <AnimalBad />
      </el-tab-pane>
      <el-tab-pane label="友善">
        <AnimalFriendly />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import AnimalBad from "../components/AnimalBad.vue";
import AnimalFriendly from "../components/AnimalFriendly.vue";

export default {
  components: { AnimalBad, AnimalFriendly },
  data() {
    return {
      activeName: "first",
      tabPosition: "left",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.product {
  min-height: 100vh;
}
</style>
