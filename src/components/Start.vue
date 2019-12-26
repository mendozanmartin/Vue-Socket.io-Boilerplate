<template lang="html">
  <div class="page">

</div>

</template>
<script type="text/javascript">
import io from 'socket.io-client';

  export default {
    name: 'Start',
    data() {
      return {
        idNumber: Math.floor(Math.random()*999999 + 100000), //desktop room number generation
        socket : io()
      }
    },
    methods: {
      desktopJoin: function() {
        this.socket.emit('desktopJoin', { //sends signal to server.js to for desktop client to join a room
          idNumber: this.idNumber
        });
      
      }
    },
      mounted() {
      }
  }
</script>


<style lang="css" scoped>


</style>
