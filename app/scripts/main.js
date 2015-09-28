'use strict';

function init() {
  var collection = new TodoCollection();
  var app = new AppView({ collection: collection});
}

function showBtn () {
  var hasDone = $('ul').find('li').hasClass('done');

  if (hasDone) {
    $('#remove').show();
  } else {
    $('#remove').hide();
  }
}

$(document).ready(function() {
  init();

  $('#remove').hide();

  $('ul').on('click', function() {
    showBtn();
  });
});
