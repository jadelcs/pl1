// function initMap() {
//     const cntrLatLng = { lat: 36.648592, lng: -148.893669};
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 3,
//       center: cntrLatLng,
//       mapTypeControlOptions: {
//       mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
//       },
//     });

//     const phil = { lat: 14.597943, lng: 120.982735};
//     const tor = { lat: 43.64257734388785, lng: -79.3870584627254};
//     const van = { lat: 49.30420011346719, lng: -123.14409857068425};
//     const cali = { lat: 33.8201796932808, lng: -117.9187555732683};
//     const tex = { lat: 29.426077387630365, lng: -98.48613331953025};
//     const chi = { lat: 41.882595510278875, lng: -87.6225102844922};

//     const markphil = new google.maps.Marker({
//       position: phil,
//       map,
//       title: "PH",
//     });
//     const marktor = new google.maps.Marker({
//       position: tor,
//       map,
//       title: "TO",
//     });
//     const markvan = new google.maps.Marker({
//       position: van,
//       map,
//       title: "VR",
//     });
//     const markcali = new google.maps.Marker({
//       position: cali,
//       map,
//       title: "CA",
//     });
//     const marktex = new google.maps.Marker({
//       position: tex,
//       map,
//       title: "TX",
//     });
//     const markchi = new google.maps.Marker({
//       position: chi,
//       map,
//       title: "CH",
//     });

//     markphil.addListener("click", () => {
//       map.setZoom(8);
//       map.setCenter(markphil.getPosition());
//     });

//     marktor.addListener("click", () => {
//       map.setZoom(8);
//       map.setCenter(marktor.getPosition());
//     });

//     markvan.addListener("click", () => {
//       map.setZoom(8);
//       map.setCenter(markvan.getPosition());
//     });

//     markcali.addListener("click", () => {
//       map.setZoom(8);
//       map.setCenter(markcali.getPosition());
//     });

//     marktex.addListener("click", () => {
//       map.setZoom(8);
//       map.setCenter(marktex.getPosition());
//     });

//     markchi.addListener("click", () => {
//       map.setZoom(8);
//       map.setCenter(markchi.getPosition());
//     });
// }

const citymap = {
  phil: {
    center: { lat: 14.597943, lng: 120.982735},
    population: 100,
  },
  tor: {
    center: { lat: 43.64257734388785, lng: -79.3870584627254},
    population: 50,
  },
  van: {
    center: { lat: 49.30420011346719, lng: -123.14409857068425},
    population: 10,
  },
  cali: {
    center: { lat: 33.8201796932808, lng: -117.9187555732683},
    population: 10,
  },
  tex: {
    center: { lat: 29.426077387630365, lng: -98.48613331953025},
    population: 5,
  },
  chi: {
    center: { lat: 41.882595510278875, lng: -87.6225102844922},
    population: 5,
  },
};

function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 36.648592, lng: -148.893669},
    mapTypeId: "terrain",
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt((citymap[city].population)*100000) * 100,
    });
  }

  phil.addListener("click", () => {
  map.setZoom(8);
  map.setCenter(phil.getPosition());
  });

}