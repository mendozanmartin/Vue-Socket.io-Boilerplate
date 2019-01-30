<template lang="html">
  <div class="page text-center">

  <div class = "text-center bg-primary text-white navigation shadow-lg">
    <h2 class ="p-2"><b>WV </b>CONSOLE</h2>
  </div>
  <div class="mobileOnly">
    <h4 class = "mb-5">You are now in the game!</h4>
    <div class="d-flex justify-content-center mt-5">
      <img src="../../assets/arrow_up.png" style = "cursor:pointer"  @touchstart="start('up')" @touchend="stop('up')" onContextMenu="return false;">
    </div>
    <div class="d-flex justify-content-center">
      <img src="../../assets/arrow_left.png" class = "mr-2" style = "cursor:pointer" @touchstart="start('left')" @touchend="stop('left')" onContextMenu="return false;">
      <button type="button" name="button" class = "btn btn-dark p-3">Select</button>
      <img src="../../assets/arrow_right.png" class = "ml-2" style = "cursor:pointer" @touchstart="start('right')" @touchend="stop('right')" onContextMenu="return false;">
    </div>
    <div class="d-flex justify-content-center ">
      <img src="../../assets/arrow_down.png" style = "cursor:pointer" @touchstart="start('down')" @touchend="stop('down')" onContextMenu="return false;">
    </div>
  </div>
</div>
</template>

<script>
import io from 'socket.io-client';
import router from '../../router';

export default {
  name: "MobileLounge",
  data() {
    return {
      loungeNumber: window.mobileRoomNumber,
      socket: io('localhost:5000'),
      interval:false,
    }
  },
  methods: {
    start: function(direction) {

          this.socket.emit('gameControls', {
            direction: direction,
            loungeNumber: this.loungeNumber,
          });
  },

    stop: function(direction) {
      clearInterval(this.interval);
    this.interval = false;
    this.socket.emit('gameControls', {
      direction: null,
      loungeNumber: this.loungeNumber,
    });

    }
  }
}
</script>

<style lang="css" scoped>

.page {
  width: 100%;
  text-align: center;
}

@media only screen and (max-width: 430px){
  .desktopOnly {
    display: none;
    width: 100%;
  }
  img {
    height: 80px;
    width: 80px;
  }


}

h1, h2, h3 {
  font-weight: normal;
}
button {
  margin: 3vw;
}

</style>
