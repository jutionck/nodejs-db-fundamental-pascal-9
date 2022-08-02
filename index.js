const EmployeeRepository = require('./src/repository/employee.repository');
const Employee = require('./src/model/employee');
const EmployeeUseCase = require("./src/usecase/employee.usecase");

const employeeUseCase = EmployeeUseCase(EmployeeRepository());
const main = async () => {
    try {

        // Silahkan comment bagian yang tidak di perlukan

        // const employee01 = Employee('', 'Suci', 'Debu', '1992-02-02', 'Bandung', 'Bandung');
        // await employeeUseCase.newEmployeeInfo(employee01);
        // const employee02 = Employee(16, 'Jution', 'Candra', '1992-02-02', 'Bandung', 'Bandung');
        // await employeeUseCase.updateEmployeeInfo(employee02);
        // await employeeUseCase.deleteEmployee(14);
        await employeeUseCase.getEmployeeById(15);
        // await employeeUseCase.getAllEmployee();

        // With Transaction
        // await employeeUseCase.updateEmployeeBalance()
    } catch (err) {
        console.error(err)
    }
}

main().catch()
