### **Case Study: Employee Management System**
You are working with an **Employee Management System** database. The database has the following tables:

1. **`employees`**:
   - `id` (SERIAL, PRIMARY KEY)
   - `name` (TEXT, NOT NULL)
   - `salary` (NUMERIC(10, 2))
   - `hire_date` (DATE)
   - `department_id` (INT, REFERENCES departments(department_id))

2. **`departments`**:
   - `department_id` (SERIAL, PRIMARY KEY)
   - `department_name` (TEXT, NOT NULL)
   - `budget` (NUMERIC(15, 2))

3. **`projects`**:
   - `project_id` (SERIAL, PRIMARY KEY)
   - `project_name` (TEXT, NOT NULL)
   - `start_date` (DATE)
   - `end_date` (DATE)

4. **`employee_projects`**:
   - `employee_id` (INT, REFERENCES employees(id))
   - `project_id` (INT, REFERENCES projects(project_id))
   - `hours_worked` (NUMERIC(5, 2))

---

### **Assignment Questions**
1. Create the `employees` table with the following constraints:
   - `id` is a primary key.
   - `name` cannot be null.
   - `salary` must be greater than or equal to 0.
   - `department_id` is a foreign key referencing `departments(department_id)`.
2. Add a `CHECK` constraint to the `projects` table to ensure that the `end_date` is always greater than or equal to the `start_date`.
3. Alter the `employees` table to add a new column `email` (TEXT) with a `UNIQUE` constraint.
4. Insert a new department named "Research & Development" with a budget of $1,000,000.
5. Insert an employee named "John Doe" with a salary of $75,000, hired on '2023-01-15', and assigned to the "Research & Development" department.
6. Insert a project named "Project Alpha" that started on '2023-02-01' and ended on '2023-12-31'.
7. Assign "John Doe" to "Project Alpha" with 120 hours worked.
8. Write a query to display all employees who were hired in the year 2023.
9. Write a query to display the names of employees who earn more than the average salary of all employees.
10. Write a query to display the names of employees who belong to the "Research & Development" department (use a subquery to find the department ID).
11. Write a query to display the names of employees who have not been assigned to any project (use a subquery with `NOT IN`).
12. Write a query to display the department names and the total salary expenditure for each department (use a subquery to calculate the total salary).
13. Write a query to display the names of employees who worked on projects that started in 2023 (use a subquery to find project IDs).
14. Write a query to display the project names and the total number of employees assigned to each project (use a subquery to count employees).
15. Update the salary of all employees in the "Research & Development" department by giving them a 10% raise (use a subquery to find the department ID).
16. Update the `end_date` of "Project Alpha" to '2024-01-31' (use a subquery to find the project ID).
17. Update the `hours_worked` for "John Doe" on "Project Alpha" to 150 hours (use subqueries to find the employee ID and project ID).
18. Delete all employees who have not been assigned to any project (use a subquery with `NOT IN`).
19. Delete the project named "Project Alpha" and all associated records from the `employee_projects` table (use a subquery to find the project ID).
20. Write a query to display the names of employees who have worked on more than one project (use a subquery with `GROUP BY` and `HAVING`).

---

### **Sample Data for Testing**
You can provide the following sample data for testing:

#### `departments`:
| department_id | department_name         | budget     |
|---------------|-------------------------|------------|
| 1             | Research & Development  | 1000000.00 |
| 2             | Human Resources         | 500000.00  |

#### `employees`:
| id | name       | salary  | hire_date  | department_id |
|----|------------|---------|------------|---------------|
| 1  | John Doe   | 75000.00| 2023-01-15 | 1             |
| 2  | Jane Smith | 60000.00| 2022-11-01 | 2             |

#### `projects`:
| project_id | project_name | start_date | end_date   |
|------------|--------------|------------|------------|
| 1          | Project Alpha| 2023-02-01 | 2023-12-31 |

#### `employee_projects`:
| employee_id | project_id | hours_worked |
|-------------|------------|--------------|
| 1           | 1          | 120.00       |
