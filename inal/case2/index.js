const db = require("./prepare");

const sql = `
SELECT name FROM customers where id in (
  SELECT customerId FROM orders GROUP BY customerId HAVING COUNT() = (
    SELECT MAX(countCs) AS maxCs FROM (
      SELECT COUNT(customerId) AS countCs FROM orders GROUP BY customerId)
      )
    )
`
db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();
