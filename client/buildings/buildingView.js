import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './buildingView.html';

if (Meteor.isClient) {
  Template.buildingView.onCreated(function() {
    DocHead.setTitle("Building | GNWT PWS");
  });

  Template.buildingView.onRendered(function() {
    this.autorun(function(){
      Tracker.afterFlush(function(){
        $(".dropdown-button").dropdown({
          constrain_width: true,
          hover: false, // Activate on hover
          gutter: 10, // Spacing from edge
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
        $('.modal-trigger').leanModal();

        // show assessments if the user has previously selected an assessment type.
        if(Session.get('selected_assessment_type_id') != "") {
          $('#building-details').hide();
          $('#assessments-list').show();
        }
      });
    });
  });

  Template.buildingView.helpers({
    assessmentCount: function(book_id) {
      console.log("Looking for book "+book_id+", building "+FlowRouter.getParam('buildingId'));
      return Assessments.find({book_id: book_id, building_id: FlowRouter.getParam('buildingId')}).count();
    },
    assessmentText: function() {
      return "Created "+moment(this.created_date).fromNow()+" ("+moment(this.created_date).format("MMM Do, YYYY")+") by "+this.created_by;
    },
    buildingAddress: function() {
      if(!this.address || this.address == "") {
        return "No address specified";
      }
      return this.address
    },
    getAssessments: function() {
      return Assessments.find({book_id: Session.get('selected_assessment_type_id'), building_id: FlowRouter.getParam('buildingId')}, {sort: {created_date: -1}}).fetch();
    },
    getBooks: function() {
      return Books.find().fetch();
    },
    getBuilding: function () {
      return Buildings.findOne({_id: FlowRouter.getParam('buildingId')});
    },
    isNew: function() {
      if(moment().diff(Date.now(), 'days') == 0) {
        return true;
      }
      return false;
    },
    isSelectedAssessmentType: function(book_id) {
      if(Session.get('selected_assessment_type_id') == book_id) {
        return true;
      }
      return false;
    },
    hasAssessments: function() {
      var assessment_count = Assessments.find({building_id: this._id, book_id: Session.get('selected_assessment_type_id')}).count();
      if(assessment_count > 0) {
        return true;
      }
      return false;
    },
    lastAssessment: function(book_id) {
      var count = Assessments.find({book_id: book_id, building_id: FlowRouter.getParam('buildingId')}).count();
      if(count == 0) {
        return "There are no assessments of this type on record for this building.";
      } else {
        var assessment = Assessments.findOne({book_id: book_id, building_id: FlowRouter.getParam('buildingId')}, {sort: {created_date: -1}})
        return "Last assessment: "+moment(assessment.created_date).fromNow()+" ("+moment(assessment.created_date).format('MMM Do, YYYY')+") by "+assessment.created_by;
      }
    },
    selectedAssessmentName: function() {
      if(Books.find({_id: Session.get('selected_assessment_type_id')}).count() > 0) {
        return Books.findOne({_id: Session.get('selected_assessment_type_id')}).name;
      }
      return "";
    }
  });

  Template.buildingView.events({
    'click #add_assessment': function(event, template) {
      event.preventDefault();
      var book_id = Session.get('selected_assessment_type_id');
      if(Books.find({_id: book_id}).count() != 1) {
        $.publish('toast', ["There was a problem finding the assessment template.", "Error", "error", 0]);
        return;
      }
      var book = Books.findOne({_id: book_id});
      var new_assessment = {building_id: FlowRouter.getParam('buildingId'), book_id: book_id, book_name: book.name, created_date: Date.now(), created_by: Meteor.user().profile.fullname, created_by_id: Meteor.user()._id};
      var new_id = Meteor.call('addAssessment', new_assessment);
      if(new_id) {
        $.publish('toast', [book.name+" assessment created", "Success", "success", 0]);
        return;
      }
      $.publish('toast', ["There was a problem adding an assessment", "Error", "error", 0]);
    },
    'click .assessment-type-selector': function(event, template) {
      event.preventDefault();
      Session.set('selected_assessment_type_id', this._id);
      $('#building-details').hide();
      $('#assessments-list').show();
    },
    'click .clear-assessment-type': function(event, template) {
      event.preventDefault();
      Session.set('selected_assessment_type_id', "");
      $('#assessments-list').hide();
      $('#building-details').show();
    },
    'click .delete-assessment': function(e) {
      var self = this;
      $("#delete_assessment_id").val($(event.target).closest('a').attr('assessment-id'));
      $("#deleteAssessmentModal").openModal();
    }
  });

  Template.deleteAssessmentModal.events({
    'click #go-ahead-and-delete-assessment': function(event) {
      var assessmentID = $("#delete_assessment_id").val();
      if(assessmentID == "") {
        $.publish('toast', ["Could not determine which assessment to remove", "Error", "error", 0]);
        return;
      }
      Meteor.call('removeAssessment', assessmentID);
      $.publish('toast', ["Assessment deleted", "Success", "success", 0]);
    }
  });
}
