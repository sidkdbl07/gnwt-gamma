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
    doc['snow_load_factors'] = {
      thresholds: ['#1b5e20', '#689f38', '#cddc39', '#f57c00', '#b71c1c'],
      levels: [
        {'standard': [0,0,0,0,0]},
        {'slippery': [0,0,0,0,0]}
      ],
      codes:[]
    };
    return Regions.insert(doc);
  },
  'editRegion': function(doc) {
    var region = Regions.findOne({_id: doc._id});
    doc['snow_load_factors'] = region.snow_load_factors;
    return Regions.update({_id: doc._id}, doc)
  },
  'removeRegion': function(id) {
    return Regions.remove(id);
  },
  'updateRegionalSnowloadFactors': function(id,roof,importance,year,factors) {
    //console.log(factors);
    var region = Regions.findOne({_id: id});
    var c = region.snow_load_factors.codes;
    var code = c.filter(function(e) {
      var date = moment(e.year).format('YYYY');
      return e.roof == roof && e.importance == importance && date == year;
    });
    code[0].factors = factors;
    return Regions.update({_id: id}, region);
  }
});
if( Meteor.isClient ) {
  Ground.methodResume([
    'addRegion',
    'editRegion',
    'removeRegion'
  ]);
}
