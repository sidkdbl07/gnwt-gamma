import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './buildingEdit.html';

if (Meteor.isClient) {
  Template.buildingEdit.onCreated(function() {
    DocHead.setTitle("Building | GNWT PWS");
  });

  Template.buildingEdit.onRendered(function() {
    $(".dropdown-button").dropdown({
      constrain_width: true,
      hover: false, // Activate on hover
      gutter: 10, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
  });

  Template.buildingEdit.helpers({
    getBuilding: function () {
      return Buildings.findOne();
    },
    getRegions: function () {
      return Regions.find({}, {sort: {name: 1}}).fetch();
    }
  });

  Template.buildingEdit.events({
    "click .building_region_selection": function(event, template){
       var region = event.target;
       $("#edit_building_region_id").val(region.id);
       $("#edit_building_region").html("<i class='material-icons right'>arrow_drop_down</i>"+region.text);
       return false;
    }
  });
}
