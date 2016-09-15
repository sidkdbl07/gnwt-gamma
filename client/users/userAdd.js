import './userAdd.html';

if (Meteor.isClient) {
  Template.userAdd.onCreated(function() {
    DocHead.setTitle("Add a User | GNWT PWS");
  });
  Template.userAdd.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
  });
  Template.userAdd.events({
    'click #save_new_user': function (event) {
      event.preventDefault();
      var fullname = $('[name=create_user_fullname]').val();
      var email = $('[name=create_user_email]').val();
      var password = $('[name=create_user_password]').val();
      var role = $('[name=create_user_role]:checked').val();
      if(Meteor.users.find({username: email}).count() > 0) {
        $.publish('toast', ["A user with that e-mail address exists", "Error", "error", 0]);
        return;
      }
      if(email.length < 5) {
        $.publish('toast', ["The email address is invalid", "Error", "error", 0]);
        return;
      }
      if(password.length < 5) {
        $.publish('toast', ["Passwords must be a minimum of 5 characters", "Error", "error", 0]);
        return;
      }
      Meteor.call('createNewUser', fullname, email, password, [role]);
      $.publish('toast', ["New user created", "Success", "success", 0]);
      $('[name=create_user_fullname]').val("");
      $('[name=create_user_email]').val("");
      $('[name=create_user_password]').val("");
    }
  });
}
