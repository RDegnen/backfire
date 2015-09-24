'use strict';

var AppView = Backbone.View.extend({
  el: $('#backfire'),
  events: {
    'keypress #new-todo': 'createTodo',
    'click #remove': 'clearDone'
  },

  initialize: function() {
    this.list = this.$('#todo-list');
    this.input = this.$('#new-todo');

    this.listenTo(this.collection, 'add', this.addOne);
  },

  addOne: function(todo) {
    var view = new TodoView({model: todo});
    this.list.append(view.render().el);
  },

  createTodo: function(e) {
    if (!this.input.val()) { return; }
    if (e.keyCode !== 13) { return; }

    this.collection.create({title: this.input.val()});

    this.input.val('');
  },

  clearDone: function() {
    _.invoke(this.collection.done(), 'destroy');
    return false;
  }
});
