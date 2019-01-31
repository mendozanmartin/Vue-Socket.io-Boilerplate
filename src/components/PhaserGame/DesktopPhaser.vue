<template lang="html">
<div class="page p-5">
  <h1 class = "text-white"><b>Demo: Collect all the items! :)</b></h1>
  <div class = "row mt-5">
    <div class="col-2"></div>
    <div id="gameContainer" class = "col-8"></div>
    <div class="col-2"></div>
  </div>


</div>
</template>

<script>
import Phaser from 'phaser'
import router from '../../router'
import io from 'socket.io-client'

export default {
  name: 'DesktopPhaser',
  data() {
    return {
      socket: io('wvconsole.herokuapp.com'),
      roomNumber: window.desktopRoomNumber

    }
  },
  methods: {
    newPage() {
      window.game.renderer.destroy();
      window.game.loop.stop();
      window.game.canvas.remove();
      window.game = null;
      router.push('');
    }
  },
  mounted() {
    // let GameConfig = {
    //   type: Phaser.CANVAS,
    //   width: 800,
    //   height: 600,
    //   physics: {
    //     default: 'arcade',
    //     arcade: {
    //       gravity: {y: 200}
    //     }
    //   },
    //   scene: {
    //     preload: preload,
    //     create: create,
    //     update: update
    //   }
    // };
    var gameLounge = (this.roomNumber).toString() + 'game';
    this.socket.on(gameLounge, (data) => {
      if (data.loungeNumber == this.roomNumber) {
        window.direction = data.direction;
      }
    });
    var GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'gameContainer',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {y:300},
        debug: false
      }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
      var score = 0;
      var scoreText;
     window.game = new Phaser.Game(GameConfig);
      function preload ()
      {
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('sky', 'assets/skies/space3.png');
     this.load.image('ground', 'assets/tilemaps/tiles/drawtiles.png');
     this.load.image('star', 'assets/sprites/mine.png'
   );
     this.load.image('bomb', 'assets/sprites/mine.png');
     this.load.spritesheet('dude',
         'assets/sprites/dude.png',
         { frameWidth: 32, frameHeight: 48 }
     );
      }
      var platforms;
      var player;
      function create ()
      {
        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup();
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
        player = this.physics.add.sprite(100, 450, 'dude');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.physics.add.collider(player, platforms);
        var stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 },
            height: 10
        });
        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
        this.physics.add.collider(stars, platforms);
        this.physics.add.overlap(player, stars, collectStar, null, this);
      }
      function update()
      {
        //keyboard movement
      //  var cursors = this.input.keyboard.createCursorKeys();

        if (window.direction == 'left')
        {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        }
        else if (window.direction == 'right')
        {
            player.setVelocityX(160);
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        if (window.direction == 'up' && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
      }
      var points = 0;
      function collectStar (player, star)
      {
        points += 1;
        if (points == 12) {
          router.push('/desktoplounge');
        }
          star.disableBody(true, true);
          score += 10;
          scoreText.setText('Score: ' + score);
      }
  }
}
</script>

<style lang="css" scoped>
#gameContainer {
  margin: auto;
}
.page {
  height: 100%;
  background-color: #336699;
  width: 100%;
  text-align: center;
}
</style>
