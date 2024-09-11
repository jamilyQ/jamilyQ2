let xbolinha = 250
let ybolinha = 150
let diametro = 20
let velocidadexbolinha = 5
let velocidadeybolinha = 5
let xraquete = 10
let yraquete = 100
let comprimentoraquete = 80
let larguraraquete = 20
let raio = diametro / 2
let xraqueteoponente = 470
let yraqueteoponente = 100
let larguraraqueteoponente = 20
let comprimentoraqueteoponente = 80
let meuspontos = 0 
let pontosdooponente = 0


function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(0);
  mostrarbolinha()
  movimentabolinha()
  colisaoborda()
  mostrarraquete()
  movimentominharaquete ()
  colisaodaraquete ()
  raqueteoponente ()
  movimentoraqueteoponente () 
  colisaodaraqueteoponente ()
  incluirplacar ()
  marcarponto ()
}
function mostrarbolinha () {
   circle(xbolinha, ybolinha, diametro)
}
 function movimentabolinha () {
 xbolinha += velocidadexbolinha
 ybolinha += velocidadeybolinha
 }
function colisaoborda () {
  if (xbolinha > width|| xbolinha < 0) {
    velocidadexbolinha *= -1
  }
  if (ybolinha > height || ybolinha < 0) {
    velocidadeybolinha *= -1  
 }
}
function mostrarraquete () {
   rect(xraquete, yraquete, larguraraquete, comprimentoraquete)  
}

  function movimentominharaquete () {
  if (keyIsDown(83))  {
    yraquete += 10
   }
  if (keyIsDown(87))  {
    yraquete -= 10  
  }
}
function colisaodaraquete () {
  if (xbolinha - raio < xraquete + larguraraquete && ybolinha - raio < yraquete + comprimentoraquete && ybolinha + raio > yraquete) {
    velocidadexbolinha *= -1
  }
}
function raqueteoponente ( ) { 
  rect (xraqueteoponente, yraqueteoponente, larguraraqueteoponente, comprimentoraqueteoponente)
}
  
  function movimentoraqueteoponente () {
  if (keyIsDown(DOWN_ARROW))  {
    yraqueteoponente += 10
   }
  if (keyIsDown(UP_ARROW))  
    yraqueteoponente -= 10  
  
}
 function colisaodaraqueteoponente () {
  if (xbolinha - raio > xraqueteoponente - larguraraqueteoponente && ybolinha - raio < yraqueteoponente + comprimentoraqueteoponente && ybolinha + raio > yraqueteoponente) {
    velocidadexbolinha *= -1
  }
 }
 function incluirplacar () {
 textAlign (CENTER)
 textSize (35)
 fill (255)
 text (meuspontos, 160, 25)
 text (pontosdooponente, 320, 25)
 }
function marcaponto () {
 if (xbolinha > 500) {
 meuspontos += 1}
 if (xbolinha < 0) {
 pontosdooponente += 1
 }
}


