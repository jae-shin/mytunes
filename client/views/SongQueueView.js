// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.collection.forEach(function(model) {
      new SongQueueEntryView(model).render();
    });
  }

});
