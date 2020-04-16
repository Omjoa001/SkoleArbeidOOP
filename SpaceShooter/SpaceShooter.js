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
      sjekkTreff(x); //sender denne laseren som paramter i funksjonen som sjekker treff
    } else {
      x.parentElement.removeChild(x); //removeChild() fungerer for å fjerne elementet. Må alltid kalle gjennom parent for å bruke den
      clearInterval(bevegelsen); //slutter å kjøre flytt laser funksjonen ettersom det ikke eksisterer noen laser å flytte på lenger.
    }
  }, 1); //kan også endre på hvor ofte teller oppdateres. satt på minst mulig verdi her siden det ser mer smooth ut (bare å teste selv)
};
//Må prøve å fjerne laserne før jeg kan gå videre på å lage UFOs for å forsikre om at jeg har kontroll på den enheten.

let ufoListe = []; //lagrer alle ufos her. Alle lasere sjekker om de treffer ufoene hver gang de flytter på seg

let lagUFO = setInterval(() => {
  //gjenbruker lignende kode som for lagLaser
  let ufo = document.createElement("div");
  ufo.setAttribute("class", "ufoClass");
  let plassering = Math.floor(
    Math.random() *
      (parseInt(getComputedStyle(spillBoks).getPropertyValue("width")) - 80) +
      30
  ); // plusser med 30 som er bredden til ufo sånn at det ikke ser ut som at den går ut av boksen
  //(Math.random() * (max - min) ) + min = Formelen for å få en math random verdi med minimum og maksimum verdi.
  ufo.setAttribute("style", "left:" + plassering + "px");
  document.getElementById("spillBoks").appendChild(ufo);
  ufoListe.push(ufo);
  flyttUfo(ufo);
}, 1700);

let flyttUfo = x => {
  //gjenbruker mye av samme koden som for å flytte laser
  let teller = parseInt(getComputedStyle(x).getPropertyValue("bottom"));
  console.log(teller);
  let bevegelsen = setInterval(() => {
    if (
      teller >=
      parseInt(getComputedStyle(romskip).getPropertyValue("bottom")) +
        parseInt(getComputedStyle(romskip).getPropertyValue("height"))
    ) {
      console.log("lagd");
      teller -= 2;
      //dersom man endrer på hvor mye teller plusses med går laser fortere.
      x.style.bottom = teller + "px";
    } else {
      for (var i = 0; i < ufoListe.length; i++) {
        if (x == ufoListe[i]) {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
      }
      //let i = ufoListe.indexOf(x); //finner posisjonen til elementet i arrayen
      //ufoListe.splice(i, 1); //fjernen elementet fra arrayen. Neste linje sletter selve elementet.

      /*
      let slett = isNaN(i) ? x.parentElement.removeChild(x) : "eksisterer ikke"; //removeChild() fungerer for å fjerne elementet. Må alltid kalle gjennom parent for å bruke den
    */

      clearInterval(bevegelsen);
    }
  }, 11); //kan endre her for å få ufo til å gå saktere. gjør testing av hitbox lettere.
};

let sjekkTreff = laser => {
  for (var i = 0; i < ufoListe.length; i++) {
    let x = parseInt(getComputedStyle(ufoListe[i]).getPropertyValue("left"));
    if (
      //måtte leke litt med tallene her for at treff skulle bli registrert riktig basert på x-akse posisjonen.
      x - parseInt(getComputedStyle(laser).getPropertyValue("left")) <= 10 &&
      x - parseInt(getComputedStyle(laser).getPropertyValue("left")) >= -40
    ) {
      let y = parseInt(
        getComputedStyle(ufoListe[i]).getPropertyValue("bottom")
      );
      if (
        /*
        her sjekker jeg hvis laser og ufo er i omtrent samme posisjon med +-20 px.
        kan ikke sjekke helt nøyaktig posisjon siden er mer sjanse for error ettersom ting flytter seg flere pixler av gangen
        */
        y - parseInt(getComputedStyle(laser).getPropertyValue("bottom")) <=
          20 &&
        y - parseInt(getComputedStyle(laser).getPropertyValue("bottom")) >= -20
      ) {
        ufoListe[i].parentElement.removeChild(ufoListe[i]);
        ufoListe.splice(i,1)
        /* hvis ufo blir truffet av laser,fjernes den fra ufolista.
         Funksjonen flyttUfo() sjekker om ufoer som når bunnen av spillboksen er med i
         ufolista før den aktiverer tap status. Dvs at å treffe ufo med laser forhindrer tap :) */
      }
    }
  }
};
