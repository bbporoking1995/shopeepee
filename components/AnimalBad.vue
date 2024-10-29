<template>
  <div class="main-production">
    <el-row>
      <el-col>
        <el-card v-for="(product, index) in productBad" :key="index">
          <div class="image">
            <img :src="product.img" />
          </div>
          <div class="productContainer">
            <h3>{{ product.name }}</h3>
            <div class="bottom clearfix">
              <span class="location">{{ product.text }} <br /></span>
              <div class="checkLogin" v-if="getId !== ''">
                <el-button
                  type="warning"
                  class="button"
                  @click="goToBuy(product)"
                  >購買</el-button
                >
              </div>
              <div v-else>
                <el-button type="warning" class="button" @click="goLogin"
                  >購買</el-button
                >
              </div>
              <span class="price">${{ product.price }} </span>
              <!-- <span>{{ product.number }} </span> -->
              <br />
              <div class="number">
                <button @click="decrement(product.number, index)">-</button>
                <span> {{ product.number }} </span>
                <button @click="increment(product.number, index)">+</button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // products: [
      //   {
      //     name: "恐怖噩夢貓",
      //     img: require("../assets/img/animal-1.png"),
      //     text: "不好說",
      //     price: 99999,
      //   },
      //   {
      //     name: "小松鼠",
      //     img: require("../assets/img/animal-2.png"),
      //     text: "吱吱喳 吱吱喳 吱喳",
      //     price: 5,
      //   },
      //   {
      //     name: "粉紅貓頭鷹",
      //     img: require("../assets/img/animal-3.png"),
      //     text: "會飛的貓咪",
      //     price: 6666,
      //   },
      // ],
    };
  },
  computed: {
    productBad() {
      return this.$store.state.productBad;
    },
    getId() {
      return this.$store.state.userId;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goLogin() {
      return this.$router.push({ name: "login" });
    },

    goToBuy(data) {
      this.$store.commit("add_card", data);
      this.$router.push({ name: "buy" });
    },
    increment(data, index) {
      const count = data + 1;
      this.$store.commit("productBadIncrement", { num: count, i: index });
    },
    decrement(data, index) {
      if (data > 1) {
        const count = data - 1;
        this.$store.commit("productBadDecrement", { num: count, i: index });
      }
    },
  },
};
</script>

<style scoped>
.main-production {
  display: flex;
  justify-content: space-between;
}

.el-col {
  display: flex;
  flex-wrap: wrap;
}

.el-card {
  margin: 30px;
}

.productContainer {
  display: flex;
  flex-direction: column;
  width: 10vw;
}

.location {
  /* font-size: 13px; */
  color: #999;
  /* margin-bottom: 10px; */
}

.bottom {
  /* margin-top: 10px; */
  line-height: 30px;
}

.button {
  padding: 10px;
  float: right;
}

.price {
  color: orangered;
}

.image img {
  width: 100%;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
