<template>
  <div class="wineBlock">
    <div class="image">
        <img :src="item.picture" width="140px" height="128px" @click="openDialog">
        <span>{{count}}</span>
    </div>
    <div class="tittle">
        <div class="tittle_name">{{item.name}}</div>
        <div class="tittle_price">{{item.price | pricer}}</div>
    </div>
    <div class="year">
        Year: {{item.year}}
    </div>
    <div class="button">
        <button class="button_btn" @click="buy">BUY</button>
    </div>
  </div>
</template>

<script>
import DialogCustom from './matDialog'
import changePrice from '../service/WineService.ts'

export default {
  name: 'wineItem',
  components: { DialogCustom },
  props: ['item'],
  data: function () {
    return {
      showInfo: false
    }
  },
  computed: {
    count () {
      return this.$store.getters.getCountByIndex(this.item.index)
    }
  },
  filters: {
    pricer: function (value) {
      return `${changePrice(value)}$`
    }
  },
  methods: {
    openDialog () {
      this.$router.push(`/list/${this.item.index}`)
    },
    buy () {
      this.$store.dispatch('buy', this.item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.45s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.wineBlock {
  width: calc((100% / 3) - 60px);
  height: calc((100vh / 3) - 10px);
  box-sizing: border-box;
  margin: 20px 30px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  border: solid 0.1px rgb(189, 40, 20);
}
.image {
  margin: 10px;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
}

.year {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
  font-size: 15px;
}
.button {
  width: 90%;
  height: 40px;
  margin-bottom: 10px;
}
.button_btn {
  width: 100%;
  height: 100%;
  background-color: rgb(189, 40, 20);
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
}

.tittle {
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  height: 12%;
}
.tittle_name {
  width: 60%;
  color: rgb(189, 40, 20);
  font-family: Awesome;
}
.tittle_price {
  text-align: right;
  font-size: 28px;
  width: 40%;
}
@media (max-width: 1680px) {
  .tittle {
    font-size: 17px;
  }
  .tittle_price {
    font-size: 24px;
  }
}
@media (max-width: 1500px) {
  .tittle {
    font-size: 15px;
  }
  .tittle_price {
    font-size: 18px;
  }
}
</style>
