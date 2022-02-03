function initMap() {
  // Create the map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 46.163823, lng: -157.387559},
    // style map to night mode
    // code used from https://developers.google.com/maps/documentation/javascript/examples/style-array
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });

  // draw circles on map
  // code modified from https://developers.google.com/maps/documentation/javascript/examples/circle-simple
  // I COULD NOT FOR THE LIFE OF ME MAKE THIS WORK WITH THE FOR LOOP IN EXAMPLE :(
  // therefor the code is super long...

  const philCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    map,
    center: { lat: 14.597943, lng: 120.982735},
    radius: Math.sqrt(100*100000) * 100,
  });

  const torCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    map,
    center: { lat: 43.64257734388785, lng: -79.3870584627254},
    radius: Math.sqrt(50*100000) * 100,
  });

  const vanCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    map,
    center: { lat: 49.30420011346719, lng: -123.14409857068425},
    radius: Math.sqrt(10*100000) * 100,
  });

  const caliCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    map,
    center: { lat: 33.8201796932808, lng: -117.9187555732683},
    radius: Math.sqrt(10*100000) * 100,
  });

  const texCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    map,
    center: { lat: 29.426077387630365, lng: -98.48613331953025},
    radius: Math.sqrt(5*100000) * 100,
  });

  const chiCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    map,
    center: { lat: 41.882595510278875, lng: -87.6225102844922},
    radius: Math.sqrt(5*100000) * 100,
  });

  // zoom to city when circle is clicked
  // code modified from https://developers.google.com/maps/documentation/javascript/examples/event-simple
  philCircle.addListener("click", () => {
    map.setZoom(8);
    map.setCenter({ lat: 14.597943, lng: 120.982735});
  });

  torCircle.addListener("click", () => {
    map.setZoom(8);
    map.setCenter({ lat: 43.64257734388785, lng: -79.3870584627254});
  });

  vanCircle.addListener("click", () => {
    map.setZoom(8);
    map.setCenter({ lat: 49.30420011346719, lng: -123.14409857068425});
  });
  
  caliCircle.addListener("click", () => {
    map.setZoom(8);
    map.setCenter({ lat: 33.8201796932808, lng: -117.9187555732683});
  });

  texCircle.addListener("click", () => {
    map.setZoom(8);
    map.setCenter({ lat: 29.426077387630365, lng: -98.48613331953025});
  });

  chiCircle.addListener("click", () => {
    map.setZoom(8);
    map.setCenter({ lat: 41.882595510278875, lng: -87.6225102844922});
  });
  
  // draw polylines on map
  // code modified from https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
  // I didn't understand how to make the flight paths all originate from one point with one list of coordinates
  // so I made a new path for each polyline
  const philtor = [
    { lat: 14.597943, lng: 120.982735},
    { lat: 43.64257734388785, lng: -79.3870584627254}
  ];
  const philvan = [
    { lat: 14.597943, lng: 120.982735},
    { lat: 49.30420011346719, lng: -123.14409857068425}
  ];
  const philcali = [
    { lat: 14.597943, lng: 120.982735},
    { lat: 33.8201796932808, lng: -117.9187555732683}
  ];
  const philtex = [
    { lat: 14.597943, lng: 120.982735},
    { lat: 29.426077387630365, lng: -98.48613331953025}
  ];
  const philchi = [
    { lat: 14.597943, lng: 120.982735},
    { lat: 41.882595510278875, lng: -87.6225102844922}
  ];

  const philtorline = new google.maps.Polyline({
    path: philtor,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.2,
    strokeWeight: 2,
  });
  philtorline.setMap(map);

  const philvanline = new google.maps.Polyline({
    path: philvan,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.2,
    strokeWeight: 2,
  });
  philvanline.setMap(map);

  const philcaliline = new google.maps.Polyline({
    path: philcali,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.2,
    strokeWeight: 2,
  });
  philcaliline.setMap(map);

  const philtexline = new google.maps.Polyline({
    path: philtex,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.2,
    strokeWeight: 2,
  });
  philtexline.setMap(map);

  const philchiline = new google.maps.Polyline({
    path: philchi,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.2,
    strokeWeight: 2,
  });
  philchiline.setMap(map);

}