import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './bookEdit.html';

if (Meteor.isClient) {
  Template.bookEdit.onCreated(function() {
    DocHead.setTitle("Book | GNWT PWS");
  });

  Template.bookEdit.onRendered(function() {
    this.autorun(function(){
      Tracker.afterFlush(function(){
        $(".dropdown-button").dropdown({
          constrain_width: true,
          hover: false, // Activate on hover
          gutter: 10, // Spacing from edge
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
      });
    });
  });

  Template.bookEdit.helpers({
    getBook: function () {
      return Books.findOne({_id: FlowRouter.getParam('bookId')});
    }
  });

  Template.bookEdit.events({
    'click span.book-element-item': function(event) {
      event.preventDefault();
      if($(event.target).hasClass('handle')) {
        console.log("This is a handle");
        return;
      }
      if($(event.target).hasClass('rule')) {
        console.log("This is a rule");
        return;
      }
      var bookelement = $(event.target).parent('.bookelement')[0];
      $('.bookelement').removeClass('selected');
      $(bookelement).addClass('selected');
      if($("#details_"+bookelement.id).hasClass('inactive')) {
        $(".bookelementdetails").addClass('inactive');
        $("#details_"+bookelement.id).removeClass('inactive');
      }else{
        $('#'+bookelement.id).removeClass('selected');
        $("#details_"+bookelement.id).addClass('inactive');
      }
    },
    'click span.book-element-group-item': function(event) {
      event.preventDefault();
      if($(event.target).hasClass('handle')) {
        console.log("This is a handle");
        return;
      }
      var bookelementgroup = $(event.target).parent('.bookelement-group')[0];
      $('.bookelement-group').removeClass('selected');
      $(bookelementgroup).addClass('selected');
      if($("#details_"+bookelementgroup.id).hasClass('inactive')) {
        $(".elementgroupdetails").addClass('inactive');
        $("#details_"+bookelementgroup.id).removeClass('inactive');
      }else{
        $('#'+bookelementgroup.id).removeClass('selected');
        $("#details_"+bookelementgroup.id).addClass('inactive');
      }
    },
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
              {name: "Text", type: "text", order: 4},
              {name: "Yes/No", type:"yesno", order: 5}];
    },
    bookOtherTypes: function() {
      return [{name: "Text/Comment", type: "textcomment", order: 0}];
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
      var group_id = $(this)[0]._id;
      //console.log(group_id);
      return BookElements.find({group_id: group_id}, {sort: {order:1}});
    },
    bookElementsOptions: function() {
      return {
        sortField: 'order',
        animation: 100,
        group: {
          name: 'bookElements',
          pull: true,
          put: ['bookElements','bookElementTypes']
        },
        handle: ".handle",
        sort: true,
        onAdd: function(event) {
          delete event.data._id;
          delete event.data.name;
          delete event.data.group_id;
          if(!event.data.type) {
            $.publish('toast', ["There was a problem copying the element.", "Error", "error", 0]);
            return;
          }
          event.data.text = event.data.type;
          event.data.book_id = FlowRouter.getParam("bookId");
          var item = event.item;
          var group_id = $(item).closest('.sortable').attr('group_id');
          console.log("Setting group to "+group_id);
          event.data.group_id = group_id;
          if(event.data.type == 'choice') {
            event.data.choices = [{name: 'Choice', order: 0, default: false}]
          }
        }
      }
    },
    elementGroups: function() {
      return ElementGroups.find({book_id: this._id}, {sort: {order: 1}}).fetch();
    },
    icon: function(type) {
      //groups
      if(type == 'arrow') return "arrow_forward";
      if(type == 'group') return "filter_none";
      if(type == 'line') return "remove";
      if(type == 'point') return "place";
      if(type == 'poly') return "check_box_outline_blank";
      // elements
      if(type == 'choice') return "check_circle";
      if(type == 'date') return "event_note";
      if(type == 'numeric') return "looks_one";
      if(type == 'photo') return "photo_camera";
      if(type == 'text') return "title";
      if(type == 'textcomment') return "subject";
      if(type == 'yesno') return "done";
    }
  });
}

Template.bookRules.helpers({
  bookElements: function() {
    var group_id = $(this)[0]._id;
    //console.log(group_id);
    return BookElements.find({group_id: group_id}, {sort: {order:1}});
  },
  elementGroups: function() {
    return ElementGroups.find({book_id: this._id}, {sort: {order: 1}}).fetch();
  },
  icon: function(type) {
    //groups
    if(type == 'arrow') return "arrow_forward";
    if(type == 'group') return "filter_none";
    if(type == 'line') return "remove";
    if(type == 'point') return "place";
    if(type == 'poly') return "check_box_outline_blank";
    // elements
    if(type == 'choice') return "check_circle";
    if(type == 'date') return "event_note";
    if(type == 'numeric') return "looks_one";
    if(type == 'photo') return "photo_camera";
    if(type == 'text') return "title";
    if(type == 'textcomment') return "subject";
    if(type == 'yesno') return "done";
  },
  isRules: function() {
    return false;
  }
});


Template.elementGroups.helpers({
  elementGroups: function() {
    return ElementGroups.find({book_id: this._id}, {sort: {order:1}});
  },
  elementGroupTypes: function() {
    return [{name: "Elements Only", type: "group", order: 0},
            {name: "Point", type: "point", order: 1},
            {name: "Line", type: "line", order: 2},
            {name: "Arrow", type: "arrow", order: 3},
            {name: "Polygon", type: "poly", order: 4}];
  },
  elementGroupTypesOptions: function() {
    return {
      sortField: 'order',
      animation: 100,
      group: {
        name: 'elementGroupTypes',
        pull: 'clone',
        put: false
      },
      sort: false
    }
  },
  elementGroupOptions: function() {
    return {
      sortField: 'order',
      animation: 100,
      group: {
        name: 'bookElementGroups',
        pull: false,
        put: ['elementGroupTypes']
      },
      handle: ".handle",
      sort: true,
      onAdd: function(event) {
        delete event.data._id;
        delete event.data.name;
        if(!event.data.type) {
          $.publish('toast', ["There was a problem copying the section.", "Error", "error", 0]);
          return;
        }
        event.data.text = event.data.type;
        event.data.allow_multiple = false;
        event.data.book_id = FlowRouter.getParam("bookId");
      }/*,
      onEnd: function(event) {
        console.log("book: "+event.data.book_id);
        console.log("group: "+event.data._id);
        Meteor.call('addBookElement', {text: "Text 1", order: 0, type: 'textcomment', book_id: event.data.book_id, group_id: event.data._id});
      }*/
    }
  },
  icon: function(type) {
    if(type == 'arrow') return "arrow_forward";
    if(type == 'group') return "filter_none";
    if(type == 'line') return "remove";
    if(type == 'point') return "place";
    if(type == 'poly') return "check_box_outline_blank";
  }
});
