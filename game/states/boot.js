
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.plugins.add(new Phaser.Plugin.Debug(this));
    //this.game.plugins.add(new Phaser.Plugin.Tiled(this));
    this.game.state.start('preload');
  }
};

module.exports = Boot;
