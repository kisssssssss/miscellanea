/**
 * @file 原型模式
 * @desc 原型模式是一种创建型设计模式，它提供了一种创建对象的最佳方式，而无需指定创建对象的具体类
 * 
 * 原型模式允许我们轻松地让对象访问并继承其他对象的属性。由于原型链允许我们访问对象本身没有直接定义的属性，因此我们可以避免方法和属性的重复，从而减少内存使用量。
 * 
 * 优点
 *  性能提升：通过复制现有对象来创建新对象，避免了昂贵的初始化过程。
 *  简化对象创建过程：对于复杂对象，通过复制原型对象可以简化对象的创建过程。
 *  动态性：可以在运行时动态地改变对象的结构和行为，并复制这些变化。
 * 
 * 缺点
 *  深拷贝问题：实现深拷贝可能比较复杂，特别是当对象包含其他对象时。
 *  克隆方法复杂性：需要确保每个类都有一个克隆方法，这可能会增加类的复杂度。
 *  内存使用：复制对象可能会导致内存占用增加。
 * */

// 定义一个原型对象
const carPrototype = {
  make: "Default Make",
  model: "Default Model",
  year: 2020,
  clone: function () {
    const newCar = Object.create(this);
    newCar.make = this.make;
    newCar.model = this.model;
    newCar.year = this.year;
    return newCar;
  },
  displayInfo: function () {
    console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
  },
};

// 使用原型对象创建新对象
const car1 = carPrototype.clone();
car1.make = "Toyota";
car1.model = "Camry";
car1.year = 2021;

const car2 = carPrototype.clone();
car2.make = "Honda";
car2.model = "Accord";
car2.year = 2022;

// 展示新对象的信息
car1.displayInfo();
car2.displayInfo();
