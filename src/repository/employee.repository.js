const {pool} = require('../config/db');
const {insertEmployee, updateEmployee, deleteEmployee, selectEmployee, selectEmployeeById, updateBalance} = require('../utils/query');

const EmployeeRepository = () => {

    const createWithTransaction = async () => {
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
        createEmp, updateEmp, deleteEmp, getAllEmp, getEmpById, createWithTransaction
    }
}
module.exports = EmployeeRepository
