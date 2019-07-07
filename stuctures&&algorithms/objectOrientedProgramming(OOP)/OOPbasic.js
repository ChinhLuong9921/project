// Constructors_________________________________________________________
function Rabbit(type) {
    this.type = type;
    this.greeting = function(){
      console.log(this.type + " rabbit" + " say Hello!");
    }
  }
  
  var blackRabbit = new Rabbit("black");
  console.log(blackRabbit.type);        
  // => black
  blackRabbit.greeting();  
  // => black rabbit say Hello!
  
  var killerRabbit = new Rabbit("killer");
  console.log(killerRabbit.type);
  // => killer
  killerRabbit.greeting(); 
  // => killer rabbit say Hello!


  // Prototype_______________________________________________________
Rabbit.prototype.sayBye = function (){
   console.log(this.type + " rabbit" + " say GoodBye!");
}
  
var meowRabbit = new Rabbit("Gau");
blackRabbit.sayBye();
  // => Gau rabbit say GoodBye!

// Override___________________________________________________________
Rabbit.prototype.teeth = "small";

var whiteRabbit = new Rabbit("white");
var killerRabbit = new Rabbit("killer");

console.log(whiteRabbit.teeth);   // => small
console.log(killerRabbit.teeth);  // => small

killerRabbit.teeth = "long";
console.log(whiteRabbit.teeth);   // => small
console.log(killerRabbit.teeth);  // => long

// Tính đóng gói (Encapsulation)_______________________________________________
function Person(_name){
    var name = _name;
    this.setName = function(_name){
      name = _name;       
    }
    this.getName = function(){
      return name;
    }
  }
  
var person = new Person("DinhChinh");
console.log(person.name);          // => undefined
console.log(person.getName());     // => DinhChinh

// Tính kế thừa (inheritance)________________________________________________
function Student(_name, _school){
    var school = _school;
    // inheritance
    Person.call(this, _name);
    //____________
    this.setSchool = function(_school){
      school = _school;
    }
    this.getSchool = function(){
      return school;
    }
  }
  
  var student = new Student("DinhChinh", "BKU");
  console.log(student.getName());    // => DinhChinh
  console.log(student.getSchool());  // => BKU
  
  student.setSchool("NEU");
  student.setName("Ronaldo");
  
  console.log(student.getName());    // => Ronaldo
  console.log(student.getSchool());  // => NEU