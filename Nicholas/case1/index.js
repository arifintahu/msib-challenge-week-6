const db = require("./prepare");

const sql = `
  SELECT
    col1.ID,
    col1.UserName, 
    col2.UserName AS 'ParentUserName' 
  FROM 
    USERS col1 
  LEFT JOIN 
    USERS col2 
  ON 
    col1.Parent = col2.ID
`;

db.all(sql, function (err, rows) {
  if (err !== null) {
    console.error(err);
    return;
  }
  console.table(rows);
});

db.close();

