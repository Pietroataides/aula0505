var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aluno01",
  database: "banco_dados_pietro"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE clientes";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});