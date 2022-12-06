let walls = [];
let ray;
let particles = [];
let r = 40;
let mouseDown = false;
let iParticle = -1;
let iObstacle = -1;
let obstacleA = true;
let bestDist = r;

function setup() {
  // createCanvas(500, 500);
  createCanvas(800, 500);

  walls.push(new Boundary(-1, -1, width, -1));
  walls.push(new Boundary(width, -1, width, height));
  walls.push(new Boundary(width, height, -1, height));
  walls.push(new Boundary(-1, height, -1, -1));

  for (let i = 0; i < 3; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let x3 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    let y3 = random(height);
    walls.push(new Boundary(x1, y1, x2, y2, x3, y3));
  }

  for (let i = 0; i < 1; i++) {
    particles.push(new Particle());
  }
}

function addParticle() {
  particles.push(new Particle());
}

function removeParticle() {
  if (particles.length > 0)
    particles.splice(floor(random(particles.length)), 1);
}

function addObstacle() {
  let x1 = random(width);
  let x2 = random(width);
  let x3 = random(width);
  let y1 = random(height);
  let y2 = random(height);
  let y3 = random(height);
  walls.push(new Boundary(x1, y1, x2, y2, x3, y3));
}

function removeObstacle() {
  let pos = 4 + floor(random(walls.length - 4));
  console.log(pos);
  if (walls.length >= 4)
    walls.splice(pos, 1);
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  for (let i = 0; i < particles.length; i++) {
    particles[i].showElipses();
    particles[i].showLines();
    particles[i].look(walls);
  }
}

/* LOPPP  DE LUZ */
/*https://rossener.com/como-criar-um-timer-com-resume-pause-e-reset-usando-javascript/#o-que-%C3%A9-um-timer*/

function animation() {
    time = 1000, delay = 500;
    setTimeout(addParticle, time);
    time += 300;
    setTimeout(addObstacle, time);
    time += 500;
    setTimeout(removeParticle, time);
    time += 300;
    setTimeout(addParticle, time);
    time += 300;
    setTimeout(addParticle, time);
    time += 300;
    setTimeout(addParticle, time);
    time += 300;
    setTimeout(addObstacle, time);
    time += 1000;
    setTimeout(removeParticle, time);
    time += 300;
    setTimeout(addParticle, time);
    time += 300;
    setTimeout(removeParticle, time);
    time += 300;
    setTimeout(removeParticle, time);
    time += 1000;
    setTimeout(addParticle, time);
    time += 1000;
    setTimeout(removeParticle, time);
    time += 300;
    setTimeout(addObstacle, time);
    time += 300;
    setTimeout(addObstacle, time);
    time += 400;
    setTimeout(addParticle, time);
    time += 400;
    setTimeout(addParticle, time);
    time += 400;
    setTimeout(addParticle, time);
    time += 500;
    setTimeout(removeObstacle, time);
    time += 300;
    setTimeout(removeParticle, time);
    time += 300;
    setTimeout(addParticle, time);
    time += 500;
    setTimeout(removeObstacle, time);
    time += 300;
    setTimeout(removeParticle, time);
    time += 500;
    setTimeout(removeObstacle, time);
    time += 300;
    setTimeout(removeParticle, time);
    time += 300;
    setTimeout(removeParticle, time);
}

function addParticleS() {
    time = 1000, delay = 500;
    setTimeout(addParticle, time);
    time += delay;
    setTimeout(addParticle, time);
    time += delay;
    setTimeout(addParticle, time);
    time += delay;
    setTimeout(addParticle, time);
    time += delay;
    setTimeout(removeParticle, time);
    time += delay;
    setTimeout(removeParticle, time);
    time += delay;
    setTimeout(addParticle, time);
    time += delay;
    setTimeout(addParticle, time);
    time += delay;
    setTimeout(removeParticle, time);
    time += delay;
    setTimeout(removeParticle, time);
    time += delay;
    setTimeout(removeParticle, time);
    time += delay;
    setTimeout(removeParticle, time);
}
