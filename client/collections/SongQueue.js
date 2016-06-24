// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', this.playNext, this);
    
    this.on('dequeue', this.dequeue, this);
  },

  dequeue: function(song) {
    if (song === this.first()) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playNext: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },

  playFirst: function() {
    this.first().play();
  }
});