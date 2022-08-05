const EmployeeUseCase = (employeeRepository) => {
    const {createEmp, updateEmp, deleteEmp, getAllEmp, getEmpById, updateEmpBalance, getEmployeeByPobOrAddress} = employeeRepository;
    const getAllEmployee = async () => {
        return await getAllEmp();
    }
    const getEmployeeById = async (id) => {
        return await getEmpById(id);
    }
    const newEmployeeInfo = async (newEmployee) => {
        return await createEmp(newEmployee);
    }
    const updateEmployeeInfo = async (newEmployee) => {
        return await updateEmp(newEmployee);
    }
    const deleteEmployee = async (id) => {
        return await deleteEmp(id);
    }
    const updateEmployeeBalance = async () => {
        return await updateEmpBalance();
    }

    const filterEmployeeByPobAddress = async (filter) => {
        return await getEmployeeByPobOrAddress(filter);
    }
    return {
        getAllEmployee,
        getEmployeeById,
        newEmployeeInfo,
        updateEmployeeInfo,
        deleteEmployee,
        updateEmployeeBalance,
        filterEmployeeByPobAddress
    }
}

module.exports = EmployeeUseCase;
