const fs = require('fs');
const path = require ('path');


const admin = (req,res,next)=>{
    console.log(req.query);
    if(req.query.user === 'Ada' || req.query.user === 'Greta' || req.query.user === 'Vim' || req.query.user === 'Tim'){

        return next();
    }

    return res.send('No tenes autorizacion para pasar');
}


module.exports = admin;