const {pool} = require('../config/db');
const {insertEmployee, updateEmployee, deleteEmployee, selectEmployee, selectEmployeeById} = require('../utils/query');

const EmployeeRepository = () => {
    const createEmp = async (employee) => {
        console.log(`Employee create process....`);
        try {
            const res = await pool.query(insertEmployee, [employee.firstName, employee.lastName, employee.bod, employee.pob, employee.address]);
            console.log(`Employee added with ID: ${res.rows[0].id}`);
        } catch (error) {
            console.error(error)
        }
    }

    const updateEmp = async (employee) => {
        console.log(`Employee update process....`);
        try {
            await pool.query(insertEmployee, [employee.firstName, employee.lastName, employee.bod, employee.pob, employee.address, employee.id]);
            console.log(`Employee updated with ID: ${employee.id}`);
        } catch (error) {
            console.error(error)
        }
    }

    const deleteEmp = async (id) => {
        console.log(`Employee delete process....`);
        try {
            await pool.query(deleteEmployee, [id]);
            console.log(`Employee deleted success: ${id}`);
        }  catch (error) {
            console.error(error)
        }
    }

    const getAllEmp = async () => {
        console.log(`Employee get all process....`);
        try {
            const res = await pool.query(selectEmployee);
            console.log(res.rows);
        } catch (error) {
            console.error(error)
        }
    }

    const getEmpById = async (id) => {
        console.log(`Employee get by id process....`);
        try {
            const res = await pool.query(selectEmployeeById, [id]);
            console.log(res.rows[0]);
        } catch (error) {
            console.error(error)
        }
    }

    return {
        createEmp, updateEmp, deleteEmp, getAllEmp, getEmpById
    }
}
module.exports = EmployeeRepository
