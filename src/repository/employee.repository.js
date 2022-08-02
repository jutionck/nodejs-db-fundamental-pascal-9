const {pool} = require('../config/db');
const {insertEmployee, updateEmployee, deleteEmployee, selectEmployee, selectEmployeeById} = require('../utils/query')

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

const getAllEmp = () => {
    pool.query(selectEmployee,  (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res.rows);
    });
}

const getEmpById = (id) => {
    pool.query(selectEmployeeById, id,  (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res.rows[0]);
    });
}

module.exports = {
    createEmp,
    updateEmp,
    deleteEmp,
    getAllEmp,
    getEmpById
}
