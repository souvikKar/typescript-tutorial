//TypeScript Ex. 1
let a: number = 5;
console.log(5);

//TypeScript Ex. 2
// Type Annotations
let fullName: string = "Souvik";
fullName = 'John';

let num: number;
num = 1;

const names: string[] = [];
names.push("Hello World");

function sum(a: number, b: number): number {
    return a + b;
}


//TypeScript Ex. 3
// Tuples: A tuple is a typed array with a pre-defined length and types for each index. Tuples are great because they allow each element in the array to be a known type of value.

let address: [number, string, number];
// initialized incorrectly which throws an error
//address = [1, 'Hello World', 4, 0];

//initialize correctly
address = [123, 'Souvik', 3232];

let person: { name: string };
// initialized incorrectly which throws an error
//person = { name: 'souvik', age: 30 };
person = { name: 'souvik' };

//age? its a optional property
let anotherPerson: { name: string, age?: number };
anotherPerson = { name: 'souvik' };
anotherPerson = { name: 'souvik', age: 30 };

//funtion in optional property
function add(a: string, b?: string) {
    //return a + b;
    return b ? a + b : a;
}

console.log(add('1', '2')); //concat with the output is 12
console.log(add('1')); //output is 1undefined

//interface 1
interface Person {
    name: string;
    id: number;
    age: number;
}

let p: Person;
p = { name: 'Souvik', age: 30, id: 1 };

//interface 2 with union and intersection

interface Student {
    name: string;
    rollNo: number;
    id: number;
}
let p1: Person | Student; //Union

//p1 = { name: 'jack', age: 1, rollNo: 1 }; //Property 'id' is missing in type '{ name: string; age: number; rollNo: number; }' but required in type 'Student'.
p1 = { name: 'john', age: 1, id: 1 };
p1 = { name: 'souvik', age: 55, id: 2, rollNo: 1 };


let p2: Person & Student; //Intersection
p2 = { name: 'souvik', age: 33, id: 1, rollNo: 100 }; //Both property has to be assigned

//Type alias
type Count = string | number;
let c: Count;
c = 1;
c = "one";
//c= false //Type 'boolean' is not assignable to type 'Count'

type X = string & number; //never

const n: [] = []; //never array
//n.push('hi');

//Class
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }

    getModel() {
        console.log(this.brand);

    }
}
let c1 = new Car('Audi');
c1.getModel();

//Public 

class CarX {
    constructor(public brand) {

    }
    getModel() {
        console.log(this.brand);

    }
}
let c2 = new CarX('BMW');
c2.getModel();


//Private
class CarY {
    constructor(private brand) {

    }
    getModel() {
        console.log(this.brand);
    }

}
let c3 = new CarY('Mercededz');
c3.getModel();
//Property 'brand' is private and only accessible within class 'CarY'
//console.log(c3.brand);

//interface implements
interface ICar1 {
    brand: string;
    model: string;
}

interface ICar2 {
    release: number
}

class CarC implements ICar1, ICar2 {
    constructor(public brand: string, public model: string, public release: number) { }
}

//Generics:: Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

function gen<T>(a: T, b: T): T[] {
    return [a, b]
}
console.log(gen<string>('1', '2'));
console.log(gen<number>(1, 2));
