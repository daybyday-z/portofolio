/* ===== PARTICLE BACKGROUND ===== */

const canvas = document.createElement("canvas")
canvas.id="particles"
document.body.appendChild(canvas)

const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles=[]

for(let i=0;i<70;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5,
size:Math.random()*2+1
})
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{
p.x+=p.vx
p.y+=p.vy

if(p.x<0||p.x>canvas.width) p.vx*=-1
if(p.y<0||p.y>canvas.height) p.vy*=-1

ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fillStyle="rgba(56,189,248,0.6)"
ctx.fill()
})

requestAnimationFrame(animate)
}

animate()

window.addEventListener("resize",()=>{
canvas.width=window.innerWidth
canvas.height=window.innerHeight
})
