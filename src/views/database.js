import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '8352246Seta*',
    database:'prueba01'
});

export default pool;