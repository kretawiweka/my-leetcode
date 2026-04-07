-- Last updated: 4/8/2026, 2:08:14 AM
# Write your MySQL query statement below
select a.name as Customers from Customers a left join Orders b on a.id=b.customerId where b.customerId is null