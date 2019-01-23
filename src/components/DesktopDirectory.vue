<template >
  <div class="page text-center">

    <div class = "text-center bg-primary text-white navigation shadow-lg">
      <h1 class ="p-3"><b>WV </b>CONSOLE</h1>
    </div>

<div class="desktopOnly">

  <h2 class = "mt-4">Welcome to the <b>WV</b> CONSOLE directory!</h2>
  <p>Please enter the code you see below into your mobile device. You will be able to connect up to 4 players!</p>

  <div class="container">
    <div class="idNumber">
      <h1><b>Your ID#:</b></h1>
      <h1>{{roomNumber}}</h1>
    </div>
  </div>




  </div>



</div>

</template>

<script type="text/javascript">
import io from 'socket.io-client';
import router from '../router';

export default {
  name: 'Directory',
  data() {
    return {
      socket : io('wvconsole.herokuapp.com'),
      number: '',
      roomNumber: window.desktopRoomNumber

    }
  },

    mounted() {
      this.socket.on("sendID", (data) => {
        if (data.idNumber == window.desktopRoomNumber) {
          router.push('desktoplounge');
        }
      });

    }
}
</script>


<style scoped>
h1 {
  font-weight: normal;
}


@media only screen and (max-width: 430px){
  .desktopOnly {
    display: none;
  }
  .navigation {
    margin-bottom: -30px;
  }
}
@media only screen and (min-width: 430px) {
  .mobileOnly {
    display: none;
  }
}
.page {
  width: 100%;
  height:100%;
}
p {
  font-size: 21px;
  margin: 25px;
  margin-top: 35px;
}

input {
  height: 50px;
  font-size: 35px;
  width: 250px;
  display: inline-block;
  text-align: center;
  margin-top: -20px;
}

.container {
  text-align: center;
}

.numberPad {
  height: 300px;
  width: 250px;
  background-color: white;
  box-shadow: 10px 0px 10px 0px grey;
  margin: auto;
  margin-top: 25px;
}

.row {
  padding-top: 15px;
}
h4 {
  margin-top: 7px;
}

.idNumber {
  height: 250px;
  width: 500px;
  background-color: white;
  box-shadow: 10px 0px 10px 0px grey;
  margin: auto;
  margin-top: 25px;
  padding: 50px;
}



</style>
