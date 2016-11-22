function Rabbit() {}
Rabbit.prototype = {
    eats: true    //так делать плохо, идёт переопределение прототипа, лучше сделать так: Rabbit.prototype.eats = true;
};

var rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats );