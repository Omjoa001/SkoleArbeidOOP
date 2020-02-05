let tabellHTML = "<table style='border: 1px solid black'>";

$.getJSON("https://api.myjson.com/bins/rj5ai", data => {
  data.fjelltopper.sort((a, b) => (a.høyde > b.høyde ? 1 : -1));
  for (var i = 0; i < data.fjelltopper.length; i++) {
    tabellHTML += `<tr> <th> ${data.fjelltopper[i].fylke} </th></tr><td> ${data.fjelltopper[i].fjell} </td> <td> ${data.fjelltopper[i].høyde} </td>`;
  }
  tabellHTML += "</table>";
  document.getElementById("utdata").innerHTML = tabellHTML;
}); //bruker http://myjson.com/rj5ai for å lagre json filen

function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
