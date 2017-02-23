
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './buildingScorecard.html';

if (Meteor.isClient) {
  Template.buildingScorecard.onCreated(function() {
    DocHead.setTitle("Building Scorecard | GNWT PWS");
  });

  Template.buildingScorecard.onRendered(function() {
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

  Template.buildingScorecard.helpers({
    getBuilding: function () {
      return Buildings.findOne({_id: FlowRouter.getParam('buildingId')});
    }
  });
}
