function validate() {
  //ID validation
  var id = $("#id").val();
  if (id == "" || id == null) {
    $("#error_id").text('This field is required.');
  } else if (id.length < 3 || id.length > 10) {
    $("#error_id").text('Please Enter 3 Digit ID No.');
  } else {
    $("#error_id").text('');
  }
  //Full Name validation
  var fullName = $("#fullName").val();
  if (fullName == "" || fullName == null) {
    $("#error_fullName").text('This field is required.');
  } else {
    $("#error_fullName").text('');
  }
  //Phone validation
  var phone = $("#phone").val();
  if (phone == "" || phone == null) {
    $("#error_phone").text('This field is required.');
  } else if (phone.length < 11 || phone.length > 13) {
    $("#error_phone").text('Mobile No. is not valid, Please Enter 11 Digit Mobile No.');
  } else {
    $("#error_phone").text('');
  }
  //Email validation
  var email = $("#email").val();
  var regex = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$');
  if (email) {
    if (!regex.test(email)) {
      $("#error_email").text("Please enter valid email address");
    } else {
      $("#error_email").text('');
    }
  } else {
    $("#error_email").text('This field is required.');
  }
  //Address validation
  var address = $("#address").val();
  if (address == "" || address == null) {
    $("#error_address").text('This field is required.');
  } else {
    $("#error_address").text('');
  }
  //Job Title validation
  var jobTitle = $("#jobTitle").val();
  if (jobTitle == "" || jobTitle == null) {
    $("#error_jobTitle").text('This field is required.');
  } else {
    $("#error_jobTitle").text('');
  }
}