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
    return isAdmin();
  }
});
Meteor.methods({
  'addRegion': function(doc) {
    doc['snow_load_factors'] = {
      thresholds: ['#b71c1c','#f57c00', '#cddc39', '#689f38', '#1b5e20'],
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
  'addRegionalSnowloadFactors': function(id,roof,importance,year,factors) {
    var region = Regions.findOne({_id: id});
    var c = region.snow_load_factors.codes;
    c.push(
      { year: new Date(parseInt(year),0,1), roof: roof, importance: importance, factors: factors }
    );
    return Regions.update({_id: id}, region);
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
  },
  'removeRegionalSnowloadFactors': function(id,roof,importance,year) {
    //console.log(factors);
    var region = Regions.findOne({_id: id});
    var c = region.snow_load_factors.codes;
    for(var i=0; i<c.length; i++) {
      var date = moment(c[i].year).format('YYYY');
      if(c[i].roof==roof && c[i].importance==importance && date==year) {
        c.splice(i,1);
      }
    }
    return Regions.update({_id: id}, region);
  },
  'updateRegionalSnowloadLevels': function(id) {
    var region = Regions.findOne({_id: id});
    var pitches = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
    var levels = {'standard': [], 'slippery': []};
    var codes = region.snow_load_factors.codes;
    // find min and max for each pitch
    var min_standard_level = min_slippery_level = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
    var max_standard_level = max_slippery_level = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    codes.forEach(function(i) {
      for(var j=0; j < i.factors.length; j++) {
        if(i.roof == 'standard' && i.factors[j].factor < min_standard_level[j])
          min_standard_level[j] = i.factors[j].factor;
        if(i.roof == 'standard' && i.factors[j].factor > max_standard_level[j])
          max_standard_level[j] = i.factors[j].factor;
        if(i.roof == 'slippery' && i.factors[j].factor < min_slippery_level[j])
          min_standard_level[j] = i.factors[j].factor;
        if(i.roof == 'slippery' && i.factors[j].factor > max_slippery_level[j])
          max_slippery_level[j] = i.factors[j].factor;
      }
    });
    for(var i=0; i<pitches.length; i++) {
      var standard_level = slippery_level = [0,1,2,3,4];
      if(max_standard_level[i] - min_standard_level[i] <= 0.01) {
        standard_level = [max_standard_level[i],max_standard_level[i],max_standard_level[i],max_standard_level[i],max_standard_level[i]];
      }else{
        var one_fifth = (max_standard_level[i] - min_standard_level[i]) / 5.0;
        standard_level = [min_standard_level[i] + 1 * one_fifth,
                          min_standard_level[i] + 2 * one_fifth,
                          min_standard_level[i] + 3 * one_fifth,
                          min_standard_level[i] + 4 * one_fifth,
                          min_standard_level[i] + 5 * one_fifth,
                        ];
      }
      if(max_slippery_level[i] - min_slippery_level[i] <= 0.01) {
        slippery_level = [0,max_slippery_level[i],max_slippery_level[i],max_slippery_level[i],max_slippery_level[i]];
      }else{
        var one_fifth = (max_slippery_level[i] - min_slippery_level[i]) / 5.0;
        slippery_level = [min_slippery_level[i] + 1 * one_fifth,
                          min_slippery_level[i] + 2 * one_fifth,
                          min_slippery_level[i] + 3 * one_fifth,
                          min_slippery_level[i] + 4 * one_fifth,
                          min_slippery_level[i] + 5 * one_fifth,
                        ];
      }
      levels.standard.push({pitch: pitches[i], levels: standard_level});
      levels.slippery.push({pitch: pitches[i], levels: slippery_level});
    }
    region.snow_load_factors.levels = levels;
    //console.log(levels);
    return Regions.update({_id: id}, region);
  }
});
if( Meteor.isClient ) {
  Ground.methodResume([
    'addRegion',
    'editRegion',
    'removeRegion',
    'updateRegionalSnowloadFactors',
    'removeRegionalSnowloadFactors',
    'updateRegionalSnowloadLevels'
  ]);
}
