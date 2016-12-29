import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './regionSnowload.html';

if (Meteor.isClient) {
  Template.regionSnowload.onCreated(function() {
    DocHead.setTitle("Snowloads | GNWT PWS");
  });

  Template.regionSnowload.helpers({
    getRegion: function () {
      return Regions.findOne();
    },
    levels: function() {
      console.log(Regions.findOne());
      console.log(Regions.findOne().snow_load_factors.levels);
      return Regions.findOne().snow_load_factors.levels;
    },
    thresholds: function() {
      return Regions.findOne().snow_load_factors.thresholds;
    },
    snowloadMetrics: function() {
      return SnowLoadMetrics.find();
    }
  });
}
