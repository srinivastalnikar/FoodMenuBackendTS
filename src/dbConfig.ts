import mysql from "mysql2";

const conn = mysql.createPool({
    host: "bi30tloqqg6aqnsjzk5h-mysql.services.clever-cloud.com",
    user: "uapdthevueb7t3hg",
    password: "zEZ6Q84UgLSHREfJwowg",
    database: "bi30tloqqg6aqnsjzk5h",
    connectionLimit: 5,
});

const db = conn.promise();
console.log("DB Connected");

export default db;
