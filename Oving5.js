let tabellHTML = "<table style='border: 1px solid black'>";

$.getJSON("https://api.myjson.com/bins/dbsca", data => {
  data.fjelltopper.sort((a, b) => (a.høyde > b.høyde ? 1 : -1));
  for (var i = 0; i < data.fjelltopper.length; i++) {
    tabellHTML += `<tr> <th> ${data.fjelltopper[i].fylke} </th></tr><td> ${data.fjelltopper[i].fjell} </td> <td> ${data.fjelltopper[i].høyde} </td>`;
  }
  tabellHTML += "</table>";
  document.getElementById("utdata").innerHTML = tabellHTML;
}); //bruker http://myjson.com/rj5ai for å lagre json filen

function initMap() {
  // The location of Uluru
  var fjellet = { lat: 60.45038, lng: 10.949903 };
  var fjellet2 = { lat: 59.767205, lng: 7.116667 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: fjellet
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: fjellet, map: map });
}
chjage;
