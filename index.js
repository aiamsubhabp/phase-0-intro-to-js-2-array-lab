// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
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
}