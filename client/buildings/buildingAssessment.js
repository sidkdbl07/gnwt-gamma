import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './buildingAssessment.html';

if (Meteor.isClient) {

Template.buildingAssessment.helpers({
  assessmentText: function() {
    var assessment = Assessments.findOne({_id: FlowRouter.getParam('assessmentId')});
    if(!assessment) {
      return "";
    }
    return "This assessment was created "+moment(assessment.created_date).fromNow()+" ("+moment(assessment.created_date).format("MMM Do, YYYY")+") by "+assessment.created_by;
  },
  getAssessment: function() {
    return Assessments.findOne({_id: FlowRouter.getParam('assessmentId')});
  },
  getBuilding: function(){
     return Buildings.findOne({_id: FlowRouter.getParam('buildingId')});
  },
  getElementGroup: function(){
    return AssessmentElementGroups.findOne({assessment_id: FlowRouter.getParam('assessmentId'), order: parseInt(FlowRouter.getParam('order'))});
  }
});

Template.buildingAssessment.events({
  "click #foo": function(event, template){

  }
});

}
