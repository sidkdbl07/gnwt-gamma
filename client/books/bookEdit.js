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
        //console.log("This is a handle");
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
      $("#save_book").hide();
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
    },
    "keyup #edit_book_name": function(event) {
      var saved_book_title = Books.findOne({_id: FlowRouter.getParam('bookId')}).name;
      if(saved_book_title != $("#edit_book_name").val()) {
        $("#save_book").show();
      }
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

Template.bookRules.onRendered(function() {
  this.autorun(function(){
    Tracker.afterFlush(function(){
      $("#condition_dropdown").dropdown({
        constrain_width: true,
        hover: false, // Activate on hover
        gutter: 10, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      });
    });
  });
});

Template.bookRules.helpers({
  bookElements: function() {
    var group_id = $(this)[0]._id;
    //console.log(group_id);
    return BookElements.find({group_id: group_id}, {sort: {order:1}});
  },
  conditionText: function() {
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    if(rule && "conditions" in rule) {
      return rule.conditions[0].condition.toUpperCase();
    } else {
      return "Error";
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
  },
  isCondition: function(element_id) {
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});

    var sentinel = false;
    if(rule && "conditions" in rule) {
      rule.conditions.forEach(function(e) {
        if(e.element_id == element_id) {
          sentinel = true;
        }
      });
    }
    return sentinel;
  },
  isGroupTarget: function(element_id) {
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    var sentinel = false;
    if(rule && "targets" in rule) {
      rule.targets.forEach(function(e) {
        if(e.group_id == element_id) {
          sentinel = true;
        }
      });
    }
    return sentinel;
  },
  isRules: function() {
    return (BookRules.find({book_id: this._id}).count() > 0);
  },
  isTarget: function(element_id) {
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});

    var sentinel = false;
    if(rule && "targets" in rule) {
      rule.targets.forEach(function(e) {
        if(e.element_id == element_id) {
          sentinel = true;
        }
      });
    }
    return sentinel;
  },
  rules: function() {
    return BookRules.find({book_id: this._id},{sort: {order: 1}}).fetch();
  },
  ruleBackground: function(rule_id) {
    if(Session.get('selected_rule') == rule_id) {
      return '';
    }
      return 'lighten-3'
  },
  ruleHasConditions: function(id) {
    var rule = BookRules.findOne({_id: id});
    if(rule && rule.conditions && rule.conditions.length > 0)
      return true;
    return false;
  },
  ruleHasTargets: function(id) {
    var rule = BookRules.findOne({_id: id});
    if(rule && rule.targets && rule.targets.length > 0)
      return true;
    return false;
  },
  ruleNumber: function() {
    return this.order + 1;
  },
  ruleSelected: function() {
    if(Session.get('selected_rule') != "") {
      var rule = BookRules.findOne({_id: Session.get('selected_rule')});
      if(!rule || rule.book_id != FlowRouter.getParam('bookId')) {
        Session.set('selected_rule', "");
        return false;
      }
      return true;
    }
    return false;
  },
  showConditionButton: function(element_id) {
    var element = BookElements.findOne({_id: element_id});
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});

    var sentinel = true;
    // Only allow yes/no questions to be conditions
    if(element.type != 'yesno') {
      sentinel = false;
    }
    // if you are part of the targets, then you can't be a condition

    if(rule && "targets" in rule) {
      rule.targets.forEach(function(e) {
        if(e.element_id == element_id)
          sentinel = false;
      });
    }
    if(rule && "conditions" in rule) {
      rule.conditions.forEach(function(e) {
        if(e.element_id == element_id) {
          sentinel = false;
        }
      });
    }
    return sentinel;
  },
  showGroupTargetButton: function(group_id) {
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    var sentinel = true;
    if(rule && "targets" in rule) {
      rule.targets.forEach(function(e) {
        if(e.group_id == group_id)
          sentinel = false;
      });
      return sentinel;
    }
  },
  showTargetButton: function(element_id) {
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    var sentinel = true;
    if(rule && "targets" in rule) {
      rule.targets.forEach(function(e) {
        if(e.element_id == element_id)
          sentinel = false;
      });
    }
    // if you are a condition, then you can't be a rule
    if(rule && "conditions" in rule) {
      rule.conditions.forEach(function(e) {
        if(e.element_id == element_id)
          sentinel = false;
      });
      return sentinel;
    }
  },
  thisRuleSelected: function(rule_id) {
    if(Session.get('selected_rule') == rule_id)
      return true;
    return false;
  }
});

Template.bookRules.events({
  "click #btn_bookrule_add": function(event, template){
     event.preventDefault();
     Meteor.call('addBookRule', {book_id: this._id, order: BookRules.find({book_id: this._id}).count(), conditions: [], targets: []});
     $.publish('toast', ["Rule added", "Success", "success", 0]);
  },
  "click .bookrule_delete": function(event, template) {
    Meteor.call('removeBookRule', Session.get('selected_rule'));
    $.publish('toast', ["Rule deleted", "Success", "success", 0]);
  },
  "click .change-condition": function(event, template) {
    event.preventDefault();
    var element_id = $(event.target).attr('element-id');
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    rule.conditions = [{element_id: element_id, condition: $(event.target).attr('value')}];
    Meteor.call('editBookRule', rule);
  },
  "click .remove-condition": function(event, template) {
    event.preventDefault();
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    var element_id = $(event.target).closest('a').attr('element-id');
    rule.conditions = [];
    Meteor.call('editBookRule', rule);
  },
  "click .remove-group-target": function(event, template) {
    event.preventDefault();
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    rule.targets = [];
    Meteor.call('editBookRule', rule);
  },
  "click .remove-target": function(event, template) {
    event.preventDefault();
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    var element_id = $(event.target).closest('a').attr('element-id');
    rule.targets = [];
    Meteor.call('editBookRule', rule);
  },
  "click .rule-group": function(event, template) {
    event.preventDefault();
    var rule_group_id = $(event.target).closest('div.rule-group').attr('rule-id');
    Session.set('selected_rule', rule_group_id);
  },
  "click .turn-on-bookrule-condition": function(event, template) {
    event.preventDefault();
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    var element_id = $(event.target).closest('a').attr('element-id');
    rule.conditions = [{element_id: element_id, condition: 'is answered'}];
    Meteor.call('editBookRule', rule);
  },
  "click .turn-on-bookrule-target": function(event, template) {
    event.preventDefault();
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    var element_id = $(event.target).closest('a').attr('element-id');
    rule.targets = [{element_id: element_id, target: 'disabled'}];
    Meteor.call('editBookRule', rule);
  },
  "click .turn-on-bookrulegroup-target": function(event, template) {
    event.preventDefault();
    var rule = BookRules.findOne({_id: Session.get('selected_rule')});
    var group_id = $(event.target).closest('a').attr('group-id');
    rule.targets = [{group_id: group_id, target: 'disabled'}];
    Meteor.call('editBookRule', rule);
  },
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
