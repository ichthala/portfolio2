$('#inventory-info').hide();
$('#skills-info').hide();
$('#message-info').hide();

$('#codex-porthole').click(goToCodex);
$('#inventory-porthole').click(goToInventory);
$('#skills-porthole').click(goToSkills);
$('#message-porthole').click(goToMessage);

var goToCodex = function() {
  $('.showing').hide();
  $('#codex-info').show();
  $('#codex-info').addClass('showing');
};

var goToInventory = function() {
  $('.showing').hide();
  $('#inventory-info').show();
  $('#inventory-info').addClass('showing');
};

var goToSkills = function() {
  $('.showing').hide();
  $('#skills-info').show();
  $('#skills-info').addClass('showing');
};

var goToMessage = function() {
  $('.showing').hide();
  $('#message-info').show();
  $('#message-info').addClass('showing');
};