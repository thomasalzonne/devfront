var User = (function () {
    function User(name, number) {
        this.number = number;
        this.name = name;
    }
    return User;
})();
var user = new User("Julien", 5);
console.log(user.name + " aime le numéro " + user.number);
