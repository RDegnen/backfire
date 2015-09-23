'use strict';

var AppView = Backbone.View.extend({
  el: $('#backfire'),
  events: {
    'click add-todo': 'createTodo',
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

    this.collection.create({title: this.input.val()});

    this.input.val('');
  }
});
