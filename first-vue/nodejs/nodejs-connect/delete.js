var mysql  = require('mysql');  
var config = require('./config.js')
 
var connection = mysql.createConnection(config); 
 
connection.connect();
 
var delSql = 'DELETE FROM websites where id=7';
//删
connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();