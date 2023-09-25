const sqlite3 = require("sqlite3").verbose();

const customers = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
  },
  {
    id: 3,
    name: "Carol",
    email: "carol@email.com",
  },
  {
    id: 4,
    name: "Dave",
    email: "dave@email.com",
  },
];

const orders = [
  {
    id: 101,
    customerID: 1,
    orderDate: "2023-01-05",
    totalAmount: 50.00,
  },
  {
    id: 102,
    customerID: 1,
    orderDate: "2023-02-10",
    totalAmount: 30.00,
  },
  {
    id: 103,
    customerID: 2,
    orderDate: "2023-03-15",
    totalAmount: 75.00,
  },
  {
    id: 104,
    customerID: 3,
    orderDate: "2023-04-20",
    totalAmount: 40.00,
  },
  {
    id: 105,
    customerID: 3,
    orderDate: "2023-05-25",
    totalAmount: 60.00,
  },
  {
    id: 106,
    customerID: 2,
    orderDate: "2023-06-30",
    totalAmount: 20.00,
  },
  {
    id: 107,
    customerID: 4,
    orderDate: "2023-07-05",
    totalAmount: 90.00,
  },
];

function prepareDatabase() {
  const db = new sqlite3.Database(":memory:");
  db.serialize(function () {
    db.run(`CREATE TABLE CUSTOMERS (
          ID int NOT NULL,
          Name varchar(255) NOT NULL,
          Email varchar(255) NOT NULL,
          PRIMARY KEY (ID)
        )`);
    
    db.run(`CREATE TABLE ORDERS (
          ID int NOT NULL,
          CustomerID int NOT NULL,
          OrderDate varchar(255) NOT NULL,
          TotalAmount float NOT NULL,
          PRIMARY KEY (ID)
        )`);

    const queryCustomer = db.prepare("INSERT INTO CUSTOMERS VALUES (?, ?, ?)");
    for (let i in customers) {
      const customer = customers[i];
      queryCustomer.run(customer.id, customer.name, customer.email);
    }
    queryCustomer.finalize();

    const queryOrder = db.prepare("INSERT INTO ORDERS VALUES (?, ?, ?, ?)");
    for (let i in orders) {
      const order = orders[i];
      queryOrder.run(order.id, order.customerID, order.orderDate, order.totalAmount);
    }
    queryOrder.finalize();
  });
  return db;
}

module.exports = prepareDatabase();
