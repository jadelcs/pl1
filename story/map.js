function initMap() {
        
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 36.648592, lng: -148.893669},
      mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
      },
    });

    const phil = { lat: 14.597943, lng: 120.982735};
    const tor = { lat: 43.64257734388785, lng: -79.3870584627254};
    const van = { lat: 49.30420011346719, lng: -123.14409857068425};
    const cali = { lat: 33.8201796932808, lng: -117.9187555732683};
    const tex = { lat: 29.426077387630365, lng: -98.48613331953025};
    const chi = { lat: 41.882595510278875, lng: -87.6225102844922};

    const markphil = new google.maps.Marker({
      position: phil,
      map,
      title: "PH",
    });
    const marktor = new google.maps.Marker({
      position: tor,
      map,
      title: "TO",
    });
    const markvan = new google.maps.Marker({
      position: van,
      map,
      title: "VR",
    });
    const markcali = new google.maps.Marker({
      position: cali,
      map,
      title: "CA",
    });
    const marktex = new google.maps.Marker({
      position: tex,
      map,
      title: "TX",
    });
    const markchi = new google.maps.Marker({
      position: chi,
      map,
      title: "CH",
    });

    markphil.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(markphil.getPosition());
    });

    marktor.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(marktor.getPosition());
    });

    markvan.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(markvan.getPosition());
    });

    markcali.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(markcali.getPosition());
    });

    marktex.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(marktex.getPosition());
    });

    markchi.addListener("click", () => {
      map.setZoom(8);
      map.setCenter(markchi.getPosition());
    });

    const styledMapType = new google.maps.StyledMapType(
      [
        { elementType: "geometry", stylers: [{ color: "#f2c708" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#9e6b30" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#c9b2a6" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [{ color: "#dcd2be" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{ color: "#ae9e90" }],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [{ color: "#dfd2ae" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#dfd2ae" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#93817c" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#a5b076" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#447530" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#f5f1e6" }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#fdfcf8" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#f8c967" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#e9bc62" }],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [{ color: "#e98d58" }],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry.stroke",
          stylers: [{ color: "#db8555" }],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [{ color: "#806b63" }],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [{ color: "#dfd2ae" }],
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.fill",
          stylers: [{ color: "#8f7d77" }],
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ebe3cd" }],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [{ color: "#dfd2ae" }],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{ color: "#b9d3c2" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#92998d" }],
        },
      ],
      { name: "Styled Map" }
    );

    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");
}     