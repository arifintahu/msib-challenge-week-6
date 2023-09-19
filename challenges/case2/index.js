const db = require("./prepare");

const sql = `
SELECT * FROM CUSTOMERS
`

db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();
