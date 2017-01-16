if (Meteor.isClient) {
  Template.bookAdd.onCreated(function() {
    DocHead.setTitle("Add a Book | GNWT PWS");
  });
  Template.bookAdd.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
  });

  Template.bookAdd.events({
    'click #save_new_book': function (event) {
      event.preventDefault();
      var name = $('#create_book_name').val();
      if(Books.find({name: name}).count() > 0) {
        $.publish('toast', ["A book with that name already exists", "Error", "error", 0]);
        return;
      }
      if(name.length < 1) {
        $.publish('toast', ["You must enter a name for this book", "Error", "error", 0]);
        return;
      }
      Meteor.call('addBook', {name: name});
      $.publish('toast', ["New book created", "Success", "success", 0]);
      $('#create_book_name').val("");
    }
  });
}
