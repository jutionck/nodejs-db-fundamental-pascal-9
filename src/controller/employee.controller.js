const EmployeeRepository = require('../repository/employee.repository');
const EmployeeUseCase = require("../usecase/employee.usecase");
const {Response, commonResponse} = require('../utils/response');

const employeeUseCase = EmployeeUseCase(EmployeeRepository());

const get = async (req, res) => {
    const employees = await employeeUseCase.getAllEmployee();
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
    const response = Response().successMessage(res.statusCode,commonResponse.successMessage, employee)
    res.end(JSON.stringify(response));
}

const getById = async (req, res, id) => {
    const employee = await employeeUseCase.getEmployeeById(id.id);
    const emp = {};
    for (let i = 0;i < employee.rows.length; i++) {
        emp.id =  employee.rows[i].id;
        emp.firstName =  employee.rows[i].first_name;
        emp.lastName = employee.rows[i].last_name;
        emp.dob = employee.rows[i].dob;
        emp.pob = employee.rows[i].pob;
        emp.address = employee.rows[i].address;
    }
    const response = Response().successMessage(res.statusCode,commonResponse.successMessage, emp)
    res.end(JSON.stringify(response));
}

const create = async (req, res, employee) => {
    const result = await employeeUseCase.newEmployeeInfo(employee);
    const newEmployee = {};
    for (let i = 0;i < result.rows.length; i++) {
        newEmployee.id =  result.rows[i].id;
        newEmployee.firstName =  result.rows[i].first_name;
        newEmployee.lastName = result.rows[i].last_name;
        newEmployee.dob = result.rows[i].dob;
        newEmployee.pob = result.rows[i].pob;
        newEmployee.address = result.rows[i].address;
    }
    res.end(JSON.stringify(newEmployee));
}

const update = async (req, res, employee) => {
    const result = await employeeUseCase.updateEmployeeInfo(employee);
    const updateEmployee = {};
    for (let i = 0;i < result.rows.length; i++) {
        updateEmployee.id =  result.rows[i].id;
        updateEmployee.firstName =  result.rows[i].first_name;
        updateEmployee.lastName = result.rows[i].last_name;
        updateEmployee.dob = result.rows[i].dob;
        updateEmployee.pob = result.rows[i].pob;
        updateEmployee.address = result.rows[i].address;
    }
    res.end(JSON.stringify(updateEmployee));
}

const deleteEmp = async (req, res, id) => {
    const result = await employeeUseCase.deleteEmployee(id.id);
    res.end(JSON.stringify(result));
}


module.exports = {
    get, getById, create, update, deleteEmp
}
