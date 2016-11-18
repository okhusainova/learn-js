function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.aplly(this, arguments);
    var food_max = power / 100;
    var food = [];

    this.addFood = function() {
        if (!this._enabled) {
            alert('Для начала включите холодильник!');
        } else {
            for (var i = 0; i < arguments.length; i++) {
                food += arguments[i] + ' ';
            }
            alert(food);
        }
    };
    this.getFood = function() {
        this.elements = food;
        alert('Скопировано из фуд - ' + this.elements);
    };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood('котлета');
fridge.addFood('сок', 'зелень');
var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье