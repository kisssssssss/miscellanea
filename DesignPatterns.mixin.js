/**
 * @file 混合模式
 * @desc 混合模式是一种结构设计模式，它通过将多个对象合并为一个对象，以实现功能的复用和扩展
 *
 * 优点
 *  代码复用：通过将常用功能抽象为 Mixin 对象，可以在多个类中复用这些功能，避免重复代码。
 *  灵活性：可以选择性地将不同的 Mixin 混入类中，提供了很大的灵活性。
 *  简化继承结构：减少了多层次继承的复杂性，使类的设计更加扁平化和直观。
 * 
 * 缺点
 *  名称冲突：如果不同的 Mixin 对象中包含同名的方法或属性，可能会导致冲突和意外行为。
 *  调试困难：由于方法和属性是动态混入的，调试和理解代码的执行路径可能比较困难。
 *  性能开销：在运行时进行方法和属性的混入，可能会带来一定的性能开销。
 * */

class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const animal = {
  eat() {
    console.log(`${this.name} is eating.`);
  },
  walk() {
    console.log(`${this.name} is walking.`);
  },
};

// 将 Mixin 对象混入目标类
Object.assign(Person.prototype, mixins);

// 使用混入后的类
const john = new Person("John");

john.sayName(); // My name is John
john.eat(); // John is eating.
john.walk(); // John is walking.
