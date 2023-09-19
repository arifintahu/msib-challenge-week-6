const sqlite3 = require("sqlite3").verbose();

const users = [
  {
    id: 1,
    userName: "Ali",
    parent: 2,
  },
  {
    id: 2,
    userName: "Budi",
    parent: 0,
  },
  {
    id: 3,
    userName: "Cecep",
    parent: 1,
  },
];

function prepareDatabase() {
  const db = new sqlite3.Database(":memory:");
  db.serialize(function () {
    db.run(`CREATE TABLE USER (
          ID int NOT NULL,
          UserName varchar(255) NOT NULL,
          Parent int NOT NULL,
          PRIMARY KEY (ID)
        )`);

    const query = db.prepare("INSERT INTO USER VALUES (?, ?, ?)");
    for (let i in users) {
      const user = users[i];
      query.run(user.id, user.userName, user.parent);
    }
    query.finalize();
  });
  return db;
}

module.exports = prepareDatabase();
