function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}

var date = new Date(2014, 0, 3);
alert( getWeekDay(date) );
