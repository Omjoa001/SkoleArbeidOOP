let tekst = document.getElementById("tekst");
let gassKnapp = document.getElementById("gass");
//let velgBil = document.getElementById("");

class Bil {
  constructor(registreringsnr, merke, aarsmodell, hastighet) {
    this.registreringsnr = registreringsnr;
    this.merke = merke;
    this.aarsmodell = aarsmodell;
    this.hastighet = hastighet;
  }
  gass() {
    return (this.hastighet += 10);
  }

  brems() {
    return (this.hastighet -= 10);
  }
}

let saab = new Bil(01, "Saab", 1990, 0);
let ferrari = new Bil(02, "Ferrari", 1990, 0);
let lada = new Bil(03, "Lada", 2020, 0);

let visHastighet = () => {
  tekst.innerHTML =
    "Hastigheten til " +
    saab.merke +
    " er " +
    saab.hastighet +
    "<br>" +
    "Hastigheten til " +
    ferrari.merke +
    " er " +
    ferrari.hastighet +
    "<br>" +
    "Hastigheten til " +
    lada.merke +
    " er " +
    lada.hastighet;
};

function endreHastighet(bil, endring) {
  if (endring == "gass") {
    bil.gass();
  } else if (endring == "brems") {
    bil.brems();
  }
  visHastighet();
}
