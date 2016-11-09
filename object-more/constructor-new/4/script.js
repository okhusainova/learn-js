function Calculator() {

    this.calculate = function(str) {
        return this.res = parseInt(str) + +str.slice(str.indexOf('+')+1);
    };
}




var calc = new Calculator;

alert( calc.calculate('3 + 217') ); // 10