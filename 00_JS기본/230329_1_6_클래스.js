// 자바스크립트와 자바의 클래스 차이점에 대해서만 알고가도 됨.

class Vehicle {
  constructor(brand, model, year, color, speed) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.speed = speed;
  }
  getBrand() {
    return this.brand;
  }
  getModel() {
    return this.model;
  }
  getYear() {
    return this.year;
  }
  getColor() {
    return this.color;
  }
  getSpeed() {
    return this.speed;
  }
  accelerate(amount) {
    this.speed += amount;
    console.log(`The ${this.brand} ${this.model} is now going ${this.speed}km/h.`);
  }
  break(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`The ${this.brand} ${this.model} is now going ${this.speed}km/h.`);
  }
  static getNumberOfWheels() {
    return 0;
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, color, speed, numDoors) {
    super(brand, model, year, color, speed);
    this.numDoors = numDoors;
  }

  getNumDoors() {
    return this.numDoors;
  }
  static getNumberOfWheels() {
    return 4;
  }
}
class Truck extends Vehicle {
  constructor(brand, model, year, color, speed, towingCapacity) {
    super(brand, model, year, color, speed);
    this.towingCapacity = towingCapacity;
  }
  static getNumberOfWheels() {
    return 6;
  }
}

const myCar = new Car("현대", "제네시스G80", 2022, "BLACK", 180, "4");
console.log(myCar.getBrand());
myCar.accelerate(30);
myCar.break(10);
console.log(Car.getNumberOfWheels());

console.log("\n");

const myCar2 = new Truck("기아", "봉고", 2010, "WHITE", 100, 10000);
console.log(myCar2.getModel());
console.log(myCar2.getColor());
myCar2.accelerate(50);
myCar2.break(80);
console.log(Truck.getNumberOfWheels());