const fs = require('fs');
const path = require('path')

const logMiddleware = (req, res, next) => {
  
    fs.appendFileSync(path.join(__dirname, '../logs/userLog.txt'), 'El usuario ingresó a la ruta: ' + req.url + ',\n', 'utf-8');
    next()
}

module.exports = logMiddleware