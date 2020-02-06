$.getJSON("https://api.myjson.com/bins/dbsca", data => {
  data.fjelltopper.sort((a, b) => (a.høyde > b.høyde ? 1 : -1));
  for (var i = 0; i < data.fjelltopper.length; i++) {
    let rad = document.createElement("tr")

    let hode = document.createElement("th")
    let hodeTekst = document.createTextNode(data.fjelltopper[i].fylke)
    hode.appendChild(hodeTekst)
    rad.appendChild(hode)

    let innhold = document.createElement("td")
    let innholdFjell = document.createTextNode(data.fjelltopper[i].fjell + ": " + data.fjelltopper[i].høyde + "m")
    innhold.appendChild(innholdFjell)
    rad.appendChild(innhold)
    rad.setAttribute("onclick",visTopp(data.fjelltopper[i].lat,data.fjelltopper[i].lng))


    document.getElementById("tabellHTML").appendChild(rad)
  }
}); //bruker http://myjson.com/rj5ai for å lagre json filen
let markertFjell = [{lat: 60.45038, lng: 10.949903 },{ lat: 59.767205, lng: 7.116667 }]

let visTopp = (x,y) => {
let fjellObjekt = {
  lat: x,
  lng: y
}
markertFjell.push(fjellObjekt)
initMap()
}

function initMap() {
  // The location of fjelltopp
  var fjellet = { lat: 60.45038, lng: 10.949903 };
  var fjellet2 = { lat: 59.767205, lng: 7.116667 };
  // The map, centered at fjell
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: fjellet
  });
  // The marker, positioned at fjell
  for (var i = 0; i < markertFjell.length; i++) {
    let marker = new google.maps.Marker({ position: markertFjell[i], map: map });
  }
}
chjage;
