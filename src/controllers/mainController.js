const controller = {
    index : (req,res)=>{
        res.render('index');
    },
    admin: (req,res)=>{
        //console.log(req.query);
        res.send('Hola admin ' + req.query.user);
    }
}

module.exports = controller;