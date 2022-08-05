const http = require("http");
const port = 8181;
const { get, getById, create, update, deleteEmp, filterByPobAddress} = require('./employee.controller');
const {Response} = require("../utils/response");

const run = () => {
    const server = http.createServer((request, response) => {
        response.setHeader('Content-Type', 'application/json');
        // Set on Header = Token = enigma
        if (!request.headers.token) {
            response.end(JSON.stringify(Response().errorMessage(response.statusCode = 401, 'Unauthorized')));
        } else {
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
            } else if (request.method === 'GET' && request.url === '/employee/address-pob') {
                request.addListener('data', (data) => {
                    const body = JSON.parse(data);
                    filterByPobAddress(request, response, body).catch();
                });
            }
        }
    });

    server.listen(port, () => {
        console.log(`Server running on port ${port}`)
    });
}



module.exports = { run }
