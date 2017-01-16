import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './buildingView.html';

if (Meteor.isClient) {
  Template.buildingView.onCreated(function() {
    DocHead.setTitle("Building | GNWT PWS");
  });

  Template.buildingView.onRendered(function() {
    console.log("Rendered");
  });

  Template.buildingView.helpers({
    collapsibleMaker: function() {
      console.log("Making collapsibles");
      $('.collapsible').collapsible({
        accordion: false
      });
    },
    getBuilding: function () {
      return Buildings.findOne();
    }
  });
}
