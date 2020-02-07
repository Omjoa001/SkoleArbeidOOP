$.getJSON("https://api.myjson.com/bins/ozbqi", data => {
  data.fjelltopper.sort((a, b) => (a.høyde > b.høyde ? 1 : -1));
  for (var i = 0; i < data.fjelltopper.length; i++) {
    lagRad(i,data)
  }
}); //bruker http://myjson.com/ for å lagre json filen på http://myjson.com/ozbqi

let lagRad = (i,data) => {
  let rad = document.createElement("tr")

  let hode = document.createElement("th")
  let hodeTekst = document.createTextNode(data.fjelltopper[i].fylke)
  hode.appendChild(hodeTekst)
  rad.appendChild(hode)

  let innhold = document.createElement("td")
  let innholdFjell = document.createTextNode(data.fjelltopper[i].fjell + ": " + data.fjelltopper[i].høyde + "m")
  innhold.appendChild(innholdFjell)
  rad.appendChild(innhold)

  hode.setAttribute("onclick","visTopp("+data.fjelltopper[i].lat+","+data.fjelltopper[i].lng+")" )
  hode.setAttribute("style", "border-bottom: 3px solid grey;color: #24a0ed;")
  innhold.setAttribute("style", "border-bottom: 3px solid grey;")
  document.getElementById("tabellHTML").appendChild(rad)
}

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
