// Funciones para arrays de JS

// Array global que se usará como ejemplo en todas las funciones posibles
let array = ['verde', 'rojo', 'amarillo'];

function funciones() {
    at();
    concat();
    constructor();
    copyWithin();
    entries();
    every();
    fill();
    filter();
    find();
    findIndex();
    flat();
    flatMap();
    ForEach();
    from();
    includes();
    indexOf();
    isArray();
    join();
    keys();
    length();
    map();
    pop();
    push();
    reverse();
    splice();
    shift();
    slice();
    some();
    sort();
    toString();
    unshift();
    valueOf();
}

function at() {
    let index = array.at(2);

    document.getElementById('at').innerHTML = `${array} -> array.at(2) -> ${index}`;
}

function concat() {
    let arrayNuevo = ['1', '2', '3'];
    let concatenados = array.concat(arrayNuevo);

    document.getElementById('concat').innerHTML = `${array} y ${arrayNuevo} -> array.concat(arrayNuevo) -> ${concatenados}`;
}

function constructor() {
    let constructor = array.constructor;

    document.getElementById('constructor').innerHTML = `${array} -> array.constructor -> ${constructor}`;
}

function copyWithin() {
    document.getElementById('copy').innerHTML = `${array} -> array.copyWithin(1, 2) -> ${array.copyWithin(1, 2)}`;

    array = ['verde', 'rojo', 'amarillo'];
}

function entries() {
    let iteradores = [];
    let iterador = array.entries();

    for (let indice of iterador) {
        iteradores.push(indice);
    }

    document.getElementById('entries').innerHTML = `${array} -> array.entries() -> ${iteradores}`;
}

function every() {
    let longitudes = array.every(color => color.length > 1);

    document.getElementById('every').innerHTML = `${array} -> array.every(color => color.length > 1) -> ${longitudes}`;
}

function fill() {
    let arrayNuevo = array.fill('hola', 1, 2);

    document.getElementById('fill').innerHTML = `${array} -> array.fill('hola', 1, 2) -> ${arrayNuevo}`;
    array = ['verde', 'rojo', 'amarillo'];
}

function filter() {
    let arrayNuevo = array.filter(color => color > 'marron');

    document.getElementById('filter').innerHTML = `${array} -> array.filter(color => color > 'marron') -> ${arrayNuevo}`;
}

function find() {
    let arrayNuevo = array.find(color => color.length > 4);

    document.getElementById('find').innerHTML = `${array} -> array.find(color => color.length > 4) -> ${arrayNuevo}`;
}

function findIndex() {
    let arrayNuevo = array.findIndex(color => color.length > 4);

    document.getElementById('findIndex').innerHTML = `${array} -> array.findIndex(color => color.length > 4) -> ${arrayNuevo}`;
}

function flat() {
    let array = [1, 2, [3, 4, [5, 6]]];
    let arrayString = '[1, 2, [3, 4, [5, 6]]]';

    let arrayNuevo = array.flat(2);

    document.getElementById('flat').innerHTML = `${arrayString} -> array.flat(2) -> ${arrayNuevo}`;
    array = ['verde', 'rojo', 'amarillo'];
}

function flatMap() {
    let arrayNuevo = array.flatMap(color => [color + 'hola', color + 'adios']);

    document.getElementById('flatMap').innerHTML = `${array} -> array.flatMap(color => [color + 'hola', color + 'adios']) -> ${arrayNuevo}`;
}

function ForEach() {
    let arrayNuevo = [];

    array.forEach(color => {
        arrayNuevo.push(color.toUpperCase());
    });

    document.getElementById('forEach').innerHTML = `${array} -> array.forEach(color.toUpperCase() => { arrayNuevo.push(color); }); -> ${arrayNuevo}`;
}

function from() {
    let array = { 0: 'verde', 1: 'rojo', 2: 'amarillo', length: 3 };
    let arrayString = `{ 0: 'verde', 1: 'rojo', 2: 'amarillo', length: 3 }`;

    let arrayNuevo = Array.from(array);

    document.getElementById('from').innerHTML = `${arrayString} -> Array.from(array) -> ${arrayNuevo}`;
    array = ['verde', 'rojo', 'amarillo'];
}

function includes() {
    let boolean = array.includes('hola');

    document.getElementById('includes').innerHTML = `${array} -> array.includes('hola) -> ${boolean}`;
}

function indexOf() {
    let indice = array.indexOf('rojo');

    document.getElementById('indexOf').innerHTML = `${array} -> array.indexOf('rojo') -> ${indice}`;
}

function isArray() {
    let boolean = Array.isArray(array);

    document.getElementById('isArray').innerHTML = `${array} -> Array.isArray(array) -> ${boolean}`;
}

function join() {
    let arrayNuevo = array.join('');

    document.getElementById('join').innerHTML = `${array} -> array.join('') -> ${arrayNuevo}`;
}

function keys() {
    let frutas = ['manzana', 'banana', 'naranja'];
    let keys = Object.keys(frutas);

    document.getElementById('keys').innerHTML = `${frutas} -> Object.keys(frutas) -> ${keys}`;
}

function length() {
    let long = array.length;
    document.getElementById('lenght').innerHTML = `${array} -> array.length() -> ${long}`;
}

function map() {
    let numeros = [1, 2, 3, 4, 5];
    let numerosTriplicados = numeros.map(numero => numero * 3);

    document.getElementById('map').innerHTML = `${numeros} -> numeros.map(numero => numero * 3) -> ${numerosTriplicados}`;
}

function pop() {
    let numeros = [1, 2, 3, 4, 5];

    document.getElementById('pop').innerHTML = `${numeros} -> numeros.pop() -> 5`;
}

function push() {
    array.push('lila');

    document.getElementById('push').innerHTML = `${array} -> array.push('lila') -> ${array}`;
}

function reverse() {
    let arrayNuevo = array.reverse();

    document.getElementById('reverse').innerHTML = `${array} -> array.reverse() -> ${arrayNuevo}`;
}

function splice() {
    let numeros = [1, 2, 3, 4, 5];
    let arrayNuevo = numeros.splice(1, 2);

    document.getElementById('splice').innerHTML = `${numeros} -> numeros.splice(1, 2) -> 2, 3`;
}

function shift() {
    document.getElementById('shift').innerHTML = `${array} -> array.shift() -> lila`;
}

function slice() {
    let arrayNuevo = array.slice(1, 3);

    document.getElementById('slice').innerHTML = `${array} -> array.slice(1, 3) -> ${arrayNuevo}`;
}

function some() {
    let numeros = [10, 20, 30, 40, 50];
    let resultado = numeros.some(numero => numero > 25);

    document.getElementById('some').innerHTML = `${numeros} -> numeros.some(numero => numero > 25) -> ${resultado}`;
}   

function sort() {
    document.getElementById('sort').innerHTML = `${array} -> array.sort() -> ${array.sort()}`;
}

function toString() {
    let numeros = [10, 20, 30, 40, 50];
    let arrayNuevo = numeros.toString();

    document.getElementById('toString').innerHTML = `${numeros} -> numeros.toString() -> ${arrayNuevo}`;
}

function unshift() {
    document.getElementById('unshift').innerHTML = `${array} -> array.unshift('naranja') -> 5`;
}

function valueOf() {
    let valor = array.valueOf();

    document.getElementById('valueOf').innerHTML = `${array} -> array.valueOf() -> ${valor}`;
}