<template lang="html">
  <div class="page text-center">

  <div class = "text-center bg-primary text-white navigation">
    <h1 class ="p-3"><b>WV </b>CONSOLE</h1>
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

<script>
  import io from 'socket.io-client';
  import router from '../../router';

  export default {
    name: 'Directory',
    data() {
      return {
        socket : io('wvconsole.herokuapp.com'),
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
          idNumber: this.number
        });
        console.log(this.number);
        window.mobileRoomNumber = this.number;

      }
    },
      mounted() {
        this.socket.on("sendID", (data) => {
          if (data.idNumber == window.mobileRoomNumber) {
            router.push('mobilelounge');
          }
        });

      }
  }

</script>

<style lang="css" scoped>
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
