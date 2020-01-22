//canvas.addEventListener("mousedown", musklikk, false);
//canvas.addEventListener("mousemove", musbeveg, false);

class Boble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.farge = "green";
    console.log("konstruktør");
  }
  flytt() {
    console.log("flytter");
    this.x = this.x + Math.floor(Math.random() * 10 - 5);
    this.y = this.y + Math.floor(Math.random() * 10 - 5);
    console.log(this.x, this.y);
  }
  vis() {
    console.log("viser");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.farge;
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
  inneholder() {
    let a = musx - this.x;
    let b = musy - this.y;
    let d = Math.sqrt(a * a + b * b);

    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
}
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", musklikk, false);
canvas.addEventListener("mousemove", musbeveg, false);

function tegn() {
  //reset();
  console.log("tegner");
  for (let i = 0; i > bobler.length; i++) {
    bobler[i].flytt();
    bobler[i].vis();
  }
}
let reset = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  console.log("fyller");
};
/*klikk(x, y) {
    let a = this.x - x;
    let b = this.y - y;
    let d = Math.sqrt(a * a + b * b);
    if (d < this.r) {
      //traff boblen (?)
      this.farge = "red";
    } else {
      this.farge;
    }
  }
}
*/
//setInterval(Boble.tegn(), 100);

/*let bobler = [];

for (let i = 0; i < 10; i++) {
  let x = Math.floor(Math.random() * canvas.width + 1);
  let y = Math.floor(Math.random() * canvas.height + 1);
  let r = Math.floor(Math.random() * canvas.r * 40 + 10);
  bobler.push(new Boble(x, y, r));
}

function musklikk(event)
  let r = Math.floor(Math.random() * 40 + 10);
  let b = new Boble(event.x, event.y, r);
  bobler.push(b);
  for (let i = 0; i < boble.length; i++) {
    bobler[i].klikk(event.x, event.y);
  }
}
*/
/*
let boble = {
  x: 100,
  y: 75
};

let flytt = () => {
  boble.x = boble.x + Math.floor(Math.random() * 10 - 5);
  boble.y = boble.y + Math.floor(Math.random() * 10 - 5);
};

let vis = () => {
  ctx.beginPath();
  ctx.arc(boble.x, boble.y, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = "white";
  ctx.stroke();
};
}
*/
