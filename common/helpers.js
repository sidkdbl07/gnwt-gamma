Buildings.helpers({
  region_name: function() {
    var region = Regions.findOne({_id: this.region_id});
    return region && region.name;
  }
});
