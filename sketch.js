var myPalla;
let palle = [];

function preload() {
    data = loadJSON('./assets/coffee_world.json');
}

// provare a vedere se funziona tutto su github


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 25; i++) {
    let x = random(19*width/20, width/30);
    let y = random(height, height/3.5);
    let r = (data.worldwide[i].coffee_consumption)*20;
    let nation = data.worldwide[i].country;
    let single_datum = data.worldwide[i].country;


    let b = new Palla(x, y, r, nation, single_datum);
    palle.push(b);
  }
}

function draw() {
  background(166, 112, 49);
  for (let i = 0; i < palle.length; i++) {
    palle[i].display();
  }

  fill(83, 49, 24);
  textFont('Lora');
  textSize(35);
  textAlign(CENTER);
  text('Find out the 25 most coffee-addicted countries in the world', width/2, 80);
  textFont('Muli');
  textSize(20);
  text('The data are expressed in kg per capita', width/2, 130)
}

function mousePressed() {
  for (let i = 0; i < palle.length; i++) {
    palle[i].click();
  }
}

function Palla(x, y, r, color, nation, single_datum) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.nation = nation;
  this.single_datum = single_datum;
  this.color = "#533118";

  this.click = function() {
    let d = dist(mouseX, mouseY, this.x, this.y)
    if (d < this.r) {
      this.color = "#FFFFFF";

    }
  }

  this.display = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r);
    fill('#533118');
    textFont('Muli');
    textSize(12);
    textAlign(CENTER);
    text(nation, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
