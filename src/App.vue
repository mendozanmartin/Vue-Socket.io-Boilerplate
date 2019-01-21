<template>
  <div>
          <transition name = "router-anim" enter-active-class="animated fadeIn"  leave-active-class="animate fadeOut">
          <router-view/>
        </transition>
  </div>
</template>


<style>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css');
@import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.1');
@import url('https://fonts.googleapis.com/css?family=Lato:400,700,900');


body {
  background: rgb(233,233,233);
  font-family: 'Lato', sans-serif
}

.page {
  position: fixed;
  width: inherit;
}
.fadeIn {
  animation-delay: 0.7s;
  animation-duration: 0.75s;
}

.fadeOut {
  animation-delay: 0.1s;
  animation-duration: 0.75s;
}

</style>
