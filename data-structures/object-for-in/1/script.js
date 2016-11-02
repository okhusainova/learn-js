function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}


var obj = {};
alert(isEmpty(obj));
