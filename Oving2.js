let utdata = document.getElementById("utdata");
let navnVerdi = document.getElementById("navnVerdi");
let nrVerdi = document.getElementById("nrVerdi");
let saldoVerdi = document.getElementById("saldoVerdi");
let barnVerdi = document.getElementById("barnVerdi");

class Konto {
  constructor(nr, navn, saldo) {
    this.nr = nr;
    this.navn = navn;
    this.saldo = saldo;
  }
  uttakk(nok) {
    this.saldo = this.saldo >= nok ? this.saldo - nok : this.saldo;
  }
  innskudd(nok) {
    this.saldo += nok;
  }
  kontoInformasjon() {
    return (
      " <br>" +
      this.navn +
      " med kundenummer " +
      this.nr +
      " har " +
      this.saldo +
      " kroner på konto"
    );
  }
}

class Barnekonto extends Konto {
  constructor(nr, navn) {
    let sld = isNaN(saldoVerdi.value) ? 200 : Number(saldoVerdi.value) + 200;
    super(nr, navn, sld);
  }
}

let konti = [];

let leggTil = () => {
  let x = barnVerdi.checked
    ? new Barnekonto(nrVerdi.value, navnVerdi.value)
    : new Konto(nrVerdi.value, navnVerdi.value, saldoVerdi.value);
  konti.push(x);
  utdata.innerHTML += x.kontoInformasjon();
  console.log(konti);
};
let kidden = new Barnekonto(93841234, "Didi");
utdata.innerHTML = kidden.kontoInformasjon();

let kari = new Konto(123, "Kari", 895);
let lise = new Konto(1234, "Lise", 200);
let petter = new Konto(1234, "", 0);

kari.uttakk(300);
console.log(kari.kontoInformasjon());
lise.innskudd(4000);
console.log(lise.kontoInformasjon());
petter.innskudd(3000);
console.log(petter.kontoInformasjon());
petter.innskudd(250);
kari.uttakk(250);
console.log(petter.kontoInformasjon());
kari.uttakk(800);
console.log(kari.kontoInformasjon());
