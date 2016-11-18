function Machine(power) {
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };

}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    var parentEnable = this.enable;
    this.enable = function() {
        parentEnable(); // теперь можно вызывать как угодно, this не важен
    }

    function onReady() {
        alert( 'Кофе готово!' );
    }
    var timerId;
    this.run = function() {
        if (!this._enabled) {
            alert('Кофеварка выключена!');
        } else {
            alert('Я сюда зашел!');
            timerId = setTimeout(onReady, 1000);
        }
    };
    this.disable = function () {
        this.run.call(false);
        clearTimeout(timerId);
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
