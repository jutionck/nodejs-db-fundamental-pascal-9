## NodeJS With PostgreSQL

### Database & Table
```sql
CREATE DATABASE db_enigma_employee;

CREATE TABLE m_employee (
   id serial primary key,
   first_name varchar(30),
   last_name varchar(50),
   dob date,
   pob varchar(50),
   address varchar(200)
);
```

### Run
**NOTE** Sebelum merunning silahkan buka dahulu file `index.js` silahkan lakukan comment pada function yang tidak ingin di jalankan, kemudian ketikkan perintah berikut:
```
npm start
```
