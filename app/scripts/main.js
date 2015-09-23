'use strict';

function init() {
  var collection = new TodoCollection();
  var app = new AppView({ collection: collection});
}

$(document).ready(function() {
  init();
});
