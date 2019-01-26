<template lang="html">
  <div class="page text-center">

  <div class = "text-center bg-primary text-white navigation shadow-lg">
    <h1 class ="p-3"><b>WV </b>CONSOLE</h1>
  </div>
  <div class="mobileOnly">
    <h4 class = "mb-5">You are now in the game!</h4>
    <div class="d-flex justify-content-center mt-5">
      <img src="../../assets/arrow_up.png" style = "cursor:pointer"  @touchstart="start('up')" @touchend="stop('up')" onContextMenu="return false;">
    </div>
    <div class="d-flex justify-content-center">
      <img src="../../assets/arrow_left.png" class = "mr-2" style = "cursor:pointer" @touchstart="start('left')" @touchend="stop('left')" onContextMenu="return false;">
      <button type="button" name="button" class = "btn btn-dark p-3"  v-on:click="remoteControl('select')">Select</button>
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
      socket: io('wvconsole.herokuapp.com'),
      interval:false,
    }
  },
  methods: {
    remoteControl: function(direction) {
      if (direction == 'select') {
        router.push('mobilephaser');
      }

    //window.mobileRoomNumber contains the room this device is in
    this.socket.emit('gameControls', {
      direction: direction,
      loungeNumber: this.loungeNumber,
    });
  },

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


button {
  margin: 3vw;
}

</style>
