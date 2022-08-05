const insertEmployee =  `INSERT INTO m_employee (first_name,last_name,dob,pob,address) VALUES ($1,$2,$3,$4,$5) RETURNING *`;
const updateEmployee = `UPDATE m_employee set first_name = $1,last_name = $2,dob = $3,pob = $4,address = $5 where id=$6 RETURNING *`;
const deleteEmployee = `DELETE FROM m_employee where id=$1`;
const selectEmployee = `SELECT id, first_name,last_name,dob,pob,address from m_employee order by id asc`;
const selectEmployeeById = `SELECT id, first_name,last_name,dob,pob,address from m_employee where id = $1`;
const updateBalance = `UPDATE m_employee set balance = (balance + $1) where id = $2`;
const filterByPobOrAddress = `SELECT id, first_name,last_name,dob,pob,address from m_employee WHERE pob ilike $1 or address ilike $1`;

module.exports = {
    insertEmployee,
    updateEmployee,
    deleteEmployee,
    selectEmployee,
    selectEmployeeById,
    updateBalance,
    filterByPobOrAddress
}
