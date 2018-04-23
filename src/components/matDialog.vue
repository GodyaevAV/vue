<template>
  <div>
    <!-- <md-dialog md-backdrop :md-active.sync="showDialog" md-cancel>
      <md-dialog-title>Preferences</md-dialog-title>
        <div style="width: 100%; height: 200px;">
         <img :src="wineItem.picture">
         <p>{{wineItem.price}}</p>
        </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('showDialog', false)">Close</md-button>
        <md-button class="md-primary">Buy</md-button>
      </md-dialog-actions>
    </md-dialog> -->
    <div class="back">
    </div>
        <div class="modalContent">
            <div class="img">
                <img :src="wineItem.picture">
            </div>
            <div class="info">
                <div class="info_tittle">{{wineItem.name}}</div>
                <div class="info_tetx">
                    <div>Color: {{wineItem.color}}</div>    
                    <div>Year: {{wineItem.year}}</div>    
                    <div>Type: {{wineItem.type}}</div>    
                    <div>City: {{wineItem.city}}</div>    
                    <div>Company: {{wineItem.company}}</div>    
                </div>
                <div class="info_price">Price: {{wineItem.price}}</div>
                <div class="info_button">
                    <button @click="$emit('close')">Close</button>
                    <button @click="$emit('buy')">Buy</button>
                </div>
            </div>
        </div>

  </div>
</template>

<script>

  export default {
    name: 'DialogCustom',
    data: () => ({
    }),
    props: ['wineItem']
}
</script>

<style scoped>
.info{
    display: flex;
    flex-direction: column;
    width: 60%;
}
.img {
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
    width: 800px;
    height: 600px;
    opacity: 1;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  .back {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.5;
      z-index: 2;
  }
</style>
