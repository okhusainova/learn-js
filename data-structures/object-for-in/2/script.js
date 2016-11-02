'use strict';

var salaries = {
    'Вася': 100,
    'Петя': 300,
    'Даша': 250,
    'key': 333
};
var sum=0;
for (var key in salaries) {
    sum += salaries[key];
}
alert(sum);
