document.addEventListener("keydown", beveg);

function beveg(event) {
  var tast = event.keyCode;
  if (tast == 32) {
    //32 er spacebar.
    // 39 er right arrow. 37 er left arrow
    alert("Du trykka på space key.");
  } else if (tast == 39) {
    alert("Du trykka på høyre key.");
  } else if (tast == 37) {
    alert("Du trykka på left key");
  } else {
    alert("Du trykka på feil knapp");
  }
}
