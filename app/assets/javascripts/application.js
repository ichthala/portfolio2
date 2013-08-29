// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(function() {
  $('.word-div').hide();
  $('.porthole').hover(toggleIcon);

  $('#codex-porthole').click(goToCodex);
  $('#inventory-porthole').click(goToInventory);
  $('#skills-porthole').click(goToSkills);
  $('#messages-porthole').click(goToMessages);
});

var toggleIcon = function() {
  $(this).find('.word-div').toggle();
  $(this).find('.icon-div').toggle();
};

var goToCodex = function() {
  $('#info-line').animate({ marginLeft: '0px' }, 750);
};

var goToInventory = function() {
  $('#info-line').animate({ marginLeft: '-1280px' }, 750);
};

var goToSkills = function() {
  $('#info-line').animate({ marginLeft: '-2560px' }, 750);
};

var goToMessages = function() {
  $('#info-line').animate({ marginLeft: '-3840px' }, 750);
};