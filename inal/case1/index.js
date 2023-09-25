const db = require("./prepare");

const sql = `
select users.id, users.userName, users2.userName as parentUserName from users left join users as users2 on users.parent=users2.id
`;

db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();
