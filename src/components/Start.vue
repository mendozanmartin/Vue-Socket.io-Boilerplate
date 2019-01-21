<template lang="html">
  <div class="page">

  <div class="title">
  <h1>Welcome to the <b>VUE</b> Console!</h1>
  </div>

  <div class="title">
    <router-link to="/directory" class = "btn btn-primary br-5" enter-active-class= "animated infinite bounce">Start</router-link>
  </div>


</div>

</template>

<script>

</script>

<style lang="css" scoped>
.row {
  margin: 0px;
}

.title {
  text-align: center;
  width: 100%;
  padding:10px;
}
.page {
  width: 100%;
}

.btn {
  width: 150px;
  height: 150px;
  font-size: 50px;
  border-radius: 75px;
  padding-top: 30px;
}


</style>
