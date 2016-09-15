if (Meteor.isClient) {
  Template.users.onCreated(function() {
    DocHead.setTitle("Users | GNWT PWS");
  });

  Template.users.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
    //$(window).bind('resize', function () {
    //  var b = $("#DataTables_Table_0").dataTable();
    //  $(".dataTables_scrollBody").height($(document).height() - 270);
    //  b.fnDraw();
    //});
  });

  Template.users.helpers({

  });

  Template.userTableButtons.onRendered( function() {
    $('.modal-trigger').leanModal();
  });

  Template.userTableButtons.events({
    'click .user-delete': function(e) {
      var self = this;
      $("#delete_user_id").val(self.item._id);
      $("#deleteUserModal").openModal();
    }
  });

  Template.deleteUserModal.events({
    'click #go-ahead-and-delete-user': function(event) {
      var userID = $("#delete_user_id").val();
      if(userID == "") {
        $.publish('toast', ["Could not determine which user to remove", "Error", "error", 0]);
        return;
      }
      Meteor.call('removeUser', userID);
      $.publish('toast', ["User deleted", "Success", "success", 0]);
    }
  });
}
