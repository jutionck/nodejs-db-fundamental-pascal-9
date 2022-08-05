const EmployeeRepository = require('../repository/employee.repository');
const EmployeeUseCase = require("../usecase/employee.usecase");

const employeeUseCase = EmployeeUseCase(EmployeeRepository());

const get = async (req, res) => {
    const employees = await employeeUseCase.getAllEmployee();
    res.end(JSON.stringify(employees));
}

const getById = async (req, res, id) => {
    const employee = await employeeUseCase.getEmployeeById(id.id);
    res.end(JSON.stringify(employee));
}

const create = async (req, res, employee) => {
    const result = await employeeUseCase.newEmployeeInfo(employee);
    res.end(JSON.stringify(result));
}

const update = async (req, res, employee) => {
    const result = await employeeUseCase.updateEmployeeInfo(employee);
    res.end(JSON.stringify(result));
}

const deleteEmp = async (req, res, id) => {
    const result = await employeeUseCase.deleteEmployee(id.id);
    res.end(JSON.stringify(result));
}


module.exports = {
    get, getById, create, update, deleteEmp
}
