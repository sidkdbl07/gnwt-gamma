TabularTables = {};

TabularTables.Buildings = new Tabular.Table({
  name: "Buildings",
  collection: Buildings,
  pub: 'tabularBuildings',
  allow: function() {
    return true;
  },
  paging: false,
  limit: 500,
  scrollY: 400,
  scrollCollapse: true,
  bFilter: false,
  order: [[0, "asc"]],
  aoColumnDefs: [ { "sClass": "nowrap", "aTargets": [ 2 ] } ],
  extraFields: ['region_id', '_id'],
  columns: [
    {data: "name", title: "Building Name", width: '40%'},
    {data: 'region_name()', title: "Region", width: '40%'},
    {
      title: "",
      width: '20%',
      tmpl: Meteor.isClient && Template.buildingTableButtons,
      tmplContext: function(rowData) {
        return {
          item: rowData,
          column: 'buttons'
        };
      }
    }
  ]
});
