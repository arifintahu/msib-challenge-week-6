# Challenge Week 5 - Database Querying

## Case 1
In the database, there is a table named **"USER"** that consists of three columns: `ID`, `UserName`, and `Parent`. Here's the explanation:

- The `ID` column serves as the Primary Key.
- The `UserName` column represents the name of the user.
- The `Parent` column contains the ID of the user who acts as the creator for a specific user.

For example:
| ID  | UserName        | Parent    |
| --- |:---------------:| ---------:|
| 1   | Ali             | 2         |
| 2   | Budi            | 0         |
| 3   | Cecep           | 1         |


Please write an SQL Query to retrieve data in the following format:
| ID  | UserName        | ParentUserName    |
| --- |:---------------:| -----------------:|
| 1   | Ali             | Budi              |
| 2   | Budi            | null              |
| 3   | Cecep           | Ali               |

**Note:** The `ParentUserName` column contains the username based on the value in the `Parent` column.

## Case 2
