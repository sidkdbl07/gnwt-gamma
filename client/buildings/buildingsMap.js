import "/node_modules/leaflet/dist/leaflet.css";
import L from 'leaflet';
import BingLayer from 'leaflet-bing-layer';
import "./buildingsMap.html";

if (Meteor.isClient) {
  Template.buildingsMap.onCreated(function() {
    DocHead.setTitle("Buildings | GNWT PWS");
  });

  var map, markers = {};
  Template.buildingsMap.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
    map = L.map('map', { zoomControl:false }).setView([62.454, -114.3718], 5);
    //map.on('click', function(e){
    //  console.log(e.latlng);
    //});
    //Add bing baselayer
    bing = new L.tileLayer.bing(Meteor.settings.public.BingMapKey, {type: 'Aerial'});
    bing.addTo(map);
    // Add Layers
    Buildings.find({}).observe({
      added: function(building) {
        var marker = new L.Marker([building.location.coordinates[1], building.location.coordinates[0]], {
          _id: building._id,
          name: building.name,
          icon: createIcon(building)
        }).on('click', function(e) {
          $.publish('toast', [e.target.options.name, "You clicked on the ", "info", 0]);
        });
        map.addLayer(marker);
        markers[marker.options._id] = marker;
      },
      changed: function(building) {
        var marker = markers[building._id];
        if(marker) marker.setIcon(createIcon(building));
      },
      removed: function(building) {
        var marker = markers[building._id];
        if(map.hasLayer(marker)) {
          map.removeLayer(marker);
          delete markers[building._id];
        }
      }
    });
  });

  var createIcon = function(building) {
    var className = 'leaflet-div-icon ';
    className += "building";
    return L.divIcon({
      iconSize: [30, 30],
      className: className
    });
  }

  Template.buildingsMap.events({
    'click #map_zoom_in': function(event) {
      event.preventDefault();
      map.zoomIn();
    },
    'click #map_zoom_out': function(event) {
      event.preventDefault();
      map.zoomOut();
    }
  });

  Template.buildingsMap.helpers({
    'all_buildings': function() {
      return Buildings.find().fetch();
    },
    'all_regions': function() {
      return Regions.find().fetch();
    }
  });
}
