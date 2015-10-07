
var sqlite3 = require('sqlite3').verbose();  
var file = "./data/myData.db"; 
console.log('poop'); 
var db = new sqlite3.Database(file);  
console.log('poop');
db.all("SELECT Stature,BMI FROM childMeasures LIMIT 15", function(err, rows) {  
        rows.forEach(function (row) {  
            console.log(row.Stature, row.BMI);  
        })  
    });   
db.close(); 
