'use strict';

var AppView = Backbone.View.extend({
  el: $('#backfire'),

  initialize: function() {
    this.list = this.$("#todo-list");

    this.listenTo(this.collection, 'add', this.addOne);
  },

  addOne: function(todo) {
    var view = new TodoView({model: todo});
    this.list.append(view.render().el);
  }
});
