let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", musklikk, false);
canvas.addEventListener("mousemove", musbeveg, false);

class Objekt {
  constructor(x, y, r, h) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.h = h
    let randomFarge = `rgb(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}
    )`;
    this.farge = randomFarge.toString();
  }
  flytt() {
    this.x = this.x + Math.round(Math.random() * 10 - 5);
    this.y = this.y + Math.round(Math.random() * 10 - 5);
  }
}

class Boble extends Objekt {
  constructor (x,y,r) {
    super(x,y,r)
  }
  vis() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.farge;
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
  inneholder(musx, musy) {
    let a = musx - this.x;
    let b = musy - this.y;
    let d = Math.sqrt(a * a + b * b);

    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  posisjon() {
    if (this.x - this.r < 0) {
      this.x = this.r;
    }

    if (this.x + this.r > canvas.width) {
      this.x = canvas.width - this.r;
    }

    if (this.y - this.r < 0) {
      this.y = this.r;
    }

    if (this.y + this.r > canvas.height) {
      this.y = canvas.height - this.r;
    }
  }
}

class Firkanter extends Objekt {
  constructor (x,y,r,h) {
    super(x,y,r,h)
  }
  vis() {
    ctx.beginPath();
    //ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.rect(this.x, this.y, this.r, )
    ctx.fillStyle = this.farge;
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
  inneholder(musx, musy) {
    let a = musx - this.x;
    let b = musy - this.y;
    let d = Math.sqrt(a * a + b * b);

    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  posisjon() {

  }
}
let bobler = [];

for (let i = 0; i < 3; i++) {
  let x = Math.floor(Math.random() * canvas.width);
  let y = Math.floor(Math.random() * canvas.height);
  let r = Math.floor(Math.random() * 40 + 10);
  bobler[i] = new Boble(x, y, r);
}

//setInterval(tegn, 100);

let nyBoble = () => {
  let r = Math.floor(Math.random() * 40 + 10);
  let b = new Boble(
    Math.floor(Math.random() * canvas.width),
    Math.floor(Math.random() * canvas.height),
    r
  );
  bobler.push(b);
};
setInterval(nyBoble, 2000);

function tegn() {
  reset();
  for (let i = 0; i < bobler.length; i++) {
    bobler[i].flytt();
    bobler[i].vis();
    bobler[i].posisjon();
  }
}

function reset() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function musklikk(event) {
  var fikkvalgtenboble = false;

  for (let i = 0; i < bobler.length; i++) {
    if (bobler[i].inneholder(event.x, event.y)) {
      bobler.splice(i, 1);
      fikkvalgtenboble = true;
    }
  }

  if (fikkvalgtenboble == false) {
    let r = Math.floor(Math.random() * 40 + 10);
    let b = new Boble(event.x, event.y, r);
    bobler.push(b);
  }
}

function musbeveg(event) {
  for (let i = 0; i < bobler.length; i++) {
    if (bobler[i].inneholder(event.x, event.y)) {
      bobler[i].farge = "red";
    }
  }
}
