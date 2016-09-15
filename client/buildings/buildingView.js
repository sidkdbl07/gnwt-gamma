import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './buildingView.html';

if (Meteor.isClient) {
  Template.buildingView.onCreated(function() {
    DocHead.setTitle("Building | GNWT PWS");
  });

  Template.buildingView.helpers({
    getBuilding: function () {
      return Buildings.findOne();
    }
  });
}
