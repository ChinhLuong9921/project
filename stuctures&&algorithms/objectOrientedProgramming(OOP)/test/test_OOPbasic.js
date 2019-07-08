function Rabbit(type) {
    this.type = type;
    this.greeting = function() {
        console.log(`${this.type} rabbit say hello!`);
    };
}

var blackRabbit = new Rabbit('black');
blackRabbit.greeting();

Rabbit.prototype.sayBye = function() {
    console.log(`${this.type} rabbit say goodbye!`);
}

var whiteRabbit = new Rabbit('white');
whiteRabbit.sayBye = function() {
    console.log(`${this.type} say Chich chich`);
};

whiteRabbit.sayBye();

function Person(_name) {
    var name = _name;
    this.setName = function() {
        name = _name;
    };
    this.getName = function() {
        return name;
    };
}

var per1 = new Person('Dinh Chinh');
console.log(per1.getName());

function Student(_name, _school) {
    var school = _school;
    Person.call(this, _name);
    this.setSchool = function(_school) {
        school = _school;
    };
    this.getSchool = function() {
        return school;
    };
}

var student = new Student('Dinh Chinh', 'BKU'); 
console.log(student.getSchool());
console.log(student.getName());