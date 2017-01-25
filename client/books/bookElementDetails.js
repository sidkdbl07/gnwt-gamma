Template.bookElementDetails.helpers({
  'isNumeric': function() {
    return (this.type == 'numeric');
  },
  'isRequired': function() {
    if(typeof this.required != 'undefined' && this.required == true)
      return 'checked';
    else
      return '';
  }
});

Template.bookElementDetails.events({
  'click .delete-element': function(event) {
    event.preventDefault();
    var elementID = $(event.target).attr('element_id');
    if(typeof elementID == 'undefined' || elementID == "") {
      $.publish('toast', ["Could not determine which element to remove", "Error", "error", 0]);
      return;
    }
    Meteor.call('removeBookElement', elementID);
    $.publish('toast', ["Book element deleted", "Success", "success", 0]);
  }
});
