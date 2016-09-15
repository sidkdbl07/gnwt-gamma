if (Meteor.isClient) {
  Template.buildingAdd.onCreated(function() {
    DocHead.setTitle("Add a Building | GNWT PWS");
  });
  Template.buildingAdd.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
  });
}
