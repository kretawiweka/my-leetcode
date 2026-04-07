-- Last updated: 4/8/2026, 2:08:16 AM
# Write your MySQL query statement below
select max(salary) as SecondHighestSalary from employee where salary < (select max(salary) from employee);