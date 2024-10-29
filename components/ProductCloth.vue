<template>
  <div class="main-production">
    <el-row>
      <el-col>
        <el-card v-for="(product, index) in dataList" :key="index">
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
      //     name: "特價標籤的上衣",
      //     img: require("../assets/img/t-shirt-1.png"),
      //     text: "買到賺到",
      //     price: 1,
      //   },
      //   {
      //     name: "乾淨整潔的上衣",
      //     img: require("../assets/img/t-shirt-2.png"),
      //     text: "100%殺菌",
      //     price: 999,
      //   },
      //   {
      //     name: "假裝很新的上衣",
      //     img: require("../assets/img/t-shirt-3.png"),
      //     text: "二手的所以需要假裝",
      //     price: 50,
      //   },
      //   {
      //     name: "黑的發亮的上衣",
      //     img: require("../assets/img/t-shirt-4.png"),
      //     text: "黑黑黑黑黑黑黑",
      //     price: 550,
      //   },
      // ],
    };
  },
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // productCloth() {
    //   return this.$store.state.productCloth;
    // },
    getId() {
      return this.$store.state.userId;
    },
    // reset() {
    //   return this.productCloth.map((obj) => {
    //     obj.number = 1;
    //   });
    // },
  },
  watch: {},
  created() {
    console.log(this.dataList);
  },
  mounted() {},
  methods: {
    goLogin() {
      return this.$router.push({ name: "login" });
    },

    goToBuy(data) {
      this.$store.commit("add_card", data);
      this.$router.push({ name: "buy" });
      // this.reset;
    },
    increment(data, index) {
      const count = data + 1;
      this.$store.commit("productClothIncrement", { num: count, i: index });
    },
    decrement(data, index) {
      if (data > 1) {
        const count = data - 1;
        this.$store.commit("productClothDecrement", {
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
