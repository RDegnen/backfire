'use strict';

var Todo = Backbone.Model.extend({
  defaults: {
    title: 'New Todo',
    done: false
  },

  toggle: function() {
    this.save({done: !this.get('done')});
    $('.done').find('input').attr('checked', 'checked');
  }
});
