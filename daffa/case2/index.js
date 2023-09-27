const db = require("./prepare");

const sql = `
select Name
from Customers where ID in (
  select CustomerID from Orders group by CustomerID
  having count() = (
    select max(count) as maxnum from (
      select count(CustomerID) as count from orders group by CustomerID
    )
  )
);
`

db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();
