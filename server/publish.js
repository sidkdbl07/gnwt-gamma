Meteor.publish('allBuildings', function () {
  return Buildings.find({});
});

Meteor.publish('singleBuilding', function (buildingId) {
  return Buildings.find({ _id: buildingId });
});
