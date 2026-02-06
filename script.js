function toggleMenu(){
document.querySelector(".nav-links").classList.toggle("show");
}

/* PARTICLES */

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<50;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-.5)*0.4,
dy:(Math.random()-.5)*0.4
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


/* 3D PARALLAX SCROLL */

window.addEventListener("scroll",()=>{

document.querySelectorAll(".parallax-layer").forEach(layer=>{
const depth = layer.dataset.depth;
const movement = window.scrollY * depth;
layer.style.transform = `translateZ(0) translateY(${movement}px)`;
});

});
