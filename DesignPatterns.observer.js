/**
 * @file 观察者模式
 * @desc 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象，当主题对象发生变化时，它的所有观察者都会收到通知并更新
 * 
 * 优点
 *  解耦：观察者模式将主题与观察者分离，降低了它们之间的耦合度。
 *  灵活性：可以在运行时动态添加和删除观察者，使得系统更具灵活性。
 *  扩展性：可以方便地增加新的观察者，无需修改现有代码。
 * 
 * 缺点
 *  性能开销：如果观察者数量过多，通知所有观察者可能会带来一定的性能开销。
 *  复杂性：增加了系统的复杂性，需要维护观察者的添加、删除和通知机制。
 *  调试困难：当观察者链过长或观察者之间存在复杂的依赖关系时，调试可能会变得困难。
 * */

// 主题类（Subject）
class Subject {
  constructor() {
    this.observers = []; // 存储观察者的数组
  }

  // 添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 删除观察者
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // 通知所有观察者
  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }
}

// 观察者类（Observer）
class Observer {
  constructor(name) {
    this.name = name;
  }

  // 更新方法，当主题状态改变时调用
  update() {
    console.log(`${this.name} has been notified.`);
  }
}

// 使用示例
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

// 添加观察者
subject.addObserver(observer1);
subject.addObserver(observer2);

// 通知所有观察者
subject.notifyObservers();

// 删除一个观察者
subject.removeObserver(observer1);

// 再次通知所有观察者
subject.notifyObservers();
