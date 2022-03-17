const fs = require('fs');
const path = require ('path');
const users = path.join(__dirname,'../logs/userlogs.txt');

const usuarioLogin = (req,res, next)=>{
    fs.appendFileSync(users, 'el usuario ingreso a la ruta ' +  req.url + '\n');
    console.log(req.url);
    console.log(users);
    next()
}



module.exports = usuarioLogin;