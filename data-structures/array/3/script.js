var styles = ['Джаз', 'Блюз'];
alert(styles);
styles.push('Рок-н-Ролл');
alert(styles);
styles[styles.length-2] = 'Классика';
alert(styles);
alert(styles.shift(0));
alert(styles);
styles.unshift('Рэп', 'Регги');
alert(styles);
