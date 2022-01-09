const mysql = require("mysql");
const Promise = require("bluebird");
const { sumBy } = require("lodash");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
console.log("test");
const db = {
  host: "localhost",
  user: "saurabh",
  password: "cdac",
  database: "react",
};

function value(){
let preval = document.getElementById(id1).innerHTML;
console.log(preval);
}
const submit1 = async (body) => {
  const connection = mysql.createConnection(db);
  await connection.connectAsync();
  const sql = `insert into user(name,password) values (?,? )`;
  await connection.queryAsync(sql, [body.name, body.password]);
  console.log("connected");
  await connection.endAsync();
};

module.exports = { submit1 };
