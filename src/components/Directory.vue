<template >
  <div class="page text-center">

    <div class = "text-center bg-primary text-white navigation">
      <h1 class ="p-3"><b>WV </b>CONSOLE</h1>
    </div>

<div class="desktopOnly">

  <h2>Welcome to the <b>VUE</b> CONSOLE directory!</h2>
  <p>Please enter the code you see below into your mobile device. You will be able to connect up to 4 players!</p>

  <div class="container">
    <div class="idNumber">
      <h1><b>Your ID#:</b></h1>
      <h1 id= "idNumber"></h1>
    </div>
  </div>




  </div>

  <div class="mobileOnly">
    <p>Please enter the code you see on the Desktop/TV screen</p>

    <div class="container">
      <input type="text" name="" value="" placeholder="__ __ __ __ __ __" v-model="number" >
    </div>

    <div class="numberPad">
      <div class="row pt-4">
        <div class="col-4">
          <h3 v-on:click="addNumber(1)">1</h3>
        </div>
        <div class="col-4">
          <h3 v-on:click="addNumber(2)">2</h3>
        </div>
        <div class="col-4">
          <h3 v-on:click="addNumber(3)">3</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h3 v-on:click="addNumber(4)">4</h3>
        </div>
        <div class="col-4">
          <h3 v-on:click="addNumber(5)">5</h3>
        </div>
        <div class="col-4">
          <h3 v-on:click="addNumber(6)">6</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h3 v-on:click="addNumber(7)">7</h3>
        </div>
        <div class="col-4">
          <h3 v-on:click="addNumber(8)">8</h3>
        </div>
        <div class="col-4">
          <h3 v-on:click="addNumber(9)">9</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h4 v-on:click="clearForm">Clear</h4>
        </div>
        <div class="col-4">
          <h3 v-on:click="addNumber(0)">0</h3>
        </div>
        <div class="col-4">
          <h4 v-on:click="submitId">Enter</h4>
        </div>
      </div>
    </div>


  </div>

</div>

</template>

<script type="text/javascript">
import io from 'socket.io-client';
import router from '../router';
import Start from './Start'

export default {
  name: 'Directory',
  components: {
    Start
  },
  data() {
    return {
      socket : io('localhost:5000'),
      number: ''

    }
  },

  methods: {
    addNumber: function(numberPassed) {
      this.number += numberPassed;
    },
    clearForm: function() {
      this.number = '';
    },
    submitId: function() {
      this.socket.emit('sendID', {
        idNumber: this.number,
        userId: document.getElementById('idNumber').innerHTML
      });
    }
  },
    mounted() {
      this.socket.on('displayRoom', (data) => {
        document.getElementById('idNumber').innerHTML = data.idNumber;
      });
      this.socket.on('enterLounge', (data) => {
        if (data.userId == this.number) {
          router.push('WVLounge');
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
}
p {
  font-size: 21px;
  margin: 30px;
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
