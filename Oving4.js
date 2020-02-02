/*
Oppgave 1:
let tall = () => {
  return (Math.random()*20)
}
 let p = new Promise((resolve,reject) => {
   let t = tall()
   if (t >= 10) {
     resolve(t + " er større enn 10")
   } else {
     let feilmelding = new Error("Tallet er ikke stor nok: ")
     reject(feilmelding + t)
   }
 })

 p.then(verdi => {
   console.log(verdi);
 }).catch(feil => {
   console.log(feil);
 })
*/
let ord = ["a", "B", "c", "D", "e", "F"];

let lagStoreBokstaver = () => {
  return new Promise((resolve, reject) => {
    let ingenTall = true;
    ord.forEach(item => {
      if (!isNaN(Number(item))) {
        ingenTall = false;
      }
    });

    if (ingenTall) {
      for (var i = 0; i < ord.length; i++) {
        ord.splice(i, 1, ord[i].toUpperCase());
      }
      resolve(ord);
    } else {
      let grunn = new Error("Muligens tall i ordlistenS");
      reject(grunn);
    }
  });
};

lagStoreBokstaver()
  .then(verdi => {
    console.log("verdi " + verdi);
  })
  .catch(feil => {
    console.log("reject: " + feil);
  });

let sorterBokstaver = () => {
  return new Promise((resolve, reject) => {
    ord.sort();
  });
};
