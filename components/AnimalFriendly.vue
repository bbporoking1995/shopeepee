<template>
  <div class="main-production">
    <el-row>
      <el-col>
        <el-card v-for="(product, index) in productFriendly" :key="index">
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
      //     name: "大金剛",
      //     img: require("../assets/img/animal-4.png"),
      //     text: "面惡心善幫你抓背",
      //     price: 1111,
      //   },
      //   {
      //     name: "鹿鹿要去哪一路",
      //     img: require("../assets/img/animal-5.png"),
      //     text: "不知道什麼品種",
      //     price: 500,
      //   },
      //   {
      //     name: "水豚 (頭上無橘子)",
      //     img: require("../assets/img/animal-6.png"),
      //     text: "優惠您1元",
      //     price: 2999,
      //   },
      //   {
      //     name: "真。北極熊",
      //     img: require("../assets/img/animal-7.png"),
      //     text: "不是白化棕熊 已查證",
      //     price: 99999999,
      //   },
      // ],
    };
  },
  computed: {
    productFriendly() {
      return this.$store.state.productFriendly;
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
      this.$store.commit("productFriendlyIncrement", { num: count, i: index });
    },
    decrement(data, index) {
      if (data > 1) {
        const count = data - 1;
        this.$store.commit("productFriendlyDecrement", {
          num: count,
          i: index,
        });
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
