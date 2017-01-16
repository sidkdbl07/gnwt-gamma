TabularTables = {};

TabularTables.Books = new Tabular.Table({
  name: "Books",
  collection: Books,
  pub: 'tabularBooks',
  allow: function() {
    return true;
  },
  paging: false,
  limit: 500,
  sScrollY: ((Meteor.isClient) ? $(document).height() - 205 : 400),
  bScrollCollapse: true,
  bFilter: false,
  bInfo: false,
  order: [[0, "asc"]],
  aoColumnDefs: [ { "sClass": "nowrap", "aTargets": [ 1 ] } ],
  extraFields: ['_id'],
  columns: [
    {data: "name", title: "Book Name", width: '80%'},
    {
      title: "",
      width: '20%',
      tmpl: Meteor.isClient && Template.bookTableButtons,
      tmplContext: function(rowData) {
        return {
          item: rowData,
          column: 'buttons'
        };
      }
    }
  ]
});

TabularTables.Buildings = new Tabular.Table({
  name: "Buildings",
  collection: Buildings,
  pub: 'tabularBuildings',
  allow: function() {
    return true;
  },
  paging: false,
  limit: 500,
  sScrollY: ((Meteor.isClient) ? $(document).height() - 205 : 400),
  bScrollCollapse: true,
  bFilter: false,
  bInfo: false,
  order: [[0, "asc"]],
  aoColumnDefs: [ { "sClass": "nowrap", "aTargets": [ 2 ] } ],
  extraFields: ['region_id', '_id'],
  columns: [
    {data: "name", title: "Building Name", width: '40%'},
    {data: 'region_name()', title: "Region", width: '20%'},
    {
      title: "",
      width: '40%',
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

TabularTables.Regions = new Tabular.Table({
  name: "Regions",
  collection: Regions,
  pub: 'tabularRegions',
  allow: function() {
    return true;
  },
  paging: false,
  limit: 500,
  sScrollY: ((Meteor.isClient) ? $(document).height() - 205 : 400),
  bScrollCollapse: true,
  bFilter: false,
  bInfo: false,
  order: [[0, "asc"]],
  aoColumnDefs: [ { "sClass": "nowrap", "aTargets": [ 1 ] } ],
  extraFields: ['_id'],
  columns: [
    {data: "name", title: "Region Name", width: '80%'},
    {
      title: "",
      width: '20%',
      tmpl: Meteor.isClient && Template.regionTableButtons,
      tmplContext: function(rowData) {
        return {
          item: rowData,
          column: 'buttons'
        };
      }
    }
  ]
});

TabularTables.Users = new Tabular.Table({
  name: "Users",
  collection: Meteor.users,
  pub: 'tabularUsers',
  allow: function() {
    return true;
  },
  paging: false,
  limit: 500,
  sScrollY: ((Meteor.isClient) ? $(document).height() - 205 : 400),
  bScrollCollapse: true,
  bFilter: false,
  bInfo: false,
  order: [[0, "asc"]],
  aoColumnDefs: [ { "sClass": "nowrap", "aTargets": [ 1 ] } ],
  extraFields: ['_id'],
  columns: [
    {data: "profile.fullname", title: "Name", width: '40%'},
    {data: "roles.default_group.[0]", title: "Role", width: '40%'},
    {
      title: "",
      width: '20%',
      tmpl: Meteor.isClient && Template.userTableButtons,
      tmplContext: function(rowData) {
        return {
          item: rowData,
          column: 'buttons'
        };
      }
    }
  ]
});
