function CoffeeMachine(power, capacity) {
    this.getPower = function() {
        return power;
    };
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

}

var coffeeMachine = new CoffeeMachine(1000, 500);
coffeeMachine.setWaterAmount(450);
alert( coffeeMachine.getWaterAmount() ); // 450
alert(coffeeMachine.getPower());