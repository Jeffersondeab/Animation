var maple = document.getElementById('tela')
var draw = maple.getContext('2d')

maple.width = window.innerWidth;
maple.height = window.innerWidth; 
 

var numberOfMaple = 20;
var particleArray = [];

var flor = new Image();
flor.src = '/imgs/maple-02.png';

class Conjunto{
    constructor(){
        this.x = Math.random()* maple.width;
        this.y = Math.random()* maple.height;
        this.size = Math.random()* 5 + 30;
        this.speed = Math.random()* 1 + .2
        this.angle = Math.random()*360
        this.spin = Math.random() < 0.5 ? -1 : 1;
    }

    drawFun(){
        draw.save()
        draw.translate(this.x,this.y)
        draw.rotate(this.angle * Math.PI/360 * this.spin)
        draw.drawImage(flor, 0 - this.size/2, 0 - this.size/2, this.size, this.size)
        draw.restore()
    }

    update(){   
        this.angle += .5
        if(this.y >= maple.height){
            this.y = 0
            this.x = 0 + Math.random()*maple.width;
            this.speed = Math.random()* 1 + .2;
            this.size = Math.random()* 5 + 30;
        }else if(this.x >= maple.width){
            this.x = 0;
        }
        this.y += this.speed; 
    }
}
 

function init(){
    for(var i = 0; i < numberOfMaple; i++){
        particleArray.push(new Conjunto())
    }
}

init()

function desenho(){
    draw.clearRect(0, 0, maple.width, maple.height)

    for(var i = 0; i < particleArray.length; i++){
        particleArray[i].drawFun()
        particleArray[i].update()
    }

    requestAnimationFrame(desenho)
} 

desenho()

 