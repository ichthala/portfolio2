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
  $('#info-window').height($('#codex-info').height() + 70);

  $('#codex-porthole').click(goToCodex);
  $('#inventory-porthole').click(goToInventory);
  $('#skills-porthole').click(goToSkills);
  $('#messages-porthole').click(goToMessages);
});

var toggleIcon = function() {
  $(this).find('.word-div').toggle();
  $(this).find('.icon-div').toggle();
};

var makeInfoWindowTallAsBrowser = function() {
  // $('#info-window').height(window.outerHeight - $('#header').height());
  // console.log("height is" + $('#info-window').height());
};

var changeViewerHeight = function(element) {
  $('#info-window').height($(element).height() + 70);
};

function changeHeight() {
  $('#info-window').height($(infoPage).height() + 70);
  console.log($(infoPage));
  console.log($(infoPage).height());
}

var goToCodex = function() {
  makeInfoWindowTallAsBrowser();

  // define the changeHeight method so it has access
  // to this function's variables
  var infoPage = $('#codex-info');
  function changeHeightForMe() {
    changeHeight();
  }

  $('#info-line').animate({ marginLeft: '0px' },
    { duration: 750, complete: changeHeightForMe });
};

var goToInventory = function() {
  makeInfoWindowTallAsBrowser();

  // define the changeHeight method so it has access
  // to this function's variables
  var infoPage = $('#inventory-info');
  function changeHeightForMe() {
    changeHeight();
  }

  $('#info-line').animate({ marginLeft: '-1280px' },
    { duration: 750, complete: changeHeightForMe });
};

var goToSkills = function() {
  makeInfoWindowTallAsBrowser();

  // define the changeHeight method so it has access
  // to this function's variables
  var infoPage = $('#skills-info');
  function changeHeightForMe() {
    changeHeight();
  }

  $('#info-line').animate({ marginLeft: '-2560px' },
    { duration: 750, complete: changeHeightForMe });
};

function goToMessages() {
  makeInfoWindowTallAsBrowser();

  // define the changeHeight method so it has access
  // to this function's variables
  var infoPage = $('#messages-info');
  function changeHeightForMe() {
    changeHeight();
  }

  $('#info-line').animate({ marginLeft: '-3840px' },
    { duration: 750, complete: changeHeightForMe } );
}

// var messagesHeight = function() {
//   $('#info-window').height($('#messages-info').height() + 70);
// };