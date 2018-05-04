<template>
<div>
  <router-view></router-view>
  <div v-if="wineArray" class="blocks">
    <wineItem v-for="wine in wineArray" :item="wine" :key="wine.index"/>
  </div>
    <bottomPanel v-if="purchases" @pay="goToPay"></bottomPanel>
</div>
</template>

<script>
import wineItem from './WineItem'
import bottomPanel from './footer'

export default {
  name: 'ListPage',
  components: {
    wineItem, bottomPanel
  },
  data () {
    return {
      purchases: [],
      total: 0,
      bottles: 0
    }
  },
  computed: {
    wineArray () {
      return this.$store.getters.getAll
    }
  },
  methods: {
    goToPay () {
      this.save()
      this.$router.push({path: 'card'})
    },
    save () {
      localStorage.purchases = JSON.stringify(this.$store.state.card)
    }
  },
  beforeMount: function () {
    if (localStorage.getItem('purchases')) {
      this.$store.dispatch('setCard', localStorage.purchases ? JSON.parse(localStorage.purchases) : [])
    }
  },
  beforeDestroy: function () {
    this.save()
  }

}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.blocks{
  width: 100%;
  display: flex;
  height: calc(100vh - 60px);
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  max-width: 1080px;
  padding-bottom: 20px;
  }
</style>
