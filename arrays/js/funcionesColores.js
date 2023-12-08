// Funciones para el primer enunciado sobre el array de colores

// Array de colores a usar
let arrayColores = ['verde', 'rojo', 'amarillo', 'azul', 'negro', 'blanco'];

function colores() {
    
    let menorQueMarron = arrayColores.every(color => color < 'marron') ? 'Todos los colores del array son menor que marrón' : 'Hay colores mayores que marrón';
    document.getElementById('menorMarron').innerHTML = menorQueMarron;

    obtenMenores();
    obtenUltimos();
    añadeTurquesa();
    eliminaVerde();
}

function obtenMenores() {
    let menores = [];

    arrayColores.forEach(color => {
        if (color < 'marron') {
            menores.push(color);
        }
    });

    document.getElementById('coloresMenores').innerHTML = 'Colores menores que marrón: ' + menores;
}

function obtenUltimos() {
    let ultimos = arrayColores.slice(-2);

    document.getElementById('ultimos').innerHTML = 'Dos últimos colores: ' + ultimos;
}

function añadeTurquesa() {
    arrayColores.push('turquesa');

    document.getElementById('turquesa').innerHTML = 'Añadido color turquesa: ' + arrayColores;
}

function eliminaVerde() {
    let indiceVerde = arrayColores.indexOf('verde');

    arrayColores.splice(indiceVerde, 1);

    document.getElementById('borraVerde').innerHTML = 'Eliminado color verde: ' + arrayColores;
}

