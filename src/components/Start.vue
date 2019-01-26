<template lang="html">
  <div class="page">

<div>

  <div class="title mobileOnly">
  <h1>Welcome to the <b>WV</b> Console!</h1>
  </div>

  <div class="title desktopOnly">
  <h1>Welcome to the <b>WV</b> Console!</h1>
  </div>

  <div class="text-center">
    <router-link to="/desktopdirectory" v-on:click.native="desktopJoin" class = " desktopOnly animated pulse infinite  btn btn-dark br-5" enter-active-class= "animated infinite bounce">Start</router-link>
    <router-link to="/mobiledirectory" class = "mobileOnly animated pulse infinite  btn btn-primary br-5" enter-active-class= "animated infinite bounce">Start</router-link>
  </div>

  <div class="text-center">
    <h2>Developed by</h2>
    <img src = "../assets/wvlogo.png">
  </div>
</div>
</div>

</template>
<script type="text/javascript">
import io from 'socket.io-client';

  export default {
    name: 'Start',
    data() {
      return {
        idNumber: Math.floor(Math.random()*999999 + 100000),
        socket : io('wvconsole.herokuapp.com')
      }
    },
    methods: {
      desktopJoin: function() {
        this.socket.emit('desktopJoin', {
          idNumber: this.idNumber
        });
        window.desktopRoomNumber = this.idNumber;
        console.log(window.desktopRoomNumber);
      }
    },
      mounted() {
      }
  }
</script>


<style lang="css" scoped>

@media only screen and (max-width: 430px){
  .desktopOnly {
    display: none;
  }
  .title {
    text-align: center;
    width: 100%;
    padding:10px;
    margin-bottom: 30px;
  }


}
@media only screen and (min-width: 430px) {
  .mobileOnly {
    display: none;
  }

  .title {
    text-align: center;
    width: 100%;
    padding:10px;
    margin-top: 10%;
  }
}

.row {
  margin: 0px;
}


.page {
  width: 100%;
  background-color: #7c93dd;
  height: 100%;
  }

.btn {
  width: 150px;
  height: 150px;
  font-size: 50px;
  border-radius: 75px;
  padding-top: 30px;
}
.text-center {
  margin-bottom: 30px;
}
img {
  height: 75px;
  width: auto;
}


</style>
