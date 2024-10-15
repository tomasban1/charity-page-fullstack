import mysql from 'mysql2/promise';

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'charity',
};

export let connection = null;



setInterval(async () => {
    if (connection?.connection?._fatalError !== null) {
        console.log(connection?.connection?._fatalError);
        try {
            connection = await mysql.createConnection(dbOptions);
        } catch (error) {
            console.log('Nepavyko prisijungti prie DB programos');
        }
    } else {
        // console.log('conn ok');
    }
}, 5000);