import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './regionSnowload.html';

if (Meteor.isClient) {
  Template.regionSnowload.onCreated(function() {
    DocHead.setTitle("Snowloads | GNWT PWS");
    Session.set('roof_type', 'standard');
  });

  Template.regionSnowload.onRendered(function() {
    if(Meteor.isCordova){
      $(".content").css('height', '672px');
      $(".content").css('max-height', '672px');
    }else{
      $(".content").css('height', '778px');
      $(".content").css('max-height', '778px');
    }
    $('.dropdown-button').dropdown({
      constrain_width: true,
      hover: false, // Activate on hover
      gutter: 10, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    $('.modal-trigger').leanModal();
  });

  var getRoofType = function() {
    return Session.get('roof_type');
  }

  Template.regionSnowload.helpers({
    getRegion: function () {
      return Regions.findOne();
    },
    codes: function() {
      //console.log(getRoofType()); // uncomment to test reactivity of codes
      var c = Regions.findOne().snow_load_factors.codes;

      c.sort(function(a,b) { // sort by year, then by importance
        var key1A = new Date(a.year),
            key1B = new Date(b.year);
        if(key1A < key1B) return -1;
        if(key1A > key1B) return 1;
        var key2A = a.importance,
            key2B = b.importance;
        if(key2A == "Low importance" && key2B == "Normal importance") return -1;
        if(key2A == "Low importance" && key2B == "High importance") return -1;
        if(key2A == "Low importance" && key2B == "Post-disaster importance") return -1;
        if(key2A == "Normal importance" && key2B == "High importance") return -1;
        if(key2A == "Normal importance" && key2B == "Post-disaster importance") return -1;
        if(key2A == "High importance" && key2B == "Post-disaster importance") return -1;
        if(key2A == "Post-disaster importance" && key2B == "High importance") return 1;
        if(key2A == "Post-disaster importance" && key2B == "Normal importance") return 1;
        if(key2A == "Post-disaster importance" && key2B == "Low importance") return 1;
        if(key2A == "High importance" && key2B == "Normal importance") return 1;
        if(key2A == "High importance" && key2B == "Low importance") return 1;
        if(key2A == "Normal importance" && key2B == "Low importance") return 1;
        return 0;
      });
      return c.filter(function(e) {
        return e.roof == getRoofType();
      });
    },
    thresholds: function() {
      return Regions.findOne().snow_load_factors.thresholds;
    },
    factorBGColor: function(pitch, factor) {
      var thresholds = Regions.findOne().snow_load_factors.thresholds;
      var levels = Regions.findOne().snow_load_factors.levels[Session.get('roof_type')];
      //console.log(levels);
      if(levels) {
        //console.log("found levels");
        for(var i=0; i<levels.length; i++) {
          if(levels[i].pitch == pitch) {
            for(var j=0; j<(levels[i].levels.length); j++) {
              if(levels[i].levels[j] == levels[i].levels[j+1]) { // this is most often the case when all are zero
                return thresholds[levels[i].levels.length-1];
              }
              if((factor >= levels[i].levels[j] && factor <= levels[i].levels[j+1]) || Math.abs(factor - levels[i].levels[j+1]) <= 0.0001) {
                return thresholds[j+1];
              }
              if(factor < levels[i].levels[j]){
                return thresholds[j];
              } else {
                //console.log(factor+" "+levels[i].levels[j]+" "+thresholds[j]);
              }
            }
          }
        }
      }
      return '#ffffff'; //default white
    },
    formattedYear: function(y) {
      return moment(y).format("YYYY");
    },
    formattedFactor: function(factor) {
      return formattedNumber("", factor, 2);
    }
  });

  Template.regionSnowload.events({
    "click #btn_roof_standard": function(event, template){
       $("#btn_roof_type").text("Standard");
       Session.set('roof_type', 'standard');
       $('#btn_roof_type').dropdown('close');
       return false;
    },
    "click #btn_roof_slippery": function(event, template){
       $("#btn_roof_type").text("Slippery");
       Session.set('roof_type', 'slippery');
       $('#btn_roof_type').dropdown('close');
       return false;
    },
    'click .snowload-delete': function(e) {
      var self = $(this);
      Session.set('year', moment(self[0].year).format("YYYY"));
      Session.set('importance', self[0].importance);
      $("#deleteSnowloadFactorModal").openModal();
    },
    'click .snowload-edit': function(e) {
      var self = $(this);
      Session.set('year', moment(self[0].year).format("YYYY"));
      Session.set('importance', self[0].importance);
      $("#editSnowloadFactorModal").openModal();
    }
  });

  Template.deleteSnowloadFactorModal.events({
    'click #go-ahead-and-delete-factor': function(e) {
      var self = $(this); // current region
      //$.publish('toast', [self[0]._id+" "+Session.get('roof_type')+" "+Session.get('importance')+" "+Session.get('year'),"Factor","info",0]);
      Meteor.call('removeRegionalSnowloadFactors', self[0]._id, Session.get('roof_type'), Session.get('importance'), Session.get('year'));
      Meteor.call('updateRegionalSnowloadLevels', self[0]._id);
      $.publish('toast', ["Factor deleted", "Success", "success", 0]);
    }
  });

  Template.editSnowloadFactorModal.helpers({
    getCodes: function() {
      var self = $(this);
      //console.log(self);
      var c = self[0].snow_load_factors.codes;
      var c1 = c.filter(function(e) {
        var date = moment(e.year).format('YYYY');
        return e.roof == Session.get('roof_type') && e.importance == Session.get('importance') && date == Session.get('year');
      });
      //console.log(c1);
      return c1[0];
    },
    year: function () {
      return Session.get('year');
    },
    importance: function() {
      return Session.get('importance');
    },
    roofType: function() {
      return Session.get('roof_type');
    }
  });

  Template.editSnowloadFactorModal.events({
    'click #save-factor': function(e) {
      var self = $(this); // current region
      var pitches = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
      var error_present = false;
      pitches.forEach(function(e) {
        if(!isNumeric($("input[name='"+e+"']").val())) {
          $("#text_"+e+"_error").css('visibility', 'visible');
          $.publish('toast', ["Invalid factor value for "+e+" degrees", "Error", "error", 0]);
          error_present = true;
        }
      })
      if(!error_present) {
        $("#editSnowloadFactorModal").closeModal();
        var new_factors = [];
        pitches.forEach(function(e) {
          new_factors.push({pitch: e, factor: parseFloat($("input[name='"+e+"']").val())});
        })
        //console.log(new_factors);
        //$.publish('toast', [self[0]._id+" "+Session.get('roof_type')+" "+Session.get('importance')+" "+Session.get('year'),"Factor","info",0]);
        Meteor.call('updateRegionalSnowloadFactors', self[0]._id, Session.get('roof_type'), Session.get('importance'), Session.get('year'), new_factors);
        Meteor.call('updateRegionalSnowloadLevels', self[0]._id);
        $.publish('toast', ["Factors saved", "Success", "success", 0]);
      }
      return false;
    }
  });

  Template.addSnowloadFactorModal.helpers({
    getCodes: function() {
      var codes = [];
      var pitches = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
      pitches.forEach(function(e) {
        codes.push({pitch: e, factor: 0});
      });
      return codes;
    },
    roofType: function() {
      return Session.get('roof_type');
    }
  });

  Template.addSnowloadFactorModal.events({
    'click #add-factor': function(e) {
      var self = $(this); // current region
      var pitches = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
      var error_present = false;
      pitches.forEach(function(e) {
        if(!isNumeric($("input[name='add_"+e+"']").val())) {
          $("#add_text_"+e+"_error").css('visibility', 'visible');
          $.publish('toast', ["Invalid factor value for "+e+" degrees", "Error", "error", 0]);
          error_present = true;
        }
      })
      if(!error_present) {
        $("#addSnowloadFactorModal").closeModal();
        var new_factors = [];
        pitches.forEach(function(e) {
          new_factors.push({pitch: e, factor: parseFloat($("input[name='add_"+e+"']").val())});
        })
        //console.log(new_factors);
        //$.publish('toast', [self[0]._id+" "+Session.get('roof_type')+" "+Session.get('importance')+" "+Session.get('year'),"Factor","info",0]);
        Meteor.call('addRegionalSnowloadFactors', self[0]._id, Session.get('roof_type'), $('input[name="importance"]').val(), $('input[name="year"]').val(), new_factors);
        Meteor.call('updateRegionalSnowloadLevels', self[0]._id);
        $.publish('toast', ["Factors saved", "Success", "success", 0]);
      }
      return false;
    }
  });

  function formattedNumber(prefix, number, sigdigs) {
    var p = number.toFixed(sigdigs).split(".");
    return prefix + p[0].split("").reverse().reduce(function(acc, number, i, orig) {
        return  number=="-" ? acc : number + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
