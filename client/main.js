import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.header.helpers({
  routeName: function () {
    return FlowRouter.getRouteName();
  }
});

Template.buildingsList.onCreated(function() {
  DocHead.setTitle("List of Buildings")
});

Template.buildingsList.helpers({
  getBuildings: function () {
    return Buildings.find({}, { sort: { createdAt: -1 }});
  }
});

Template.singleBuilding.onCreated(function() {
  DocHead.setTitle("A Building");
});

Template.singleBuilding.helpers({
  getBuilding: function () {
    return Buildings.findOne();
  }
});
