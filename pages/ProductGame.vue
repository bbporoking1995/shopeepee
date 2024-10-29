<template>
  <div class="product">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="全部">
        <ProductGameCategory />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ProductGameCategory from "../components/ProductGameCategory";

export default {
  components: { ProductGameCategory },
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
