let maximo = 10;
let NumeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

function generarNumeroSecreto(numeroMaximo) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('h1','Ya no hay mas intentos, reinicia el juego');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(numeroMaximo);
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function intentoDeUsuario() { //Cada que el usuario de click se compara lo que hay
                              //en la caja de texto con el numero secreto, si es 
                              //igual, mostrara que acertamos y en cuantos intentos lo hicimos
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === NumeroSecreto){
        document.getElementById('reiniciar').removeAttribute('Disabled')
        document.querySelector('#intentar').setAttribute('disabled', true);
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
    } else {
        //el usuario no acerto asi que pasa esto

        if (numeroUsuario < NumeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es mas grande');
        } else {
            asignarTextoElemento('p','El numero secreto es mas pequeño');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function reiniciarJuego(){
        limpiarCaja();
        condicionesIniciales();
        document.querySelector('#reiniciar').setAttribute('disabled', true);
        document.querySelector('#intentar').removeAttribute('disabled');
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego Numero Secreto'); 
    asignarTextoElemento('p',`Indica un numero del 1 al ${maximo}`);
    NumeroSecreto = generarNumeroSecreto(maximo);
    intentos = 1;
    console.log(NumeroSecreto);
}

condicionesIniciales();