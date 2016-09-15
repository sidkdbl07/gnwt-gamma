import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './buildingEdit.html';

if (Meteor.isClient) {
  Template.buildingEdit.onCreated(function() {
    DocHead.setTitle("Building | GNWT PWS");
  });

  Template.buildingEdit.helpers({
    getBuilding: function () {
      return Buildings.findOne();
    }
  });
}
