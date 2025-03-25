
import mysql from 'mysql2/promise';

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'job_board',
    password: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default conn;