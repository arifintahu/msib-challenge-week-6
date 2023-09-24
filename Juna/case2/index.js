const db = require("./prepare");

const sql = `
SELECT Name FROM CUSTOMERS c 
JOIN (
  SELECT CustomerID, COUNT(CustomerID) AS TotalOrder 
  FROM Orders GROUP BY CustomerID
) o
ON c.ID = o.CustomerID ORDER BY TotalOrder DESC;
`

db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();
