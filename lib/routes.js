FlowRouter.route('/', {
  name: 'home',
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'default' });
  }
});

FlowRouter.route('/myaccount', {
  name: 'account',
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'account' });
  }
});

FlowRouter.route('/buildings', {
  name: 'buildings',
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'buildings' });
  }
});

FlowRouter.route('/building/:buildingId', {
  name: 'building',
  subscriptions: function (params, queryParams) {
    this.register('building', Meteor.subscribe('singleBuilding', params.buildingId));
  },
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'singleBuilding' });
  }
});
