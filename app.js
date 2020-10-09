// create a player done
// shoot projectiles
// create enemies
// detect collision on enemy/ projectile hit 
// remove off screen projectile
// coclorize Game
// shrink enemies on hit
// create particles xplosion on hit
// add Score 
// add game over ui 
// add reset button 
// add start game button

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width=window.innerWidth
canvas.height=window.innerHeight

class Player{
    constructor(x,y,radius,color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        // this.draw() to call implicity or without evoking it through object

    }
     draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.fillStyle=this.color
        ctx.fill()
    }

}

class Projectile{
    constructor(x,y,radius,color,velocity){
        this.x=x
        this.y=y
        this.color=color
        this.radius=radius
        this.velocity=velocity
        // this.draw()
        // this.update()
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.fillStyle=this.color
        ctx.fill()
    }
    update(){
        this.draw()
        this.x+=this.velocity.x
        this.y+=this.velocity.y
    }

}
const x =canvas.width/2
const y= canvas.height/2
const player = new Player(x,y,30,'blue')

player.draw()



   
const projectiles=[]



// funcion animate
function animate() {
    requestAnimationFrame(animate)
    projectiles.forEach((projectile)=>{
        projectile.update()
        
    })
    
}

addEventListener('click',(event)=>{ // we can modify or can change click to double click to add power or just to make game more hard 
    
    // console.log(projectile)
    // console.log(event.clientX)
    // console.log(event.clientY)
    projectiles.push(new Projectile(canvas.width/2,canvas.height/2,5,'red',
    {
        x:1,y:1
    }))
    }
)
animate()
console.log(projectiles)







