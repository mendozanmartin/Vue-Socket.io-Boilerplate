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

  <div class="mobileOnly">
    <h4 class = "mb-5">Press the arrow keys to navigate on the Desktop/TV screen!</h4>
    <div class="d-flex justify-content-center mt-5">
      <img src="../assets/arrow_up.png">
    </div>
    <div class="d-flex justify-content-center">
      <img src="../assets/arrow_left.png" class = "mr-2">
      <button type="button" name="button" class = "btn btn-dark">Select</button>
      <img src="../assets/arrow_right.png" class = "ml-2">
    </div>
    <div class="d-flex justify-content-center ">
      <img src="../assets/arrow_down.png">
    </div>
  </div>


</div>

</template>

<style scoped>
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
@media only screen and (min-width: 430px) {
  .mobileOnly {
    display: none;
  }

}
.gameContainers {
  height:13vw;
  width: 16vw;
  background-color: #B4B2B2;
  margin-top: 20px;
  padding-top: 5.5vw;

}
.gameContainers:hover {
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

.featuredGame:hover {
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
