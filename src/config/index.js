const hostname = ''
const server_user = ''
const server_pass = ''
const dbname = ''

module.exports = {
    allowCrossDomain: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'x-access-token');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Charset', 'UTF-8');
        next();
    },
    config: {
        hostname: 'http://localhost',
        servername: '127.0.0.1',
        port: process.env.PORT || 3000,
        database: {
            host: hostname,
            user: server_user,
            password: server_pass,
            database: dbname,
            multipleStatements: true
        }
    }
} 