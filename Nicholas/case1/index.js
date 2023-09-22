const db = require("./prepare");

const sql = `
  SELECT
    u1.ID AS 'ID',
    u1.UserName AS 'UserName', 
    u2.UserName AS 'ParentUserName' 
  FROM 
    USERS u1 
  LEFT JOIN 
    USERS u2 
  ON 
    u1.Parent = u2.ID
`;

db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();

