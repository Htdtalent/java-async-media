use gravel_family;

-- Solve each task by writing a query below the task description.
-- Each task describes the expected result.
-- Unfortunately, tasks must be verified manually. :(

-- Example: 
-- Count the number of customer in Toronto
-- Expected: 14
select count(*)
from customer
where city = 'Toronto';

-- How many employees have the last_name 'Soyle'?
-- Expected: 12

-- How many projects are there in the database?
-- Expected: 1121

-- What's the earliest project start_date?
-- Expected: 2017-09-23

-- What's the latest employee start_date?
-- Expected: 2020-08-25

-- Count customers per city.
-- Expected: 88 Rows

-- Count customers per postal_code.
-- Expected: 84 Rows

-- Count employees per last_name.
-- Expected: 3 Rows

-- Count the number of projects per city.
-- Expected: 88 Rows

-- Count the number of projects per city.
-- Sort by the count descending and select the top 10 rows.
-- Expected: 10 Rows

-- Which postal_code has the most projects?
-- Expected: M3H

-- Count the number of projects per start_date year.
-- Expected: 4 Rows

-- Count the number of employees per project in the M3H postal_code.
-- Group by project_id, sort by count descending.
-- Expected: 39 Rows

-- Calculate the total cost per project in the 'M3H' postal_code.
-- (Hint: sum a calculation)
-- Expected: 39 Rows

-- What's the most expensive project in the 'M3H' postal_code?
-- Expected: 18828.00

-- How many projects did each employee work on?
-- Expected: 33 Rows

-- How many employees worked on more than 140 projects?
-- Expected: 10 Rows

-- How many projects cost more than $20,000?
-- Expected: 55 Rows

-- Across all projects, what are the total costs per item?
-- Select the item name and sum.
-- Sort by the sum desc;
-- Expected: 18 Rows

-- Across all projects, what are the total costs per item category?
-- Select the category name and sum.
-- Sort by the sum desc;
-- Expected: 7 Rows

-- What's the average 'Standard Labor' cost per city?
-- Expected: 88 Rows

-- Challenge: Which customer has the first project of 2019?
-- (Requires a subquery.)
-- Expected: Starkie 2019-01-01