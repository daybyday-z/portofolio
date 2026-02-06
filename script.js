function toggleMenu(){
document.querySelector(".nav-links").classList.toggle("show");
}

/* PARTICLES */

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<40;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-.5)*0.3,
dy:(Math.random()-.5)*0.3
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x+=p.dx;
p.y+=p.dy;

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();
});

requestAnimationFrame(animate);
}

animate();


/* SAFE PARALLAX BACKGROUND */

window.addEventListener("scroll", () => {
let offset = window.scrollY * 0.15;
document.body.style.backgroundPosition = `center ${offset}px`;
});
