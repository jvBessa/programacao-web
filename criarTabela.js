var mysql = require('mysql2');
var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "c@tolic@",
    database: "aula3005"
});

con.connect(
    function(err){
        if(err) throw err;
        console.log("Conexão realizada com sucesso!");

        var sql = 'CREATE TABLE agenda(nome varchar(255), endereco varchar(255));';
        con.query(sql, function(err, result){
            if(err) throw err;
            console.log("Show!");
            }
        );
    }
);

/*con.end(
    function(err){
        if(err) throw err;
        console.log("Conexão encerrada com sucesso!");
    }
);*/