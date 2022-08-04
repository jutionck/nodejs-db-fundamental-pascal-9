const http = require("http");
const port = 8181;
const { get, getById, create, update, deleteEmp } = require('./employee.controller');

const run = () => {
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
}



module.exports = { run }
