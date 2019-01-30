<template>
  <div class="page text-center">
    <div class = "d-flex justify-content-between bg-primary text-white navigation">
        <h2 class ="p-2"><b>WV </b>CONSOLE</h2>
        <h3 class = "p-2">Room Number: <b>{{roomNumber}}</b></h3>
        <h3 class = "p-2">Number of Players : {{numberOfPlayers}}</h3>

    </div>
    <div class="desktopOnly">

    <h1>Welcome to the WV Lounge.</h1>
    <h3>Choose between many of our games.</h3>
    <div class="d-flex justify-content-around groupGames">
      <div to="/desktopgamepage" class="gameContainers text-center" v-bind:class = "{selected: Game1}"><h3><b>Game 1</b></h3></div>
      <div to="/desktopgamepage" class="gameContainers text-center" v-bind:class = "{selected: Game2}"><h3><b>Game 2</b></h3></div>
      <div to="/desktopgamepage" class="gameContainers text-center" v-bind:class = "{selected: Game3}"><h3><b>Game 3</b></h3></div>
      <div to="/desktopgamepage" class="gameContainers text-center" v-bind:class = "{selected: Game4}"><h3><b>Game 4</b></h3></div>
    </div>
    <div class="d-flex justify-content-center">
      <div to="/desktopgamepage" class="featuredGame" v-bind:class = "{selected: FeaturedGame1}"><h2><b>Featured Game 1</b></h2></div>
      <div to="/desktopgamepage" class="featuredGame" v-bind:class = "{selected: FeaturedGame2}"><h2><b>Featured Game 2</b></h2></div>
    </div>
  </div>
</div>

</template>
<script type="text/javascript">
import io from 'socket.io-client';
import router from '../../router';

export default {
  data() {
    return {
      socket: io('wvconsole.herokuapp.com'),
      roomNumber: window.desktopRoomNumber,
      Game1: true,
      Game2: false,
      Game3: false,
      Game4: false,
      FeaturedGame1: false,
      FeaturedGame2: false,
      numberOfPlayers: window.numberOfPlayers
    }
  },
  methods: {

  },
  mounted() {
    var numPlayers = (window.desktopRoomNumber).toString() + 'numPlayers';
    this.socket.on(numPlayers, (data) => {
      this.numberOfPlayers = window.numberOfPlayers;
    });

    var directionLounge = (this.roomNumber).toString() + 'direction';
    this.socket.on(directionLounge, (data) => {
      if (data.loungeNumber == this.roomNumber) {
        if (data.direction == "select") {
          this.FeaturedGame1 == true ? router.push('/desktopphaser') : null;
          this.FeaturedGame2 == true ? router.push('/desktopphaser') : null;
          this.Game1 == true ? router.push('/desktopphaser') : null;
          this.Game2 == true ? router.push('/desktopphaser') : null;
          this.Game3 == true ? router.push('/desktopphaser') : null;
          this.Game4 == true ? router.push('/desktopphaser') : null;


        }
        if (this.Game1 == true) {
          this.Game1 = false;
          this.Game4 = data.direction == "left" ? true : false;
          this.Game2 = data.direction == "right" ? true : false;
          this.Game1 = data.direction == "up" ? true : false;
          this.FeaturedGame1 = data.direction == "down" ? true : false;
        } else if (this.Game2 == true) {
          this.Game2 = false;
          this.Game1 = data.direction == "left" ? true : false;
          this.Game3 = data.direction == "right" ? true : false;
          this.Game2 = data.direction == "up" ? true : false;
          this.FeaturedGame1 = data.direction == "down" ? true : false;
        } else if (this.Game3 == true) {
          this.Game3 = false;
          this.Game2 = data.direction == "left" ? true : false;
          this.Game4 = data.direction == "right" ? true : false;
          this.Game3 = data.direction == "up" ? true : false;
          this.FeaturedGame2 = data.direction == "down" ? true : false;
        } else if (this.Game4 == true) {
          this.Game4 = false;
          this.Game3 = data.direction == "left" ? true : false;
          this.Game1 = data.direction == "right" ? true : false;
          this.Game4 = data.direction == "up" ? true : false;
          this.FeaturedGame2 = data.direction == "down" ? true : false;
        } else if (this.FeaturedGame1 == true) {
          this.FeaturedGame1 = false;
          this.Game4 = data.direction == "left" ? true : false;
          this.FeaturedGame2 = data.direction == "right" ? true : false;
          this.Game1 = data.direction == "up" ? true : false;
          this.FeaturedGame1 = data.direction == "down" ? true : false;
        } else if (this.FeaturedGame2 == true) {
          this.FeaturedGame2 = false;
          this.FeaturedGame1 = data.direction == "left" ? true : false;
          this.Game1 = data.direction == "right" ? true : false;
          this.Game3 = data.direction == "up" ? true : false;
          this.FeaturedGame2 = data.direction == "down" ? true : false;
        }
      }
    });
  },
  beforeMount() {

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
  padding-top: 9vw;
  margin: 3vw;
}

.groupGames {
  margin-left: 70px;
  margin-right: 70px;
}
button {
  margin: 3vw;
}
.selected {
  box-shadow: 0.75vw 0.75vw grey;
}

h1, h2, h3 {
  font-weight: normal;
}


</style>
