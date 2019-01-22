<template>
  <div class="page text-center">
    <div class = "text-center bg-primary text-white navigation">
      <h1 class ="p-3"><b>WV </b>CONSOLE</h1>
    </div>
    <div class="desktopOnly">

    <h1>Welcome to the WV Lounge.</h1>
    <h3>Choose between many of our games.</h3>
    <div class="d-flex justify-content-around groupGames">
      <div class="gameContainers text-center"><h3><b>Game 1</b></h3></div>
      <div class="gameContainers text-center"><h3><b>Game 2</b></h3></div>
      <div class="gameContainers text-center"><h3><b>Game 3</b></h3></div>
      <div class="gameContainers text-center"><h3><b>Game 4</b></h3></div>
    </div>
    <div class="d-flex justify-content-end">
      <div class="featuredGame"><h2><b>Featured Game</b></h2></div>
    </div>

  </div>


</div>

</template>
<script type="text/javascript">
import io from 'socket.io-client';
import router from '../router';

export default {
  data() {
    return {
      socket: io('wvconsole.herokuapp.com'),
      roomNumber: window.desktopRoomNumber

    }
  },
  methods: {

  },
  mounted() {
    this.socket.on(this.roomNumber, (data) => {
      if (data.loungeNumber == this.roomNumber) {
        console.log(data.direction);
      }
    });
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  text-align: center;
}
.gameContainers {
  height:13vw;
  width: 16vw;
  background-color: #B4B2B2;
  margin-top: 20px;
  padding-top: 5.5vw;


}
.gameContainers:focus {
  outline: 1px solid blue;
}

.featuredGame {
  height: 20vw;
  width: 35vw;
  background-color: #B4B2B2;
  margin-top: 20px;
  margin-right: 20vw;
  padding-top: 9vw;
}

.featuredGame:focus {
  outline: 1px solid blue;
}
.groupGames {
  margin-left: 70px;
  margin-right: 70px;
}
button {
  margin: 3vw;
}


</style>
