/*let ingresaNumero = Number(prompt('Ingresa un numero'))


for (let i = 0; i < 11; i++){
    let resultado = ingresaNumero + i
    console.log(ingresaNumero + ' + ' + i + ' = ' + resultado)
}


let entrada = prompt('Ingrese un dato')
while(entrada != "ESC"){
    console.log('El usuario ingreso ' + entrada);
    entrada = prompt('Ingrese otro dato')
}

let i = 0
let numero = Number(prompt('Ingresa un numero'))

do{
    i+=1
    console.log('Hola')
}while( i >= numero)
*/
/* OBJETOS */
/*const personal = {
    nombre: prompt('Ingresa tu nombre'),
    edad: Number(prompt('Ingresa tu edad')),
    calle: prompt('Ingresa tu direccion')
}

console.log(personal)
alert('Bienvenido ' + nombre + '!')*/

/*******************Defafio 1********************/

/*let nombre = prompt('Ingresa tu nombre')
let apellido = prompt('Ingresa tu apellido')
let domicilio = prompt('Ingresa tu domicilio')

function saludo( nombreUsuario, apellidoUsuario, domicilioUsuario){
    alert('Bienvenido a videogame planet  ' + nombreUsuario + ' ' + apellidoUsuario)
    console.log('apellido: ' + apellidoUsuario + ', ' + 'nombre: ' + nombreUsuario + 'domicilio: ' + domicilioUsuario)
}

saludo(nombre, apellido, domicilio)

alert('para continuar da click en aceptar e ingresa nombre del juego, plataforma y precio (solo podras seleccionar 3 juegos a la vez)')

let nombreJuego = prompt('Ingresa el nombre del videojuego que deseas comprar')
let plataforma = prompt('Ingresa la plataforma en la que deseas comprar el videojuego')
let precio = Number(prompt('Ingresa el precio del juego'))

function ordenJuego1(nombreVideojuego, plataformaVideojuego, precioVideojuego){
    alert('El juego que deseas adquirir es ' + nombreVideojuego + ' para ' + plataformaVideojuego + ' con un costo de ' + precioVideojuego)
}

ordenJuego1(nombreJuego,plataforma,precio)

let nombreJuego2 = prompt('Ingresa el nombre del videojuego que deseas comprar')
let plataforma2 = prompt('Ingresa la plataforma en la que deseas comprar el videojuego')
let precio2 = Number(prompt('Ingresa el precio del juego'))
function ordenJuego2(nombreVideojuego, plataformaVideojuego, precioVideojuego){
    alert('El juego que deseas adquirir es ' + nombreVideojuego + ' para ' + plataformaVideojuego + ' con un costo de ' + precioVideojuego)
}
    ordenJuego2(nombreJuego2,plataforma2,precio2)

let nombreJuego3 = prompt('Ingresa el nombre del videojuego que deseas comprar')
let plataforma3 = prompt('Ingresa la plataforma en la que deseas comprar el videojuego')
let precio3 = Number(prompt('Ingresa el precio del juego'))
function ordenJuego3(nombreVideojuego, plataformaVideojuego, precioVideojuego){
    alert('El juego que deseas adquirir es ' + nombreVideojuego + ' para ' + plataformaVideojuego + ' con un costo de ' + precioVideojuego)
}
ordenJuego3(nombreJuego3,plataforma3,precio3)

function totalPago(precioJuego1, precioJuego2, precioJuego3){
    return(precioJuego1 + precioJuego2 + precioJuego3)
}
totalPago(precio,precio2,precio3)

alert('tu total a pagar es de ' + totalPago(precio,precio2,precio3))*/

const listaBandas = ['Guns N Roses', 'Metallica' , 'Led Zeppelin', 'Mötley Crue']

console.log(listaBandas[1])
listaBandas[1] = 'Motionless in White'

console.log(listaBandas)
console.log(listaBandas.length)

listaBandas.push('Black Sabbath') 
listaBandas.push('Dio')
listaBandas.unshift('Van Halen')
listaBandas.pop()
listaBandas.shift()

console.log(listaBandas)

const cancion1 = {
    nombre: 'Patience',
    banda: 'Guns N Roses'
}

const cancion2 = {
    nombre: 'Home Sweet Home',
    banda: 'Mötley Crue'
}

const cancion3 = {
    nombre: 'Slaughterhouse',
    banda: 'Motionless in White'
}

const canciones = [cancion1, cancion2, cancion3]

for(const tracklist of canciones) {
    console.log(canciones.nombre)
    console.log(canciones.banda)
}
