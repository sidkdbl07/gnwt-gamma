import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './bookEdit.html';

if (Meteor.isClient) {
  Template.bookEdit.onCreated(function() {
    DocHead.setTitle("Book | GNWT PWS");
  });

  Template.bookEdit.onRendered(function() {
    $(".dropdown-button").dropdown({
      constrain_width: true,
      hover: false, // Activate on hover
      gutter: 10, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
  });

  Template.bookEdit.helpers({
    getBook: function () {
      return Books.findOne();
    }
  });

  Template.bookEdit.events({
    'click #save_book': function (event) {
      event.preventDefault();
      var bookID = $('#edit_book_id').val();
      var name = $('#edit_book_name').val();
      if(Books.find({$and: [ {name: name}, {_id: {$not: bookID}}]}).count() > 0) {
        $.publish('toast', ["A book with that name already exists", "Error", "error", 0]);
        return;
      }
      if(name.length < 1) {
        $.publish('toast', ["The book must have a name", "Error", "error", 0]);
        return;
      }
      Meteor.call('editBook', {_id: bookID, name: name});
      $.publish('toast', ["Book saved", "Success", "success", 0]);
    },
    'click #btn_book_details': function(event) {
      event.preventDefault();
      $("#book_view").html("<i class='material-icons right'>arrow_drop_down</i>BOOK DETAILS");
      $(".book-view").hide();
      $("#book_details").show();
    },
    'click #btn_book_elements': function(event) {
      event.preventDefault();
      $("#book_view").html("<i class='material-icons right'>arrow_drop_down</i>ELEMENTS");
      $(".book-view").hide();
      $("#book_elements").show();
    },
    'click #btn_book_rules': function(event) {
      event.preventDefault();
      $("#book_view").html("<i class='material-icons right'>arrow_drop_down</i>RULES");
      $(".book-view").hide();
      $("#book_rules").show();
    }
  });

  Template.bookElements.onRendered(function() {
    // Sortable.create(bookElementTypes, {
    //   group: 'bookElementTypes',
    //   animation: 100,
    //   sort: true,
    //   onRemove: function(e) {
    //     e.target.appendChild(e.item.cloneNode(true));
    //   }
    // });
    // Sortable.create(bookElements, {
    //   group: {
    //     name: 'bookElements',
    //     put: ['bookElementTypes']
    //   },
    //   animation: 100
    // });
  });

  Template.bookElements.helpers({
    bookElementTypes: function() {
      return [{name: "Choice", type: "choice", order: 0},
              {name: "Date", type: "date", order:1},
              {name: "Numeric", type: "numeric", order: 2},
              {name: "Photo", type: "photo", order: 3},
              {name: "Yes/No", type:"yesno", order: 4}];
    },
    bookMapTypes: function() {
      return [{name: "Point", type: "point", order: 0},
              {name: "Line", type: "line", order: 1},
              {name: "Polygon", type: "poly", order: 2}];
    },
    bookOtherTypes: function() {
      return [{name: "Page Break", type: "page", icon: "more_horiz", order: 0}];
    },
    bookElementTypesOptions: function() {
      return {
        sortField: 'order',
        animation: 100,
        group: {
          name: 'bookElementTypes',
          pull: 'clone',
          put: false
        },
        sort: false
      }
    },
    bookElements: function() {
      return BookElements.find({}, {sort: {order:1}});
    },
    bookElementsOptions: function() {
      return {
        sortField: 'order',
        animation: 100,
        group: {
          name: 'bookElements',
          pull: false,
          put: ['bookElementTypes']
        },
        sort: true,
        onAdd: function(event) {
          delete event.data._id;
          delete event.data.name;
          event.data.text = event.data.type;
          event.data.book_id = FlowRouter.getParam("bookId");
        }
      }
    },
    icon: function(type) {
      if(type == 'choice') return "check_circle";
      if(type == 'date') return "event_note";
      if(type == 'line') return "remove";
      if(type == 'numeric') return "looks_one";
      if(type == 'photo') return "photo_camera";
      if(type == 'yesno') return "iso";
      if(type == 'page') return "more_horiz";
      if(type == 'point') return "place";
      if(type == 'poly') return "check_box_outline_blank";
    }
  });

}
