<template>
  <div>
    <router-link to="/list" class="close" tag="div"></router-link>
    <div class="back">
    </div>
        <div class="modalContent" v-if="wineItem">
            <div class="img">
                <img :src="wineItem.picture">
            </div>
            <div class="info">
                <div class="info_title">{{wineItem.name}}</div>
                <div class="info_text">
                    <div>Color: {{wineItem.color}}</div>
                    <div>Year: {{wineItem.year}}</div>
                    <div>Type: {{wineItem.type}}</div>
                    <div>City: {{wineItem.city}}</div>
                    <div>Company: {{wineItem.company}}</div>
                </div>
                <div class="info_price">Price: {{wineItem.price | pricer}}
                <div class="info_button">
                    <button @click="buy">BUY</button>
                </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
import changePrice from '../service/WineService.ts'

export default {
  name: 'DialogCustom',
  data: () => ({
  }),
  filters: {
    pricer: function (value) {
      return `${changePrice(value)}$`
    }
  },
  computed: {
    wineItem () {
      return this.$store.getters.getOne(Number(this.$route.params.id))
    }
  },
  methods: {
    buy () {
      this.$store.dispatch('buy', this.wineItem)
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped>
.info{
    display: flex;
    flex-direction: column;
    width: 60%;
}
.info_title {
    font-size: 48px;
    font-family: Awesome;
    color: rgb(58, 0, 0);
    line-height: 48px;
    margin-top: 15px;
    margin-bottom: 15px;
}
.info_text {
    font-family: Awesome;
    color: rgb(58, 0, 0);
    font-size: 24px;
}
.info_text > div {
        margin: 5px;
}
.info_price {
    font-size: 32px;
    height: 32px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.img {
    margin-top: 15px;
    width: 40%;
    height: 100%;
}

  .modalContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 3;
    background-color: white;
    width: 620px;
    height: auto;
    opacity: 1;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    padding-bottom: 15px;
    padding-left: 20px;
  }
  .back {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: 2;
    display: flex;
    padding-left: 93%;
    padding-top: 10px;
}
.close{
    position: absolute;
    top: 5px;
    right: 5px;
    width: 55px;
    height: 55px;
    cursor: pointer;
    border: 4px solid white;
    border-radius: 50%;
    color: white;
    z-index: 3;
}

.close:before,
.close:after {
    content: "";
    position: absolute;
    top: 21px;
    left: 10px;
    width: 26px;
    height: 4px;
    background: white ;
}

.close:before {
    webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.close:after {
    webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.info_button {
    width: 80px;
    height: 32px;
    display: inline-block;
}
.info_button > button {
    width: 100%;
    height: 100%;
    background-color: rgb(58, 0, 0);
    color: white;
    border: 0;
    margin-left: 30px;
    font-size: 22px;
}
</style>
