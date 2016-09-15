import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './regionEdit.html';

if (Meteor.isClient) {
  Template.regionEdit.onCreated(function() {
    DocHead.setTitle("Region | GNWT PWS");
  });

  Template.regionEdit.onRendered(function() {
    $('select').material_select();
    Materialize.updateTextFields();
  });

  Template.regionEdit.events({
    'click #save_a_region': function (event) {
      event.preventDefault();
      var regionID = $('#edit_region_id').val();
      var name = $('#edit_region_name').val();
      var wind_direction = $('#edit_region_wind_direction').val();
      var latitude = $('#edit_region_latitude').val();
      var longitude = $('#edit_region_longitude').val();
      if(Regions.find({$and: [ {name: name}, {_id: {$not: regionID}}]}).count() > 0) {
        $.publish('toast', ["A region with that name already exists", "Error", "error", 0]);
        return;
      }
      if(name.length < 1) {
        $.publish('toast', ["The region must have a name", "Error", "error", 0]);
        return;
      }
      if(longitude < -180 || longitude > 0 || latitude < 55 || latitude > 80 ) {
        $.publish('toast', ["You have entered invalid coordinates", "Error", "error", 0]);
        return;
      }
      Meteor.call('editRegion', {_id: regionID, name: name, wind_direction: wind_direction, location: {type: 'Point', coordinates: [longitude, latitude]}});
      $.publish('toast', ["Region saved", "Success", "success", 0]);
    }
  });

  Template.regionEdit.helpers({
    getRegion: function () {
      return Regions.findOne();
    },
    selectedIf: function(dir) {
      return Template.instance().data.wind_direction == dir ? 'selected' : '';
    }
  });
}
