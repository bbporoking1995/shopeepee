import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productAccessory: [
      {
        name: "彩色棒球帽",
        img: require("../assets/img/accessory-1.png"),
        text: "防曬首選",
        price: 100,
        number: 1,
      },
      {
        name: "漂亮的耳環",
        img: require("../assets/img/accessory-2.png"),
        text: "異國風味好夥伴",
        price: 590,
        number: 1,
      },
      {
        name: "求婚戒指",
        img: require("../assets/img/accessory-3.png"),
        text: "閃瞎大家雙眸",
        price: 100000,
        number: 1,
      },
      {
        name: "沙灘墨鏡",
        img: require("../assets/img/accessory-4.png"),
        text: "給酷!!!",
        price: 3150,
        number: 1,
      },
      {
        name: "這是什麼?手套嗎",
        img: require("../assets/img/accessory-5.png"),
        text: "手套還是警示燈???",
        price: 999,
        number: 1,
      },
      {
        name: "線條手錶",
        img: require("../assets/img/accessory-6.png"),
        text: "點線面組成的手錶",
        price: 890,
        number: 1,
      },
      {
        name: "硬殼皮包",
        img: require("../assets/img/accessory-7.png"),
        text: "上班族買起來",
        price: 5990,
        number: 1,
      },
      {
        name: "S型皮帶",
        img: require("../assets/img/accessory-8.png"),
        text: "腰圍50吋請選別款",
        price: 100,
        number: 1,
      },
      {
        name: "高級訂製珠寶項鍊",
        img: require("../assets/img/accessory-9.png"),
        text: "華麗登場",
        price: 99999,
        number: 1,
      },
      {
        name: "貓咪肉球手套",
        img: require("../assets/img/accessory-10.png"),
        text: "是用人工皮請放心",
        price: 10000,
        number: 1,
      },
    ],
    productCloth: [
      {
        name: "特價標籤的上衣",
        img: require("../assets/img/t-shirt-1.png"),
        text: "買到賺到",
        price: 1,
        number: 1,
      },
      {
        name: "乾淨整潔的上衣",
        img: require("../assets/img/t-shirt-2.png"),
        text: "100%殺菌",
        price: 999,
        number: 1,
      },
      {
        name: "假裝很新的上衣",
        img: require("../assets/img/t-shirt-3.png"),
        text: "二手的所以需要假裝",
        price: 50,
        number: 1,
      },
      {
        name: "黑的發亮的上衣",
        img: require("../assets/img/t-shirt-4.png"),
        text: "黑黑黑黑黑黑黑",
        price: 550,
        number: 1,
      },
    ],
    productGameCategory: [
      {
        name: "NDS",
        img: require("../assets/img/game-1.png"),
        text: "雙螢幕始祖?",
        price: 2000,
        number: 1,
      },
      {
        name: "電腦螢幕",
        img: require("../assets/img/game-2.png"),
        text: "宅宅必備",
        price: 3990,
        number: 1,
      },
      {
        name: "lPhone 256GB",
        img: require("../assets/img/game-3.png"),
        text: "隨時都可以玩",
        price: 29999,
        number: 1,
      },
      {
        name: "彈珠臺",
        img: require("../assets/img/game-4.png"),
        text: "童年時光",
        price: 399,
        number: 1,
      },
      {
        name: "推推樂",
        img: require("../assets/img/game-5.png"),
        text: "一局結束笑到長腹肌",
        price: 20,
        number: 1,
      },
    ],
    productPant: [
      {
        name: "視覺+10kg的褲子",
        img: require("../assets/img/pant-1.png"),
        text: "棉花糖先略過",
        price: 9990,
        number: 1,
      },
      {
        name: "直的要命褲子",
        img: require("../assets/img/pant-2.png"),
        text: "鳥仔腳首選",
        price: 15000,
        number: 1,
      },
      {
        name: "很少人要買的褲子",
        img: require("../assets/img/pant-3.png"),
        text: "擁有獨特眼光",
        price: 150,
        number: 1,
      },
    ],
    productSkirt: [
      {
        name: "迷你百褶裙",
        img: require("../assets/img/skirt-1.png"),
        text: "很像一串香蕉",
        price: 3000,
        number: 1,
      },
      {
        name: "很多釦子的A字裙",
        img: require("../assets/img/skirt-2.png"),
        text: "粉色台燈燈罩",
        price: 1500,
        number: 1,
      },
      {
        name: "中規中矩深色長裙",
        img: require("../assets/img/skirt-3.png"),
        text: "常用首選",
        price: 2990,
        number: 1,
      },
      {
        name: "寬版蛋糕裙",
        img: require("../assets/img/skirt-4.png"),
        text: "假裝101",
        price: 5000,
        number: 1,
      },
      {
        name: "夢幻公主蛋糕裙",
        img: require("../assets/img/skirt-5.png"),
        text: "假裝洗車刷",
        price: 600,
        number: 1,
      },
    ],
    productBad: [
      {
        name: "恐怖噩夢貓",
        img: require("../assets/img/animal-1.png"),
        text: "不好說",
        price: 99999,
        number: 1,
      },
      {
        name: "小松鼠",
        img: require("../assets/img/animal-2.png"),
        text: "吱吱喳 吱吱喳 吱喳",
        price: 5,
        number: 1,
      },
      {
        name: "粉紅貓頭鷹",
        img: require("../assets/img/animal-3.png"),
        text: "會飛的貓咪",
        price: 6666,
        number: 1,
      },
    ],
    productFriendly: [
      {
        name: "大金剛",
        img: require("../assets/img/animal-4.png"),
        text: "面惡心善幫你抓背",
        price: 1111,
        number: 1,
      },
      {
        name: "鹿鹿要去哪一路",
        img: require("../assets/img/animal-5.png"),
        text: "不知道什麼品種",
        price: 500,
        number: 1,
      },
      {
        name: "水豚 (頭上無橘子)",
        img: require("../assets/img/animal-6.png"),
        text: "優惠您1元",
        price: 2999,
        number: 1,
      },
      {
        name: "真。北極熊",
        img: require("../assets/img/animal-7.png"),
        text: "不是白化棕熊 已查證",
        price: 99999999,
        number: 1,
      },
    ],
    card: [],
    userId: "",
  },
  getters: {},
  mutations: {
    add_card: (state, data) => {
      state.card.push(data);
      console.log("123", state.card);
    },
    User(state, status) {
      state.userId = status;
    },
    productAccessoryIncrement(state, data) {
      state.productAccessory[data.i].number = data.num;
    },
    productAccessoryDecrement(state, data) {
      state.productAccessory[data.i].number = data.num;
    },
    productClothIncrement(state, data) {
      state.productCloth[data.i].number = data.num;
    },
    productClothDecrement(state, data) {
      state.productCloth[data.i].number = data.num;
    },
    productGameCategoryIncrement(state, data) {
      state.productGameCategory[data.i].number = data.num;
    },
    productGameCategoryDecrement(state, data) {
      state.productGameCategory[data.i].number = data.num;
    },
    productPantIncrement(state, data) {
      state.productPant[data.i].number = data.num;
    },
    productPantDecrement(state, data) {
      state.productPant[data.i].number = data.num;
    },
    productSkirtIncrement(state, data) {
      state.productSkirt[data.i].number = data.num;
    },
    productSkirtDecrement(state, data) {
      state.productSkirt[data.i].number = data.num;
    },
    productBadIncrement(state, data) {
      state.productBad[data.i].number = data.num;
    },
    productBadDecrement(state, data) {
      state.productBad[data.i].number = data.num;
    },
    productFriendlyIncrement(state, data) {
      state.productFriendly[data.i].number = data.num;
    },
    productFriendlyDecrement(state, data) {
      state.productFriendly[data.i].number = data.num;
    },
  },
  actions: {
    updateId(context, status) {
      context.commit("User", status);
    },
  },
  modules: {},
});
