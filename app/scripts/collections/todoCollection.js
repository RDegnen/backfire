'use strict';

var TodoCollection = Backbone.Firebase.Collection.extend({
  model: Todo,
  url: 'https://backfiretodo.firebaseIO.com',

  done: function() {
    return this.where({done: true});
  }
});
