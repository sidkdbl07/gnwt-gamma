if (Meteor.isClient) {
  Template.books.onCreated(function() {
    DocHead.setTitle("Books | GNWT PWS");
  });

  Template.books.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
    //$(window).bind('resize', function () {
    //  var b = $("#DataTables_Table_0").dataTable();
    //  $(".dataTables_scrollBody").height($(document).height() - 270);
    //  b.fnDraw();
    //});
  });

  Template.books.helpers({

  });

  Template.bookTableButtons.onRendered( function() {
    $('.modal-trigger').leanModal();
  });

  Template.bookTableButtons.events({
    'click .book-delete': function(e) {
      var self = this;
      $("#delete_book_id").val(self.item._id);
      $("#deleteBookModal").openModal();
    }
  });

  Template.deleteBookModal.events({
    'click #go-ahead-and-delete-book': function(event) {
      var bookID = $("#delete_book_id").val();
      if(bookID == "") {
        $.publish('toast', ["Could not determine which book to remove", "Error", "error", 0]);
        return;
      }
      Meteor.call('removeBook', bookID);
      $.publish('toast', ["Book deleted", "Success", "success", 0]);
    }
  });
}
