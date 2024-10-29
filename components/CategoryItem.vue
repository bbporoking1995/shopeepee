<template>
  <div class="container">
    <router-link
      v-for="(item, index) in Items"
      :to="item.path"
      :key="index"
      class="categoryContainer"
    >
      <div class="category">
        <div class="pic">
          <!-- <img :src="`../assets/img/${item.img}.png`" alt="" /> -->
          <img :src="item.img" alt="" />
        </div>
        <p>{{ item.name }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      Items: [
        {
          name: "服飾雜貨",
          img: require("../assets/img/item1.png"),
          path: "/shirt",
        },
        {
          name: "遊戲相關",
          img: require("../assets/img/item2.png"),
          path: "/game",
        },
        {
          name: "動物",
          img: require("../assets/img/item3.png"),
          path: "/animal",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 40%;
  margin: auto;
}

.categoryContainer {
  display: flex;
  text-decoration: none;
  margin: 10px;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
  transition: 0.3s ease;
}

.pic img {
  width: 100%;
}
p {
  color: black;
}

.category:hover {
  border: 5px solid lightblue;
}

.category:hover p {
  color: lightseagreen;
  font-weight: bold;
}
</style>
