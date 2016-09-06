if (Meteor.isClient) {
  Template.buildings.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
  });

  Template.buildings.helpers({

  });

  Template.deleteBuildingModal.onRendered( function() {
    $('.modal-trigger').leanModal();
  });

  Template.buildingTableButtons.events({
    'click .building-edit': function(e) {
      var self = this;
      console.log(self.item._id);
    },
    'click .building-view': function(e) {
      var self = this;
      console.log(self.item._id);
    }
  });
}
