const {Client} = require('pg')

const client = new Client({
    host: "hw2.c7oufshfp6xp.us-east-1.rds.amazonaws.com",
    user: "bosyuan",
    port: 5432,
    password: "0826e070",
    database: "postgres"
})

client.connect();

client.query(`select * from continent`, (error, result) => {
    if (!error){
        console.log(result.rows);
    } else {
        console.log(error.message);
    }
    client.end;
})