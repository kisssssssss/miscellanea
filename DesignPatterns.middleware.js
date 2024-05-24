/**
 * @file 中间件模式
 * @desc 中间件模式在JavaScript，特别是在Node.js和Express.js等框架中，是一种常见的设计模式。中间件是指在请求处理的生命周期中被执行的一系列函数。
 * 
 * 优点
 *  模块化：中间件将代码分成可重用的独立模块，方便管理和维护
 *  可扩展性：可以轻松添加新的中间件来增加功能
 *  灵活性：中间件可以在请求处理的不同阶段执行特定任务，提供很大的灵活性。
 *  简化代码：通过使用中间件，可以避免在每个路由处理器中重复代码，提高代码的简洁性和可读性
 * 
 * 缺点
 *  调试困难：由于请求处理过程可能经过多个中间件，调试时可能比较复杂
 *  顺序依赖：中间件的执行顺序非常重要
 *  性能开销：每个中间件的执行都会带来一些性能开销，特别是在中间件链条较长时，可能会影响性能。
 * */

// 请求对象和响应对象
const req = { method: "GET", url: "/" };
const res = {};

// 中间件管理器
class MiddlewareManager {
  constructor() {
    this.middlewares = [];
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  run(req, res) {
    const executeMiddleware = (index) => {
      if (index < this.middlewares.length) {
        this.middlewares[index](req, res, () => executeMiddleware(index + 1));
      }
    };
    executeMiddleware(0);
  }
}

// 创建中间件管理器实例
const app = new MiddlewareManager();

// 添加日志中间件
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // 调用下一个中间件
});

// 添加一个简单的响应中间件
app.use((req, res, next) => {
  res.message = "Hello World!";
  next();
});

// 添加一个结束请求中间件
app.use((req, res, next) => {
  console.log(res.message);
});

// 运行中间件链
app.run(req, res);
