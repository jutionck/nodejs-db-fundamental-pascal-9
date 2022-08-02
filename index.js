const {createEmp, updateEmp, deleteEmp} = require('./src/repository/employee.repository');

/**
 * Cara menjalankan silahkan lakukan comment pada function yanng tidak dibutuhkan
 */

const addEmp01 = ['Bulan', 'Sutisna', '2000-02-12', 'Bali', 'Bali'];
createEmp(addEmp01);

const updateEmp01 = ['Bulan', 'Sutina', '2000-02-12', 'Bali', 'Bali', 8];
updateEmp(updateEmp01)

const deleteEmp01 = [9];
deleteEmp(deleteEmp01);
