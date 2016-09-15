if (Meteor.isClient) {
  Template.regions.onCreated(function() {
    DocHead.setTitle("Regions | GNWT PWS");
  });

  Template.regions.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
    //$(window).bind('resize', function () {
    //  var b = $("#DataTables_Table_0").dataTable();
    //  $(".dataTables_scrollBody").height($(document).height() - 270);
    //  b.fnDraw();
    //});
  });

  Template.regions.helpers({

  });

  Template.regionTableButtons.onRendered( function() {
    $('.modal-trigger').leanModal();
  });

  Template.regionTableButtons.events({
    'click .region-delete': function(e) {
      var self = this;
      $("#delete_region_id").val(self.item._id);
      $("#deleteRegionModal").openModal();
    }
  });

  Template.deleteRegionModal.events({
    'click #go-ahead-and-delete-region': function(event) {
      var regionID = $("#delete_region_id").val();
      if(regionID == "") {
        $.publish('toast', ["Could not determine which region to remove", "Error", "error", 0]);
        return;
      }
      Meteor.call('removeRegion', regionID);
      $.publish('toast', ["Region deleted", "Success", "success", 0]);
    }
  });
}
