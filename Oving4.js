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

let o = () => {
  return new Promise((resolve, reject) => {
    let ingenTall = true;

    let i = () => {
      ord.forEach(item => {
        if (typeof item != "string") {
          ingenTall = false;
        }
      });
    };

    if (ingenTall) {
      ord.forEach(item => {
        item.toLowerCase();
      });
      resolve(ord);
    }
  });
};

o()
  .then(verdi => {
    console.log(verdi);
  })
  .catch(feil => {
    console.log(feil);
  });
