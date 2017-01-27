Template.elementGroupDetails.onRendered(function() {
  this.autorun(function(){
    Tracker.afterFlush(function(){
      // no initializations
    });
  });
});

Template.elementGroupDetails.helpers({
  'allowMultiple': function() {
    if(typeof this.allow_multiple != 'undefined' && this.allow_multiple) {
      return 'checked';
    }else{
      return '';
    }
  }
});

Template.elementGroupDetails.events({
  'click .delete-group': function(event) {
    event.preventDefault();
    var groupID = $(event.target).attr('group_id');
    if(typeof groupID == 'undefined' || groupID == "") {
      $.publish('toast', ["Could not determine which section to remove", "Error", "error", 0]);
      return;
    }
    Meteor.call('removeElementGroup', groupID);
    $.publish('toast', ["Book section deleted", "Success", "success", 0]);
  },
  'click .save-group': function(event) {
    event.preventDefault();
    var groupID = $(event.target).attr('group_id');
    var groupType = $(event.target).attr('group_type');
    if(typeof groupID == 'undefined' || groupID == "") {
      $.publish('toast', ["Could not determine which section to save", "Error", "error", 0]);
      return;
    }
    if(typeof groupType == 'undefined' || groupType == "") {
      $.publish('toast', ["Could not determine which group type to save", "Error", "error", 0]);
      return;
    }
    var group = ElementGroups.findOne({_id: groupID});
    group.text = $('#text_'+groupID).val();
    group.allow_multiple = (($('#allowmultiple_'+groupID).is(':checked'))?true:false);

    Meteor.call('editElementGroup', group);
    $.publish('toast', ["Book section saved", "Success", "success", 0]);
  }
});
