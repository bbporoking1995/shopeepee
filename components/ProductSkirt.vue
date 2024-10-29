<template>
  <div class="main-production">
    <el-row>
      <el-col>
        <el-card v-for="(product, index) in productSkirt" :key="index">
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
      //     name: "迷你百褶裙",
      //     img: require("../assets/img/skirt-1.png"),
      //     text: "很像一串香蕉",
      //     price: 3000,
      //     number: 1,
      //   },
      //   {
      //     name: "很多釦子的A字裙",
      //     img: require("../assets/img/skirt-2.png"),
      //     text: "粉色台燈燈罩",
      //     price: 1500,
      //     number: 1,
      //   },
      //   {
      //     name: "中規中矩深色長裙",
      //     img: require("../assets/img/skirt-3.png"),
      //     text: "常用首選",
      //     price: 2990,
      //     number: 1,
      //   },
      //   {
      //     name: "寬版蛋糕裙",
      //     img: require("../assets/img/skirt-4.png"),
      //     text: "假裝101",
      //     price: 5000,
      //     number: 1,
      //   },
      //   {
      //     name: "夢幻公主蛋糕裙",
      //     img: require("../assets/img/skirt-5.png"),
      //     text: "假裝洗車刷",
      //     price: 600,
      //     number: 1,
      //   },
      // ],
    };
  },
  computed: {
    productSkirt() {
      return this.$store.state.productSkirt;
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
      this.$store.commit("productSkirtIncrement", { num: count, i: index });
    },
    decrement(data, index) {
      if (data > 1) {
        const count = data - 1;
        this.$store.commit("productSkirtDecrement", { num: count, i: index });
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
