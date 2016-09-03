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
  columns: [
    {data: "name", title: "Building Name"},
    {data: 'region_name()', title: "Region"},
    {
      data: 'buttons', title: "",
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
