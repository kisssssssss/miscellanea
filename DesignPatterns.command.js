/**
 * @file 命令模式
 * @desc 命令模式是一种行为设计模式，它将请求封装为一个对象，从而允许用不同的请求对客户进行参数化，对请求排队或记录请求日志，以及支持可撤销的操作
 * 
 * 
 * 
 * 
 * 
 * */ 

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  });
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id !== id);
    return `You have canceled your order ${id}`;
  });
}

function TrackOrderCommand(id) {
  return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}
