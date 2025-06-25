function seleccion(arreglo) {

    for (var i = 0; i < arreglo.length; i++) { 
        for (var j = 0; j < (arreglo.length - i - 1); j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                const recorido = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = recorido
            }
        }
    }

    console.log(arreglo);
}

const arreglo = [2, 6, 1, 4];

seleccion(arreglo);