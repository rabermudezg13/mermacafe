function calcularMermaEntrePesos(pesoInicial, pesoFinal) {
    return pesoInicial - pesoFinal;
}

function calcularPorcentajeMerma(pesoInicial, merma) {
    return (pesoInicial !== 0) ? (merma / pesoInicial) * 100 : 0;
}

function validarInput(valor, nombreCampo) {
    if (isNaN(valor) || valor <= 0) {
        document.getElementById("output").textContent = `Por favor, ingrese un valor válido mayor que 0 para ${nombreCampo}`;
        return false;
    }
    return true;
}

function calcularMerma() {
    // Obtener valores de los inputs
    let pesoPergamino = parseFloat(document.getElementById("peso_pergamino").value);
    let pesoTrilla = parseFloat(document.getElementById("peso_trilla").value);
    let pesoTostado = parseFloat(document.getElementById("peso_tostado").value);

    // Validar cada input
    if (!validarInput(pesoPergamino, "peso en pergamino")) return;
    if (!validarInput(pesoTrilla, "peso después de trillar")) return;
    if (!validarInput(pesoTostado, "peso tostado")) return;

    // Validar que los pesos sean lógicos
    if (pesoTrilla >= pesoPergamino) {
        document.getElementById("output").textContent = "Error: El peso después de trillar no puede ser mayor o igual al peso en pergamino";
        return;
    }
    if (pesoTostado >= pesoTrilla) {
        document.getElementById("output").textContent = "Error: El peso tostado no puede ser mayor o igual al peso trillado";
        return;
    }

    // Calcular mermas
    let mermaTrillado = calcularMermaEntrePesos(pesoPergamino, pesoTrilla);
    let mermaTostado = calcularMermaEntrePesos(pesoTrilla, pesoTostado);

    // Calcular porcentajes
    let porcentajeMermaTrillado = calcularPorcentajeMerma(pesoPergamino, mermaTrillado);
    let porcentajeMermaTostado = calcularPorcentajeMerma(pesoTrilla, mermaTostado);

    // Formatear resultado
    let resultado = "Resultados del proceso:\n\n";
    resultado += `Merma durante trilla: ${mermaTrillado.toFixed(2)} kg (${porcentajeMermaTrillado.toFixed(2)}%)\n`;
    resultado += `Merma durante tostado: ${mermaTostado.toFixed(2)} kg (${porcentajeMermaTostado.toFixed(2)}%)\n\n`;
    resultado += `Merma total: ${(mermaTrillado + mermaTostado).toFixed(2)} kg`;

    // Mostrar resultado
    document.getElementById("output").textContent = resultado;
}

// Agregar eventos para validar input mientras el usuario escribe
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) this.value = 0;
        });
    });
});
