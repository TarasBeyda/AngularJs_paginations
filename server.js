var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
var path = require('path');

app.use(bodyParser.json());
app.use(cors());

var connectWithMysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1',
    database: 'paginations'
});

connectWithMysql.connect(function (err) {
    if (err) {
        console.log("Error connecting to DB");
        return;
    }
    console.log("Connection established");
    app.get('/api/paginations', function (req, res) {
        var data = {
            "Data": ""
        };

        connectWithMysql.query("select * from ListForPaginations", function (err, rows) {
            if (err) throw err;
            if (rows.length != 0) {
                data["Data"] = rows;
                res.json(data);
            } else {
                data["Data"] = "No data found..";
                res.json(data);
            }
            connectWithMysql.end(function (err) {});
        })
    });
});

    // connectWithMysql.query("select * from ListForPaginations", function (err, rows) {
    //     if (err) throw err;
    //     console.log("Data received from DB: \n");
    //     console.log(rows);
    //     console.log("\n\n");
    //
    //     for (var i = 0; i < rows.length; i++) {
    //         console.log(rows[i].title);
    //     }
    // });
    //
    // var employee = {
    //     title: "Title 45",
    //     summary: "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
    // };
    // connectWithMysql.query("insert into ListForPaginations set ?", employee, function (err, res) {
    //     if (err) throw err;
    //     console.log("Last insert ID:", res.insertId);
    // });
    //
    // connectWithMysql.query("Update ListForPaginations set title = ? where id = ?",
    //     ["Update title", 26],
    //     function (err, result) {
    //         if (err) throw err;
    //         console.log("Change " + result.changedRows + " rows");
    //     }
    // );
    //
    // connectWithMysql.query("delete from ListForPaginations where id = ?",
    //     [53],
    //     function (err, result) {
    //         if (err) throw err;
    //         console.log("Delete " + result.affectedRows + " rows");
    //     }
    // );

    // app.get('/api/paginations', function (req, res) {
    //     var data = {
    //         "Data": ""
    //     };
    //
    //     connectWithMysql.query("select * from ListForPaginations", function (err, rows) {
    //         // if (err) throw err;
    //         // console.log(rows);
    //         // if (rows.length != 0) {
    //         //     data["Data"] = rows;
    //         //     res.JSON(data);
    //         // } else {
    //         //     data["Data"] = "No data found..";
    //         //     res.json(data);
    //         // }
    //         // res.end(JSON.stringify(rows));
    //         if (err) throw err;
    //         console.log(rows);
    //     })
    // });

    // app.post('/login',function(req,res){
    //     var email = req.body.email;
    //     var pass = req.body.password;
    //     var data = {
    //         "Data":""
    //     };
    //     connection.query("SELECT * from login WHERE email=? and password=? LIMIT 1",[email,pass],function(err, rows, fields){
    //         if(rows.length != 0){
    //             data["Data"] = "Successfully logged in..";
    //             res.json(data);
    //         }else{
    //             data["Data"] = "Email or password is incorrect.";
    //             res.json(data);
    //         }
    //     });
    // });

// connectWithMysql.end(function (err) {});

app.get('/', function (req, res) {
    app.use(express.static(__dirname + '/'));
    res.sendfile('index.html');
});

var server = app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server start on port 3000!');
});