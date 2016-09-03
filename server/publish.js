Meteor.publish('singleBuilding', function (buildingId) {
  return Buildings.find({ _id: buildingId });
});

//////////////////////////
// Old subscriptions
Meteor.publish("buildingsForMap", function() {
  return Buildings.find({}, {fields: {name:1, location:1}});
});

Meteor.publish("buildingsForList", function() {
  return Buildings.find({}, {fields: {_id:1}});
});

Meteor.publishComposite("tabularBuildings", function(tableName, ids, fields) {
  check(tableName, String);
  check(ids, Array);
  check(fields, Match.Optional(Object));

  this.unblock();

  return {
    find: function() {
      this.unblock()
      return Buildings.find({_id: {$in: ids}}, {fields: fields});
    },
    children: [
      {
        find: function(building) {
          this.unblock();
          return Regions.find({_id: building.region_id}, {limit: 1, fields: {name: 1}, sort: {_id: 1}});
        }
      }
    ]
  }
});

Meteor.publish("directory", function() {
  var my_groups = Roles.getGroupsForUser(this.userId);
  if(this.userId && Roles.userIsInRole(this.userId, ['admin'], my_groups)) {
    return Meteor.users.find();
  } else {
    return [];
  }
});

Meteor.publish('regions', function() {
  return Regions.find({}, {fields: {name: 1}});
});

Meteor.publish('region', function(id) {
  return Regions.find({_id: id});
});

Meteor.publish('usersInMyGroup', function() {
  if(Roles.userIsInRole(this.userId, ['admin'], Roles.GLOBAL_GROUP)) {
    return Meteor.users.find();
  } else {
    var my_group = Roles.getGroupsForUser(this.userId)[0];
    var query = {};
    query['roles.'+my_group] = {$exists: true};
    return Meteor.users.find(query, {fields:{emails:1, profile:1, roles:1}});
  }
});
