<template>
  <div class="main-production">
    <el-row>
      <el-col>
        <el-card v-for="(product, index) in productAccessory" :key="index">
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
      //     name: "彩色棒球帽",
      //     img: require("../assets/img/accessory-1.png"),
      //     text: "防曬首選",
      //     price: 100,
      //   },
      //   {
      //     name: "漂亮的耳環",
      //     img: require("../assets/img/accessory-2.png"),
      //     text: "異國風味好夥伴",
      //     price: 590,
      //   },
      //   {
      //     name: "求婚戒指",
      //     img: require("../assets/img/accessory-3.png"),
      //     text: "閃瞎大家雙眸",
      //     price: 100000,
      //   },
      //   {
      //     name: "沙灘墨鏡",
      //     img: require("../assets/img/accessory-4.png"),
      //     text: "給酷!!!",
      //     price: 3150,
      //   },
      //   {
      //     name: "這是什麼?手套嗎",
      //     img: require("../assets/img/accessory-5.png"),
      //     text: "手套還是警示燈???",
      //     price: 999,
      //   },
      //   {
      //     name: "線條手錶",
      //     img: require("../assets/img/accessory-6.png"),
      //     text: "點線面組成的手錶",
      //     price: 890,
      //   },
      //   {
      //     name: "硬殼皮包",
      //     img: require("../assets/img/accessory-7.png"),
      //     text: "上班族買起來",
      //     price: 5990,
      //   },
      //   {
      //     name: "S型皮帶",
      //     img: require("../assets/img/accessory-8.png"),
      //     text: "腰圍50吋請選別款",
      //     price: 100,
      //   },
      //   {
      //     name: "高級訂製珠寶項鍊",
      //     img: require("../assets/img/accessory-9.png"),
      //     text: "華麗登場",
      //     price: 99999,
      //   },
      //   {
      //     name: "貓咪肉球手套",
      //     img: require("../assets/img/accessory-10.png"),
      //     text: "是用人工皮請放心",
      //     price: 10000,
      //   },
      // ],
    };
  },
  computed: {
    productAccessory() {
      return this.$store.state.productAccessory;
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
      this.$store.commit("productAccessoryIncrement", { num: count, i: index });
    },
    decrement(data, index) {
      if (data > 1) {
        const count = data - 1;
        this.$store.commit("productAccessoryDecrement", {
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
