'use strict';

var TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<input class='toggle' type='checkbox'> <label><%= title %></label>"),

  events: {
    'click .toggle': 'toggleDone'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('done', this.model.get('done'));
    return this;
  },

  toggleDone: function() {
    this.model.toggle();
  },

  clear: function() {
    this.model.destroy();
  }

});
