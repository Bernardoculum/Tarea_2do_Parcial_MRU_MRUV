
// FUNCIONES PARA CALCULAR MRU

function calcularDistancia() {
    const velocidad = parseFloat(document.getElementById("velocidad").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);

    const distancia = velocidad * tiempo;

    document.getElementById("resultado-distancia").textContent = `Distancia recorrida: ${distancia.toFixed(2)} metros`;
}

function calcularVelocidad() {
    const distancia = parseFloat(document.getElementById("distanciaV").value);
    const tiempo = parseFloat(document.getElementById("tiempoV").value);

    const velocidad = distancia / tiempo;

    document.getElementById("resultado-velocidad").textContent = `Velocidad: ${velocidad.toFixed(2)} m/s`;
}

function calcularTiempo() {
    const distancia = parseFloat(document.getElementById("distanciaT").value);
    const velocidad = parseFloat(document.getElementById("velocidadT").value);

    const tiempo = distancia / velocidad;

    document.getElementById("resultado-tiempo").textContent = `Tiempo: ${tiempo.toFixed(2)} segundos`;
}

// FUNCIONES PARA CALCULAR MRUV
function calcularVelocidadInicial() {
    const velocidadFinal = parseFloat(document.getElementById('velocidadFinal').value);
    const aceleracion = parseFloat(document.getElementById('aceleracion2').value);
    const tiempo = parseFloat(document.getElementById('tiempo2').value);
  
    const velocidadInicial = (velocidadFinal - aceleracion) * tiempo;
  
    
    document.getElementById("resultadoVelocidadInicial").textContent = `Velocidad Inicial: ${velocidadInicial.toFixed(2)} m/s`;
  }


function calcularVelocidadFinal(){
    const velocidadInical = parseFloat(document.getElementById('velocidadInicial').value)
    const aceleracion = parseFloat(document.getElementById('aceleracion3').value)
    const tiempo = parseFloat(document.getElementById('tiempo3').value)

    const velocidadFinal = (velocidadInical + aceleracion) * tiempo;
    document.getElementById("resultadoVelocidadFinal").textContent = `Velocidad Final: ${velocidadFinal.toFixed(2)} m/s`;
}

function calculartiempoMi(){
    const VelFinal = parseFloat(document.getElementById('velfinal').value)
    const VelInicio = parseFloat(document.getElementById('velobjeto').value)
    const acel = parseFloat(document.getElementById('aceleracionM').value)

    const tiempofinal = (VelFinal - VelInicio) / acel;

    document.getElementById("resultado_tiempo").textContent = `Tiempo: ${tiempofinal.toFixed(2)} Segundos `;
    
}
