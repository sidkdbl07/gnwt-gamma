import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './regionSnowload.html';

if (Meteor.isClient) {
  Template.regionSnowload.onCreated(function() {
    DocHead.setTitle("Snowloads | GNWT PWS");
    Session.set('roof_type', 'slippery');
  });

  Template.regionSnowload.onRendered(function() {
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
      return c.filter(function(e) {
        return e.roof == getRoofType();
      });
    },
    thresholds: function() {
      return Regions.findOne().snow_load_factors.thresholds;
    },
    snowloadTable: function() {
      return SnowLoadTable.find();
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
      $.publish('toast', [self[0]._id+" "+Session.get('roof_type')+" "+Session.get('importance')+" "+Session.get('year'),"Factor","info",0]);
      //Meteor.call('removeRegionalSnowloadFactor', self[0]._id, Session.get('roof_type'), Session.get('importance'), Session.get('year'));
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
