<template>
  <div>
    <button @click="goBack">Back</button>
    <div class="card" v-if="wines">
      <div class="wineItem" v-for="(wine) in wines2" :key="wine.index">
          {{wine.name}}
          <button @click="changeCount(false, wine.index)">-</button>
          {{wine.count}}
          <button @click="changeCount(true, wine.index)">+</button>
      </div>
    </div>
    <div v-if="total">
       Total: {{total}}$
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  data: function () {
    return {
      wines: []
    }
  },
  computed: {
    total () {
      return this.$store.getters.totalAndBottles.total
    },
    wines2 () {
      this.createCard()
      return this.wines
    }
  },
  created: function () {
    if (localStorage.getItem('purchases')) {
      this.$store.dispatch('setCard', localStorage.purchases ? JSON.parse(localStorage.purchases) : [])
    }
    this.createCard()
  },
  methods: {
    createCard () {
      this.$store.getters.getCard.map(item => {
        let flag = false
        for (let i = 0; i < this.wines.length; i++) {
          if (this.wines[i].name === item.name) {
            flag = true
          }
        }
        if (!flag) {
          this.wines.push(item)
        }
      })
      this.wines.map(item => {
        item.count = this.$store.getters.getCountByIndex(item.index)
      })
    },
    goBack () {
      var card = []
      this.wines.map(item => {
        for (let i = 0; i < item.count; i++) {
          card.push(item)
        }
      })
      this.$store.dispatch('setCard', card)
      this.$router.push({name: 'ListPage'})
    },
    changeCount (flag, index) {
      if (flag) {
        this.$store.dispatch('changeCount', {index: index, action: true})
      } else {
        this.$store.dispatch('changeCount', {index: index, action: false})
      }
    }
  }
}
</script>

<style scoped>
</style>
