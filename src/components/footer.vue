<template>
  <div class="bottomBlock">
    <div>bottles: {{totalAndBottles.bottles}}</div>
    <div>total: {{totalAndBottles.total}}</div>
    <div class="button">
        <button class="button_btnPay" @click="$emit('pay')">pay</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomPanel',
  computed: {
    totalAndBottles () {
      return this.$store.getters.totalAndBottles
    }
  }
}
</script>

<style scoped>
.button {
    width: 110px;
    height: 40px;
}
.button_btnPay {
    background-color: rgb(142, 4, 2);
    width: 100%;
    height: 100%;
    color: white;
    font-size: 24px;
    cursor: pointer;
}
.bottomBlock {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 57%;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    height: 60px;
    background-color: rgb(193, 187, 175);
    font-family: Awesome;
    font-size: 24px;
}
</style>
