function User() {
    this.setFirstName = function(name) {
        this.firstName = name;
    };

    this.setSurname = function (surname) {
        this.lastname = surname;
    };

    this.getFullName = function () {
        return this.firstName + this.lastname;
    };
}

var user = new User();
user.setFirstName('Петя');
user.setSurname('Иванов');

alert( user.getFullName() ); // Петя Иванов