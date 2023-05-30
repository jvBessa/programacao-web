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
        console.log("Inserção realizada!");

        var sql = "insert into agenda(nome, endereco) values ('Joao Victor', 'QN 214 conjunto a lote B')";
        var sql = "insert into agenda(nome, endereco) values ('Sei la porra', 'Endereço teste')";
        var sql = "insert into agenda(nome, endereco) values ";
        sql = sql + "('Nome2', 'seila')";

        var Nome = 'Pedro';
        var Endereco = 'Lisboa';

        var sql = "insert into agenda(nome, endereco) values ";
        sql = sql + "('" + Nome + "','" + Endereco + "')";
        
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