import './regionAdd.html';

if (Meteor.isClient) {
  Template.regionAdd.onCreated(function() {
    DocHead.setTitle("Add a Region | GNWT PWS");
  });
  Template.regionAdd.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
    $('select').material_select();
  });
  Template.regionAdd.events({
    'click #save_new_region': function (event) {
      event.preventDefault();
      var name = $('#create_region_name').val();
      var wind_direction = $('#create_region_wind_direction').val();
      var latitude = $('#create_region_latitude').val();
      var longitude = $('#create_region_longitude').val();
      if(Regions.find({name: name}).count() > 0) {
        $.publish('toast', ["A region with that name already exists", "Error", "error", 0]);
        return;
      }
      if(name.length < 1) {
        $.publish('toast', ["You must enter a name for this region", "Error", "error", 0]);
        return;
      }
      if(longitude < -180 || longitude > 0 || latitude < 55 || latitude > 80 ) {
        $.publish('toast', ["You have entered invalid coordinates", "Error", "error", 0]);
        return;
      }
      Meteor.call('addRegion', {name: name, wind_direction: wind_direction, location: {type: 'Point', coordinates: [longitude, latitude]}});
      $.publish('toast', ["New region created", "Success", "success", 0]);
      $('#create_region_name').val("");
      $('#create_region_wind_direction').val("");
    }
  });
}
