'use strict';

function init() {
  var collection = new TodoCollection();
  var app = new AppView({ collection: collection});
}

function showBtn () {
  var hasDone = $('ul').find('li').hasClass('done');

  if (hasDone) {
    $('#remove').show('slow');
  } else {
    $('#remove').hide('slow');
  }
}

function checkAll() {
  $('li').addClass('done');
  $('#remove').show('slow');
}

$(document).ready(function() {
  init();

  $('#remove').hide();

  $('ul').on('click', function() {
    showBtn();
  });

  $('#remove').on('click', function() {
    $('#remove').hide();
  });

  $('#check-all').on('click', function() {
    checkAll();
  });
});
