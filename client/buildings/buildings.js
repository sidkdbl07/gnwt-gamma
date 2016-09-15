if (Meteor.isClient) {
  Template.buildings.onCreated(function() {
    DocHead.setTitle("Buildings | GNWT PWS");
  });

  Template.buildings.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
    //$(window).bind('resize', function () {
    //  var b = $("#DataTables_Table_0").dataTable();
    //  $(".dataTables_scrollBody").height($(document).height() - 270);
    //  b.fnDraw();
    //});
  });

  Template.buildings.helpers({

  });

  Template.buildingTableButtons.onRendered( function() {
    $('.modal-trigger').leanModal();
  });

  Template.buildingTableButtons.events({
    'click .building-delete': function(e) {
      var self = this;
      $("#delete_building_id").val(self.item._id);
      $("#deleteBuildingModal").openModal();
    }
  });

  Template.deleteBuildingModal.events({
    'click #go-ahead-and-delete-building': function(event) {
      var buildingID = $("#delete_building_id").val();
      if(buildingID == "") {
        $.publish('toast', ["Could not determine which building to remove", "Error", "error", 0]);
        return;
      }
      Meteor.call('removeBuilding', buildingID);
      $.publish('toast', ["Building deleted", "Success", "success", 0]);
    }
  });
}
