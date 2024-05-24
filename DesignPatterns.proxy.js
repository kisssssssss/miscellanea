/**
 * @file 代理模式
 * @desc 代理模式是一种结构型设计模式，允许通过代理对象控制对其他对象的访问
 *
 * 优点
 *  控制访问：可以控制对目标对象的访问，增加额外的控制逻辑。
 *  延迟初始化：可以延迟对象的创建，直到真正需要时才创建对象。
 *  增强功能：可以在不修改对象的情况下，为对象添加额外的功能（如日志记录、缓存等）。
 *
 * 缺点
 *  复杂性增加：引入代理模式会增加系统的复杂性，特别是在不必要时使用。
 *  性能开销：代理模式可能会引入额外的性能开销，特别是在频繁使用代理时。
 * */

class Person {
  constructor(name, age, ssn) {
    this.name = name; // 公共信息
    this.age = age; // 公共信息
    this._ssn = ssn; // 私人信息 (社会安全号码)
  }

  getSsn() {
    return this._ssn;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// 定义一个代理类
class PersonProxy {
  constructor(person) {
    this.person = person;
  }

  displayInfo() {
    this.person.displayInfo();
  }

  getSsn(role) {
    if (role === "admin") {
      return this.person.getSsn();
    } else {
      console.log("Access denied: You do not have permission to access SSN.");
      return null;
    }
  }
}

// 使用代理来访问Person对象
const person = new Person("Alice", 30, "123-45-6789");
const personProxy = new PersonProxy(person);

// 通过代理访问公共信息
personProxy.displayInfo();

personProxy.getSsn("user");
personProxy.getSsn("admin");
