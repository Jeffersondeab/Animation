var estrela = document.getElementById('estrela')
var drawn = estrela.getContext('2d')
var sistSolar = estrela.getContext('2d')

estrela.height = window.innerHeight;
estrela.width = window.innerWidth;



var Solx = estrela.width / 2;
var Soly = estrela.height / 2; 

var terrax = estrela.width / 3;
var terray = estrela.height / 2;
var angle = 0;
var anima;




terra = function(){

    sistSolar.beginPath()
    sistSolar.fillStyle = 'red'
    sistSolar.arc(terrax, terray, 20, 0, 2*Math.PI)
    sistSolar.fill()

    terrax += 2 * Math.sin(angle)
    terray += 2 * Math.cos(angle)



/*     sistSolar.beginPath();
    sistSolar.fillStyle =  'red'
    sistSolar.arc(500, positionY, 40, 0, 2*Math.PI)
    sistSolar.fill()

    positionX += .02 * Math.sin(angle);
    positionY += 2 * Math.cos(angle);
    angle += 0.01; */
} 


sol = function(){
 

    sistSolar.beginPath();
    sistSolar.fillStyle =  'yellow'
    sistSolar.arc(Solx, Soly, 50, 0, 2*Math.PI)
    sistSolar.fill()

    Solx += .2 * Math.sin(angle);
    Soly += .2 * Math.cos(angle);
    angle += 0.01;

}


FuncaoEstrela = function(){
    for(i = 0; i < 5; i++){
        sistSolar.beginPath();
        sistSolar.fillStyle = 'blue'; 
        sistSolar.arc(Math.random()* estrela.width, Math.random()* estrela.height, 1, 0, 2*Math.PI) 
        sistSolar.fill();
    }
}

 
desenho = function(){

    sistSolar.clearRect(0, 0, estrela.width, estrela.height)
    anima = requestAnimationFrame(desenho)   

    terra()
    FuncaoEstrela()
    sol()
}



desenho()


 



  /*  
        desenho de uma estrela

        sistSolar.beginPath();
        sistSolar.fillStyle = 'blue';        
        sistSolar.moveTo( 35, 12);
        sistSolar.lineTo( 25, 16);
        sistSolar.lineTo( 31, 9);
        sistSolar.lineTo( 30, 17);
        sistSolar.lineTo( 25, 12);
        sistSolar.fill(); */



/* teste = Math.random() * 500 */




/* sistSolar.beginPath()
sistSolar.moveTo(0, 0)
sistSolar.lineTo(15, 20)
sistSolar.lineTo(15, 10)
sistSolar.lineTo(25, 0)
sistSolar.lineTo(10, 5)
sistSolar.closePath()
sistSolar.stroke() */
