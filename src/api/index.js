const mysql = require('mysql');
const { config } = require('../config');

const db_config = config.database;

var pool = mysql.createPool(db_config);
// connection.connect(function(err) {
//     if (err) {
//         console.error('Error connecting: ' + err.stack);
//         return;
//     }
// })

module.exports = {
    getMasterSchools: function(req, res) {
        pool.query('CALL getMasterSchool()', {}, (err, rows) => {
            if (err) { res.json(err); }
            res.json(rows[0]);
        })   
    },
    getMasterClasses: function(req, res) {
        pool.query('CALL getMasterClasses()', {}, (err, rows) => {
            if (err) { res.json(err); }
            res.json(rows[0]);
        });   
    },
    createLeadCustomer: function(req, res) {
        var params = [
            req.body.parent_firstname,
            req.body.parent_lastname,
            req.body.mobile,
            req.body.email,
            req.body.child_firstname,
            req.body.child_lastname,
            parseInt(req.body.school_id),
            req.body.classes_id,
            req.body.note,
            req.body.is_agreement,
            req.body.is_received_off
        ];
    
        pool.query('CALL createLeadCustomer(?,?,?,?,?,?,?,?,?,?,?)', params, (err, rows) => {
            if (err) { res.json(err); }
            res.json(rows[0]);
        });
    }
};

///* connection.end() */