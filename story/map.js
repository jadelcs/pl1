function initMap() {
    const cntrLatLng = { lat: 36.648592, lng: -148.893669};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: cntrLatLng,
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

    map.addListener("center_changed", () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(() => {
        //map.setZoom(3),
        map.setCenter(cntrLatLng.getPosition());
      }, 5000);
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
}

