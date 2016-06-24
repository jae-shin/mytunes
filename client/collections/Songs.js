// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs',

  parse: function(data) {
    return data.results;
  },

  initialize: function(searchOption) {
    if (searchOption) {
      this.fetch(_.extend(searchOption, {remove: true}));
      //{data: {where: {'title': {'$regex': '.*' + 'You' + '.*'}}}};
    } else {
      this.fetch({remove: true});
    }
  }
  
});