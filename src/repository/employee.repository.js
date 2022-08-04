const {pool} = require('../config/db');
const {insertEmployee, updateEmployee, deleteEmployee, selectEmployee, selectEmployeeById, updateBalance} = require('../utils/query');

const EmployeeRepository = () => {
    const updateEmpBalance = async () => {
        console.log(`Employee update with transactions process....`);
        const client = await pool.connect()
        try {
            await client.query('BEGIN')
            // Tambahkan kolom balance di tabel employee
            await client.query(updateBalance, [25000, "15"]);
            await client.query(updateBalance, [25000, 24]);
            await client.query('COMMIT')
        } catch (e) {
            await client.query('ROLLBACK')
            throw e
        } finally {
            client.release()
        }
    }

    const createEmp = async (employee) => {
        console.log(`Employee create process....`);
        try {
            return await pool.query(insertEmployee, [employee.firstName, employee.lastName, employee.bod, employee.pob, employee.address]);
        } catch (error) {
            console.error(error)
        }
    }

    const updateEmp = async (employee) => {
        console.log(`Employee update process....`);
        try {
            return await pool.query(updateEmployee, [employee.firstName, employee.lastName, employee.bod, employee.pob, employee.address, employee.id]);
        } catch (error) {
            console.error(error)
        }
    }

    const deleteEmp = async (id) => {
        console.log(`Employee delete process....`);
        try {
            return await pool.query(deleteEmployee, [id]);
        }  catch (error) {
            console.error(error)
        }
    }

    const getAllEmp = async () => {
        console.log(`Employee get all process....`);
        try {
            return await pool.query(selectEmployee);
        } catch (error) {
            console.error(error)
        }
    }

    const getEmpById = async (id) => {
        console.log(`Employee get by id process....`);
        try {
            return await pool.query(selectEmployeeById, [id]);
        } catch (error) {
            console.error(error)
        }
    }

    return {
        createEmp, updateEmp, deleteEmp, getAllEmp, getEmpById, updateEmpBalance
    }
}
module.exports = EmployeeRepository
