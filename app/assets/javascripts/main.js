$(document).ready(function() {

  initRegistrationPopups();

  if ($('#map').length) {
    initMap()
  }

  if ($('#user_profile').length) {
    initProfileToggle()
  }

  if ($('.tags-topbar').length) {
    initCafeFilter();
  }

  if ($('#new_coffee').length) {
    initDropdowns();
  }

  if ($('#dropin').length) {
    initPayments();
  }

  if ($('#cafe_profile').length) {
    initGiftSearch();
  }

  if ($('.gift-form').length) {
    initGiftFormDropdown();
  }

});


