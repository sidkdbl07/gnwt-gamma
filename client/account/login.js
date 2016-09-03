import './login.html';

if (Meteor.isClient) {
  Template.login.events({
    'click #submit_login': function (e) {
      e.preventDefault();
      $('#form_login').submit();
    },
    'submit form': function(e){
      e.preventDefault();
      var email = $('#email').val();
      var password = $('#password').val();
      Meteor.loginWithPassword(email, password, function(error) {
        if(error) {
          $.publish('toast', ["That didnt work. Check your email and password", "Login Not Successful!", "error"]);
        } else {
          $.publish('toast', ["You are now logged in", "Login Successful!", "success"]);
        }
      });
    }
  });
}
