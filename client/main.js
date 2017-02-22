import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if (Meteor.isClient) {
  Meteor.autorun(function () {
    var stat;
    if (Meteor.status().status === "connected") {
        stat = 'online'
    }
    else if (Meteor.status().status === "connecting") {
        stat = 'connecting'
    }
    else {
        stat = 'offline';
    }
    Session.set('status',stat);
  });

  Template.header.helpers({
    networkStatus: function() {
      return Session.get('status');
    },
    networkStatusIcon: function() {
      if(Session.get('status') == 'online') return 'wifi_tethering';
      if(Session.get('status') == 'connecting') return 'more_horiz';
      if(Session.get('status') == 'offline') return 'portable_wifi_off';
      return 'help';
    },
    networkStatusColor: function() {
      if(Session.get('status') == 'online') return 'light-green';
      if(Session.get('status') == 'connecting') return 'amber';
      if(Session.get('status') == 'offline') return 'text-accent-2 red';
      return 'white';
    },
    routeName: function () {
      return FlowRouter.getRouteName();
    }
  });

  Template.navigationButton.events({
    'click #submit_logout': function (event) {
      event.preventDefault();
      Meteor.logout();
      FlowRouter.go('/');
      $.publish('toast', ["You have been logged out", "Logout Successful!", "success"]);
    }
  });

  Template.navigationButton.onRendered(function() {
    $("#menu-button").sideNav({
      menuWidth: 300,
      edge: 'left'
    });
    $('.collapsible').collapsible({accordion: true});
  });

  // Publication / Subscription
  (function($) {
    var o = $({});
    $.subscribe = function() {
      o.on.apply(o, arguments);
    };
    $.unsubscribe = function() {
      o.off.apply(o, arguments);
    };
    $.publish = function() {
      o.trigger.apply(o, arguments);
    };
  }(jQuery));

  $.subscribe("toast", function(e, message, title, type, loading) {
    var color = "teal";
    if(type == "error")
      color = "red";
    if(type == "warning")
      color = "amber";
    if(type == "success")
      color = "green"
    var m = "<p>"+title+"<br/>"+message+"</p>";
    if(loading) {
      mt = '<div class="preloader-wrapper small active"><div class="spinner-layer"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div><div class="btn-flat white black-text">'+m+'</div>';
      Materialize.toast($(mt), 'stay-on', 'white');
    } else {
      Materialize.toast($(m), 3000, color);
    }
  });
}
