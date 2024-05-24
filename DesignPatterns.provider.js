/**
 * @file 提供者模式
 * @desc 提供者模式是一种创建型设计模式，它提供了一种创建对象的最佳方式，而无需指定创建对象的具体类
 *
 * 优点
 *  解耦：客户端和具体的对象创建逻辑解耦，客户端不需要知道对象的创建细节。
 *  灵活性：可以动态地改变提供的对象或其配置，而不需要修改客户端代码。
 *  可测试性：通过提供不同的提供者实现，可以轻松地进行单元测试，模拟不同的对象依赖。
 *
 * 缺点
 *  复杂性增加：引入提供者模式会增加系统的复杂性，特别是在简单场景下使用时。
 *  性能开销：引入额外的抽象层可能会带来一定的性能开销。
 * */

// 定义一个全局状态和订阅者列表
class Provider {
  constructor(initialState = {}) {
    this.state = initialState;
    this.subscribers = [];
  }

  // 获取状态
  getState() {
    return this.state;
  }

  // 设置状态并通知所有订阅者
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notifySubscribers();
  }

  // 订阅状态变化
  subscribe(callback) {
    this.subscribers.push(callback);
  }

  // 通知所有订阅者状态发生变化
  notifySubscribers() {
    this.subscribers.forEach((callback) => callback(this.state));
  }
}

// 模拟组件基类
class Component {
  constructor(provider) {
    this.provider = provider;
    this.provider.subscribe(this.update.bind(this));
  }

  // 更新方法，需要由具体组件实现
  update(state) {
    console.log("State updated:", state);
  }
}

// 具体组件A
class ComponentA extends Component {
  update(state) {
    console.log("ComponentA received new state:", state);
  }
}

// 具体组件B
class ComponentB extends Component {
  update(state) {
    console.log("ComponentB received new state:", state);
  }
}

// 使用示例
const appProvider = new Provider({ user: "Alice", age: 30 });

const componentA = new ComponentA(appProvider);
const componentB = new ComponentB(appProvider);

// 更新状态
appProvider.setState({ user: "Bob" });
appProvider.setState({ age: 31 });
