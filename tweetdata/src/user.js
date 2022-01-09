const mysql = require('mysql');
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);



const db = {
    host : "localhost",
    user : "saurabh",
    password : "cdac",
    database : "twitter"
}

const getMessage = async () => {
    const connection  = mysql.createConnection(db);
    await connection.connectAsync();
    const sql = `select * from tweetdata order by id desc`;
    const list = await connection.queryAsync(sql);
    return list;
}

const addMessage = async (user) => {

    const connection = mysql.createConnection(db);
    await connection.connectAsync();
    const sql = `insert into tweetdata (message) values (?)`;
    await connection.queryAsync(sql,[user.message]);
    console.log("message added successfully");
    await connection.endAsync();
}

const deleteAll = async () => {

    const connection = mysql.createConnection(db);
    await connection.connectAsync;
    const sql = `truncate table tweetdata`;
    await connection.queryAsync(sql);
    console.log("All records deleted successfully");
    await connection.endAsync();
}

user = {
    message : "Hello",

}

addMessage(user);

module.exports = { getMessage , addMessage, deleteAll };