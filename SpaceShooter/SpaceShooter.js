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
      "Spillkontroller: Høyre og venstre bil for bevegelse. SpaceBar for å skyte"
    );
  }
}

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
  console.log(parseInt(getComputedStyle(romskip).getPropertyValue("width")));
  //getElemntsByClassName() kan brukes for å slette eksisterende lasere
  document.getElementById("spillBoks").appendChild(nyLaser);
};

function flytt() {
  let elementer = document.getElementsByClassName("laserClass")
  console.log("feil");
}
let flyttLaser = setInterval(flytt(),100)
