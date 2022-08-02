const {pool} = require('../config/db');
const {insertEmployee, updateEmployee, deleteEmployee, selectEmployee, selectEmployeeById} = require('../utils/query');

const EmployeeRepository = () => {
    const createEmp = (employee) => {
        console.log(`Employee create process....`);
        pool.query(insertEmployee, [employee.firstName, employee.lastName, employee.bod, employee.pob, employee.address], (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`Employee added with ID: ${res.rows[0].id}`);
            }
        });
    }

    const updateEmp = (employee) => {
        console.log(`Employee update process....`);
        pool.query(updateEmployee, [employee.firstName, employee.lastName, employee.bod, employee.pob, employee.address, employee.id],  (err, res) => {
            if (err) {
                console.log(err)
            }
            console.log(`Employee modified success: ${employee}`);
        });
    }

    const deleteEmp = (id) => {
        console.log(`Employee delete process....`);
        pool.query(deleteEmployee, [id],  (err, res) => {
            if (err) {
                console.log(err)
            }
            console.log(`Employee deleted success: ${id}`);
        });
    }

    const getAllEmp = () => {
        console.log(`Employee get all process....`);
        pool.query(selectEmployee,  (err, res) => {
            if (err) {
                console.log(err)
            }
            console.log(res.rows);
        });
    }

    const getEmpById = (id) => {
        console.log(`Employee get by id process....`);
        pool.query(selectEmployeeById, [id],  (err, res) => {
            if (err) {
                console.log(err)
            }
            console.log(res.rows[0]);
        });
    }

    return {
        createEmp, updateEmp, deleteEmp, getAllEmp, getEmpById
    }
}
module.exports = EmployeeRepository
