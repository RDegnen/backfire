'use strict';

var TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<input type='checkbox'> <%= title %>"),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});
