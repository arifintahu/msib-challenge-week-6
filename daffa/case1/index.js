const db = require("./prepare");

const sql = `
select u.ID, u.UserName, u2.userName as ParentUserName
from USERS u
left join USERS u2 on u.Parent = u2.ID;
`;

db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();
