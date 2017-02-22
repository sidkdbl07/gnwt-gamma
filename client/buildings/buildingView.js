import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './buildingView.html';

if (Meteor.isClient) {
  Template.buildingView.onCreated(function() {
    DocHead.setTitle("Building | GNWT PWS");
  });

  Template.buildingView.onRendered(function() {

  });

  Template.buildingView.helpers({
    assessmentCount: function(book_id) {
      return Assessments.find({book_id: book_id, building_id: this._id}).count();
    },
    getBooks: function() {
      return Books.find().fetch();
    },
    getBuilding: function () {
      return Buildings.findOne({_id: FlowRouter.getParam('buildingId')});
    },
    isSelectedAssessmentType: function(book_id) {
      if(Session.get('selected_assessment_type_id') == book_id) {
        return true;
      }
      return false;
    },
    lastAssessment: function(book_id) {
      var count = Assessments.find({book_id: book_id, building_id: this._id}).count();
      if(count == 0) {
        return "There are no assessments of this type on record for this building.";
      } else {
        var assessment = Assessments.findOne({book_id: book_id, building_id: this._id}, {sort: {created_date: -1}})
        return "Last assessment: "+moment(assessment.created_date).fromNow()+" ()"+moment(assessment.created_date).format(DD-MMM-YYYY)+") by "+assessment.completed_by;
      }
    }
  });

  Template.buildingView.events({
    'click .assessment-type-selector': function(event, template) {
      event.preventDefault();
      Session.set('selected_assessment_type_id', this._id);
    },
    'click .clear-assessment-type': function(event, template) {
      event.preventDefault();
      Session.set('selected_assessment_type_id', "");
    }
  });
}
