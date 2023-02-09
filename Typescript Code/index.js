//TypeScript Ex. 1
// let a : number = 5;
// console.log(5);
//TypeScript Ex. 2
// Type Annotations
var fullName = "Souvik";
fullName = 'John';
var num;
num = 1;
var names = [];
names.push("Hello World");
function sum(a, b) {
    return a + b;
}
//TypeScript Ex. 3
// Tuples: A tuple is a typed array with a pre-defined length and types for each index. Tuples are great because they allow each element in the array to be a known type of value.
var address;
// initialized incorrectly which throws an error
//address = [1, 'Hello World', 4, 0];
//initialize correctly
address = [123, 'Souvik', 3232];
var person;
// initialized incorrectly which throws an error
//person = { name: 'souvik', age: 30 };
person = { name: 'souvik' };
//age? its a optional property
var anotherPerson;
anotherPerson = { name: 'souvik' };
anotherPerson = { name: 'souvik', age: 30 };
//funtion in optional property
function add(a, b) {
    //return a + b;
    return b ? a + b : a;
}
console.log(add('1', '2')); //concat with the output is 12
console.log(add('1')); //output is 1undefined
var p;
p = { name: 'Souvik', age: 30, id: 1 };
var p1; //Union
//p1 = { name: 'jack', age: 1, rollNo: 1 }; //Property 'id' is missing in type '{ name: string; age: number; rollNo: number; }' but required in type 'Student'.
p1 = { name: 'john', age: 1, id: 1 };
p1 = { name: 'souvik', age: 55, id: 2, rollNo: 1 };
var p2; //Intersection
p2 = { name: 'souvik', age: 33, id: 1, rollNo: 100 }; //Both property has to be assigned
var c;
c = 1;
c = "one";
var n = []; //never array
//n.push('hi');
//Class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getModel = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('Audi');
c1.getModel();
//Public 
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getModel = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX('BMW');
c2.getModel();
//Private
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getModel = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY('Mercededz');
c3.getModel();
var CarC = /** @class */ (function () {
    function CarC(brand, model, release) {
        this.brand = brand;
        this.model = model;
        this.release = release;
    }
    return CarC;
}());
//Generics:: Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
function gen(a, b) {
    return [a, b];
}
console.log(gen('1', '2'));
console.log(gen(1, 2));
