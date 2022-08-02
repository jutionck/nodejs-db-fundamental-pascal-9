const {pool} = require('../config/db');
const {insertEmployee, updateEmployee, deleteEmployee} = require('../utils/query')

const createEmp = (employee) => {
    pool.query(insertEmployee, employee, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(`Employee added with ID: ${res.rows[0].id}`);
    });
}

const updateEmp = (employee) => {
    pool.query(updateEmployee, employee,  (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(`Employee modified success: ${employee}`);
    });
}

const deleteEmp = (id) => {
    pool.query(deleteEmployee, id,  (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(`Employee deleted success: ${id}`);
    });
}

module.exports = {
    createEmp,
    updateEmp,
    deleteEmp
}
