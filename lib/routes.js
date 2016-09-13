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

FlowRouter.route('/building/:buildingId', {
  name: 'buildingView',
  triggersEnter: [checkLoggedIn],
  subscriptions: function (params, queryParams) {
    this.register('building', Meteor.subscribe('singleBuilding', params.buildingId));
  },
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'singleBuilding' });
  }
});
FlowRouter.route('/building/edit/:buildingId', {
  name: 'buildingEdit',
  triggersEnter: [checkLoggedIn],
  subscriptions: function (params, queryParams) {
    this.register('building', Meteor.subscribe('singleBuilding', params.buildingId));
  },
  action: function (params, queryParams) {
    FlowLayout.render('main-layout', { top: 'header', main: 'singleBuilding' });
  }
});
