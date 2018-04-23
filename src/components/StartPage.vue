<template>
  <div class="block">
    <div>
      <p class="tittle">
        Discover wine
      </p>
      <p class="text">
        luxury wine at affordable prices
      </p>
      <router-link class="btnCatalog" tag="button" to="/list">catalog</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.btnCatalog {
  width: 120px;
  height: 40px;
  font-size: 20px;
  font-family: Awesome;
  background-color: rgb(123, 4, 0);
  color: rgb(246, 255, 255);
}
.tittle {
  font-family: Awesome;
  font-size: 66px;
  color: rgb(58, 0, 0);
  margin: 0;
}
.text {
  font-family: Awesome;
  font-size: 28px;
  color: rgb(132, 132, 132);
  font-style: italic;
  margin: 0 0 30px 0;
}

</style>
