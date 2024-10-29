<template>
  <div class="shopping">
    <div class="title">
      <h3>結帳頁面</h3>
    </div>
    <div
      class="calculate"
      v-for="(list, index) in getShoppingList"
      :key="index"
    >
      <div class="pic">
        <img :src="list.img" />
      </div>
      <div class="content">
        <p>產品名稱：{{ list.name }}</p>
        <p>數量：{{ list.number }}</p>
        <p>單價：{{ list.price }}</p>
        <p>小計：{{ getTotal(list) }}</p>
      </div>
    </div>
    <p>總價：{{ getAllTotal }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    getShoppingList() {
      return this.$store.state.card;
    },
    getAllTotal() {
      return this.getShoppingList
        .map((obj) => obj.price * obj.number)
        .reduce((a, b) => a + b, 0);
    },
  },
  watch: {},
  created() {
    console.log("$$$" + this.total.number);
  },
  mounted() {},
  methods: {
    getTotal(data) {
      const { number = 0, price = 0 } = data;
      return number * price;
    },
    // total() {
    //   Object.values(this.getShoppingList).forEach((item) => {
    //     console.log("5555" + item);
    //   });
    // },
  },
};
</script>

<style scoped>
.pic {
  margin: 0 15px;
}

.calculate {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  box-shadow: 0px 1px 3px 0px black;
  margin: 10px;
}
</style>
