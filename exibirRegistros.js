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

        var sql = "select * from agenda order by nome desc";
        
        con.query(sql, function(err, result){
            if(err) throw err;
            console.log("Dados:");
            result.forEach(
                (row) => {
                    //console.log(row);
                    var str = row.nome + " mora em " + row.endereco;
                    console.log(str)
                }    
            );
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