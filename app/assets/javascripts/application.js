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

var codexWord = function() {
  $('#codex-porthole').html('<p class="nav-letter one-line">codex</p>');
};

var codexIcon = function() {
  $('#codex-porthole').html('<img id="codex-icon" class="icon" src="codex.png" />');
};

var inventoryWord = function() {
  $('#inventory-porthole').html('<p class="nav-letter three-lines">in<br>vent<br>ory</p>');
};

var inventoryIcon = function() {
  $('#inventory-porthole').html('<img id="inventory-icon" class="icon" src="inventory.png" />');
};

var skillsWord = function() {
  $('#skills-porthole').html('<p class="nav-letter one-line">skills</p>');
};

var skillsIcon = function() {
  $('#skills-porthole').html('<img id="skills-icon" class="icon" src="skills.png" />');
};

var messagesWord = function() {
  $('#messages-porthole').html('<p class="nav-letter three-lines">mes<br>sag<br>es</p>');
};

var messagesIcon = function() {
  $('#messages-porthole').html('<img id="messages-icon" class="icon" src="messages.png" />');
};

var journalWord = function() {
  $('#journal-porthole').html('<p class="nav-letter one-line">journal</p>');
};

var journalIcon = function() {
  $('#journal-porthole').html('<img id="journal-icon" class="icon" src="journal.png" />');
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