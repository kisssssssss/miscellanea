/**
 * @file 工厂模式
 * @desc 工厂模式是一种创建型设计模式，它提供了一种创建对象的最佳方式，而无需指定创建对象的具体类
 * */ 

function createUser({ firstName, lastName }) {
  return {
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
});

const user2 = createUser({
  firstName: "Jane",
  lastName: "Doe",
});

// ======================================================

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user3 = new User({
  firstName: "John",
  lastName: "Doe",
});

const user4 = new User({
  firstName: "Jane",
  lastName: "Doe",
});
