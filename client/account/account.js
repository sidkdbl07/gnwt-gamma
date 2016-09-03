if (Meteor.isClient) {
  Template.accountChangePassword.events({
    'click #submit_account_edit_pass': function(event) {
      event.preventDefault();
      var loggedInUser = Meteor.user();
      var password = $('[name=edit_account_password]').val();
      Meteor.call("updateAccountPassword", loggedInUser._id, password, function(error, result) {
        if(error) {
          $.publish('toast',[error.reason,"An error occurred",'error']);
        } else {
          $.publish('toast',["Your password was successfully changed","User Info Saved",'success']);
        }
      });
    }
  });
}
