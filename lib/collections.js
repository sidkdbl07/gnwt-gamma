function isAdmin() {
  var loggedInUser = Meteor.user();
  if (loggedInUser && Roles.userIsInRole(loggedInUser, ['admin'], 'default_group') ) {
    return true;
  }
  return false;
}
var Collections = {};
/////////////////////////////////
// Buildings
Buildings = Collections.Buildings = new Meteor.Collection("Buildings");
if (Meteor.isCordova) Ground.Collection(Buildings);
Buildings.allow({
  remove: function() {
    return isAdmin();
  },
  insert: function() {
    return isAdmin();
  },
  update: function() {
    return true;
  }
});
Meteor.methods({
  'addBuilding': function(doc) {
    return Buildings.insert(doc);
  },
  'editBuilding': function(doc) {
    return Buildings.update({_id: doc._id}, doc)
  },
  'removeBuilding': function(id) {
    return Buildings.remove(id);
  }
});
if( Meteor.isClient ) {
  Ground.methodResume([
    'addBuilding',
    'editBuilding',
    'removeBuilding'
  ]);
}

/////////////////////////////////
// Regions
Regions = Collections.Regions = new Meteor.Collection("Regions");
if (Meteor.isCordova) Ground.Collection(Regions);
Regions.allow({
  remove: function() {
    return isAdmin();
  },
  insert: function() {
    return isAdmin();
  },
  update: function() {
    return true;
  }
});
Meteor.methods({
  'addRegion': function(doc) {
    return Regions.insert(doc);
  },
  'editRegion': function(doc) {
    return Regions.update({_id: doc._id}, doc)
  },
  'removeRegion': function(id) {
    return Regions.remove(id);
  }
});
Regions.helpers({ // requires dburles:collection-helpers
  snowloadFactorsMinMax: function(regionID, year, pitch) {
    var regions = Regions.find({_id: regionID});
  }
});
if( Meteor.isClient ) {
  Ground.methodResume([
    'addRegion',
    'editRegion',
    'removeRegion'
  ]);
}
