function isAdmin() {
  var loggedInUser = Meteor.user();
  if (loggedInUser && Roles.userIsInRole(loggedInUser, ['admin'], 'default_group') ) {
    return true;
  }
  return false;
}
function isSuperAdmin() {
  var loggedInUser = Meteor.user();
  if (loggedInUser && Meteor.user().emails[0].address == "kwakkels@ae.ca" ) {
    return true;
  }
  return false;
}
var Collections = {};

/////////////////////////////////
// assessments
Assessments = Collections.Assessments = new Meteor.Collection("Assessments");
if(Meteor.isCordova) Ground.Collection(Assessments);
Assessments.allow({
  remove: function() {
    return isAdmin();
  },
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  }
});
Meteor.methods({
  'addAssessment': function(doc) {
    var assessment_id = Assessments.insert(doc);
    // Copy book into the assessment_id
    var element_groups = ElementGroups.find({book_id: doc.book_id}, {sort: {order: 1}}).fetch();
    element_groups.forEach(function(group) {
      var group_id = group._id;
      delete group._id; // remove the book_element_group_id and replace
      group.assessment_id = assessment_id;
      var assessment_group_id = AssessmentElementGroups.insert(group);
      var book_elements = BookElements.find({book_id: doc.book_id, group_id: group_id}).fetch();
      book_elements.forEach(function(element) {
        delete element._id;
        delete element.group_id;
        element.group_id = assessment_group_id;
        element.assessment_id = assessment_id;
        AssessmentElements.insert(element);
      });
    });
    var book_rules = BookRules.find({book_id: doc.book_id}).fetch();
    book_rules.forEach(function(rule) {
      delete rule._id;
      rule.assessment_id = assessment_id;
      AssessmentRules.insert(rule);
    });

    return;
  },
  'editAssessment': function(doc) {
    return Assessments.update({_id: doc._id}, doc)
  },
  'removeAssessment': function(id) {
    AssessmentElementGroups.remove({assessment_id: id});
    AssessmentElements.remove({assessment_id: id});
    return Assessments.remove(id);
  }
});
if( Meteor.isClient ) {
  Ground.methodResume([
    'addAssessment',
    'editAssessment',
    'removeAssessment'
  ]);
}
/////////////////////////////////
// assessmentElementGroups
AssessmentElementGroups = Collections.AssessmentElementGroups = new Meteor.Collection("AssessmentElementGroups");
if(Meteor.isCordova) Ground.Collection(AssessmentElementGroups);
AssessmentElementGroups.allow({
  remove: function() {
    return true;
  },
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  }
});
/////////////////////////////////
// assessmentElements
AssessmentElements = Collections.AssessmentElements = new Meteor.Collection("AssessmentElements");
if(Meteor.isCordova) Ground.Collection(AssessmentElements);
AssessmentElements.allow({
  remove: function() {
    return true;
  },
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  }
});
/////////////////////////////////
// assessmentRules
AssessmentRules = Collections.AssessmentRules = new Meteor.Collection("AssessmentRules");
if(Meteor.isCordova) Ground.Collection(AssessmentRules);
AssessmentRules.allow({
  remove: function() {
    return true;
  },
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  }
});
/////////////////////////////////
// books
Books = Collections.Books = new Meteor.Collection("Books");
if(Meteor.isCordova) Ground.Collection(Books);
Books.allow({
  remove: function() {
    return isSuperAdmin();
  },
  insert: function() {
    return isSuperAdmin();
  },
  update: function() {
    return isSuperAdmin();
  }
});
Meteor.methods({
  'addBook': function(doc) {
    return Books.insert(doc);
  },
  'editBook': function(doc) {
    return Books.update({_id: doc._id}, doc)
  },
  'removeBook': function(id) {
    return Books.remove(id);
  }
});
if( Meteor.isClient ) {
  Ground.methodResume([
    'addBook',
    'editBook',
    'removeBook'
  ]);
}
/////////////////////////////////
// Book Elements
BookElements = Collections.BookElements = new Meteor.Collection("BookElements");
if(Meteor.isCordova) Ground.Collection(BookElements);
BookElements.allow({
  remove: function() {
    return isSuperAdmin();
  },
  insert: function() {
    return isSuperAdmin();
  },
  update: function() {
    return isSuperAdmin();
  }
});
Meteor.methods({
  'addBookElement': function(doc) {
    return BookElements.insert(doc);
  },
  'editBookElement': function(doc) {
    if(!doc.text || !doc.type || !doc.book_id) {
      $.publish('toast', ["There was a problem copying the element.", "Error", "error", 0]);
      return;
    }
    return BookElements.update({_id: doc._id}, doc)
  },
  'removeBookElement': function(id) {
    return BookElements.remove(id);
  }
});
if( Meteor.isClient ) {
  Ground.methodResume([
    'addBookElement',
    'editBookElement',
    'removeBookElement'
  ]);
}
/////////////////////////////////
// Book Rules
BookRules = Collections.BookRules = new Meteor.Collection("BookRules");
if(Meteor.isCordova) Ground.Collection(BookRules);
BookRules.allow({
  remove: function() {
    return isSuperAdmin();
  },
  insert: function() {
    return isSuperAdmin();
  },
  update: function() {
    return isSuperAdmin();
  }
});
Meteor.methods({
  'addBookRule': function(doc) {
    return BookRules.insert(doc);
  },
  'editBookRule': function(doc) {
    if(!doc || !("conditions" in doc) || !("targets" in doc) || !doc.book_id) {
      console.log(doc);
      $.publish('toast', ["There was a problem copying the rule.", "Error", "error", 0]);
      return;
    }
    return BookRules.update({_id: doc._id}, doc)
  },
  'removeBookRule': function(id) {
    var rule_to_remove = BookRules.findOne({_id: id});
    var rules = BookRules.find().fetch();
    rules.forEach(function(e) {
      if(e.order <= rule_to_remove.order) {
        e.order = e.order;
      } else {
        e.order = e.order - 1;
        BookRules.update({_id: e._id}, e);
      }
    });
    return BookRules.remove(id);
  }
});
if( Meteor.isClient ) {
  Ground.methodResume([
    'addBookRule',
    'editBookRule',
    'removeBookRule'
  ]);
}
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
///////////////////////////
// Element Groups
ElementGroups = Collections.ElementGroups = new Meteor.Collection("ElementGroups");
if(Meteor.isCordova) Ground.Collection(ElementGroups);
ElementGroups.allow({
  remove: function() {
    return isSuperAdmin();
  },
  insert: function() {
    return isSuperAdmin();
  },
  update: function() {
    return isSuperAdmin();
  }
});
Meteor.methods({
  'addElementGroup': function(doc) {
    var group_id = ElementGroup.insert(doc);
    return BookElements.insert({text: "Text 1", order: 0, type: 'textcomment', book_id: doc.book_id, group_id: group_id});
  },
  'editElementGroup': function(doc) {
    if(!doc.text || !doc.type || !doc.book_id) {
      $.publish('toast', ["There was a problem copying the group.", "Error", "error", 0]);
      return;
    }
    return ElementGroups.update({_id: doc._id}, doc)
  },
  'removeElementGroup': function(id) {
    return ElementGroups.remove(id);
  }
});
if( Meteor.isClient ) {
  Ground.methodResume([
    'addElementGroup',
    'editElementGroup',
    'removeElementGroup'
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
    var min_standard_level = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
    var max_standard_level = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    var min_slippery_level = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
    var max_slippery_level = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    codes.forEach(function(i) {
      for(var j=0; j < i.factors.length; j++) {
        if(i.roof == 'standard' && i.factors[j].factor < min_standard_level[j])
          min_standard_level[j] = i.factors[j].factor;
        if(i.roof == 'standard' && i.factors[j].factor > max_standard_level[j])
          max_standard_level[j] = i.factors[j].factor;
        if(i.roof == 'slippery' && i.factors[j].factor < min_slippery_level[j])
          min_slippery_level[j] = i.factors[j].factor;
        if(i.roof == 'slippery' && i.factors[j].factor > max_slippery_level[j])
          max_slippery_level[j] = i.factors[j].factor;
      }
    });
    for(var i=0; i<pitches.length; i++) {
      // Standard
      var standard_level = slippery_level = [0,1,2,3,4];
      if(max_standard_level[i] - min_standard_level[i] <= 0.01) {
        standard_level = [max_standard_level[i],max_standard_level[i],max_standard_level[i],max_standard_level[i],max_standard_level[i]];
      }else{
        var one_fifth = (max_standard_level[i] - min_standard_level[i]) / 5.0;
        standard_level = [min_standard_level[i] + 1 * one_fifth,
                          min_standard_level[i] + 2 * one_fifth,
                          min_standard_level[i] + 3 * one_fifth,
                          min_standard_level[i] + 4 * one_fifth,
                          max_standard_level[i],
                        ];
      }
      // Slippery
      if(max_slippery_level[i] - min_slippery_level[i] <= 0.01) {
        slippery_level = [max_slippery_level[i],max_slippery_level[i],max_slippery_level[i],max_slippery_level[i],max_slippery_level[i]];
      }else{
        var one_fifth = (max_slippery_level[i] - min_slippery_level[i]) / 5.0;
        slippery_level = [min_slippery_level[i] + 1 * one_fifth,
                          min_slippery_level[i] + 2 * one_fifth,
                          min_slippery_level[i] + 3 * one_fifth,
                          min_slippery_level[i] + 4 * one_fifth,
                          max_slippery_level[i],
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

//API
// if(Meteor.isServer) {
//   var Api = new Restivus({
//     useDefaultAuth: true,
//     prettyJson: true
//   });
//   // Add the following route to export Regions to my bootstrap file
//   Api.addCollection(Regions, {
//     authRequired: false
//   });
// }
