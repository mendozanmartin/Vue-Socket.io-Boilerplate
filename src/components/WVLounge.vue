<template>
  <div class="page text-center">
    <div class = "text-center bg-primary text-white navigation">
      <h1 class ="p-3"><b>WV </b>CONSOLE</h1>
    </div>
    <div class="desktopOnly">

    <h1>Welcome to the WV Lounge.</h1>
    <h3>Choose between many of our games.</h3>
    <div class="d-flex justify-content-around">
      <div class="gameContainers"></div>
      <div class="gameContainers"></div>
      <div class="gameContainers"></div>
      <div class="gameContainers"></div>
    </div>
    <div class="d-flex justify-content-end">
      <div class="featuredGame"></div>
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

}
@media only screen and (min-width: 430px) {
  .mobileOnly {
    display: none;
  }
}
.gameContainers {
  height:200px;
  width: 250px;
  background-color: #B4B2B2;
  margin-top: 20px;

}

.featuredGame {
  height:350px;
  width: 700px;
  background-color: #B4B2B2;
  margin-top: 20px;
  margin-right: 50px;
}

</style>
