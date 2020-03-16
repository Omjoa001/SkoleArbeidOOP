let romskip = document.getElementById("romskip");
document.addEventListener("keydown", beveg);

function beveg(event) {
  var tast = event.keyCode;
  if (tast == 32) {
    lagLaser();
    //32 er spacebar.
    // 39 er right arrow. 37 er left arrow
  } else if (tast == 37) {
    let current = parseInt(getComputedStyle(romskip).getPropertyValue("left"));
    /*vil redigere verdien "tall + px" (for eks.400px), så bruker parseint for å bare hente tallet foran (returnerer 400).
    Bruker getComputedStyle for å hente objekt CSSen og getPropertyValue for å hente en spesifikk CSS verdi */
    romskip.style.left = current <= 0 ? 0 : current - 20 + "px";
  } else if (tast == 39) {
    let current = parseInt(getComputedStyle(romskip).getPropertyValue("left"));
    romskip.style.left =
      current >=
      parseInt(getComputedStyle(spillBoks).getPropertyValue("width")) -
        parseInt(getComputedStyle(romskip).getPropertyValue("width"))
        ? parseInt(getComputedStyle(spillBoks).getPropertyValue("width"))
        : current + 20 + "px";
  } else if (tast == 37) {
    let current = parseInt(getComputedStyle(romskip).getPropertyValue("left"));
    romskip.style.left = current <= 0 ? 0 : current - 20 + "px";
  } else {
    console.log(
      "Spillkontroller: Høyre og venstre pil for bevegelse. SpaceBar for å skyte"
    );
  }
}

//let laserListe = [];
//usikker på om den trenges

let lagLaser = () => {
  let nyLaser = document.createElement("div");
  nyLaser.setAttribute("class", "laserClass");
  nyLaser.setAttribute(
    "style",
    "left:" +
      (parseInt(getComputedStyle(romskip).getPropertyValue("left")) +
        parseInt(getComputedStyle(romskip).getPropertyValue("width")) / 2 -
        5) +
      "px"
  );
  document.getElementById("spillBoks").appendChild(nyLaser);
  //laserListe.push(nyLaser); usikker på om den trengs
  //følgende funksjon for å flytte på laserobjektet som er lagd
  flyttLaser(nyLaser);
};

let flyttLaser = x => {
  let teller = parseInt(getComputedStyle(x).getPropertyValue("bottom"));
  let bevegelsen = setInterval(() => {
    if (
      teller <=
      parseInt(getComputedStyle(spillBoks).getPropertyValue("height")) - 20 //endre på minus tallet der for å endre når laseret fjernes fra spillboksen
    ) {
      teller += 2;
      //dersom man endrer på hvor mye teller plusses med går laser fortere.
      x.style.bottom = teller + "px";
    } else {
      x.parentElement.removeChild(x); //removeChild() fungerer for å fjerne elementet. Må alltid kalle gjennom parent for å bruke den
      clearInterval(bevegelsen);
    }
  }, 1); //kan også endre på hvor ofte teller oppdateres. satt på minst mulig verdi her siden det ser mer smooth ut (bare å teste selv)
};
//Må prøve å fjerne laserne før jeg kan gå videre på å lage UFOs for å forsikre om at jeg har kontroll på den enheten.

let lagUFO = setInterval(() => {
  //gjenbruker lignende kode som for lagLaser
  let ufo = document.createElement("div");
  ufo.setAttribute("class", "ufoClass");
  let plassering =
    Math.random() * 30 +
    parseInt(getComputedStyle(spillBoks).getPropertyValue("width")); // plusser med 30 som er bredden til ufo sånn at det ikke ser ut som at den går ut av boksen
  ufo.setAttribute("style", "left:" + plassering + "px");
  document.getElementById("spillBoks").appendChild(ufo);
  flyttUfo(ufo);
}, 5000);

let flyttUfo = x => {
  //gjenbruker mye av samme koden som for å flytte laser
  let teller = parseInt(getComputedStyle(x).getPropertyValue("bottom"));
  console.log(teller);
  let bevegelsen = setInterval(() => {
    if (teller >= 0) {
      console.log("lagd");
      teller -= 2;
      //dersom man endrer på hvor mye teller plusses med går laser fortere.
      x.style.bottom = teller + "px";
    } else {
      console.log("fjernet");
      x.parentElement.removeChild(x); //removeChild() fungerer for å fjerne elementet. Må alltid kalle gjennom parent for å bruke den
      clearInterval(bevegelsen);
    }
  }, 10); //kan
};
