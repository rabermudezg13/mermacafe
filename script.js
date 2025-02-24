function calcularMerma(pesoInicial, pesoFinal) {
    return pesoInicial - pesoFinal;
}

function calcularPorcentajeMerma(pesoInicial, merma) {
    return (pesoInicial !== 0) ? (merma / pesoInicial) * 100 : 0;
}

function calcularMerma() {
    let pesoPergamino = parseFloat(document.getElementById("peso_pergamino").value);
    let pesoTrilla = parseFloat(document.getElementById("peso_trilla").value);
    let pesoTostado = parseFloat(document.getElementById("peso_tostado").value);

    // Validar que los valores sean números válidos
    if (isNaN(pesoPergamino) || isNaN(pesoTrilla) || isNaN(pesoTostado)) {
        document.getElementById("output").innerText = "Por favor, ingrese valores numéricos válidos";
        return;
    }

    let mermaTrillado = calcularMerma(pesoPergamino, pesoTrilla);
    let mermaTostado = calcularMerma(pesoTrilla, pesoTostado);

    let porcentajeMermaTrillado = calcularPorcentajeMerma(pesoPergamino, mermaTrillado);
    let porcentajeMermaTostado = calcularPorcentajeMerma(pesoTrilla, mermaTostado);

    let resultado = `Merma durante trilla: ${mermaTrillado.toFixed(2)} kg (${porcentajeMermaTrillado.toFixed(2)}%)\n`;
    resultado += `Merma durante tostado: ${mermaTostado.toFixed(2)} kg (${porcentajeMermaTostado.toFixed(2)}%)`;

    document.getElementById("output").innerText = resultado;
} 