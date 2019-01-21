<template >
  <div class="page">

    <div class = "text-center bg-primary text-white">
      <h1 class =""><b>WV </b>CONSOLE</h1>
    </div>

<div class="desktopOnly">

  <h2>Welcome to the <b>VUE</b> CONSOLE directory!</h2>
  <p>Please enter the code you see below into your mobile device. You will be able to connect up to 4 players!</p>
  </div>

  <div class="mobileOnly">

    <p>Hello</p>


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

</style>
