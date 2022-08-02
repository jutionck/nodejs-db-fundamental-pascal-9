const insertEmployee =  `INSERT INTO m_employee (first_name,last_name,dob,pob,address) VALUES ($1,$2,$3,$4,$5) RETURNING *`;
const updateEmployee = `UPDATE m_employee set first_name = $1,last_name = $2,dob = $3,pob = $4,address = $5 where id=$6`;
const deleteEmployee = `DELETE FROM m_employee where id=$1`;

module.exports = {
    insertEmployee,
    updateEmployee,
    deleteEmployee
}
