function printNumbersInterval() {
    for (var i = 1; i <= 20; i++) {
        setInterval(alert(i), 5000);
    }
}

printNumbersInterval();