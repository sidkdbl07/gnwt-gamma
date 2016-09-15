import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './userEdit.html';

if (Meteor.isClient) {
  Template.userEdit.onCreated(function() {
    DocHead.setTitle("Edit User | GNWT PWS");
  });

  Template.userEdit.helpers({
    getUser: function () {
      return Meteor.users.findOne({ _id: FlowRouter.getParam('userId') });
    },
    checkedIf: function(role) {
      return Meteor.users.findOne({ _id: FlowRouter.getParam('userId') }).roles.default_group[0] == role ? 'checked' : '';
    }
  });

  Template.userEdit.events({
    'click #save_a_user': function (event) {
      event.preventDefault();
      var userID = $('#edit_user_id').val();
      var fullname = $('[name=edit_user_fullname]').val();
      var email = $('[name=edit_user_email]').val();
      var role = $('[name=edit_user_role]:checked').val();
      if(Meteor.users.find({$and: [ {email: email}, {_id: {$not: userID}}]}).count() > 0) {
        $.publish('toast', ["A user with that e-mail address exists", "Error", "error", 0]);
        return;
      }
      if(email.length < 5) {
        $.publish('toast', ["The email address is invalid", "Error", "error", 0]);
        return;
      }
      Meteor.call('updateUser', userID, fullname, email, [role]);
      $.publish('toast', ["User saved", "Success", "success", 0]);
    }
  });

  Template.userChangePassword.events({
    'click #submit_user_edit_pass': function(event) {
      event.preventDefault();
      var user_id = $('#edit_user_password_id').val();;
      var password = $('[name=edit_user_password]').val();
      if(password.length < 5) {
        $.publish('toast', ["Passwords must be at least 5 characters", "Error", "error", 0]);
        return;
      }
      Meteor.call("updateAccountPassword", user_id, password, function(error, result) {
        if(error) {
          $.publish('toast',[error.reason,"An error occurred",'error']);
        } else {
          $.publish('toast',["Password was successfully changed","User Info Saved",'success']);
        }
      });
    }
  });
}
