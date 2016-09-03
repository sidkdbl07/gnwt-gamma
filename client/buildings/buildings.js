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
      console.log(this._id);
    }
  });
}
