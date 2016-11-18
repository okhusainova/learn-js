function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error('Значение должно быть положительным');
        }
        if (amount > capacity) {
            throw new Error('Нельзя залить больше, чем ' + capacity);
        }

        waterAmount = amount;
    };

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };
    this.addWater = function(amount) {
        if (amount < 0) {
            throw new Error('Значение должно быть больше 0');
        }
        if (amount > capacity) {
            throw new Error('Нельзя залить больше допустимого объема');
        }
        if (waterAmount < capacity) {
            waterAmount += amount;
        }
        alert('Не хватает места!');
        alert(waterAmount);

    };

}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();