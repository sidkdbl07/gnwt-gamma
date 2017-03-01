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
  },
  nextGroup: function() {
    return "/building/assessment/"+FlowRouter.getParam('buildingId')+"/"+FlowRouter.getParam('assessmentId')+"/"+(parseInt(FlowRouter.getParam('order')) + 1);
  },
  nextGroupExists: function() {
    var next_order = parseInt(FlowRouter.getParam('order')) + 1;
    var next_group_count = AssessmentElementGroups.find({assessment_id: FlowRouter.getParam('assessmentId'), order: next_order}).count();
    if(next_group_count > 0) {
      return true;
    }
    return false;
  },
  pageText: function() {
    var number_of_pages = AssessmentElementGroups.find({assessment_id: FlowRouter.getParam('assessmentId')}).count();
    return "Page "+(parseInt(FlowRouter.getParam('order')) + 1)+" of "+number_of_pages;
  },
  previousGroup: function() {
    return "/building/assessment/"+FlowRouter.getParam('buildingId')+"/"+FlowRouter.getParam('assessmentId')+"/"+(parseInt(FlowRouter.getParam('order')) - 1);
  },
  previousGroupExists: function() {
    if(parseInt(FlowRouter.getParam('order')) == 0) {
      return false;
    }
    var next_order = parseInt(FlowRouter.getParam('order')) - 1;
    var next_group_count = AssessmentElementGroups.find({assessment_id: FlowRouter.getParam('assessmentId'), order: next_order}).count();
    if(next_group_count > 0) {
      return true;
    }
    return false;
  },
});

Template.buildingAssessment.events({
  "click #foo": function(event, template){

  }
});

Template.buildingAssessment.onRendered(function() {
  if(Meteor.isCordova){
    $(".content").css('height', '672px');
    $(".content").css('max-height', '672px');
  }else{
    $(".content").css('height', '672px');
    $(".content").css('max-height', '672px'); //778
  }
})

}
