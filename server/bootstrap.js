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
    var ft_simpson = Regions.insert({
      "name": "Fort Simpson",
      "wind_direction": "N",
      "location": {"type": "Point","coordinates": ["-121.353","61.8628"]},
      "snow_load_factors": {
        "thresholds": [
          "#b71c1c",
          "#f57c00",
          "#cddc39",
          "#689f38",
          "#1b5e20"
        ],
        "levels": {
          "standard": [
            {
              "pitch": 0,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 5,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 10,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 15,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 20,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 25,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 30,
              "levels": [
                1.662,
                1.854,
                2.0460000000000003,
                2.238,
                2.43
              ]
            },
            {
              "pitch": 35,
              "levels": [
                1.428,
                1.606,
                1.784,
                1.9620000000000002,
                2.14
              ]
            },
            {
              "pitch": 40,
              "levels": [
                1.194,
                1.358,
                1.522,
                1.686,
                1.85
              ]
            },
            {
              "pitch": 45,
              "levels": [
                0.9520000000000001,
                1.104,
                1.256,
                1.408,
                1.56
              ]
            },
            {
              "pitch": 50,
              "levels": [
                0.72,
                0.86,
                1,
                1.1400000000000001,
                1.28
              ]
            },
            {
              "pitch": 55,
              "levels": [
                0.478,
                0.606,
                0.734,
                0.862,
                0.99
              ]
            },
            {
              "pitch": 60,
              "levels": [
                0.244,
                0.358,
                0.472,
                0.586,
                0.7
              ]
            },
            {
              "pitch": 65,
              "levels": [
                0.08199999999999999,
                0.16399999999999998,
                0.24599999999999997,
                0.32799999999999996,
                0.41
              ]
            },
            {
              "pitch": 70,
              "levels": [
                0.026000000000000002,
                0.052000000000000005,
                0.07800000000000001,
                0.10400000000000001,
                0.13
              ]
            },
            {
              "pitch": 75,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 80,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 85,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 90,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ],
          "slippery": [
            {
              "pitch": 0,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 5,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 10,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 15,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 20,
              "levels": [
                1.5719999999999998,
                1.754,
                1.936,
                2.118,
                2.3
              ]
            },
            {
              "pitch": 25,
              "levels": [
                1.404,
                1.588,
                1.772,
                1.956,
                2.14
              ]
            },
            {
              "pitch": 30,
              "levels": [
                1.276,
                1.492,
                1.7080000000000002,
                1.9240000000000002,
                2.14
              ]
            },
            {
              "pitch": 35,
              "levels": [
                1.096,
                1.292,
                1.488,
                1.684,
                1.88
              ]
            },
            {
              "pitch": 40,
              "levels": [
                0.906,
                1.082,
                1.258,
                1.4340000000000002,
                1.61
              ]
            },
            {
              "pitch": 45,
              "levels": [
                0.724,
                0.878,
                1.032,
                1.186,
                1.34
              ]
            },
            {
              "pitch": 50,
              "levels": [
                0.534,
                0.668,
                0.802,
                0.936,
                1.07
              ]
            },
            {
              "pitch": 55,
              "levels": [
                0.32000000000000006,
                0.44000000000000006,
                0.56,
                0.6800000000000002,
                0.8
              ]
            },
            {
              "pitch": 60,
              "levels": [
                0.10800000000000001,
                0.21600000000000003,
                0.32400000000000007,
                0.43200000000000005,
                0.54
              ]
            },
            {
              "pitch": 65,
              "levels": [
                0.054000000000000006,
                0.10800000000000001,
                0.16200000000000003,
                0.21600000000000003,
                0.27
              ]
            },
            {
              "pitch": 70,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 75,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 80,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 85,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 90,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        },
        "codes": [
          {
            "year": "1941-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.92
              },
              {
                "pitch": 5,
                "factor": 1.92
              },
              {
                "pitch": 10,
                "factor": 1.92
              },
              {
                "pitch": 15,
                "factor": 1.92
              },
              {
                "pitch": 20,
                "factor": 1.92
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.47
              },
              {
                "pitch": 35,
                "factor": 1.25
              },
              {
                "pitch": 40,
                "factor": 1.03
              },
              {
                "pitch": 45,
                "factor": 0.8
              },
              {
                "pitch": 50,
                "factor": 0.58
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0.13
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1953-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.3
              },
              {
                "pitch": 5,
                "factor": 2.3
              },
              {
                "pitch": 10,
                "factor": 2.3
              },
              {
                "pitch": 15,
                "factor": 2.3
              },
              {
                "pitch": 20,
                "factor": 2.3
              },
              {
                "pitch": 25,
                "factor": 2.03
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.5
              },
              {
                "pitch": 40,
                "factor": 1.23
              },
              {
                "pitch": 45,
                "factor": 0.96
              },
              {
                "pitch": 50,
                "factor": 0.69
              },
              {
                "pitch": 55,
                "factor": 0.42
              },
              {
                "pitch": 60,
                "factor": 0.16
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1953-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.3
              },
              {
                "pitch": 5,
                "factor": 2.3
              },
              {
                "pitch": 10,
                "factor": 2.3
              },
              {
                "pitch": 15,
                "factor": 2.3
              },
              {
                "pitch": 20,
                "factor": 2.3
              },
              {
                "pitch": 25,
                "factor": 2.03
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.5
              },
              {
                "pitch": 40,
                "factor": 1.23
              },
              {
                "pitch": 45,
                "factor": 0.96
              },
              {
                "pitch": 50,
                "factor": 0.69
              },
              {
                "pitch": 55,
                "factor": 0.42
              },
              {
                "pitch": 60,
                "factor": 0.16
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1960-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.22
              },
              {
                "pitch": 5,
                "factor": 2.22
              },
              {
                "pitch": 10,
                "factor": 2.22
              },
              {
                "pitch": 15,
                "factor": 2.22
              },
              {
                "pitch": 20,
                "factor": 2.22
              },
              {
                "pitch": 25,
                "factor": 2.09
              },
              {
                "pitch": 30,
                "factor": 1.95
              },
              {
                "pitch": 35,
                "factor": 1.69
              },
              {
                "pitch": 40,
                "factor": 1.42
              },
              {
                "pitch": 45,
                "factor": 1.15
              },
              {
                "pitch": 50,
                "factor": 0.88
              },
              {
                "pitch": 55,
                "factor": 0.61
              },
              {
                "pitch": 60,
                "factor": 0.35
              },
              {
                "pitch": 65,
                "factor": 0.13
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1965-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1970-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1975-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1977-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2
              },
              {
                "pitch": 5,
                "factor": 2
              },
              {
                "pitch": 10,
                "factor": 2
              },
              {
                "pitch": 15,
                "factor": 2
              },
              {
                "pitch": 20,
                "factor": 2
              },
              {
                "pitch": 25,
                "factor": 2
              },
              {
                "pitch": 30,
                "factor": 2
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1980-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2
              },
              {
                "pitch": 5,
                "factor": 2
              },
              {
                "pitch": 10,
                "factor": 2
              },
              {
                "pitch": 15,
                "factor": 2
              },
              {
                "pitch": 20,
                "factor": 2
              },
              {
                "pitch": 25,
                "factor": 2
              },
              {
                "pitch": 30,
                "factor": 2
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1985-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2
              },
              {
                "pitch": 5,
                "factor": 2
              },
              {
                "pitch": 10,
                "factor": 2
              },
              {
                "pitch": 15,
                "factor": 2
              },
              {
                "pitch": 20,
                "factor": 2
              },
              {
                "pitch": 25,
                "factor": 2
              },
              {
                "pitch": 30,
                "factor": 2
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1990-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.78
              },
              {
                "pitch": 5,
                "factor": 1.78
              },
              {
                "pitch": 10,
                "factor": 1.78
              },
              {
                "pitch": 15,
                "factor": 1.78
              },
              {
                "pitch": 20,
                "factor": 1.78
              },
              {
                "pitch": 25,
                "factor": 1.78
              },
              {
                "pitch": 30,
                "factor": 1.78
              },
              {
                "pitch": 35,
                "factor": 1.56
              },
              {
                "pitch": 40,
                "factor": 1.34
              },
              {
                "pitch": 45,
                "factor": 1.11
              },
              {
                "pitch": 50,
                "factor": 0.89
              },
              {
                "pitch": 55,
                "factor": 0.67
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.22
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1995-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.78
              },
              {
                "pitch": 5,
                "factor": 1.78
              },
              {
                "pitch": 10,
                "factor": 1.78
              },
              {
                "pitch": 15,
                "factor": 1.78
              },
              {
                "pitch": 20,
                "factor": 1.78
              },
              {
                "pitch": 25,
                "factor": 1.78
              },
              {
                "pitch": 30,
                "factor": 1.78
              },
              {
                "pitch": 35,
                "factor": 1.56
              },
              {
                "pitch": 40,
                "factor": 1.34
              },
              {
                "pitch": 45,
                "factor": 1.11
              },
              {
                "pitch": 50,
                "factor": 0.89
              },
              {
                "pitch": 55,
                "factor": 0.67
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.22
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.55
              },
              {
                "pitch": 5,
                "factor": 1.55
              },
              {
                "pitch": 10,
                "factor": 1.55
              },
              {
                "pitch": 15,
                "factor": 1.55
              },
              {
                "pitch": 20,
                "factor": 1.55
              },
              {
                "pitch": 25,
                "factor": 1.55
              },
              {
                "pitch": 30,
                "factor": 1.55
              },
              {
                "pitch": 35,
                "factor": 1.37
              },
              {
                "pitch": 40,
                "factor": 1.18
              },
              {
                "pitch": 45,
                "factor": 1
              },
              {
                "pitch": 50,
                "factor": 0.82
              },
              {
                "pitch": 55,
                "factor": 0.63
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.94
              },
              {
                "pitch": 5,
                "factor": 1.94
              },
              {
                "pitch": 10,
                "factor": 1.94
              },
              {
                "pitch": 15,
                "factor": 1.94
              },
              {
                "pitch": 20,
                "factor": 1.94
              },
              {
                "pitch": 25,
                "factor": 1.94
              },
              {
                "pitch": 30,
                "factor": 1.94
              },
              {
                "pitch": 35,
                "factor": 1.71
              },
              {
                "pitch": 40,
                "factor": 1.48
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1.02
              },
              {
                "pitch": 55,
                "factor": 0.79
              },
              {
                "pitch": 60,
                "factor": 0.56
              },
              {
                "pitch": 65,
                "factor": 0.33
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.23
              },
              {
                "pitch": 5,
                "factor": 2.23
              },
              {
                "pitch": 10,
                "factor": 2.23
              },
              {
                "pitch": 15,
                "factor": 2.23
              },
              {
                "pitch": 20,
                "factor": 2.23
              },
              {
                "pitch": 25,
                "factor": 2.23
              },
              {
                "pitch": 30,
                "factor": 2.23
              },
              {
                "pitch": 35,
                "factor": 1.97
              },
              {
                "pitch": 40,
                "factor": 1.7
              },
              {
                "pitch": 45,
                "factor": 1.44
              },
              {
                "pitch": 50,
                "factor": 1.17
              },
              {
                "pitch": 55,
                "factor": 0.91
              },
              {
                "pitch": 60,
                "factor": 0.64
              },
              {
                "pitch": 65,
                "factor": 0.38
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.43
              },
              {
                "pitch": 5,
                "factor": 2.43
              },
              {
                "pitch": 10,
                "factor": 2.43
              },
              {
                "pitch": 15,
                "factor": 2.43
              },
              {
                "pitch": 20,
                "factor": 2.43
              },
              {
                "pitch": 25,
                "factor": 2.43
              },
              {
                "pitch": 30,
                "factor": 2.43
              },
              {
                "pitch": 35,
                "factor": 2.14
              },
              {
                "pitch": 40,
                "factor": 1.85
              },
              {
                "pitch": 45,
                "factor": 1.56
              },
              {
                "pitch": 50,
                "factor": 1.28
              },
              {
                "pitch": 55,
                "factor": 0.99
              },
              {
                "pitch": 60,
                "factor": 0.7
              },
              {
                "pitch": 65,
                "factor": 0.41
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.55
              },
              {
                "pitch": 5,
                "factor": 1.55
              },
              {
                "pitch": 10,
                "factor": 1.55
              },
              {
                "pitch": 15,
                "factor": 1.55
              },
              {
                "pitch": 20,
                "factor": 1.55
              },
              {
                "pitch": 25,
                "factor": 1.55
              },
              {
                "pitch": 30,
                "factor": 1.55
              },
              {
                "pitch": 35,
                "factor": 1.37
              },
              {
                "pitch": 40,
                "factor": 1.18
              },
              {
                "pitch": 45,
                "factor": 1
              },
              {
                "pitch": 50,
                "factor": 0.82
              },
              {
                "pitch": 55,
                "factor": 0.63
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.94
              },
              {
                "pitch": 5,
                "factor": 1.94
              },
              {
                "pitch": 10,
                "factor": 1.94
              },
              {
                "pitch": 15,
                "factor": 1.94
              },
              {
                "pitch": 20,
                "factor": 1.94
              },
              {
                "pitch": 25,
                "factor": 1.94
              },
              {
                "pitch": 30,
                "factor": 1.94
              },
              {
                "pitch": 35,
                "factor": 1.71
              },
              {
                "pitch": 40,
                "factor": 1.48
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1.02
              },
              {
                "pitch": 55,
                "factor": 0.79
              },
              {
                "pitch": 60,
                "factor": 0.56
              },
              {
                "pitch": 65,
                "factor": 0.33
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.23
              },
              {
                "pitch": 5,
                "factor": 2.23
              },
              {
                "pitch": 10,
                "factor": 2.23
              },
              {
                "pitch": 15,
                "factor": 2.23
              },
              {
                "pitch": 20,
                "factor": 2.23
              },
              {
                "pitch": 25,
                "factor": 2.23
              },
              {
                "pitch": 30,
                "factor": 2.23
              },
              {
                "pitch": 35,
                "factor": 1.97
              },
              {
                "pitch": 40,
                "factor": 1.7
              },
              {
                "pitch": 45,
                "factor": 1.44
              },
              {
                "pitch": 50,
                "factor": 1.17
              },
              {
                "pitch": 55,
                "factor": 0.91
              },
              {
                "pitch": 60,
                "factor": 0.64
              },
              {
                "pitch": 65,
                "factor": 0.38
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.43
              },
              {
                "pitch": 5,
                "factor": 2.43
              },
              {
                "pitch": 10,
                "factor": 2.43
              },
              {
                "pitch": 15,
                "factor": 2.43
              },
              {
                "pitch": 20,
                "factor": 2.43
              },
              {
                "pitch": 25,
                "factor": 2.43
              },
              {
                "pitch": 30,
                "factor": 2.43
              },
              {
                "pitch": 35,
                "factor": 2.14
              },
              {
                "pitch": 40,
                "factor": 1.85
              },
              {
                "pitch": 45,
                "factor": 1.56
              },
              {
                "pitch": 50,
                "factor": 1.28
              },
              {
                "pitch": 55,
                "factor": 0.99
              },
              {
                "pitch": 60,
                "factor": 0.7
              },
              {
                "pitch": 65,
                "factor": 0.41
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1941-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.92
              },
              {
                "pitch": 5,
                "factor": 1.92
              },
              {
                "pitch": 10,
                "factor": 1.92
              },
              {
                "pitch": 15,
                "factor": 1.92
              },
              {
                "pitch": 20,
                "factor": 1.92
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.47
              },
              {
                "pitch": 35,
                "factor": 1.25
              },
              {
                "pitch": 40,
                "factor": 1.03
              },
              {
                "pitch": 45,
                "factor": 0.8
              },
              {
                "pitch": 50,
                "factor": 0.58
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0.13
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1960-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.22
              },
              {
                "pitch": 5,
                "factor": 2.22
              },
              {
                "pitch": 10,
                "factor": 2.22
              },
              {
                "pitch": 15,
                "factor": 2.22
              },
              {
                "pitch": 20,
                "factor": 2.22
              },
              {
                "pitch": 25,
                "factor": 2.09
              },
              {
                "pitch": 30,
                "factor": 1.95
              },
              {
                "pitch": 35,
                "factor": 1.69
              },
              {
                "pitch": 40,
                "factor": 1.42
              },
              {
                "pitch": 45,
                "factor": 1.15
              },
              {
                "pitch": 50,
                "factor": 0.88
              },
              {
                "pitch": 55,
                "factor": 0.61
              },
              {
                "pitch": 60,
                "factor": 0.35
              },
              {
                "pitch": 65,
                "factor": 0.13
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1965-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1970-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1975-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1977-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2
              },
              {
                "pitch": 5,
                "factor": 2
              },
              {
                "pitch": 10,
                "factor": 2
              },
              {
                "pitch": 15,
                "factor": 2
              },
              {
                "pitch": 20,
                "factor": 2
              },
              {
                "pitch": 25,
                "factor": 2
              },
              {
                "pitch": 30,
                "factor": 2
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1980-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2
              },
              {
                "pitch": 5,
                "factor": 2
              },
              {
                "pitch": 10,
                "factor": 2
              },
              {
                "pitch": 15,
                "factor": 2
              },
              {
                "pitch": 20,
                "factor": 2
              },
              {
                "pitch": 25,
                "factor": 2
              },
              {
                "pitch": 30,
                "factor": 2
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1985-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 2
              },
              {
                "pitch": 5,
                "factor": 2
              },
              {
                "pitch": 10,
                "factor": 2
              },
              {
                "pitch": 15,
                "factor": 2
              },
              {
                "pitch": 20,
                "factor": 2
              },
              {
                "pitch": 25,
                "factor": 2
              },
              {
                "pitch": 30,
                "factor": 2
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1990-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.78
              },
              {
                "pitch": 5,
                "factor": 1.78
              },
              {
                "pitch": 10,
                "factor": 1.78
              },
              {
                "pitch": 15,
                "factor": 1.78
              },
              {
                "pitch": 20,
                "factor": 1.58
              },
              {
                "pitch": 25,
                "factor": 1.38
              },
              {
                "pitch": 30,
                "factor": 1.19
              },
              {
                "pitch": 35,
                "factor": 0.99
              },
              {
                "pitch": 40,
                "factor": 0.79
              },
              {
                "pitch": 45,
                "factor": 0.59
              },
              {
                "pitch": 50,
                "factor": 0.4
              },
              {
                "pitch": 55,
                "factor": 0.2
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1995-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.78
              },
              {
                "pitch": 5,
                "factor": 1.78
              },
              {
                "pitch": 10,
                "factor": 1.78
              },
              {
                "pitch": 15,
                "factor": 1.78
              },
              {
                "pitch": 20,
                "factor": 1.58
              },
              {
                "pitch": 25,
                "factor": 1.38
              },
              {
                "pitch": 30,
                "factor": 1.19
              },
              {
                "pitch": 35,
                "factor": 0.99
              },
              {
                "pitch": 40,
                "factor": 0.79
              },
              {
                "pitch": 45,
                "factor": 0.59
              },
              {
                "pitch": 50,
                "factor": 0.4
              },
              {
                "pitch": 55,
                "factor": 0.2
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.55
              },
              {
                "pitch": 5,
                "factor": 1.55
              },
              {
                "pitch": 10,
                "factor": 1.55
              },
              {
                "pitch": 15,
                "factor": 1.55
              },
              {
                "pitch": 20,
                "factor": 1.39
              },
              {
                "pitch": 25,
                "factor": 1.22
              },
              {
                "pitch": 30,
                "factor": 1.06
              },
              {
                "pitch": 35,
                "factor": 0.9
              },
              {
                "pitch": 40,
                "factor": 0.73
              },
              {
                "pitch": 45,
                "factor": 0.57
              },
              {
                "pitch": 50,
                "factor": 0.41
              },
              {
                "pitch": 55,
                "factor": 0.24
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.55
              },
              {
                "pitch": 5,
                "factor": 1.55
              },
              {
                "pitch": 10,
                "factor": 1.55
              },
              {
                "pitch": 15,
                "factor": 1.55
              },
              {
                "pitch": 20,
                "factor": 1.39
              },
              {
                "pitch": 25,
                "factor": 1.22
              },
              {
                "pitch": 30,
                "factor": 1.06
              },
              {
                "pitch": 35,
                "factor": 0.9
              },
              {
                "pitch": 40,
                "factor": 0.73
              },
              {
                "pitch": 45,
                "factor": 0.57
              },
              {
                "pitch": 50,
                "factor": 0.41
              },
              {
                "pitch": 55,
                "factor": 0.24
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.94
              },
              {
                "pitch": 5,
                "factor": 1.94
              },
              {
                "pitch": 10,
                "factor": 1.94
              },
              {
                "pitch": 15,
                "factor": 1.94
              },
              {
                "pitch": 20,
                "factor": 1.74
              },
              {
                "pitch": 25,
                "factor": 1.53
              },
              {
                "pitch": 30,
                "factor": 1.33
              },
              {
                "pitch": 35,
                "factor": 1.12
              },
              {
                "pitch": 40,
                "factor": 0.92
              },
              {
                "pitch": 45,
                "factor": 0.71
              },
              {
                "pitch": 50,
                "factor": 0.51
              },
              {
                "pitch": 55,
                "factor": 0.3
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.94
              },
              {
                "pitch": 5,
                "factor": 1.94
              },
              {
                "pitch": 10,
                "factor": 1.94
              },
              {
                "pitch": 15,
                "factor": 1.94
              },
              {
                "pitch": 20,
                "factor": 1.74
              },
              {
                "pitch": 25,
                "factor": 1.53
              },
              {
                "pitch": 30,
                "factor": 1.33
              },
              {
                "pitch": 35,
                "factor": 1.12
              },
              {
                "pitch": 40,
                "factor": 0.92
              },
              {
                "pitch": 45,
                "factor": 0.71
              },
              {
                "pitch": 50,
                "factor": 0.51
              },
              {
                "pitch": 55,
                "factor": 0.3
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.23
              },
              {
                "pitch": 5,
                "factor": 2.23
              },
              {
                "pitch": 10,
                "factor": 2.23
              },
              {
                "pitch": 15,
                "factor": 2.23
              },
              {
                "pitch": 20,
                "factor": 2
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.53
              },
              {
                "pitch": 35,
                "factor": 1.29
              },
              {
                "pitch": 40,
                "factor": 1.06
              },
              {
                "pitch": 45,
                "factor": 0.82
              },
              {
                "pitch": 50,
                "factor": 0.59
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.23
              },
              {
                "pitch": 5,
                "factor": 2.23
              },
              {
                "pitch": 10,
                "factor": 2.23
              },
              {
                "pitch": 15,
                "factor": 2.23
              },
              {
                "pitch": 20,
                "factor": 2
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.53
              },
              {
                "pitch": 35,
                "factor": 1.29
              },
              {
                "pitch": 40,
                "factor": 1.06
              },
              {
                "pitch": 45,
                "factor": 0.82
              },
              {
                "pitch": 50,
                "factor": 0.59
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.43
              },
              {
                "pitch": 5,
                "factor": 2.43
              },
              {
                "pitch": 10,
                "factor": 2.43
              },
              {
                "pitch": 15,
                "factor": 2.43
              },
              {
                "pitch": 20,
                "factor": 2.17
              },
              {
                "pitch": 25,
                "factor": 1.91
              },
              {
                "pitch": 30,
                "factor": 1.66
              },
              {
                "pitch": 35,
                "factor": 1.4
              },
              {
                "pitch": 40,
                "factor": 1.15
              },
              {
                "pitch": 45,
                "factor": 0.89
              },
              {
                "pitch": 50,
                "factor": 0.64
              },
              {
                "pitch": 55,
                "factor": 0.38
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.43
              },
              {
                "pitch": 5,
                "factor": 2.43
              },
              {
                "pitch": 10,
                "factor": 2.43
              },
              {
                "pitch": 15,
                "factor": 2.43
              },
              {
                "pitch": 20,
                "factor": 2.17
              },
              {
                "pitch": 25,
                "factor": 1.91
              },
              {
                "pitch": 30,
                "factor": 1.66
              },
              {
                "pitch": 35,
                "factor": 1.4
              },
              {
                "pitch": 40,
                "factor": 1.15
              },
              {
                "pitch": 45,
                "factor": 0.89
              },
              {
                "pitch": 50,
                "factor": 0.64
              },
              {
                "pitch": 55,
                "factor": 0.38
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          }
        ]
      }
    });
    var ft_smith = Regions.insert({
      "name": "Fort Smith",
      "wind_direction": "NW",
      "location": {"type": "Point", "coordinates": [-111.8849,60.0055]},
      "snow_load_factors": {
        "thresholds": [
          "#b71c1c",
          "#f57c00",
          "#cddc39",
          "#689f38",
          "#1b5e20"
        ],
        "levels": {
          "standard": [
            {
              "pitch": 0,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 5,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 10,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 15,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 20,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 25,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 30,
              "levels": [
                1.51,
                1.77,
                2.03,
                2.29,
                2.55
              ]
            },
            {
              "pitch": 35,
              "levels": [
                1.3,
                1.54,
                1.7799999999999998,
                2.0199999999999996,
                2.26
              ]
            },
            {
              "pitch": 40,
              "levels": [
                1.092,
                1.314,
                1.536,
                1.758,
                1.98
              ]
            },
            {
              "pitch": 45,
              "levels": [
                0.882,
                1.084,
                1.286,
                1.488,
                1.69
              ]
            },
            {
              "pitch": 50,
              "levels": [
                0.6719999999999999,
                0.854,
                1.036,
                1.218,
                1.4
              ]
            },
            {
              "pitch": 55,
              "levels": [
                0.46199999999999997,
                0.624,
                0.786,
                0.948,
                1.11
              ]
            },
            {
              "pitch": 60,
              "levels": [
                0.16599999999999998,
                0.33199999999999996,
                0.49799999999999994,
                0.6639999999999999,
                0.83
              ]
            },
            {
              "pitch": 65,
              "levels": [
                0.10800000000000001,
                0.21600000000000003,
                0.32400000000000007,
                0.43200000000000005,
                0.54
              ]
            },
            {
              "pitch": 70,
              "levels": [
                0.05,
                0.1,
                0.15000000000000002,
                0.2,
                0.25
              ]
            },
            {
              "pitch": 75,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 80,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 85,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 90,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ],
          "slippery": [
            {
              "pitch": 0,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 5,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 10,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 15,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 20,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 25,
              "levels": [
                1.646,
                1.8719999999999999,
                2.098,
                2.324,
                2.55
              ]
            },
            {
              "pitch": 30,
              "levels": [
                1.51,
                1.77,
                2.03,
                2.29,
                2.55
              ]
            },
            {
              "pitch": 35,
              "levels": [
                1.284,
                1.528,
                1.7719999999999998,
                2.016,
                2.26
              ]
            },
            {
              "pitch": 40,
              "levels": [
                1.068,
                1.296,
                1.524,
                1.7520000000000002,
                1.98
              ]
            },
            {
              "pitch": 45,
              "levels": [
                0.8420000000000001,
                1.054,
                1.266,
                1.4780000000000002,
                1.69
              ]
            },
            {
              "pitch": 50,
              "levels": [
                0.616,
                0.812,
                1.008,
                1.204,
                1.4
              ]
            },
            {
              "pitch": 55,
              "levels": [
                0.39,
                0.5700000000000001,
                0.75,
                0.93,
                1.11
              ]
            },
            {
              "pitch": 60,
              "levels": [
                0.16599999999999998,
                0.33199999999999996,
                0.49799999999999994,
                0.6639999999999999,
                0.83
              ]
            },
            {
              "pitch": 65,
              "levels": [
                0.10800000000000001,
                0.21600000000000003,
                0.32400000000000007,
                0.43200000000000005,
                0.54
              ]
            },
            {
              "pitch": 70,
              "levels": [
                0.05,
                0.1,
                0.15000000000000002,
                0.2,
                0.25
              ]
            },
            {
              "pitch": 75,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 80,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 85,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 90,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        },
        "codes": [
          {
            "year": "1941-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.92
              },
              {
                "pitch": 5,
                "factor": 1.92
              },
              {
                "pitch": 10,
                "factor": 1.92
              },
              {
                "pitch": 15,
                "factor": 1.92
              },
              {
                "pitch": 20,
                "factor": 1.92
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.47
              },
              {
                "pitch": 35,
                "factor": 1.25
              },
              {
                "pitch": 40,
                "factor": 1.03
              },
              {
                "pitch": 45,
                "factor": 0.8
              },
              {
                "pitch": 50,
                "factor": 0.58
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0.13
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1941-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.92
              },
              {
                "pitch": 5,
                "factor": 1.92
              },
              {
                "pitch": 10,
                "factor": 1.92
              },
              {
                "pitch": 15,
                "factor": 1.92
              },
              {
                "pitch": 20,
                "factor": 1.92
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.47
              },
              {
                "pitch": 35,
                "factor": 1.25
              },
              {
                "pitch": 40,
                "factor": 1.03
              },
              {
                "pitch": 45,
                "factor": 0.8
              },
              {
                "pitch": 50,
                "factor": 0.58
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0.13
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1953-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.44
              },
              {
                "pitch": 30,
                "factor": 1.25
              },
              {
                "pitch": 35,
                "factor": 1.06
              },
              {
                "pitch": 40,
                "factor": 0.87
              },
              {
                "pitch": 45,
                "factor": 0.68
              },
              {
                "pitch": 50,
                "factor": 0.49
              },
              {
                "pitch": 55,
                "factor": 0.3
              },
              {
                "pitch": 60,
                "factor": 0.11
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1953-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.44
              },
              {
                "pitch": 30,
                "factor": 1.25
              },
              {
                "pitch": 35,
                "factor": 1.06
              },
              {
                "pitch": 40,
                "factor": 0.87
              },
              {
                "pitch": 45,
                "factor": 0.68
              },
              {
                "pitch": 50,
                "factor": 0.49
              },
              {
                "pitch": 55,
                "factor": 0.3
              },
              {
                "pitch": 60,
                "factor": 0.11
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1960-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.52
              },
              {
                "pitch": 5,
                "factor": 1.52
              },
              {
                "pitch": 10,
                "factor": 1.52
              },
              {
                "pitch": 15,
                "factor": 1.52
              },
              {
                "pitch": 20,
                "factor": 1.52
              },
              {
                "pitch": 25,
                "factor": 1.43
              },
              {
                "pitch": 30,
                "factor": 1.33
              },
              {
                "pitch": 35,
                "factor": 1.47
              },
              {
                "pitch": 40,
                "factor": 1.24
              },
              {
                "pitch": 45,
                "factor": 1.01
              },
              {
                "pitch": 50,
                "factor": 0.78
              },
              {
                "pitch": 55,
                "factor": 0.55
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1960-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.52
              },
              {
                "pitch": 5,
                "factor": 1.52
              },
              {
                "pitch": 10,
                "factor": 1.52
              },
              {
                "pitch": 15,
                "factor": 1.52
              },
              {
                "pitch": 20,
                "factor": 1.52
              },
              {
                "pitch": 25,
                "factor": 1.43
              },
              {
                "pitch": 30,
                "factor": 1.33
              },
              {
                "pitch": 35,
                "factor": 1.47
              },
              {
                "pitch": 40,
                "factor": 1.24
              },
              {
                "pitch": 45,
                "factor": 1.01
              },
              {
                "pitch": 50,
                "factor": 0.78
              },
              {
                "pitch": 55,
                "factor": 0.55
              },
              {
                "pitch": 60,
                "factor": 0.32
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1965-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.42
              },
              {
                "pitch": 5,
                "factor": 1.42
              },
              {
                "pitch": 10,
                "factor": 1.42
              },
              {
                "pitch": 15,
                "factor": 1.42
              },
              {
                "pitch": 20,
                "factor": 1.42
              },
              {
                "pitch": 25,
                "factor": 1.42
              },
              {
                "pitch": 30,
                "factor": 1.42
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1965-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.42
              },
              {
                "pitch": 5,
                "factor": 1.42
              },
              {
                "pitch": 10,
                "factor": 1.42
              },
              {
                "pitch": 15,
                "factor": 1.42
              },
              {
                "pitch": 20,
                "factor": 1.42
              },
              {
                "pitch": 25,
                "factor": 1.42
              },
              {
                "pitch": 30,
                "factor": 1.42
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1970-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.42
              },
              {
                "pitch": 5,
                "factor": 1.42
              },
              {
                "pitch": 10,
                "factor": 1.42
              },
              {
                "pitch": 15,
                "factor": 1.42
              },
              {
                "pitch": 20,
                "factor": 1.42
              },
              {
                "pitch": 25,
                "factor": 1.42
              },
              {
                "pitch": 30,
                "factor": 1.42
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1970-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.42
              },
              {
                "pitch": 5,
                "factor": 1.42
              },
              {
                "pitch": 10,
                "factor": 1.42
              },
              {
                "pitch": 15,
                "factor": 1.42
              },
              {
                "pitch": 20,
                "factor": 1.42
              },
              {
                "pitch": 25,
                "factor": 1.42
              },
              {
                "pitch": 30,
                "factor": 1.42
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1975-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.42
              },
              {
                "pitch": 5,
                "factor": 1.42
              },
              {
                "pitch": 10,
                "factor": 1.42
              },
              {
                "pitch": 15,
                "factor": 1.42
              },
              {
                "pitch": 20,
                "factor": 1.42
              },
              {
                "pitch": 25,
                "factor": 1.42
              },
              {
                "pitch": 30,
                "factor": 1.42
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1975-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.42
              },
              {
                "pitch": 5,
                "factor": 1.42
              },
              {
                "pitch": 10,
                "factor": 1.42
              },
              {
                "pitch": 15,
                "factor": 1.42
              },
              {
                "pitch": 20,
                "factor": 1.42
              },
              {
                "pitch": 25,
                "factor": 1.42
              },
              {
                "pitch": 30,
                "factor": 1.42
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1977-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1977-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1980-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1980-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1985-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1985-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1990-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.88
              },
              {
                "pitch": 5,
                "factor": 1.88
              },
              {
                "pitch": 10,
                "factor": 1.88
              },
              {
                "pitch": 15,
                "factor": 1.88
              },
              {
                "pitch": 20,
                "factor": 1.88
              },
              {
                "pitch": 25,
                "factor": 1.88
              },
              {
                "pitch": 30,
                "factor": 1.88
              },
              {
                "pitch": 35,
                "factor": 1.65
              },
              {
                "pitch": 40,
                "factor": 1.41
              },
              {
                "pitch": 45,
                "factor": 1.18
              },
              {
                "pitch": 50,
                "factor": 0.94
              },
              {
                "pitch": 55,
                "factor": 0.71
              },
              {
                "pitch": 60,
                "factor": 0.47
              },
              {
                "pitch": 65,
                "factor": 0.24
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1995-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.88
              },
              {
                "pitch": 5,
                "factor": 1.88
              },
              {
                "pitch": 10,
                "factor": 1.88
              },
              {
                "pitch": 15,
                "factor": 1.88
              },
              {
                "pitch": 20,
                "factor": 1.88
              },
              {
                "pitch": 25,
                "factor": 1.88
              },
              {
                "pitch": 30,
                "factor": 1.88
              },
              {
                "pitch": 35,
                "factor": 1.65
              },
              {
                "pitch": 40,
                "factor": 1.41
              },
              {
                "pitch": 45,
                "factor": 1.18
              },
              {
                "pitch": 50,
                "factor": 0.94
              },
              {
                "pitch": 55,
                "factor": 0.71
              },
              {
                "pitch": 60,
                "factor": 0.47
              },
              {
                "pitch": 65,
                "factor": 0.24
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1990-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.88
              },
              {
                "pitch": 5,
                "factor": 1.88
              },
              {
                "pitch": 10,
                "factor": 1.88
              },
              {
                "pitch": 15,
                "factor": 1.88
              },
              {
                "pitch": 20,
                "factor": 1.67
              },
              {
                "pitch": 25,
                "factor": 1.46
              },
              {
                "pitch": 30,
                "factor": 1.25
              },
              {
                "pitch": 35,
                "factor": 1.04
              },
              {
                "pitch": 40,
                "factor": 0.84
              },
              {
                "pitch": 45,
                "factor": 0.63
              },
              {
                "pitch": 50,
                "factor": 0.42
              },
              {
                "pitch": 55,
                "factor": 0.21
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1995-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.88
              },
              {
                "pitch": 5,
                "factor": 1.88
              },
              {
                "pitch": 10,
                "factor": 1.88
              },
              {
                "pitch": 15,
                "factor": 1.88
              },
              {
                "pitch": 20,
                "factor": 1.67
              },
              {
                "pitch": 25,
                "factor": 1.46
              },
              {
                "pitch": 30,
                "factor": 1.25
              },
              {
                "pitch": 35,
                "factor": 1.04
              },
              {
                "pitch": 40,
                "factor": 0.84
              },
              {
                "pitch": 45,
                "factor": 0.63
              },
              {
                "pitch": 50,
                "factor": 0.42
              },
              {
                "pitch": 55,
                "factor": 0.21
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.63
              },
              {
                "pitch": 30,
                "factor": 1.63
              },
              {
                "pitch": 35,
                "factor": 1.45
              },
              {
                "pitch": 40,
                "factor": 1.26
              },
              {
                "pitch": 45,
                "factor": 1.08
              },
              {
                "pitch": 50,
                "factor": 0.9
              },
              {
                "pitch": 55,
                "factor": 0.71
              },
              {
                "pitch": 60,
                "factor": 0.53
              },
              {
                "pitch": 65,
                "factor": 0.34
              },
              {
                "pitch": 70,
                "factor": 0.16
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.63
              },
              {
                "pitch": 30,
                "factor": 1.63
              },
              {
                "pitch": 35,
                "factor": 1.45
              },
              {
                "pitch": 40,
                "factor": 1.26
              },
              {
                "pitch": 45,
                "factor": 1.08
              },
              {
                "pitch": 50,
                "factor": 0.9
              },
              {
                "pitch": 55,
                "factor": 0.71
              },
              {
                "pitch": 60,
                "factor": 0.53
              },
              {
                "pitch": 65,
                "factor": 0.34
              },
              {
                "pitch": 70,
                "factor": 0.16
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.63
              },
              {
                "pitch": 30,
                "factor": 1.63
              },
              {
                "pitch": 35,
                "factor": 1.45
              },
              {
                "pitch": 40,
                "factor": 1.26
              },
              {
                "pitch": 45,
                "factor": 1.08
              },
              {
                "pitch": 50,
                "factor": 0.9
              },
              {
                "pitch": 55,
                "factor": 0.71
              },
              {
                "pitch": 60,
                "factor": 0.53
              },
              {
                "pitch": 65,
                "factor": 0.34
              },
              {
                "pitch": 70,
                "factor": 0.16
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.63
              },
              {
                "pitch": 30,
                "factor": 1.63
              },
              {
                "pitch": 35,
                "factor": 1.45
              },
              {
                "pitch": 40,
                "factor": 1.26
              },
              {
                "pitch": 45,
                "factor": 1.08
              },
              {
                "pitch": 50,
                "factor": 0.9
              },
              {
                "pitch": 55,
                "factor": 0.71
              },
              {
                "pitch": 60,
                "factor": 0.53
              },
              {
                "pitch": 65,
                "factor": 0.34
              },
              {
                "pitch": 70,
                "factor": 0.16
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.04
              },
              {
                "pitch": 5,
                "factor": 2.04
              },
              {
                "pitch": 10,
                "factor": 2.04
              },
              {
                "pitch": 15,
                "factor": 2.04
              },
              {
                "pitch": 20,
                "factor": 2.04
              },
              {
                "pitch": 25,
                "factor": 2.04
              },
              {
                "pitch": 30,
                "factor": 2.04
              },
              {
                "pitch": 35,
                "factor": 1.81
              },
              {
                "pitch": 40,
                "factor": 1.58
              },
              {
                "pitch": 45,
                "factor": 1.35
              },
              {
                "pitch": 50,
                "factor": 1.12
              },
              {
                "pitch": 55,
                "factor": 0.89
              },
              {
                "pitch": 60,
                "factor": 0.66
              },
              {
                "pitch": 65,
                "factor": 0.43
              },
              {
                "pitch": 70,
                "factor": 0.2
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.04
              },
              {
                "pitch": 5,
                "factor": 2.04
              },
              {
                "pitch": 10,
                "factor": 2.04
              },
              {
                "pitch": 15,
                "factor": 2.04
              },
              {
                "pitch": 20,
                "factor": 2.04
              },
              {
                "pitch": 25,
                "factor": 2.04
              },
              {
                "pitch": 30,
                "factor": 2.04
              },
              {
                "pitch": 35,
                "factor": 1.81
              },
              {
                "pitch": 40,
                "factor": 1.58
              },
              {
                "pitch": 45,
                "factor": 1.35
              },
              {
                "pitch": 50,
                "factor": 1.12
              },
              {
                "pitch": 55,
                "factor": 0.89
              },
              {
                "pitch": 60,
                "factor": 0.66
              },
              {
                "pitch": 65,
                "factor": 0.43
              },
              {
                "pitch": 70,
                "factor": 0.2
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.04
              },
              {
                "pitch": 5,
                "factor": 2.04
              },
              {
                "pitch": 10,
                "factor": 2.04
              },
              {
                "pitch": 15,
                "factor": 2.04
              },
              {
                "pitch": 20,
                "factor": 2.04
              },
              {
                "pitch": 25,
                "factor": 2.04
              },
              {
                "pitch": 30,
                "factor": 2.04
              },
              {
                "pitch": 35,
                "factor": 1.81
              },
              {
                "pitch": 40,
                "factor": 1.58
              },
              {
                "pitch": 45,
                "factor": 1.35
              },
              {
                "pitch": 50,
                "factor": 1.12
              },
              {
                "pitch": 55,
                "factor": 0.89
              },
              {
                "pitch": 60,
                "factor": 0.66
              },
              {
                "pitch": 65,
                "factor": 0.43
              },
              {
                "pitch": 70,
                "factor": 0.2
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.04
              },
              {
                "pitch": 5,
                "factor": 2.04
              },
              {
                "pitch": 10,
                "factor": 2.04
              },
              {
                "pitch": 15,
                "factor": 2.04
              },
              {
                "pitch": 20,
                "factor": 2.04
              },
              {
                "pitch": 25,
                "factor": 2.04
              },
              {
                "pitch": 30,
                "factor": 2.04
              },
              {
                "pitch": 35,
                "factor": 1.81
              },
              {
                "pitch": 40,
                "factor": 1.58
              },
              {
                "pitch": 45,
                "factor": 1.35
              },
              {
                "pitch": 50,
                "factor": 1.12
              },
              {
                "pitch": 55,
                "factor": 0.89
              },
              {
                "pitch": 60,
                "factor": 0.66
              },
              {
                "pitch": 65,
                "factor": 0.43
              },
              {
                "pitch": 70,
                "factor": 0.2
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.35
              },
              {
                "pitch": 5,
                "factor": 2.35
              },
              {
                "pitch": 10,
                "factor": 2.35
              },
              {
                "pitch": 15,
                "factor": 2.35
              },
              {
                "pitch": 20,
                "factor": 2.35
              },
              {
                "pitch": 25,
                "factor": 2.35
              },
              {
                "pitch": 30,
                "factor": 2.35
              },
              {
                "pitch": 35,
                "factor": 2.08
              },
              {
                "pitch": 40,
                "factor": 1.82
              },
              {
                "pitch": 45,
                "factor": 1.55
              },
              {
                "pitch": 50,
                "factor": 1.29
              },
              {
                "pitch": 55,
                "factor": 1.02
              },
              {
                "pitch": 60,
                "factor": 0.76
              },
              {
                "pitch": 65,
                "factor": 0.49
              },
              {
                "pitch": 70,
                "factor": 0.23
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.35
              },
              {
                "pitch": 5,
                "factor": 2.35
              },
              {
                "pitch": 10,
                "factor": 2.35
              },
              {
                "pitch": 15,
                "factor": 2.35
              },
              {
                "pitch": 20,
                "factor": 2.35
              },
              {
                "pitch": 25,
                "factor": 2.35
              },
              {
                "pitch": 30,
                "factor": 2.35
              },
              {
                "pitch": 35,
                "factor": 2.08
              },
              {
                "pitch": 40,
                "factor": 1.82
              },
              {
                "pitch": 45,
                "factor": 1.55
              },
              {
                "pitch": 50,
                "factor": 1.29
              },
              {
                "pitch": 55,
                "factor": 1.02
              },
              {
                "pitch": 60,
                "factor": 0.76
              },
              {
                "pitch": 65,
                "factor": 0.49
              },
              {
                "pitch": 70,
                "factor": 0.23
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.35
              },
              {
                "pitch": 5,
                "factor": 2.35
              },
              {
                "pitch": 10,
                "factor": 2.35
              },
              {
                "pitch": 15,
                "factor": 2.35
              },
              {
                "pitch": 20,
                "factor": 2.35
              },
              {
                "pitch": 25,
                "factor": 2.35
              },
              {
                "pitch": 30,
                "factor": 2.35
              },
              {
                "pitch": 35,
                "factor": 2.08
              },
              {
                "pitch": 40,
                "factor": 1.82
              },
              {
                "pitch": 45,
                "factor": 1.55
              },
              {
                "pitch": 50,
                "factor": 1.29
              },
              {
                "pitch": 55,
                "factor": 1.02
              },
              {
                "pitch": 60,
                "factor": 0.76
              },
              {
                "pitch": 65,
                "factor": 0.49
              },
              {
                "pitch": 70,
                "factor": 0.23
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.35
              },
              {
                "pitch": 5,
                "factor": 2.35
              },
              {
                "pitch": 10,
                "factor": 2.35
              },
              {
                "pitch": 15,
                "factor": 2.35
              },
              {
                "pitch": 20,
                "factor": 2.35
              },
              {
                "pitch": 25,
                "factor": 2.35
              },
              {
                "pitch": 30,
                "factor": 2.35
              },
              {
                "pitch": 35,
                "factor": 2.08
              },
              {
                "pitch": 40,
                "factor": 1.82
              },
              {
                "pitch": 45,
                "factor": 1.55
              },
              {
                "pitch": 50,
                "factor": 1.29
              },
              {
                "pitch": 55,
                "factor": 1.02
              },
              {
                "pitch": 60,
                "factor": 0.76
              },
              {
                "pitch": 65,
                "factor": 0.49
              },
              {
                "pitch": 70,
                "factor": 0.23
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.55
              },
              {
                "pitch": 5,
                "factor": 2.55
              },
              {
                "pitch": 10,
                "factor": 2.55
              },
              {
                "pitch": 15,
                "factor": 2.55
              },
              {
                "pitch": 20,
                "factor": 2.55
              },
              {
                "pitch": 25,
                "factor": 2.55
              },
              {
                "pitch": 30,
                "factor": 2.55
              },
              {
                "pitch": 35,
                "factor": 2.26
              },
              {
                "pitch": 40,
                "factor": 1.98
              },
              {
                "pitch": 45,
                "factor": 1.69
              },
              {
                "pitch": 50,
                "factor": 1.4
              },
              {
                "pitch": 55,
                "factor": 1.11
              },
              {
                "pitch": 60,
                "factor": 0.83
              },
              {
                "pitch": 65,
                "factor": 0.54
              },
              {
                "pitch": 70,
                "factor": 0.25
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.55
              },
              {
                "pitch": 5,
                "factor": 2.55
              },
              {
                "pitch": 10,
                "factor": 2.55
              },
              {
                "pitch": 15,
                "factor": 2.55
              },
              {
                "pitch": 20,
                "factor": 2.55
              },
              {
                "pitch": 25,
                "factor": 2.55
              },
              {
                "pitch": 30,
                "factor": 2.55
              },
              {
                "pitch": 35,
                "factor": 2.26
              },
              {
                "pitch": 40,
                "factor": 1.98
              },
              {
                "pitch": 45,
                "factor": 1.69
              },
              {
                "pitch": 50,
                "factor": 1.4
              },
              {
                "pitch": 55,
                "factor": 1.11
              },
              {
                "pitch": 60,
                "factor": 0.83
              },
              {
                "pitch": 65,
                "factor": 0.54
              },
              {
                "pitch": 70,
                "factor": 0.25
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.55
              },
              {
                "pitch": 5,
                "factor": 2.55
              },
              {
                "pitch": 10,
                "factor": 2.55
              },
              {
                "pitch": 15,
                "factor": 2.55
              },
              {
                "pitch": 20,
                "factor": 2.55
              },
              {
                "pitch": 25,
                "factor": 2.55
              },
              {
                "pitch": 30,
                "factor": 2.55
              },
              {
                "pitch": 35,
                "factor": 2.26
              },
              {
                "pitch": 40,
                "factor": 1.98
              },
              {
                "pitch": 45,
                "factor": 1.69
              },
              {
                "pitch": 50,
                "factor": 1.4
              },
              {
                "pitch": 55,
                "factor": 1.11
              },
              {
                "pitch": 60,
                "factor": 0.83
              },
              {
                "pitch": 65,
                "factor": 0.54
              },
              {
                "pitch": 70,
                "factor": 0.25
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.55
              },
              {
                "pitch": 5,
                "factor": 2.55
              },
              {
                "pitch": 10,
                "factor": 2.55
              },
              {
                "pitch": 15,
                "factor": 2.55
              },
              {
                "pitch": 20,
                "factor": 2.55
              },
              {
                "pitch": 25,
                "factor": 2.55
              },
              {
                "pitch": 30,
                "factor": 2.55
              },
              {
                "pitch": 35,
                "factor": 2.26
              },
              {
                "pitch": 40,
                "factor": 1.98
              },
              {
                "pitch": 45,
                "factor": 1.69
              },
              {
                "pitch": 50,
                "factor": 1.4
              },
              {
                "pitch": 55,
                "factor": 1.11
              },
              {
                "pitch": 60,
                "factor": 0.83
              },
              {
                "pitch": 65,
                "factor": 0.54
              },
              {
                "pitch": 70,
                "factor": 0.25
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          }
        ]
      }
    });
    var inuvik = Regions.insert({
      "name": "Inuvik",
      "wind_direction": "NW",
      "location": {"type": "Point", "coordinates": [-133.723, 68.3607]},
      "snow_load_factors": {
        "thresholds": [
          "#b71c1c",
          "#f57c00",
          "#cddc39",
          "#689f38",
          "#1b5e20"
        ],
        "levels": {
          "standard": [
            {
              "pitch": 0,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 5,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 10,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 15,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 20,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 25,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 30,
              "levels": [
                1.574,
                1.7880000000000003,
                2.0020000000000002,
                2.216,
                2.43
              ]
            },
            {
              "pitch": 35,
              "levels": [
                1.3479999999999999,
                1.546,
                1.744,
                1.9420000000000002,
                2.14
              ]
            },
            {
              "pitch": 40,
              "levels": [
                1.13,
                1.31,
                1.49,
                1.67,
                1.85
              ]
            },
            {
              "pitch": 45,
              "levels": [
                0.904,
                1.068,
                1.232,
                1.396,
                1.56
              ]
            },
            {
              "pitch": 50,
              "levels": [
                0.68,
                0.8300000000000001,
                0.98,
                1.13,
                1.28
              ]
            },
            {
              "pitch": 55,
              "levels": [
                0.46199999999999997,
                0.594,
                0.726,
                0.8579999999999999,
                0.99
              ]
            },
            {
              "pitch": 60,
              "levels": [
                0.238,
                0.356,
                0.474,
                0.592,
                0.71
              ]
            },
            {
              "pitch": 65,
              "levels": [
                0.08199999999999999,
                0.16399999999999998,
                0.24599999999999997,
                0.32799999999999996,
                0.41
              ]
            },
            {
              "pitch": 70,
              "levels": [
                0.06999999999999999,
                0.13999999999999999,
                0.20999999999999996,
                0.27999999999999997,
                0.35
              ]
            },
            {
              "pitch": 75,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 80,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 85,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 90,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ],
          "slippery": [
            {
              "pitch": 0,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 5,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 10,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 15,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 20,
              "levels": [
                1.726,
                1.9020000000000001,
                2.0780000000000003,
                2.254,
                2.43
              ]
            },
            {
              "pitch": 25,
              "levels": [
                1.5899999999999999,
                1.8,
                2.01,
                2.22,
                2.43
              ]
            },
            {
              "pitch": 30,
              "levels": [
                1.438,
                1.686,
                1.9340000000000002,
                2.1820000000000004,
                2.43
              ]
            },
            {
              "pitch": 35,
              "levels": [
                1.22,
                1.4500000000000002,
                1.6800000000000002,
                1.9100000000000001,
                2.14
              ]
            },
            {
              "pitch": 40,
              "levels": [
                1.002,
                1.214,
                1.4260000000000002,
                1.6380000000000001,
                1.85
              ]
            },
            {
              "pitch": 45,
              "levels": [
                0.784,
                0.978,
                1.1720000000000002,
                1.366,
                1.56
              ]
            },
            {
              "pitch": 50,
              "levels": [
                0.5760000000000001,
                0.752,
                0.928,
                1.104,
                1.28
              ]
            },
            {
              "pitch": 55,
              "levels": [
                0.358,
                0.516,
                0.6739999999999999,
                0.8320000000000001,
                0.99
              ]
            },
            {
              "pitch": 60,
              "levels": [
                0.142,
                0.284,
                0.42599999999999993,
                0.568,
                0.71
              ]
            },
            {
              "pitch": 65,
              "levels": [
                0.08199999999999999,
                0.16399999999999998,
                0.24599999999999997,
                0.32799999999999996,
                0.41
              ]
            },
            {
              "pitch": 70,
              "levels": [
                0.06999999999999999,
                0.13999999999999999,
                0.20999999999999996,
                0.27999999999999997,
                0.35
              ]
            },
            {
              "pitch": 75,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 80,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 85,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 90,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        },
        "codes": [
          {
            "year": "1942-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.92
              },
              {
                "pitch": 5,
                "factor": 1.92
              },
              {
                "pitch": 10,
                "factor": 1.92
              },
              {
                "pitch": 15,
                "factor": 1.92
              },
              {
                "pitch": 20,
                "factor": 1.92
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.47
              },
              {
                "pitch": 35,
                "factor": 1.25
              },
              {
                "pitch": 40,
                "factor": 1.03
              },
              {
                "pitch": 45,
                "factor": 0.8
              },
              {
                "pitch": 50,
                "factor": 0.58
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0.13
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1953-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.77
              },
              {
                "pitch": 5,
                "factor": 1.77
              },
              {
                "pitch": 10,
                "factor": 1.77
              },
              {
                "pitch": 15,
                "factor": 1.77
              },
              {
                "pitch": 20,
                "factor": 1.77
              },
              {
                "pitch": 25,
                "factor": 1.57
              },
              {
                "pitch": 30,
                "factor": 1.36
              },
              {
                "pitch": 35,
                "factor": 1.15
              },
              {
                "pitch": 40,
                "factor": 0.95
              },
              {
                "pitch": 45,
                "factor": 0.74
              },
              {
                "pitch": 50,
                "factor": 0.53
              },
              {
                "pitch": 55,
                "factor": 0.33
              },
              {
                "pitch": 60,
                "factor": 0.12
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1960-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.77
              },
              {
                "pitch": 5,
                "factor": 1.77
              },
              {
                "pitch": 10,
                "factor": 1.77
              },
              {
                "pitch": 15,
                "factor": 1.77
              },
              {
                "pitch": 20,
                "factor": 1.77
              },
              {
                "pitch": 25,
                "factor": 1.77
              },
              {
                "pitch": 30,
                "factor": 1.42
              },
              {
                "pitch": 35,
                "factor": 1.42
              },
              {
                "pitch": 40,
                "factor": 1.42
              },
              {
                "pitch": 45,
                "factor": 1.06
              },
              {
                "pitch": 50,
                "factor": 1.06
              },
              {
                "pitch": 55,
                "factor": 0.71
              },
              {
                "pitch": 60,
                "factor": 0.71
              },
              {
                "pitch": 65,
                "factor": 0.35
              },
              {
                "pitch": 70,
                "factor": 0.35
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1965-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1970-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1975-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1977-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1980-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1985-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1990-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.78
              },
              {
                "pitch": 5,
                "factor": 1.78
              },
              {
                "pitch": 10,
                "factor": 1.78
              },
              {
                "pitch": 15,
                "factor": 1.78
              },
              {
                "pitch": 20,
                "factor": 1.78
              },
              {
                "pitch": 25,
                "factor": 1.78
              },
              {
                "pitch": 30,
                "factor": 1.78
              },
              {
                "pitch": 35,
                "factor": 1.56
              },
              {
                "pitch": 40,
                "factor": 1.34
              },
              {
                "pitch": 45,
                "factor": 1.11
              },
              {
                "pitch": 50,
                "factor": 0.89
              },
              {
                "pitch": 55,
                "factor": 0.67
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.22
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1995-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.78
              },
              {
                "pitch": 5,
                "factor": 1.78
              },
              {
                "pitch": 10,
                "factor": 1.78
              },
              {
                "pitch": 15,
                "factor": 1.78
              },
              {
                "pitch": 20,
                "factor": 1.78
              },
              {
                "pitch": 25,
                "factor": 1.78
              },
              {
                "pitch": 30,
                "factor": 1.78
              },
              {
                "pitch": 35,
                "factor": 1.56
              },
              {
                "pitch": 40,
                "factor": 1.34
              },
              {
                "pitch": 45,
                "factor": 1.11
              },
              {
                "pitch": 50,
                "factor": 0.89
              },
              {
                "pitch": 55,
                "factor": 0.67
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.22
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.55
              },
              {
                "pitch": 5,
                "factor": 1.55
              },
              {
                "pitch": 10,
                "factor": 1.55
              },
              {
                "pitch": 15,
                "factor": 1.55
              },
              {
                "pitch": 20,
                "factor": 1.55
              },
              {
                "pitch": 25,
                "factor": 1.55
              },
              {
                "pitch": 30,
                "factor": 1.55
              },
              {
                "pitch": 35,
                "factor": 1.37
              },
              {
                "pitch": 40,
                "factor": 1.18
              },
              {
                "pitch": 45,
                "factor": 1
              },
              {
                "pitch": 50,
                "factor": 0.82
              },
              {
                "pitch": 55,
                "factor": 0.63
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.94
              },
              {
                "pitch": 5,
                "factor": 1.94
              },
              {
                "pitch": 10,
                "factor": 1.94
              },
              {
                "pitch": 15,
                "factor": 1.94
              },
              {
                "pitch": 20,
                "factor": 1.94
              },
              {
                "pitch": 25,
                "factor": 1.94
              },
              {
                "pitch": 30,
                "factor": 1.94
              },
              {
                "pitch": 35,
                "factor": 1.71
              },
              {
                "pitch": 40,
                "factor": 1.48
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1.02
              },
              {
                "pitch": 55,
                "factor": 0.79
              },
              {
                "pitch": 60,
                "factor": 0.56
              },
              {
                "pitch": 65,
                "factor": 0.33
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.23
              },
              {
                "pitch": 5,
                "factor": 2.23
              },
              {
                "pitch": 10,
                "factor": 2.23
              },
              {
                "pitch": 15,
                "factor": 2.23
              },
              {
                "pitch": 20,
                "factor": 2.23
              },
              {
                "pitch": 25,
                "factor": 2.23
              },
              {
                "pitch": 30,
                "factor": 2.23
              },
              {
                "pitch": 35,
                "factor": 1.97
              },
              {
                "pitch": 40,
                "factor": 1.7
              },
              {
                "pitch": 45,
                "factor": 1.44
              },
              {
                "pitch": 50,
                "factor": 1.17
              },
              {
                "pitch": 55,
                "factor": 0.91
              },
              {
                "pitch": 60,
                "factor": 0.64
              },
              {
                "pitch": 65,
                "factor": 0.38
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.43
              },
              {
                "pitch": 5,
                "factor": 2.43
              },
              {
                "pitch": 10,
                "factor": 2.43
              },
              {
                "pitch": 15,
                "factor": 2.43
              },
              {
                "pitch": 20,
                "factor": 2.43
              },
              {
                "pitch": 25,
                "factor": 2.43
              },
              {
                "pitch": 30,
                "factor": 2.43
              },
              {
                "pitch": 35,
                "factor": 2.14
              },
              {
                "pitch": 40,
                "factor": 1.85
              },
              {
                "pitch": 45,
                "factor": 1.56
              },
              {
                "pitch": 50,
                "factor": 1.28
              },
              {
                "pitch": 55,
                "factor": 0.99
              },
              {
                "pitch": 60,
                "factor": 0.7
              },
              {
                "pitch": 65,
                "factor": 0.41
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.43
              },
              {
                "pitch": 5,
                "factor": 2.43
              },
              {
                "pitch": 10,
                "factor": 2.43
              },
              {
                "pitch": 15,
                "factor": 2.43
              },
              {
                "pitch": 20,
                "factor": 2.43
              },
              {
                "pitch": 25,
                "factor": 2.43
              },
              {
                "pitch": 30,
                "factor": 2.43
              },
              {
                "pitch": 35,
                "factor": 2.14
              },
              {
                "pitch": 40,
                "factor": 1.85
              },
              {
                "pitch": 45,
                "factor": 1.56
              },
              {
                "pitch": 50,
                "factor": 1.28
              },
              {
                "pitch": 55,
                "factor": 0.99
              },
              {
                "pitch": 60,
                "factor": 0.7
              },
              {
                "pitch": 65,
                "factor": 0.41
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.23
              },
              {
                "pitch": 5,
                "factor": 2.23
              },
              {
                "pitch": 10,
                "factor": 2.23
              },
              {
                "pitch": 15,
                "factor": 2.23
              },
              {
                "pitch": 20,
                "factor": 2.23
              },
              {
                "pitch": 25,
                "factor": 2.23
              },
              {
                "pitch": 30,
                "factor": 2.23
              },
              {
                "pitch": 35,
                "factor": 1.97
              },
              {
                "pitch": 40,
                "factor": 1.7
              },
              {
                "pitch": 45,
                "factor": 1.44
              },
              {
                "pitch": 50,
                "factor": 1.17
              },
              {
                "pitch": 55,
                "factor": 0.91
              },
              {
                "pitch": 60,
                "factor": 0.64
              },
              {
                "pitch": 65,
                "factor": 0.38
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.94
              },
              {
                "pitch": 5,
                "factor": 1.94
              },
              {
                "pitch": 10,
                "factor": 1.94
              },
              {
                "pitch": 15,
                "factor": 1.94
              },
              {
                "pitch": 20,
                "factor": 1.94
              },
              {
                "pitch": 25,
                "factor": 1.94
              },
              {
                "pitch": 30,
                "factor": 1.94
              },
              {
                "pitch": 35,
                "factor": 1.71
              },
              {
                "pitch": 40,
                "factor": 1.48
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1.02
              },
              {
                "pitch": 55,
                "factor": 0.79
              },
              {
                "pitch": 60,
                "factor": 0.56
              },
              {
                "pitch": 65,
                "factor": 0.33
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.55
              },
              {
                "pitch": 5,
                "factor": 1.55
              },
              {
                "pitch": 10,
                "factor": 1.55
              },
              {
                "pitch": 15,
                "factor": 1.55
              },
              {
                "pitch": 20,
                "factor": 1.55
              },
              {
                "pitch": 25,
                "factor": 1.55
              },
              {
                "pitch": 30,
                "factor": 1.55
              },
              {
                "pitch": 35,
                "factor": 1.37
              },
              {
                "pitch": 40,
                "factor": 1.18
              },
              {
                "pitch": 45,
                "factor": 1
              },
              {
                "pitch": 50,
                "factor": 0.82
              },
              {
                "pitch": 55,
                "factor": 0.63
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1941-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.92
              },
              {
                "pitch": 5,
                "factor": 1.92
              },
              {
                "pitch": 10,
                "factor": 1.92
              },
              {
                "pitch": 15,
                "factor": 1.92
              },
              {
                "pitch": 20,
                "factor": 1.92
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.47
              },
              {
                "pitch": 35,
                "factor": 1.25
              },
              {
                "pitch": 40,
                "factor": 1.03
              },
              {
                "pitch": 45,
                "factor": 0.8
              },
              {
                "pitch": 50,
                "factor": 0.58
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0.13
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1953-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.77
              },
              {
                "pitch": 5,
                "factor": 1.77
              },
              {
                "pitch": 10,
                "factor": 1.77
              },
              {
                "pitch": 15,
                "factor": 1.77
              },
              {
                "pitch": 20,
                "factor": 1.77
              },
              {
                "pitch": 25,
                "factor": 1.57
              },
              {
                "pitch": 30,
                "factor": 1.36
              },
              {
                "pitch": 35,
                "factor": 1.15
              },
              {
                "pitch": 40,
                "factor": 0.95
              },
              {
                "pitch": 45,
                "factor": 0.74
              },
              {
                "pitch": 50,
                "factor": 0.53
              },
              {
                "pitch": 55,
                "factor": 0.33
              },
              {
                "pitch": 60,
                "factor": 0.12
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1960-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.77
              },
              {
                "pitch": 5,
                "factor": 1.77
              },
              {
                "pitch": 10,
                "factor": 1.77
              },
              {
                "pitch": 15,
                "factor": 1.77
              },
              {
                "pitch": 20,
                "factor": 1.77
              },
              {
                "pitch": 25,
                "factor": 1.77
              },
              {
                "pitch": 30,
                "factor": 1.42
              },
              {
                "pitch": 35,
                "factor": 1.42
              },
              {
                "pitch": 40,
                "factor": 1.42
              },
              {
                "pitch": 45,
                "factor": 1.06
              },
              {
                "pitch": 50,
                "factor": 1.06
              },
              {
                "pitch": 55,
                "factor": 0.71
              },
              {
                "pitch": 60,
                "factor": 0.71
              },
              {
                "pitch": 65,
                "factor": 0.35
              },
              {
                "pitch": 70,
                "factor": 0.35
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1965-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1970-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1975-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1977-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1980-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1985-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.76
              },
              {
                "pitch": 5,
                "factor": 1.76
              },
              {
                "pitch": 10,
                "factor": 1.76
              },
              {
                "pitch": 15,
                "factor": 1.76
              },
              {
                "pitch": 20,
                "factor": 1.76
              },
              {
                "pitch": 25,
                "factor": 1.76
              },
              {
                "pitch": 30,
                "factor": 1.76
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1990-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.78
              },
              {
                "pitch": 5,
                "factor": 1.78
              },
              {
                "pitch": 10,
                "factor": 1.78
              },
              {
                "pitch": 15,
                "factor": 1.78
              },
              {
                "pitch": 20,
                "factor": 1.58
              },
              {
                "pitch": 25,
                "factor": 1.38
              },
              {
                "pitch": 30,
                "factor": 1.19
              },
              {
                "pitch": 35,
                "factor": 0.99
              },
              {
                "pitch": 40,
                "factor": 0.79
              },
              {
                "pitch": 45,
                "factor": 0.59
              },
              {
                "pitch": 50,
                "factor": 0.4
              },
              {
                "pitch": 55,
                "factor": 0.2
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1995-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.78
              },
              {
                "pitch": 5,
                "factor": 1.78
              },
              {
                "pitch": 10,
                "factor": 1.78
              },
              {
                "pitch": 15,
                "factor": 1.78
              },
              {
                "pitch": 20,
                "factor": 1.58
              },
              {
                "pitch": 25,
                "factor": 1.38
              },
              {
                "pitch": 30,
                "factor": 1.19
              },
              {
                "pitch": 35,
                "factor": 0.99
              },
              {
                "pitch": 40,
                "factor": 0.79
              },
              {
                "pitch": 45,
                "factor": 0.59
              },
              {
                "pitch": 50,
                "factor": 0.4
              },
              {
                "pitch": 55,
                "factor": 0.2
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.55
              },
              {
                "pitch": 5,
                "factor": 1.55
              },
              {
                "pitch": 10,
                "factor": 1.55
              },
              {
                "pitch": 15,
                "factor": 1.55
              },
              {
                "pitch": 20,
                "factor": 1.55
              },
              {
                "pitch": 25,
                "factor": 1.55
              },
              {
                "pitch": 30,
                "factor": 1.55
              },
              {
                "pitch": 35,
                "factor": 1.37
              },
              {
                "pitch": 40,
                "factor": 1.18
              },
              {
                "pitch": 45,
                "factor": 1
              },
              {
                "pitch": 50,
                "factor": 0.82
              },
              {
                "pitch": 55,
                "factor": 0.63
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.55
              },
              {
                "pitch": 5,
                "factor": 1.55
              },
              {
                "pitch": 10,
                "factor": 1.55
              },
              {
                "pitch": 15,
                "factor": 1.55
              },
              {
                "pitch": 20,
                "factor": 1.55
              },
              {
                "pitch": 25,
                "factor": 1.55
              },
              {
                "pitch": 30,
                "factor": 1.55
              },
              {
                "pitch": 35,
                "factor": 1.37
              },
              {
                "pitch": 40,
                "factor": 1.18
              },
              {
                "pitch": 45,
                "factor": 1
              },
              {
                "pitch": 50,
                "factor": 0.82
              },
              {
                "pitch": 55,
                "factor": 0.63
              },
              {
                "pitch": 60,
                "factor": 0.45
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.94
              },
              {
                "pitch": 5,
                "factor": 1.94
              },
              {
                "pitch": 10,
                "factor": 1.94
              },
              {
                "pitch": 15,
                "factor": 1.94
              },
              {
                "pitch": 20,
                "factor": 1.94
              },
              {
                "pitch": 25,
                "factor": 1.94
              },
              {
                "pitch": 30,
                "factor": 1.94
              },
              {
                "pitch": 35,
                "factor": 1.71
              },
              {
                "pitch": 40,
                "factor": 1.48
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1.02
              },
              {
                "pitch": 55,
                "factor": 0.79
              },
              {
                "pitch": 60,
                "factor": 0.56
              },
              {
                "pitch": 65,
                "factor": 0.33
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.94
              },
              {
                "pitch": 5,
                "factor": 1.94
              },
              {
                "pitch": 10,
                "factor": 1.94
              },
              {
                "pitch": 15,
                "factor": 1.94
              },
              {
                "pitch": 20,
                "factor": 1.94
              },
              {
                "pitch": 25,
                "factor": 1.94
              },
              {
                "pitch": 30,
                "factor": 1.94
              },
              {
                "pitch": 35,
                "factor": 1.71
              },
              {
                "pitch": 40,
                "factor": 1.48
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1.02
              },
              {
                "pitch": 55,
                "factor": 0.79
              },
              {
                "pitch": 60,
                "factor": 0.56
              },
              {
                "pitch": 65,
                "factor": 0.33
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.23
              },
              {
                "pitch": 5,
                "factor": 2.23
              },
              {
                "pitch": 10,
                "factor": 2.23
              },
              {
                "pitch": 15,
                "factor": 2.23
              },
              {
                "pitch": 20,
                "factor": 2.23
              },
              {
                "pitch": 25,
                "factor": 2.23
              },
              {
                "pitch": 30,
                "factor": 2.23
              },
              {
                "pitch": 35,
                "factor": 1.97
              },
              {
                "pitch": 40,
                "factor": 1.7
              },
              {
                "pitch": 45,
                "factor": 1.44
              },
              {
                "pitch": 50,
                "factor": 1.17
              },
              {
                "pitch": 55,
                "factor": 0.91
              },
              {
                "pitch": 60,
                "factor": 0.64
              },
              {
                "pitch": 65,
                "factor": 0.38
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.23
              },
              {
                "pitch": 5,
                "factor": 2.23
              },
              {
                "pitch": 10,
                "factor": 2.23
              },
              {
                "pitch": 15,
                "factor": 2.23
              },
              {
                "pitch": 20,
                "factor": 2.23
              },
              {
                "pitch": 25,
                "factor": 2.23
              },
              {
                "pitch": 30,
                "factor": 2.23
              },
              {
                "pitch": 35,
                "factor": 1.97
              },
              {
                "pitch": 40,
                "factor": 1.7
              },
              {
                "pitch": 45,
                "factor": 1.44
              },
              {
                "pitch": 50,
                "factor": 1.17
              },
              {
                "pitch": 55,
                "factor": 0.91
              },
              {
                "pitch": 60,
                "factor": 0.64
              },
              {
                "pitch": 65,
                "factor": 0.38
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.43
              },
              {
                "pitch": 5,
                "factor": 2.43
              },
              {
                "pitch": 10,
                "factor": 2.43
              },
              {
                "pitch": 15,
                "factor": 2.43
              },
              {
                "pitch": 20,
                "factor": 2.43
              },
              {
                "pitch": 25,
                "factor": 2.43
              },
              {
                "pitch": 30,
                "factor": 2.43
              },
              {
                "pitch": 35,
                "factor": 2.14
              },
              {
                "pitch": 40,
                "factor": 1.85
              },
              {
                "pitch": 45,
                "factor": 1.56
              },
              {
                "pitch": 50,
                "factor": 1.28
              },
              {
                "pitch": 55,
                "factor": 0.99
              },
              {
                "pitch": 60,
                "factor": 0.7
              },
              {
                "pitch": 65,
                "factor": 0.41
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.43
              },
              {
                "pitch": 5,
                "factor": 2.43
              },
              {
                "pitch": 10,
                "factor": 2.43
              },
              {
                "pitch": 15,
                "factor": 2.43
              },
              {
                "pitch": 20,
                "factor": 2.43
              },
              {
                "pitch": 25,
                "factor": 2.43
              },
              {
                "pitch": 30,
                "factor": 2.43
              },
              {
                "pitch": 35,
                "factor": 2.14
              },
              {
                "pitch": 40,
                "factor": 1.85
              },
              {
                "pitch": 45,
                "factor": 1.56
              },
              {
                "pitch": 50,
                "factor": 1.28
              },
              {
                "pitch": 55,
                "factor": 0.99
              },
              {
                "pitch": 60,
                "factor": 0.7
              },
              {
                "pitch": 65,
                "factor": 0.41
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          }
        ]
      }
    });
    var yellowknife = Regions.insert({
      "name": "Yellowknife",
      "wind_direction": "NW",
      "location": {"type": "Point","coordinates": [-114.3718,62.454]},
      "snow_load_factors": {
        "thresholds": [
          "#b71c1c",
          "#f57c00",
          "#cddc39",
          "#689f38",
          "#1b5e20"
        ],
        "levels": {
          "standard": [
            {
              "pitch": 0,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 5,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 10,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 15,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 20,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 25,
              "levels": [
                1.6179999999999999,
                1.796,
                1.974,
                2.152,
                2.33
              ]
            },
            {
              "pitch": 30,
              "levels": [
                1.466,
                1.682,
                1.8980000000000001,
                2.114,
                2.33
              ]
            },
            {
              "pitch": 35,
              "levels": [
                1.258,
                1.456,
                1.654,
                1.8519999999999999,
                2.05
              ]
            },
            {
              "pitch": 40,
              "levels": [
                1.052,
                1.234,
                1.416,
                1.5979999999999999,
                1.78
              ]
            },
            {
              "pitch": 45,
              "levels": [
                0.8440000000000001,
                1.008,
                1.172,
                1.3359999999999999,
                1.5
              ]
            },
            {
              "pitch": 50,
              "levels": [
                0.638,
                0.786,
                0.9339999999999999,
                1.0819999999999999,
                1.23
              ]
            },
            {
              "pitch": 55,
              "levels": [
                0.42999999999999994,
                0.5599999999999999,
                0.69,
                0.8199999999999998,
                0.95
              ]
            },
            {
              "pitch": 60,
              "levels": [
                0.22400000000000003,
                0.338,
                0.45200000000000007,
                0.5660000000000001,
                0.68
              ]
            },
            {
              "pitch": 65,
              "levels": [
                0.08,
                0.16,
                0.24,
                0.32,
                0.4
              ]
            },
            {
              "pitch": 70,
              "levels": [
                0.066,
                0.132,
                0.198,
                0.264,
                0.33
              ]
            },
            {
              "pitch": 75,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 80,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 85,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 90,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ],
          "slippery": [
            {
              "pitch": 0,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 5,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 10,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 15,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 20,
              "levels": [
                1.658,
                1.826,
                1.994,
                2.162,
                2.33
              ]
            },
            {
              "pitch": 25,
              "levels": [
                1.522,
                1.7240000000000002,
                1.9260000000000002,
                2.128,
                2.33
              ]
            },
            {
              "pitch": 30,
              "levels": [
                1.3699999999999999,
                1.6099999999999999,
                1.85,
                2.09,
                2.33
              ]
            },
            {
              "pitch": 35,
              "levels": [
                1.162,
                1.384,
                1.6059999999999999,
                1.8279999999999998,
                2.05
              ]
            },
            {
              "pitch": 40,
              "levels": [
                0.964,
                1.1680000000000001,
                1.372,
                1.576,
                1.78
              ]
            },
            {
              "pitch": 45,
              "levels": [
                0.756,
                0.942,
                1.1280000000000001,
                1.314,
                1.5
              ]
            },
            {
              "pitch": 50,
              "levels": [
                0.55,
                0.72,
                0.89,
                1.06,
                1.23
              ]
            },
            {
              "pitch": 55,
              "levels": [
                0.34199999999999997,
                0.494,
                0.6459999999999999,
                0.798,
                0.95
              ]
            },
            {
              "pitch": 60,
              "levels": [
                0.136,
                0.272,
                0.40800000000000003,
                0.544,
                0.68
              ]
            },
            {
              "pitch": 65,
              "levels": [
                0.08,
                0.16,
                0.24,
                0.32,
                0.4
              ]
            },
            {
              "pitch": 70,
              "levels": [
                0.066,
                0.132,
                0.198,
                0.264,
                0.33
              ]
            },
            {
              "pitch": 75,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 80,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 85,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            },
            {
              "pitch": 90,
              "levels": [
                0,
                0,
                0,
                0,
                0
              ]
            }
          ]
        },
        "codes": [
          {
            "year": "1941-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.92
              },
              {
                "pitch": 5,
                "factor": 1.92
              },
              {
                "pitch": 10,
                "factor": 1.92
              },
              {
                "pitch": 15,
                "factor": 1.92
              },
              {
                "pitch": 20,
                "factor": 1.92
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.47
              },
              {
                "pitch": 35,
                "factor": 1.25
              },
              {
                "pitch": 40,
                "factor": 1.03
              },
              {
                "pitch": 45,
                "factor": 0.8
              },
              {
                "pitch": 50,
                "factor": 0.58
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0.13
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1941-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.92
              },
              {
                "pitch": 5,
                "factor": 1.92
              },
              {
                "pitch": 10,
                "factor": 1.92
              },
              {
                "pitch": 15,
                "factor": 1.92
              },
              {
                "pitch": 20,
                "factor": 1.92
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.47
              },
              {
                "pitch": 35,
                "factor": 1.25
              },
              {
                "pitch": 40,
                "factor": 1.03
              },
              {
                "pitch": 45,
                "factor": 0.8
              },
              {
                "pitch": 50,
                "factor": 0.58
              },
              {
                "pitch": 55,
                "factor": 0.35
              },
              {
                "pitch": 60,
                "factor": 0.13
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1953-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.44
              },
              {
                "pitch": 30,
                "factor": 1.25
              },
              {
                "pitch": 35,
                "factor": 1.06
              },
              {
                "pitch": 40,
                "factor": 0.87
              },
              {
                "pitch": 45,
                "factor": 0.68
              },
              {
                "pitch": 50,
                "factor": 0.49
              },
              {
                "pitch": 55,
                "factor": 0.3
              },
              {
                "pitch": 60,
                "factor": 0.11
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1953-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.44
              },
              {
                "pitch": 30,
                "factor": 1.25
              },
              {
                "pitch": 35,
                "factor": 1.06
              },
              {
                "pitch": 40,
                "factor": 0.87
              },
              {
                "pitch": 45,
                "factor": 0.68
              },
              {
                "pitch": 50,
                "factor": 0.49
              },
              {
                "pitch": 55,
                "factor": 0.3
              },
              {
                "pitch": 60,
                "factor": 0.11
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1960-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.63
              },
              {
                "pitch": 30,
                "factor": 1.3
              },
              {
                "pitch": 35,
                "factor": 1.3
              },
              {
                "pitch": 40,
                "factor": 1.3
              },
              {
                "pitch": 45,
                "factor": 0.98
              },
              {
                "pitch": 50,
                "factor": 0.98
              },
              {
                "pitch": 55,
                "factor": 0.65
              },
              {
                "pitch": 60,
                "factor": 0.65
              },
              {
                "pitch": 65,
                "factor": 0.33
              },
              {
                "pitch": 70,
                "factor": 0.33
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1960-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.63
              },
              {
                "pitch": 5,
                "factor": 1.63
              },
              {
                "pitch": 10,
                "factor": 1.63
              },
              {
                "pitch": 15,
                "factor": 1.63
              },
              {
                "pitch": 20,
                "factor": 1.63
              },
              {
                "pitch": 25,
                "factor": 1.63
              },
              {
                "pitch": 30,
                "factor": 1.3
              },
              {
                "pitch": 35,
                "factor": 1.3
              },
              {
                "pitch": 40,
                "factor": 1.3
              },
              {
                "pitch": 45,
                "factor": 0.98
              },
              {
                "pitch": 50,
                "factor": 0.98
              },
              {
                "pitch": 55,
                "factor": 0.65
              },
              {
                "pitch": 60,
                "factor": 0.65
              },
              {
                "pitch": 65,
                "factor": 0.33
              },
              {
                "pitch": 70,
                "factor": 0.33
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1965-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.61
              },
              {
                "pitch": 5,
                "factor": 1.61
              },
              {
                "pitch": 10,
                "factor": 1.61
              },
              {
                "pitch": 15,
                "factor": 1.61
              },
              {
                "pitch": 20,
                "factor": 1.61
              },
              {
                "pitch": 25,
                "factor": 1.61
              },
              {
                "pitch": 30,
                "factor": 1.61
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1970-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.61
              },
              {
                "pitch": 5,
                "factor": 1.61
              },
              {
                "pitch": 10,
                "factor": 1.61
              },
              {
                "pitch": 15,
                "factor": 1.61
              },
              {
                "pitch": 20,
                "factor": 1.61
              },
              {
                "pitch": 25,
                "factor": 1.61
              },
              {
                "pitch": 30,
                "factor": 1.61
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1975-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.61
              },
              {
                "pitch": 5,
                "factor": 1.61
              },
              {
                "pitch": 10,
                "factor": 1.61
              },
              {
                "pitch": 15,
                "factor": 1.61
              },
              {
                "pitch": 20,
                "factor": 1.61
              },
              {
                "pitch": 25,
                "factor": 1.61
              },
              {
                "pitch": 30,
                "factor": 1.61
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1965-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.61
              },
              {
                "pitch": 5,
                "factor": 1.61
              },
              {
                "pitch": 10,
                "factor": 1.61
              },
              {
                "pitch": 15,
                "factor": 1.61
              },
              {
                "pitch": 20,
                "factor": 1.61
              },
              {
                "pitch": 25,
                "factor": 1.61
              },
              {
                "pitch": 30,
                "factor": 1.61
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1970-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.61
              },
              {
                "pitch": 5,
                "factor": 1.61
              },
              {
                "pitch": 10,
                "factor": 1.61
              },
              {
                "pitch": 15,
                "factor": 1.61
              },
              {
                "pitch": 20,
                "factor": 1.61
              },
              {
                "pitch": 25,
                "factor": 1.61
              },
              {
                "pitch": 30,
                "factor": 1.61
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1975-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.61
              },
              {
                "pitch": 5,
                "factor": 1.61
              },
              {
                "pitch": 10,
                "factor": 1.61
              },
              {
                "pitch": 15,
                "factor": 1.61
              },
              {
                "pitch": 20,
                "factor": 1.61
              },
              {
                "pitch": 25,
                "factor": 1.61
              },
              {
                "pitch": 30,
                "factor": 1.61
              },
              {
                "pitch": 35,
                "factor": 1.88
              },
              {
                "pitch": 40,
                "factor": 1.61
              },
              {
                "pitch": 45,
                "factor": 1.34
              },
              {
                "pitch": 50,
                "factor": 1.07
              },
              {
                "pitch": 55,
                "factor": 0.8
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.27
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1977-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1980-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1985-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1977-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1980-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1985-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.6
              },
              {
                "pitch": 5,
                "factor": 1.6
              },
              {
                "pitch": 10,
                "factor": 1.6
              },
              {
                "pitch": 15,
                "factor": 1.6
              },
              {
                "pitch": 20,
                "factor": 1.6
              },
              {
                "pitch": 25,
                "factor": 1.6
              },
              {
                "pitch": 30,
                "factor": 1.6
              },
              {
                "pitch": 35,
                "factor": 1.75
              },
              {
                "pitch": 40,
                "factor": 1.5
              },
              {
                "pitch": 45,
                "factor": 1.25
              },
              {
                "pitch": 50,
                "factor": 1
              },
              {
                "pitch": 55,
                "factor": 0.75
              },
              {
                "pitch": 60,
                "factor": 0.5
              },
              {
                "pitch": 65,
                "factor": 0.25
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1990-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.7
              },
              {
                "pitch": 5,
                "factor": 1.7
              },
              {
                "pitch": 10,
                "factor": 1.7
              },
              {
                "pitch": 15,
                "factor": 1.7
              },
              {
                "pitch": 20,
                "factor": 1.7
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.7
              },
              {
                "pitch": 35,
                "factor": 1.49
              },
              {
                "pitch": 40,
                "factor": 1.28
              },
              {
                "pitch": 45,
                "factor": 1.06
              },
              {
                "pitch": 50,
                "factor": 0.85
              },
              {
                "pitch": 55,
                "factor": 0.64
              },
              {
                "pitch": 60,
                "factor": 0.43
              },
              {
                "pitch": 65,
                "factor": 0.21
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1995-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.7
              },
              {
                "pitch": 5,
                "factor": 1.7
              },
              {
                "pitch": 10,
                "factor": 1.7
              },
              {
                "pitch": 15,
                "factor": 1.7
              },
              {
                "pitch": 20,
                "factor": 1.7
              },
              {
                "pitch": 25,
                "factor": 1.7
              },
              {
                "pitch": 30,
                "factor": 1.7
              },
              {
                "pitch": 35,
                "factor": 1.49
              },
              {
                "pitch": 40,
                "factor": 1.28
              },
              {
                "pitch": 45,
                "factor": 1.06
              },
              {
                "pitch": 50,
                "factor": 0.85
              },
              {
                "pitch": 55,
                "factor": 0.64
              },
              {
                "pitch": 60,
                "factor": 0.43
              },
              {
                "pitch": 65,
                "factor": 0.21
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1990-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.7
              },
              {
                "pitch": 5,
                "factor": 1.7
              },
              {
                "pitch": 10,
                "factor": 1.7
              },
              {
                "pitch": 15,
                "factor": 1.7
              },
              {
                "pitch": 20,
                "factor": 1.51
              },
              {
                "pitch": 25,
                "factor": 1.32
              },
              {
                "pitch": 30,
                "factor": 1.13
              },
              {
                "pitch": 35,
                "factor": 0.94
              },
              {
                "pitch": 40,
                "factor": 0.76
              },
              {
                "pitch": 45,
                "factor": 0.57
              },
              {
                "pitch": 50,
                "factor": 0.38
              },
              {
                "pitch": 55,
                "factor": 0.19
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "1995-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "all",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.7
              },
              {
                "pitch": 5,
                "factor": 1.7
              },
              {
                "pitch": 10,
                "factor": 1.7
              },
              {
                "pitch": 15,
                "factor": 1.7
              },
              {
                "pitch": 20,
                "factor": 1.51
              },
              {
                "pitch": 25,
                "factor": 1.32
              },
              {
                "pitch": 30,
                "factor": 1.13
              },
              {
                "pitch": 35,
                "factor": 0.94
              },
              {
                "pitch": 40,
                "factor": 0.76
              },
              {
                "pitch": 45,
                "factor": 0.57
              },
              {
                "pitch": 50,
                "factor": 0.38
              },
              {
                "pitch": 55,
                "factor": 0.19
              },
              {
                "pitch": 60,
                "factor": 0
              },
              {
                "pitch": 65,
                "factor": 0
              },
              {
                "pitch": 70,
                "factor": 0
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.49
              },
              {
                "pitch": 5,
                "factor": 1.49
              },
              {
                "pitch": 10,
                "factor": 1.49
              },
              {
                "pitch": 15,
                "factor": 1.49
              },
              {
                "pitch": 20,
                "factor": 1.49
              },
              {
                "pitch": 25,
                "factor": 1.49
              },
              {
                "pitch": 30,
                "factor": 1.49
              },
              {
                "pitch": 35,
                "factor": 1.31
              },
              {
                "pitch": 40,
                "factor": 1.14
              },
              {
                "pitch": 45,
                "factor": 0.96
              },
              {
                "pitch": 50,
                "factor": 0.78
              },
              {
                "pitch": 55,
                "factor": 0.61
              },
              {
                "pitch": 60,
                "factor": 0.43
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.49
              },
              {
                "pitch": 5,
                "factor": 1.49
              },
              {
                "pitch": 10,
                "factor": 1.49
              },
              {
                "pitch": 15,
                "factor": 1.49
              },
              {
                "pitch": 20,
                "factor": 1.49
              },
              {
                "pitch": 25,
                "factor": 1.49
              },
              {
                "pitch": 30,
                "factor": 1.49
              },
              {
                "pitch": 35,
                "factor": 1.31
              },
              {
                "pitch": 40,
                "factor": 1.14
              },
              {
                "pitch": 45,
                "factor": 0.96
              },
              {
                "pitch": 50,
                "factor": 0.78
              },
              {
                "pitch": 55,
                "factor": 0.61
              },
              {
                "pitch": 60,
                "factor": 0.43
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.49
              },
              {
                "pitch": 5,
                "factor": 1.49
              },
              {
                "pitch": 10,
                "factor": 1.49
              },
              {
                "pitch": 15,
                "factor": 1.49
              },
              {
                "pitch": 20,
                "factor": 1.49
              },
              {
                "pitch": 25,
                "factor": 1.49
              },
              {
                "pitch": 30,
                "factor": 1.49
              },
              {
                "pitch": 35,
                "factor": 1.31
              },
              {
                "pitch": 40,
                "factor": 1.14
              },
              {
                "pitch": 45,
                "factor": 0.96
              },
              {
                "pitch": 50,
                "factor": 0.78
              },
              {
                "pitch": 55,
                "factor": 0.61
              },
              {
                "pitch": 60,
                "factor": 0.43
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Low importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.49
              },
              {
                "pitch": 5,
                "factor": 1.49
              },
              {
                "pitch": 10,
                "factor": 1.49
              },
              {
                "pitch": 15,
                "factor": 1.49
              },
              {
                "pitch": 20,
                "factor": 1.49
              },
              {
                "pitch": 25,
                "factor": 1.49
              },
              {
                "pitch": 30,
                "factor": 1.49
              },
              {
                "pitch": 35,
                "factor": 1.31
              },
              {
                "pitch": 40,
                "factor": 1.14
              },
              {
                "pitch": 45,
                "factor": 0.96
              },
              {
                "pitch": 50,
                "factor": 0.78
              },
              {
                "pitch": 55,
                "factor": 0.61
              },
              {
                "pitch": 60,
                "factor": 0.43
              },
              {
                "pitch": 65,
                "factor": 0.26
              },
              {
                "pitch": 70,
                "factor": 0.08
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.86
              },
              {
                "pitch": 5,
                "factor": 1.86
              },
              {
                "pitch": 10,
                "factor": 1.86
              },
              {
                "pitch": 15,
                "factor": 1.86
              },
              {
                "pitch": 20,
                "factor": 1.86
              },
              {
                "pitch": 25,
                "factor": 1.86
              },
              {
                "pitch": 30,
                "factor": 1.86
              },
              {
                "pitch": 35,
                "factor": 1.64
              },
              {
                "pitch": 40,
                "factor": 1.42
              },
              {
                "pitch": 45,
                "factor": 1.2
              },
              {
                "pitch": 50,
                "factor": 0.98
              },
              {
                "pitch": 55,
                "factor": 0.76
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.32
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.86
              },
              {
                "pitch": 5,
                "factor": 1.86
              },
              {
                "pitch": 10,
                "factor": 1.86
              },
              {
                "pitch": 15,
                "factor": 1.86
              },
              {
                "pitch": 20,
                "factor": 1.86
              },
              {
                "pitch": 25,
                "factor": 1.86
              },
              {
                "pitch": 30,
                "factor": 1.86
              },
              {
                "pitch": 35,
                "factor": 1.64
              },
              {
                "pitch": 40,
                "factor": 1.42
              },
              {
                "pitch": 45,
                "factor": 1.2
              },
              {
                "pitch": 50,
                "factor": 0.98
              },
              {
                "pitch": 55,
                "factor": 0.76
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.32
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.86
              },
              {
                "pitch": 5,
                "factor": 1.86
              },
              {
                "pitch": 10,
                "factor": 1.86
              },
              {
                "pitch": 15,
                "factor": 1.86
              },
              {
                "pitch": 20,
                "factor": 1.86
              },
              {
                "pitch": 25,
                "factor": 1.86
              },
              {
                "pitch": 30,
                "factor": 1.86
              },
              {
                "pitch": 35,
                "factor": 1.64
              },
              {
                "pitch": 40,
                "factor": 1.42
              },
              {
                "pitch": 45,
                "factor": 1.2
              },
              {
                "pitch": 50,
                "factor": 0.98
              },
              {
                "pitch": 55,
                "factor": 0.76
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.32
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Normal importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 1.86
              },
              {
                "pitch": 5,
                "factor": 1.86
              },
              {
                "pitch": 10,
                "factor": 1.86
              },
              {
                "pitch": 15,
                "factor": 1.86
              },
              {
                "pitch": 20,
                "factor": 1.86
              },
              {
                "pitch": 25,
                "factor": 1.86
              },
              {
                "pitch": 30,
                "factor": 1.86
              },
              {
                "pitch": 35,
                "factor": 1.64
              },
              {
                "pitch": 40,
                "factor": 1.42
              },
              {
                "pitch": 45,
                "factor": 1.2
              },
              {
                "pitch": 50,
                "factor": 0.98
              },
              {
                "pitch": 55,
                "factor": 0.76
              },
              {
                "pitch": 60,
                "factor": 0.54
              },
              {
                "pitch": 65,
                "factor": 0.32
              },
              {
                "pitch": 70,
                "factor": 0.1
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.89
              },
              {
                "pitch": 40,
                "factor": 1.63
              },
              {
                "pitch": 45,
                "factor": 1.38
              },
              {
                "pitch": 50,
                "factor": 1.13
              },
              {
                "pitch": 55,
                "factor": 0.87
              },
              {
                "pitch": 60,
                "factor": 0.62
              },
              {
                "pitch": 65,
                "factor": 0.37
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.89
              },
              {
                "pitch": 40,
                "factor": 1.63
              },
              {
                "pitch": 45,
                "factor": 1.38
              },
              {
                "pitch": 50,
                "factor": 1.13
              },
              {
                "pitch": 55,
                "factor": 0.87
              },
              {
                "pitch": 60,
                "factor": 0.62
              },
              {
                "pitch": 65,
                "factor": 0.37
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.89
              },
              {
                "pitch": 40,
                "factor": 1.63
              },
              {
                "pitch": 45,
                "factor": 1.38
              },
              {
                "pitch": 50,
                "factor": 1.13
              },
              {
                "pitch": 55,
                "factor": 0.87
              },
              {
                "pitch": 60,
                "factor": 0.62
              },
              {
                "pitch": 65,
                "factor": 0.37
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "High importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.14
              },
              {
                "pitch": 5,
                "factor": 2.14
              },
              {
                "pitch": 10,
                "factor": 2.14
              },
              {
                "pitch": 15,
                "factor": 2.14
              },
              {
                "pitch": 20,
                "factor": 2.14
              },
              {
                "pitch": 25,
                "factor": 2.14
              },
              {
                "pitch": 30,
                "factor": 2.14
              },
              {
                "pitch": 35,
                "factor": 1.89
              },
              {
                "pitch": 40,
                "factor": 1.63
              },
              {
                "pitch": 45,
                "factor": 1.38
              },
              {
                "pitch": 50,
                "factor": 1.13
              },
              {
                "pitch": 55,
                "factor": 0.87
              },
              {
                "pitch": 60,
                "factor": 0.62
              },
              {
                "pitch": 65,
                "factor": 0.37
              },
              {
                "pitch": 70,
                "factor": 0.12
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.33
              },
              {
                "pitch": 5,
                "factor": 2.33
              },
              {
                "pitch": 10,
                "factor": 2.33
              },
              {
                "pitch": 15,
                "factor": 2.33
              },
              {
                "pitch": 20,
                "factor": 2.33
              },
              {
                "pitch": 25,
                "factor": 2.33
              },
              {
                "pitch": 30,
                "factor": 2.33
              },
              {
                "pitch": 35,
                "factor": 2.05
              },
              {
                "pitch": 40,
                "factor": 1.78
              },
              {
                "pitch": 45,
                "factor": 1.5
              },
              {
                "pitch": 50,
                "factor": 1.23
              },
              {
                "pitch": 55,
                "factor": 0.95
              },
              {
                "pitch": 60,
                "factor": 0.68
              },
              {
                "pitch": 65,
                "factor": 0.4
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "standard",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.33
              },
              {
                "pitch": 5,
                "factor": 2.33
              },
              {
                "pitch": 10,
                "factor": 2.33
              },
              {
                "pitch": 15,
                "factor": 2.33
              },
              {
                "pitch": 20,
                "factor": 2.33
              },
              {
                "pitch": 25,
                "factor": 2.33
              },
              {
                "pitch": 30,
                "factor": 2.33
              },
              {
                "pitch": 35,
                "factor": 2.05
              },
              {
                "pitch": 40,
                "factor": 1.78
              },
              {
                "pitch": 45,
                "factor": 1.5
              },
              {
                "pitch": 50,
                "factor": 1.23
              },
              {
                "pitch": 55,
                "factor": 0.95
              },
              {
                "pitch": 60,
                "factor": 0.68
              },
              {
                "pitch": 65,
                "factor": 0.4
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2005-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.33
              },
              {
                "pitch": 5,
                "factor": 2.33
              },
              {
                "pitch": 10,
                "factor": 2.33
              },
              {
                "pitch": 15,
                "factor": 2.33
              },
              {
                "pitch": 20,
                "factor": 2.33
              },
              {
                "pitch": 25,
                "factor": 2.33
              },
              {
                "pitch": 30,
                "factor": 2.33
              },
              {
                "pitch": 35,
                "factor": 2.05
              },
              {
                "pitch": 40,
                "factor": 1.78
              },
              {
                "pitch": 45,
                "factor": 1.5
              },
              {
                "pitch": 50,
                "factor": 1.23
              },
              {
                "pitch": 55,
                "factor": 0.95
              },
              {
                "pitch": 60,
                "factor": 0.68
              },
              {
                "pitch": 65,
                "factor": 0.4
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          },
          {
            "year": "2010-01-01T08:00:00.000Z",
            "roof": "slippery",
            "importance": "Post-disaster importance",
            "factors": [
              {
                "pitch": 0,
                "factor": 2.33
              },
              {
                "pitch": 5,
                "factor": 2.33
              },
              {
                "pitch": 10,
                "factor": 2.33
              },
              {
                "pitch": 15,
                "factor": 2.33
              },
              {
                "pitch": 20,
                "factor": 2.33
              },
              {
                "pitch": 25,
                "factor": 2.33
              },
              {
                "pitch": 30,
                "factor": 2.33
              },
              {
                "pitch": 35,
                "factor": 2.05
              },
              {
                "pitch": 40,
                "factor": 1.78
              },
              {
                "pitch": 45,
                "factor": 1.5
              },
              {
                "pitch": 50,
                "factor": 1.23
              },
              {
                "pitch": 55,
                "factor": 0.95
              },
              {
                "pitch": 60,
                "factor": 0.68
              },
              {
                "pitch": 65,
                "factor": 0.4
              },
              {
                "pitch": 70,
                "factor": 0.13
              },
              {
                "pitch": 75,
                "factor": 0
              },
              {
                "pitch": 80,
                "factor": 0
              },
              {
                "pitch": 85,
                "factor": 0
              },
              {
                "pitch": 90,
                "factor": 0
              }
            ]
          }
        ]
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
