function checkLoggedIn(ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('/');
  }
}
FlowRouter.triggers.exit(function() {
  if(Meteor.isClient) {
    $(".side-nav").sideNav('hide');
  }
});
FlowRouter.route('/', {
  name: 'home',
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'default' });
  }
});
FlowRouter.route('/myaccount', {
  name: 'account',
  triggersEnter: [checkLoggedIn],
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'account' });
  }
});
FlowRouter.route('/buildings', {
  name: 'buildings',
  triggersEnter: [checkLoggedIn],
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'buildings' });
  }
});
FlowRouter.route('/building/add', {
  name: 'buildingAdd',
  triggersEnter: [checkLoggedIn],
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'buildingAdd' });
  }
});
FlowRouter.route('/buildings/map', {
  name: 'buildingsMap',
  triggersEnter: [checkLoggedIn],
  subscriptions: function (params, queryParams) {
    this.register('buildings', Meteor.subscribe('buildingsForMap'));
  },
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'buildingsMap' });
  }
});
FlowRouter.route('/building/:buildingId', {
  name: 'buildingView',
  triggersEnter: [checkLoggedIn],
  subscriptions: function (params, queryParams) {
    this.register('building', Meteor.subscribe('singleBuilding', params.buildingId));
  },
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'buildingView' });
  }
});
FlowRouter.route('/building/edit/:buildingId', {
  name: 'buildingEdit',
  triggersEnter: [checkLoggedIn],
  subscriptions: function (params, queryParams) {
    this.register('building', Meteor.subscribe('singleBuilding', params.buildingId));
  },
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'buildingEdit' });
  }
});
FlowRouter.route('/regions', {
  name: 'regions',
  triggersEnter: [checkLoggedIn],
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'regions' });
  }
});
FlowRouter.route('/region/add', {
  name: 'regionAdd',
  triggersEnter: [checkLoggedIn],
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'regionAdd' });
  }
});
FlowRouter.route('/region/edit/:regionId', {
  name: 'regionEdit',
  triggersEnter: [checkLoggedIn],
  subscriptions: function (params, queryParams) {
    this.register('region', Meteor.subscribe('singleRegion', params.regionId));
  },
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'regionEdit' });
  }
});
FlowRouter.route('/users', {
  name: 'users',
  triggersEnter: [checkLoggedIn],
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'users' });
  }
});
FlowRouter.route('/user/add', {
  name: 'userAdd',
  triggersEnter: [checkLoggedIn],
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'userAdd' });
  }
});
FlowRouter.route('/user/edit/:userId', {
  name: 'userEdit',
  triggersEnter: [checkLoggedIn],
  subscriptions: function (params, queryParams) {
    this.register('user', Meteor.subscribe('singleUser', params.userId));
  },
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'userEdit' });
  }
});
