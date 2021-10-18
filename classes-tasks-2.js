console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name,
      this.age = age,
      this.height = height,
      this.weght = weight
    }
    
    getAge() {
      return `${this.name} is age ${this.age}`
    }
  
    getHeight() {
      return `${this.name}  is ${this.height}cm`
    }
    
      getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }
  }		
  console.dir(Player);
  const p1 = new Player("David Jones", 25, 175, 75);
  console.log({
    "David Jones is age 25": p1.getAge(),
    "David Jones is 175cm": p1.getHeight(),
    "David Jones weighs 75kg": p1.getWeight(),
  });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  
  class Calculator {
   add(a , b){
     return (a + b)
   }
   subtract(a , b){
     return (a - b)
   }
   multiply(a , b){
     return (a * b)
   }
   divide(a , b){
     return (a / b)
   }

  }

 
  

var calculator = new Calculator();
// console.log({
// calculator.add(10, 5),

// calculator.subtract(10, 5), 

// calculator.multiply(10, 5), 

// calculator.divide(10, 5), 
// })
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor (firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
      
    }
  }

//   emp1 = Employee("John", "Smith")
// emp1.fullname ➞ "John Smith"

// emp2 = Employee("Mary",  "Sue")
// emp2.email ➞ "mary.sue@company.com"

// emp3 = Employee("Antony", "Walker")
// emp3.firstname ➞ "Antony"
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(other) {
            
    }
  }
//   p1 = Person("Samuel", 24)
//   p2 = Person("Joel", 36)
//   p3 = Person("Lily", 24)
//   p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }
  
  
  class Circle {
    constructor(radius){
    this.radius = radius
   
    }
    getArea() {return Math.PI *this.radius**2}
    getPerimeter() {return 2 * Math.PI * this.radius} 
  }
  
  let circy1 = new Circle(11)
  console.log(circy1.getArea())

  let circy2 = new Circle(4.44)
console.log(circy2.getPerimeter())
  
  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
  
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  // ... code
}
console.groupEnd();
