const EmployeeRepository = require('../repository/employee.repository');
const EmployeeUseCase = require("../usecase/employee.usecase");
const {Response, commonResponse} = require('../utils/response');

const employeeUseCase = EmployeeUseCase(EmployeeRepository());

const get = async (req, res) => {
    const employees = await employeeUseCase.getAllEmployee();
    const response = Response().successMessage(res.statusCode,commonResponse.successMessage, employees)
    res.end(JSON.stringify(response));
}

const getById = async (req, res, id) => {
    const employee = await employeeUseCase.getEmployeeById(id.id);
    const response = Response().successMessage(res.statusCode,commonResponse.successMessage, employee)
    res.end(JSON.stringify(response));
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

const filterByPobAddress = async (req, res, filter) => {
    const employees = await employeeUseCase.filterEmployeeByPobAddress(filter);
    const response = Response().successMessage(res.statusCode,commonResponse.successMessage, employees)
    res.end(JSON.stringify(response));
}

module.exports = {
    get,
    getById,
    create,
    update,
    deleteEmp,
    filterByPobAddress
}
