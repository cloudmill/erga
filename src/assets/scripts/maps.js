const mapStyle = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#4d88ea"
    }]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#000045"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#000045"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#0000ff"
      },
      {
        "lightness": "0"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000045"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#000045"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#000045"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000045"
      },
      {
        "lightness": 25
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000045"
      },
      {
        "lightness": 25
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000045"
      },
      {
        "lightness": 19
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#0000bd"
      },
      {
        "lightness": "0"
      },
      {
        "gamma": "1"
      }
    ]
  }
];
let markers = [];
let map;


function initMap() {
  const locations = [];
  let marker = "/local/templates/main/assets/images/icons/marker.svg";

  if ($('input[name=site_id]').val() == 's2') {
    marker = "/local/templates/main/assets/images/icons/marker_eng.svg";
  }


  $('input[name=coord]').each(function () {
    var coord = $(this).val();
    console.log('1');
    coord = coord.split(', ');
    coord['0'] = parseFloat(coord['0']);
    coord['1'] = parseFloat(coord['1']);
    locations[locations.length] = coord;
  });

  console.log(locations);
  const mapOptions = {
    center: new google.maps.LatLng(59.91916157, 30.3251195),
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    zoomControl: true,
    scrollwheel: false,
    styles: mapStyle
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

  for (let i = 0; i < locations.length; i++) {
    markers[i] = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][0], locations[i][1]),
      icon: marker,
      map: map,
      id: i
    });
  }
}

$(function() {
  if ($("#googleMap").length) {
    initMap();
  }
});

$(document).ready(function () {
  $(".adr--js").on("click", function (e) {
    e.preventDefault();
    const getMapX = $(this).data("mapx");
    const getMapY = $(this).data("mapy");
    const top = $('#googleMap').offset().top;

    new google.maps.Marker({
      position: new google.maps.LatLng(getMapX, getMapY),
      icon: marker,
      map: map,
      id: 99
    });
    $('body,html').animate({
      scrollTop: top
    }, 1000);
    map.panTo(new google.maps.LatLng(getMapX, getMapY));
  });
});