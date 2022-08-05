const {pool} = require('../config/db');
const {insertEmployee, updateEmployee, deleteEmployee, selectEmployee, selectEmployeeById, updateBalance,
    filterByPobOrAddress
} = require('../utils/query');

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
            const result = await pool.query(insertEmployee, [employee.firstName, employee.lastName, employee.bod, employee.pob, employee.address]);
            const newEmployee = {};
            for (let i = 0;i < result.rows.length; i++) {
                newEmployee.id =  result.rows[i].id;
                newEmployee.firstName =  result.rows[i].first_name;
                newEmployee.lastName = result.rows[i].last_name;
                newEmployee.dob = result.rows[i].dob;
                newEmployee.pob = result.rows[i].pob;
                newEmployee.address = result.rows[i].address;
            }
            return newEmployee;
        } catch (error) {
            console.error(error)
        }
    }

    const updateEmp = async (employee) => {
        console.log(`Employee update process....`);
        try {
            const result = await pool.query(updateEmployee, [employee.firstName, employee.lastName, employee.dob, employee.pob, employee.address, employee.id]);
            const updateEmployee = {};
            for (let i = 0;i < result.rows.length; i++) {
                updateEmployee.id =  result.rows[i].id;
                updateEmployee.firstName =  result.rows[i].first_name;
                updateEmployee.lastName = result.rows[i].last_name;
                updateEmployee.dob = result.rows[i].dob;
                updateEmployee.pob = result.rows[i].pob;
                updateEmployee.address = result.rows[i].address;
            }
            return updateEmployee;
        } catch (error) {
            console.error(error)
        }
    }

    const deleteEmp = async (id) => {
        console.log(`Employee delete process....`);
        try {
            const result = await pool.query(deleteEmployee, [id]);
            if (result.rowCount === 0) {
                return `Delete with ID ${id} not found`
            } else {
                return `Delete with ID ${id} success`
            }
        }  catch (error) {
            console.error(error)
        }
    }

    const getAllEmp = async () => {
        console.log(`Employee get all process....`);
        try {
            const employees = await pool.query(selectEmployee);
            const employee = [];
            for (let i = 0;i < employees.rows.length; i++) {
                employee.push({
                    id: employees.rows[i].id,
                    firstName: employees.rows[i].first_name,
                    lastName: employees.rows[i].last_name,
                    dob: employees.rows[i].dob,
                    pob: employees.rows[i].pob,
                    address: employees.rows[i].address,
                });
            }
            return employee;
        } catch (error) {
            console.error(error)
        }
    }

    const getEmpById = async (id) => {
        console.log(`Employee get by id process....`);
        try {
            const employee = await pool.query(selectEmployeeById, [id]);
            const emp = {};
            for (let i = 0;i < employee.rows.length; i++) {
                emp.id =  employee.rows[i].id;
                emp.firstName =  employee.rows[i].first_name;
                emp.lastName = employee.rows[i].last_name;
                emp.dob = employee.rows[i].dob;
                emp.pob = employee.rows[i].pob;
                emp.address = employee.rows[i].address;
            }
            return emp;
        } catch (error) {
            console.error(error)
        }
    }

    const getEmployeeByPobOrAddress = async (data) => {
        console.log(`Employee get employee by pob or address process....`);
        try {
            const keyword = `%${data}%`
            const result = await pool.query(filterByPobOrAddress, [keyword]);
            const employees = [];
            for (let i = 0;i < result.rows.length; i++) {
                employees.push({
                    id: result.rows[i].id,
                    firstName: result.rows[i].first_name,
                    lastName: result.rows[i].last_name,
                    dob: result.rows[i].dob,
                    pob: result.rows[i].pob,
                    address: result.rows[i].address,
                });
            }
            return employees;
        } catch (error) {
            console.error(error)
        }
    }

    return {
        createEmp,
        updateEmp,
        deleteEmp,
        getAllEmp,
        getEmpById,
        updateEmpBalance,
        getEmployeeByPobOrAddress,
    }
}
module.exports = EmployeeRepository
