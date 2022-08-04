const EmployeeRepository = require('./src/repository/employee.repository');
const EmployeeUseCase = require("./src/usecase/employee.usecase");
const http = require("http");
const port = 8181;

const employeeUseCase = EmployeeUseCase(EmployeeRepository());

const get = async (req, res) => {
    const employees = await employeeUseCase.getAllEmployee();
    res.end(JSON.stringify(employees.rows));
}

const getById = async (req, res, id) => {
    const employee = await employeeUseCase.getEmployeeById(id.id);
    res.end(JSON.stringify(employee.rows[0]));
}

const create = async (req, res, employee) => {
    await employeeUseCase.newEmployeeInfo(employee);
    res.end(JSON.stringify(employee));
}

const update = async (req, res, employee) => {
    await employeeUseCase.updateEmployeeInfo(employee);
    res.end(JSON.stringify(employee));
}

const deleteEmp = async (req, res, id) => {
    const employee = await employeeUseCase.deleteEmployee(id.id);
    res.end(JSON.stringify(employee.rows[0]));
}

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    if (request.method === 'GET' && request.url === '/employee') {
        get(request, response).catch();
    } else if (request.method === 'POST' && request.url === '/employee') {
        request.addListener('data', (data) => {
            const body = JSON.parse(data);
            create(request, response, body).catch();
        });
    } else if (request.method === 'GET' && request.url === '/employee/id') {
        request.addListener('data', (data) => {
            const body = JSON.parse(data);
            getById(request, response, body).catch();
        });
    } else if (request.method === 'PUT' && request.url === '/employee') {
        request.addListener('data', (data) => {
            const body = JSON.parse(data);
            update(request, response, body).catch();
        });
    } else if (request.method === 'DELETE' && request.url === '/employee') {
        request.addListener('data', (data) => {
            const body = JSON.parse(data);
            deleteEmp(request, response, body).catch();
        });
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
