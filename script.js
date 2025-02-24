function calcularMermaEntrePesos(pesoInicial, pesoFinal) {
    return pesoInicial - pesoFinal;
}

function calcularPorcentajeMerma(pesoInicial, merma) {
    return (pesoInicial !== 0) ? (merma / pesoInicial) * 100 : 0;
}

function calcularMerma() {
    console.log("Función calcularMerma iniciada"); // Debug

    let pesoPergamino = parseFloat(document.getElementById("peso_pergamino").value);
    let pesoTrilla = parseFloat(document.getElementById("peso_trilla").value);
    let pesoTostado = parseFloat(document.getElementById("peso_tostado").value);

    console.log("Valores ingresados:", { pesoPergamino, pesoTrilla, pesoTostado }); // Debug

    // Validar que los valores sean números válidos y mayores que 0
    if (isNaN(pesoPergamino) || isNaN(pesoTrilla) || isNaN(pesoTostado) || 
        pesoPergamino <= 0 || pesoTrilla <= 0 || pesoTostado <= 0) {
        document.getElementById("output").textContent = "Por favor, ingrese valores numéricos válidos mayores que 0";
        return;
    }

    let mermaTrillado = calcularMermaEntrePesos(pesoPergamino, pesoTrilla);
    let mermaTostado = calcularMermaEntrePesos(pesoTrilla, pesoTostado);

    let porcentajeMermaTrillado = calcularPorcentajeMerma(pesoPergamino, mermaTrillado);
    let porcentajeMermaTostado = calcularPorcentajeMerma(pesoTrilla, mermaTostado);

    console.log("Cálculos:", { mermaTrillado, mermaTostado, porcentajeMermaTrillado, porcentajeMermaTostado }); // Debug

    let resultado = `Merma durante trilla: ${mermaTrillado.toFixed(2)} kg (${porcentajeMermaTrillado.toFixed(2)}%)\n`;
    resultado += `Merma durante tostado: ${mermaTostado.toFixed(2)} kg (${porcentajeMermaTostado.toFixed(2)}%)`;

    document.getElementById("output").textContent = resultado;
}

// Agregar el evento cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log("Documento cargado"); // Debug
    // Agregar el evento al botón
    document.querySelector('button').addEventListener('click', calcularMerma);
});
