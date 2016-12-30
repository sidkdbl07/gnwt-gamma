import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  var default_users = [
    {name: "Sid Kwakkel", email: "kwakkels@ae.ca", password: Meteor.settings.private.superAdminPass, roles: ['admin'], group: Roles.GLOBAL_GROUP},
    {name: "Charlie Administrator", email: "admin@some.com", password: "12345", roles: ['admin'], group: 'default_group'},
    {name: "Jonny FieldUser", email: "field@some.com", password: "12345", roles: ['field'], group: 'default_group'},
    {name: "Suzie Manager", email: "manager@some.com", password: "12345", roles: ['manager'], group: 'default_group'}
  ];

  if (Meteor.users.find().count() === 0) {
    _.each(default_users, function(user) {
      var id;
      id = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: {
          fullname: user.name
        }
      });
      if(user.roles.length > 0) {
        Roles.addUsersToRoles(id, user.roles, user.group);
      }
    });
  }
  Ground.Collection(Meteor.users);
  if(Meteor.isCordova) Ground.Collection(Roles);

  ////////////////////////////////
  // Regions
  if (Regions.find().count() === 0) {
    var ft_simpson = Regions.insert({name: "Fort Simpson",
                                     wind_direction: "NW",
                                     location: {type: 'Point', coordinates: [-121.3530, 61.8628]},
                                     snow_load_factors: {
                                       thresholds: ['#1b5e20', '#689f38', '#cddc39', '#f57c00', '#b71c1c'],
                                       levels: [
                                         {'standard': [0,0,0,0,0]},
                                         {'slippery': [0,0,0,0,0]}
                                       ],
                                       codes:[
                                         { year: new Date(1941,0,1), roof: 'standard', importance: 'all', factors: [
                                           { pitch: 0, factor: 1.92 },
                                           { pitch: 5, factor: 1.92 },
                                           { pitch: 10, factor: 1.92 },
                                           { pitch: 15, factor: 1.92 },
                                           { pitch: 20, factor: 1.92 },
                                           { pitch: 25, factor: 1.70 },
                                           { pitch: 30, factor: 1.47 },
                                           { pitch: 35, factor: 1.25 },
                                           { pitch: 40, factor: 1.03 },
                                           { pitch: 45, factor: 0.80 },
                                           { pitch: 50, factor: 0.58 },
                                           { pitch: 55, factor: 0.35 },
                                           { pitch: 60, factor: 0.13 },
                                           { pitch: 65, factor: 0.00 },
                                           { pitch: 70, factor: 0.00 },
                                           { pitch: 75, factor: 0.00 },
                                           { pitch: 80, factor: 0.00 },
                                           { pitch: 85, factor: 0.00 },
                                           { pitch: 90, factor: 0.00 }
                                           ]
                                         },
                                         { year: new Date(1953,0,1), roof: 'standard', importance: 'all', factors: [
                                           { pitch: 0, factor: 2.30 },
                                           { pitch: 5, factor: 2.30 },
                                           { pitch: 10, factor: 2.30 },
                                           { pitch: 15, factor: 2.30 },
                                           { pitch: 20, factor: 2.30 },
                                           { pitch: 25, factor: 2.03 },
                                           { pitch: 30, factor: 1.76 },
                                           { pitch: 35, factor: 1.50 },
                                           { pitch: 40, factor: 1.23 },
                                           { pitch: 45, factor: 0.96 },
                                           { pitch: 50, factor: 0.69 },
                                           { pitch: 55, factor: 0.42 },
                                           { pitch: 60, factor: 0.16 },
                                           { pitch: 65, factor: 0.00 },
                                           { pitch: 70, factor: 0.00 },
                                           { pitch: 75, factor: 0.00 },
                                           { pitch: 80, factor: 0.00 },
                                           { pitch: 85, factor: 0.00 },
                                           { pitch: 90, factor: 0.00 }
                                           ]
                                         },
                                         { year: new Date(1953,0,1), roof: 'slippery', importance: 'all', factors: [
                                           { pitch: 0, factor: 2.30 },
                                           { pitch: 5, factor: 2.30 },
                                           { pitch: 10, factor: 2.30 },
                                           { pitch: 15, factor: 2.30 },
                                           { pitch: 20, factor: 2.30 },
                                           { pitch: 25, factor: 2.03 },
                                           { pitch: 30, factor: 1.76 },
                                           { pitch: 35, factor: 1.50 },
                                           { pitch: 40, factor: 1.23 },
                                           { pitch: 45, factor: 0.96 },
                                           { pitch: 50, factor: 0.69 },
                                           { pitch: 55, factor: 0.42 },
                                           { pitch: 60, factor: 0.16 },
                                           { pitch: 65, factor: 0.00 },
                                           { pitch: 70, factor: 0.00 },
                                           { pitch: 75, factor: 0.00 },
                                           { pitch: 80, factor: 0.00 },
                                           { pitch: 85, factor: 0.00 },
                                           { pitch: 90, factor: 0.00 }
                                           ]
                                         }
                                       ]
                                     }
    });
    var ft_smith = Regions.insert({name: "Fort Smith",
                                   wind_direction: "NW",
                                   location: {type: 'Point', coordinates: [-111.8849, 60.0055]},
                                   snow_load_factors: {
                                     thresholds: ['#1b5e20', '#689f38', '#cddc39', '#f57c00', '#b71c1c'],
                                     levels:[]
                                   }
    });
    var inuvik = Regions.insert({name: "Inuvik",
                                 wind_direction: "NW",
                                 location: {type: 'Point', coordinates: [-133.7230, 68.3607]},
                                 snow_load_factors: {
                                   thresholds: ['#1b5e20', '#689f38', '#cddc39', '#f57c00', '#b71c1c'],
                                   levels:[]
                                 }
    });
    var yellowknife = Regions.insert({name: "Yellowknife",
                                      wind_direction: "NW",
                                      location: {type: 'Point', coordinates: [-114.3718, 62.4540]},
                                      snow_load_factors: {
                                        thresholds: ['#1b5e20', '#689f38', '#cddc39', '#f57c00', '#b71c1c'],
                                        levels:[]
                                      }
    });
  }

  /////////////////////////////////
  // Buildings
  if (Buildings.find().count() === 0) {
    Buildings.insert({name: 'DOT Airport Combined Services',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.4491216533, 62.4664625654]}}
    );
    Buildings.insert({name: 'Air Terminal Building',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.438250, 62.47119]}}
    );
    Buildings.insert({name: 'Regional Services Complex',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.4263904504, 62.4701031231]}}
    );
    Buildings.insert({name: 'Legislative Assembly Building',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3825279552, 62.4596318888]}}
    );
    Buildings.insert({name: 'Prince Of Wales Northern Heritage',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3802426274, 62.4564284676]}}
    );
    Buildings.insert({name: 'Arthur Laing Building',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3701928837, 62.4545877452]}}
    );
    Buildings.insert({name: 'Stuart Hodgson Building',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3694379143, 62.4543295046]}}
    );
    Buildings.insert({name: 'PWS Maintenance Shop',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3614416725, 62.4561461408]}}
    );
    Buildings.insert({name: 'PWS North Slave Office',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3613373648, 62.4558162323]}}
    );
    Buildings.insert({name: 'Tiaga Laboratory',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3618911999, 62.4539589051]}}
    );
    Buildings.insert({name: 'CS Lord Geoscience',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3610392107, 62.4537289121]}}
    );
    Buildings.insert({name: 'Rockhill - Apartments',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3620969985, 62.4492114181]}}
    );
    Buildings.insert({name: 'Stanton Hospital',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.4047627701, 62.4474133093]}}
    );
    Buildings.insert({name: 'Central Warehouse',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.4071226425, 62.444748241]}}
    );
    Buildings.insert({name: 'Data Center',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.4059290005, 62.4444646421]}}
    );
    Buildings.insert({name: 'NSCF - Young Offenders',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.4052411237, 62.4360010041]}}
    );
    Buildings.insert({name: 'NSCF - Adult Facility',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.4046048057, 62.43482358]}}
    );
    Buildings.insert({name: 'ENR Warehouse',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.351271272, 62.4627292558]}}
    );
    Buildings.insert({name: 'ENR Regional Office',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.35169238, 62.4624948647]}}
    );
    Buildings.insert({name: 'ENR Lab Complex',
                      region_id: yellowknife,
                      location: { type: 'Point', coordinates: [-114.3511075912, 62.4623174136]}}
    );
  }
});
