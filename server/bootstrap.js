Meteor.startup(function () {
  if (Buildings.find().count() === 0) {
    Buildings.insert({
      name: 'Building #1',
      createdAt: new Date(2015, 0, 1)
    });
  }
});
