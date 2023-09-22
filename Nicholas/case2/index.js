const db = require("./prepare");

const sql = `
SELECT Name
FROM Customers
WHERE ID IN ( 
    SELECT CustomerID
    FROM Orders
    GROUP BY CustomerID
    HAVING COUNT(ID) = (
        SELECT MAX(order_count)
        FROM (
            SELECT COUNT(ID) AS order_count
            FROM Orders
            GROUP BY CustomerID
        ) AS counts
    )
)
ORDER BY Name;
`;

db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();
