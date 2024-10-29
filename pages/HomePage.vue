<template>
  <div class="home">
    <CarouselItem />
    <CategoryItem />
    <div class="main-production">
      <div class="title">
        <h3>猜你會喜歡</h3>
        <el-button @click="refresh" type="danger" round>推薦別的</el-button>
      </div>
      <el-row>
        <el-col>
          <el-card v-for="(item, index) in hot" :key="index">
            <div class="image">
              <img :src="item.img" />
            </div>
            <div class="productContainer">
              <h3>{{ item.name }}</h3>
              <div class="bottom clearfix">
                <span class="location">{{ item.text }} <br /></span>

                <el-button
                  v-if="
                    item === hot[0] ||
                    item === hot[1] ||
                    item === hot[3] ||
                    item === hot[4]
                  "
                  type="success"
                  class="button"
                  @click="goShirt"
                  >前往</el-button
                >
                <el-button
                  v-if="item === hot[2]"
                  type="success"
                  class="button"
                  @click="goGame"
                  >前往</el-button
                >
                <el-button
                  v-if="item === hot[5] || item === hot[6]"
                  type="success"
                  class="button"
                  @click="goAnimal"
                  >前往</el-button
                >
                <span class="price">${{ item.price }} </span>
                <br />
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import CarouselItem from "../components/CarouselItem.vue";
import CategoryItem from "../components/CategoryItem";

export default {
  components: { CarouselItem, CategoryItem },
  data() {
    return {
      hot: [],
    };
  },
  computed: {
    productAccessory() {
      return this.$store.state.productAccessory;
    },
    productCloth() {
      return this.$store.state.productCloth;
    },
    productGameCategory() {
      return this.$store.state.productGameCategory;
    },
    productPant() {
      return this.$store.state.productPant;
    },
    productSkirt() {
      return this.$store.state.productSkirt;
    },
    productBad() {
      return this.$store.state.productBad;
    },
    productFriendly() {
      return this.$store.state.productFriendly;
    },
    getId() {
      return this.$store.state.userId;
    },
  },
  watch: {},
  created() {
    this.random();
  },
  mounted() {},
  methods: {
    goLogin() {
      return this.$router.push({ name: "login" });
    },
    goShirt() {
      return this.$router.push({ name: "shirt" });
    },
    goGame() {
      return this.$router.push({ name: "game" });
    },
    goAnimal() {
      return this.$router.push({ name: "animal" });
    },

    random() {
      Object.entries(this.$store.state).forEach((item) => {
        if (item[0] !== "card" && item[0] !== "userId") {
          const index = Math.floor(Math.random() * item[1].length);
          this.hot.push(item[1][index]);
        }
      });
    },
    refresh() {
      this.$router.go(0);
    },
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* .product {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 300px;
  justify-content: center;
  border: 1px solid orangered;
}
.productItem {
  margin: 20px;
  text-align: center;
} */

.main-production {
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  color: white;
  letter-spacing: 1rem;
  text-shadow: -2px 0px 1px orangered, 0px 2px 1px orangered,
    2px 0px 1px orangered, 0px -2px 1px orangered;
}

.el-row {
  display: flex;
  justify-content: center;
}
.el-col {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
}

.el-card {
  display: flex;
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
