let number : number = 5
class User {
    name: string;
    number: number;
    constructor(name:string, number:number){
        this.number = number;
        this.name = name
    }
}

const user = new User("Julien",5)

console.log(user.name + " aime le numéro " + user.number)