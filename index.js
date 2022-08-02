const EmployeeRepository = require('./src/repository/employee.repository');
const Employee = require('./src/model/employee');

const employeeRepository = EmployeeRepository()
const main = async () => {
    try {

        // Silahkan comment bagian yang tidak di perlukan

        // const employee01 = Employee('', 'Suci', 'Debu', '1992-02-02', 'Bandung', 'Bandung');
        // await employeeRepository.createEmp(employee01);
        // const employee02 = Employee(16, 'Jution', 'Candra', '1992-02-02', 'Bandung', 'Bandung');
        // await employeeRepository.updateEmp(employee02);
        // await employeeRepository.deleteEmp(14);
        // await employeeRepository.getEmpById(15);
        // await employeeRepository.getAllEmp();

        // With Transaction
        await employeeRepository.createWithTransaction()
    } catch (err) {
        console.error(err)
    }
}

main().catch()
