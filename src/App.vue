<template>
  <div id="app">
    <div class="leftPanel">
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import ListPage from './components/ListPage'
import DialogCustom from './components/matDialog'
import WineItem from './components/WineItem'
export default {
  name: 'App',
  components: {
    ListPage, DialogCustom, WineItem
  }
}
</script>

<style>
 @font-face {
    font-family: Awesome; /* Имя шрифта */
    src: url('./assets/fonts/fontawesome-webfont.ttf'); /* Путь к файлу со шрифтом */
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: row;
    min-width: 1366px;
  }
  .leftPanel {
    position: fixed;
    width: 43%;
    height: 100vh;
    background-image: url("./assets/img/background1.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 150ch 100%;
    min-width: 590px;
  }
  .content {
    margin-left: 43%;
    width: 57%;
    height: 100vh;
  }
  body {
    margin: 0;
  }
</style>
