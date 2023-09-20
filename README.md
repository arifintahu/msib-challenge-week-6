# Challenge Week 5 - Database Querying

## Case 1 - Join Query
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

## Case 2 - SQL Sub Query
You are working with a database for an e-commerce platform that has two tables: **"Customers"** and **"Orders"**. The **"Customers"** table stores information about customers, including their `CustomerID`, `Name`, and `Email`. The **"Orders"** table stores information about customer orders, including `OrderID`, `CustomerID` (which references the CustomerID in the Customers table), `OrderDate`, and `TotalAmount`.

For example:

Customers Table:

| ID    | Name    | Email               |
|-------|---------|---------------------|
| 1     | Alice   | alice@email.com     |
| 2     | Bob     | bob@email.com       |
| 3     | Carol   | carol@email.com     |
| 4     | Dave    | dave@email.com      |

Orders Table:

| ID    | CustomerID | OrderDate  | TotalAmount |
|-------|------------|------------|-------------|
| 101   | 1          | 2023-01-05 | 50.00       |
| 102   | 1          | 2023-02-10 | 30.00       |
| 103   | 2          | 2023-03-15 | 75.00       |
| 104   | 3          | 2023-04-20 | 40.00       |
| 105   | 3          | 2023-05-25 | 60.00       |
| 106   | 2          | 2023-06-30 | 20.00       |
| 107   | 4          | 2023-07-05 | 90.00       |

Please write an SQL query to find the names of customers using `sub-query` who have placed the highest number of orders in the following format. In case of a tie, list all customers with the same highest number of orders.
| Name  |
|-------|
| Alice |
| Bob   |
| Carol |

**Note:** In the example data, Alice, Bob, and Carol have each placed two orders, which is the highest number of orders among customers. Therefore, all three names should be listed in alphabetical order.

## How to Submit
1. Fork this [repository](https://github.com/arifintahu/msib-challenge-week-6)
2. Clone forked repository
3. Create a new branch `git checkout -b solution`
4. Install dependencies `npm install`
5. Create a folder of your nickname `mkdir nickname`
6. Copy cases in challenges directory to your own folder
7. Commit and push your changes
8. Create a Pull Request to original repository
