var styles = ['Джаз', 'Блюз', 'Кот', 'Кошка'];
var min = 0;
var max = styles.length-1;
var rand = min + Math.floor(Math.random() * (max + 1 - min));
alert(styles[rand]);
