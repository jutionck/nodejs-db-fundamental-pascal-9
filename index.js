const {createEmp, updateEmp, deleteEmp, getAllEmp, getEmpById} = require('./src/repository/employee.repository');
const Employee = require('./src/model/employee')
/**
 * Cara menjalankan silahkan lakukan comment pada function yanng tidak dibutuhkan
 * Query values must be an array
 */

// const addEmp01 = ['Bulan', 'Sutisna', '2000-02-12', 'Bali', 'Bali'];
// createEmp(addEmp01);

// With Object
// const employee = Employee('', 'Suci', 'Debu', '1992-02-02', 'Bandung', 'Bandung');
// createEmp(employee);

// const updateEmp01 = ['Bulan', 'Sutina', '2000-02-12', 'Bali', 'Bali', 8];
// updateEmp(updateEmp01)
//
// const deleteEmp01 = [9];
// deleteEmp(deleteEmp01);

// getAllEmp();
getEmpById(12)
