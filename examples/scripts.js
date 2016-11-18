// var i = 10;
//
// function fi() {
//     var i = '[j.';
//     alert(i);
// }
//
// fi();
// var i = 5;


var animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
    this.__proto__ = animal;
}

var rabbit = new Rabbit("Кроль");