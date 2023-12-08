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
    prototype();
    push();
    reduce();
    reduceRight();
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

}