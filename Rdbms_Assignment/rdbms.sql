CREATE TABLE projects(
	project_id SERIAL PRIMARY KEY,
	project_name TEXT NOT NULL,
	start_date DATE,
	end_date DATE
);

CREATE TABLE departments(
	department_id SERIAL PRIMARY KEY,
	department_name TEXT NOT NULL,
	budget NUMERIC(15, 2)
);

CREATE TABLE employees(
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	salary NUMERIC(10, 2),
	hire_date DATE,
	department_id INT REFERENCES departments(department_id)
);

CREATE TABLE employee_projects(
	employee_id INT REFERENCES employees(id),
	project_id INT REFERENCES projects(project_id),
	hours_worked NUMERIC(5, 2)
);

SELECT * FROM departments

-- 2. Add a CHECK constraint to the projects table to ensure that the end_date is always greater than or equal to the start_date

ALTER TABLE projects add constraint check_date check(end_date >= start_date);

-- 3. Alter the employees table to add a new column email (TEXT) with a UNIQUE constraint.

ALTER TABLE employees add column email TEXT UNIQUE; 

-- 4. Insert a new department named "Research & Development" with a budget of $1,000,000.

INSERT into departments(department_name, budget) values ('Research & Development',1000000);

-- 5. Insert an employee named "John Doe" with a salary of $75,000, hired on '2023-01-15', and assigned to the "Research & Development" department.

INSERT INTO employees (name, salary, hire_date, email,department_id) VALUES ('John Doe', 75000, '2023-01-15', NULL,1);

-- 6. Insert a project named "Project Alpha" that started on '2023-02-01' and ended on '2023-12-31'.

INSERT INTO projects (project_name, start_date, end_date) VALUES ('Project Alpha', '2023-02-01', '2023-12-31');
INSERT INTO projects (project_name, start_date, end_date) VALUES ('Project Beta', '2024-02-01', '2024-12-31');
INSERT INTO projects (project_name, start_date, end_date) VALUES ('Project Gamma', '2025-02-01', '2025-12-31');

-- 7. Assign "John Doe" to "Project Alpha" with 120 hours worked.

INSERT INTO employee_projects(employee_id, project_id, hours_worked) VALUES ((SELECT id FROM employees WHERE name = 'John Doe'), (SELECT project_id FROM projects WHERE project_name = 'Project Alpha') , 120);

-- 8. Write a query to display all employees who were hired in the year 2023.

SELECT * FROM employees WHERE hire_date BETWEEN '2023-01-01' AND '2023-12-31';

-- 9. Write a query to display the names of employees who earn more than the average salary of all employees.

INSERT INTO employees (name, salary, hire_date, department_id) VALUES ('Ranjith', 1000000, '2024-05-25', 1);
SELECT * FROM employees where salary > (SELECT AVG(salary) FROM employees);

-- 10. Write a query to display the names of employees who belong to the "Research & Development" department (use a subquery to find the department ID).

SELECT * FROM employees where department_id = (SELECT department_id FROM departments WHERE department_name='Research & Development');

-- 11. Write a query to display the names of employees who have not been assigned to any project (use a subquery with NOT IN).

SELECT name FROM employees WHERE id NOT IN (SELECT employee_id FROM employee_projects);

-- 12. Write a query to display the department names and the total salary expenditure for each department (use a subquery to calculate the total salary).

SELECT department_name AS dept_name, (SELECT SUM(salary) FROM employees WHERE employees.department_id = departments.department_id) AS total_expenditure FROM departments;

-- 13. Write a query to display the names of employees who worked on projects that started in 2023 (use a subquery to find project IDs). 

SELECT name FROM employees WHERE (id = (SELECT employee_id FROM employee_projects WHERE project_id = (SELECT project_id FROM projects WHERE start_date BETWEEN'2023-01-01' AND '2023-12-31' )))

-- 14.Write a query to display the project names and the total number of employees assigned to each project (use a subquery to count employees).

SELECT project_name, (SELECT COUNT(*) FROM employee_projects WHERE employee_projects.project_id = projects.project_id) AS total_employees FROM projects;

-- 15. Update the salary of all employees in the "Research & Development" department by giving them a 10% raise (use a subquery to find the department ID).

UPDATE employees SET salary = (salary + (salary * 0.1)) WHERE department_id = (SELECT department_id FROM departments WHERE department_name='Research & Development');

-- 16. Update the end_date of "Project Alpha" to '2024-01-31' (use a subquery to find the project ID).

UPDATE projects SET end_date = '2024-01-31' WHERE project_name = 'Project Alpha';

-- 17. Update the hours_worked for "John Doe" on "Project Alpha" to 150 hours (use subqueries to find the employee ID and project ID).

UPDATE employee_projects SET hours_worked = 150 WHERE employee_id = (SELECT id FROM employees WHERE name='John Doe');

-- 18. Delete all employees who have not been assigned to any project (use a subquery with NOT IN).

DELETE FROM employees WHERE id NOT IN (SELECT employee_id FROM employee_projects);

-- 19. Delete the project named "Project Alpha" and all associated records from the employee_projects table (use a subquery to find the project ID).

DELETE FROM employee_projects WHERE project_id = (SELECT project_id FROM projects WHERE project_name = 'Project Alpha');
-- Deleting project
DELETE FROM projects WHERE project_name = 'Project Alpha';

-- 20. Write a query to display the names of employees who have worked on more than one project (use a subquery with GROUP BY and HAVING).

SELECT DISTINCT e.name FROM employees e JOIN employee_projects ep ON e.id = ep.employee_id GROUP BY e.id, e.name HAVING COUNT(ep.project_id) > 1;

