/**
 * @file 享元模式
 * @desc 享元模式是一种结构型设计模式，它通过共享技术实现相同或相似对象的重用，以减少内存占用和提高性能
 *
 * 优点
 *  内存使用减少：通过共享相同的内在状态，显著减少了需要创建的对象数量，进而降低了内存占用。
 *  性能提升：减少了对象的创建和销毁过程，降低了垃圾回收的频率和开销。
 *  对象管理简化：共享的对象更容易管理和维护，减少了重复代码，提高了代码的复用性。
 *
 * 缺点
 *  实现复杂：需要区分内在状态和外在状态，并且需要一个工厂来管理享元对象，增加了系统的复杂性。
 *  适用范围有限：享元模式适用于有大量相同或相似对象的情况，对于对象差异较大的场景，享元模式并不适用。
 *  可能影响代码可读性：因为状态的分离和共享，使得代码的逻辑变得更难理解，特别是在调试时可能不太直观。
 *
 * 例如在二维坐标上绘制森林，如果我们不使用享元模式，那么每棵树都会有自己独立的对象，即使这些树是相同的只是位置不一样，这会导致大量的内存消耗。
 * 但通过享元模式，我们可以共享相同树的内在状态，而只存储不同的外在状态，例如树的位置。
 * */

class Tree {
  constructor(name, color, texture) {
    this.name = name; // 树的种类
    this.color = color; // 树的颜色
    this.texture = texture; // 树的纹理
  }

  draw(x, y) {
    console.log(`Drawing ${this.name} tree at (${x}, ${y})`);
  }
}

class TreeFactory {
  constructor() {
    this.trees = {};
  }

  getTree(name, color, texture) {
    const key = `${name}_${color}_${texture}`;
    if (!this.trees[key]) {
      this.trees[key] = new Tree(name, color, texture);
    }
    return this.trees[key];
  }
}

const forest = new TreeFactory();

const tree1 = forest.getTree("Oak", "Green", "Rough");
tree1.draw(10, 20);
const tree2 = forest.getTree("Pine", "Dark Green", "Smooth");
tree2.draw(15, 25);
const tree3 = forest.getTree("Oak", "Green", "Rough");
tree3.draw(20, 30);
