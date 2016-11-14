var leader = {
    name: 'Василий Иванович',
    age: 35
};


var str = JSON.stringify(leader, '', 4);
alert(str);


leader = JSON.parse(str);