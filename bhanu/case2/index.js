const db = require("./prepare");

const sql = `
SELECT Name
FROM CUSTOMERS
WHERE ID IN (
  SELECT CustomerID
  FROM ORDERS
  GROUP BY CustomerID
  HAVING COUNT(*) = (
    SELECT MAX(OrderCount)
    FROM (
      SELECT COUNT(*) AS OrderCount
      FROM ORDERS
      GROUP BY CustomerID
    )
  )
)
ORDER BY Name;
`

db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();