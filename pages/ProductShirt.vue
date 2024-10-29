<template>
  <div class="product">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane
        v-for="item in tabData"
        :key="item.value"
        :label="item.label"
      />
      <el-tab-pane label="上衣">
        <ProductCloth :dataList="cloth" />
      </el-tab-pane>
      <el-tab-pane label="褲子">
        <ProductPant />
      </el-tab-pane>
      <el-tab-pane label="裙子">
        <ProductSkirt />
      </el-tab-pane>
      <el-tab-pane label="配件">
        <ProductAccessory />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ProductCloth from "../components/ProductCloth.vue";
import ProductPant from "../components/ProductPant.vue";
import ProductSkirt from "../components/ProductSkirt.vue";
import ProductAccessory from "../components/ProductAccessory";

export default {
  components: { ProductCloth, ProductPant, ProductSkirt, ProductAccessory },
  data() {
    return {
      activeName: "first",
      tabPosition: "left",
    };
  },
  props: {
    tabData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    cloth() {
      console.log("cloth === ", this.$store.state.ProductCloth);
      return this.$store.state.productCloth;
    },
  },
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
