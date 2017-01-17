import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './buildingView.html';

if (Meteor.isClient) {
  Template.buildingView.onCreated(function() {
    DocHead.setTitle("Building | GNWT PWS");
  });

  Template.buildingView.onRendered(function() {
    $('#collapsible-potential-capacity').collapsible({
      accordion: false
    });
    $('#collapsible-actual-capacity').collapsible({
      accordion: false
    });
    $('#collapsible-assessments').collapsible({
      accordion: false
    });
  });

  Template.buildingView.helpers({
    getBuilding: function () {
      return Buildings.findOne();
    }
  });
}
