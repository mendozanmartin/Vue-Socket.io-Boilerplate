<template >
  <div class="page text-center">

    <div class = "text-center bg-primary text-white">
      <h1 class ="p-3"><b>WV </b>CONSOLE</h1>
    </div>

<div class="desktopOnly">

  <h3>Welcome to the <b>VUE</b> CONSOLE directory!</h3>
  <p>Please enter the code you see below into your mobile device. You will be able to connect up to 4 players!</p>
  </div>

  <div class="mobileOnly">
    <p>Please enter the code you see on the Desktop/TV screen</p>

    <div class="container">
      <input type="text" name="" value="" placeholder="__ __ __ __ __ __">
    </div>

    <div class="numberPad">
      <div class="row pt-4">
        <div class="col-4">
          <h3>1</h3>
        </div>
        <div class="col-4">
          <h3>2</h3>
        </div>
        <div class="col-4">
          <h3>3</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h3>4</h3>
        </div>
        <div class="col-4">
          <h3>5</h3>
        </div>
        <div class="col-4">
          <h3>6</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h3>7</h3>
        </div>
        <div class="col-4">
          <h3>8</h3>
        </div>
        <div class="col-4">
          <h3>9</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h4>Clear</h4>
        </div>
        <div class="col-4">
          <h3>0</h3>
        </div>
        <div class="col-4">
          <h4>Enter</h4>
        </div>
      </div>
    </div>


  </div>

</div>

</template>



<style scoped>
h1 {
  font-weight: normal;
}


@media only screen and (max-width: 430px){
  .desktopOnly {
    display: none;
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
h3 {

}

</style>
