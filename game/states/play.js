
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.sprite = this.game.add.sprite(384, 129, 'panda');

      this.sprite.animations.add('down', [0,1,2]);
      this.sprite.animations.add('left', [12,13,14]);
      this.sprite.animations.add('right', [24,25,26]);
      this.sprite.animations.add('top', [36,37,38]);

      //this.game.add.tween(this.sprite).to({ x: this.game.width }, 10000, Phaser.Easing.Linear.None, true);

      /*
      this.sprite = this.game.add.sprite(this.game.width/2, this.game.height/2, 'pigeonSmall');
      this.sprite.inputEnabled = true;

      this.game.physics.arcade.enable(this.sprite);
      this.sprite.body.collideWorldBounds = true;
      this.sprite.body.bounce.setTo(1,1);
      this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500,500);
      this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500,500);

      this.sprite.events.onInputDown.add(this.clickListener, this);
      */
    },
    update: function() {
      this.sprite.animations.play('down', 6, true);
    },
    clickListener: function() {
        this.isAlive = false;
        this.sprite.kill();
        this.blood = this.game.add.sprite(this.sprite.x, this.sprite.y, 'blood');

        this.winText = this.game.add.text(this.game.world.centerX, 400, 'Epic Win!', { font: '28px Arial', fill: '#ffffff', align: 'center'});
        this.winText.anchor.setTo(0.5, 0.5);

        this.playagainText = this.game.add.text(this.game.world.centerX, 450, '(click to play again)', { font: '18px Arial', fill: '#ffffff', align: 'center'});
        this.playagainText.anchor.setTo(0.5, 0.5);
    }
  };

  module.exports = Play;