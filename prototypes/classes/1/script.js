function CoffeeMachine(power) {
    this._power = power;
    this._waterAmount = 0;
    this._WATER_HEAT_CAPACITY = 4200;

    CoffeeMachine.prototype._getTimeToBoil = function () {
        return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
    };
}



CoffeeMachine.prototype.run = function () {
    setTimeout(function () {
        alert('Готово!');
    }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    this.waterAmount = amount;
};