import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.methods({
    createNewUser: function(pFullname, pEmail, pPass, pRoles) {
      var id;
      id = Accounts.createUser({
        email: pEmail,
        password: pPass,
        profile: {
          fullname: pFullname
        }
      });
      Roles.addUsersToRoles(id, pRoles, 'default_group');
    },
    editAUser: function(pID, pFullname, pEmail, pRoles) {
      Meteor.users.update({_id: pID}, {$set: {
        'email': pEmail,
        'profile.fullname': pFullname
      }});
      Roles.setUserRoles(pID, pRoles[0], 'default_group');
    },
    removeAUser: function(pID) {
      var loggedInUser = Meteor.user()

      if (!loggedInUser ||
          !(Roles.userIsInRole(loggedInUser, ['admin'], 'default_group') || (loggedInUser._id == userId) ) ) {
        throw new Meteor.Error(403, "Access denied")
      }
      Meteor.users.remove(pID);
    },
    updateAccountPassword: function(userId, password) {
      var loggedInUser = Meteor.user()

      if (!loggedInUser ||
          !(Roles.userIsInRole(loggedInUser, ['admin'], 'default_group') || (loggedInUser._id == userId) ) ) {
        throw new Meteor.Error(403, "Access denied")
      }
      return Accounts.setPassword(userId, password, {logout: false});
    }
  });
});
