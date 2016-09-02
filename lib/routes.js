FlowRouter.route('/', {
  name: 'home',
  subscriptions: function (params, queryParams) {
    this.register('buildings', Meteor.subscribe('allBuildings'));
  },
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'buildingsList' });
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
