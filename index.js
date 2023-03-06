// Write your solution here!
/*let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    //const copyOfAppendCat = [...appendCat];
    //cats.push(name);
   // let arrayCopy = [...appendCat];
    const copy = [...cats, name];
    return copy;
}
function prependCat(name) {
    const copy = [name, ...cats];
    return copy;
}
function removeLastCat() {
    const copy = cats.slice(0, cats.length-1);
    return copy;

}
function removeFirstCat() {
    const copy = cats.slice(1);
    return copy;
} */

let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);

}

function destructivelyRemoveLastCat(name){
    return cats.pop();
}

function destructivelyRemoveFirstCat(name){
    return cats.shift();
}

function appendCat(name){
    let copyCats = [...cats, name]
    return copyCats;
}

function prependCat(name){
    let copyCats = [name, ...cats]
    return copyCats;
}

function removeLastCat(name){
    let copyCats = cats.slice(0,-1)
    return copyCats;
}

function removeFirstCat(name){
    let copyCats = cats.slice(1);
    return copyCats;
}