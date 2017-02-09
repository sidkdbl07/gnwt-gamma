Meteor.publish('singleBook', function (bookId) {
  return Books.find({ _id: bookId });
});
Meteor.publish('singleBookElements', function (bookId) {
  var be = BookElements.find({ book_id: bookId });
  return be;
});
Meteor.publish('singleBookElementGroups', function (bookId) {
  var eg = ElementGroups.find({ book_id: bookId });
  return eg;
});
Meteor.publish('singleBookRules', function (bookId) {
  var r = BookRules.find({ book_id: bookId });
  return r;
});
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

Meteor.publish("directory", function() {
  var my_groups = Roles.getGroupsForUser(this.userId);
  if(this.userId && Roles.userIsInRole(this.userId, ['admin'], my_groups)) {
    return Meteor.users.find();
  } else {
    return [];
  }
});
Meteor.publish("tabularBooks", function(tableName, ids, fields) {
  check(tableName, String);
  check(ids, Array);
  check(fields, Match.Optional(Object));

  return Books.find({_id: {$in: ids}}, {fields: fields});
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

Meteor.publish("tabularRegions", function(tableName, ids, fields) {
  check(tableName, String);
  check(ids, Array);
  check(fields, Match.Optional(Object));

  return Regions.find({_id: {$in: ids}}, {fields: fields});
});

Meteor.publish("tabularUsers", function(tableName, ids, fields) {
  check(tableName, String);
  check(ids, Array);
  check(fields, Match.Optional(Object));

  if(Roles.userIsInRole(this.userId, ['admin'], Roles.GLOBAL_GROUP)) {
    return Meteor.users.find({_id: {$in: ids}}, {fields: fields});
  } else {
    var my_group = Roles.getGroupsForUser(this.userId)[0];
    var query = {};
    //query['roles.'+my_group] = {$exists: true};
    query['_id'] = {$in: ids};
    //console.log(query);
    return Meteor.users.find(query, {fields: fields});
  }
});

Meteor.publish('regions', function() {
  return Regions.find({}, {fields: {name: 1}});
});

Meteor.publish('singleRegion', function(id) {
  var myRegion = Regions.find({_id: id});
  return myRegion;
});

Meteor.publish('regionSnowloadTable', function(id) {

});

Meteor.publish('singleUser', function (userId) {
  return Meteor.users.find({ _id: userId }, {fields: {emails:1, profile:1, roles:1}});
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
