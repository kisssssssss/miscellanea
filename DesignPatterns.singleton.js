/**
 * @file 单例模式
 * @desc 单例模式是一种创建型设计模式，保证一个类只有一个实例，并提供一个访问它的全局访问点
 * 
 * 优点
 *  唯一实例：确保系统中一个类只有一个实例，节省资源。
 *  全局访问：提供一个全局访问点，可以轻松访问这个实例。
 *  控制实例生命周期：可以精确控制实例的创建和销毁时间。
 * 
 * 缺点
 *  隐藏依赖关系：全局访问点可能隐藏类之间的依赖关系，使代码难以测试和维护。
 *  难以扩展：单例类难以扩展，因为它限制了实例的数量。
 * */

let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// 通过 Object.freeze 方法冻结对象，防止意外修改
const singletonCounter = Object.freeze(new Counter());
