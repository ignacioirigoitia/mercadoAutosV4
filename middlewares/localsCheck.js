module.exports = (req,res,next) => {
    if(req.session.userAdmin){
        res.locals.userAdmin = req.session.userAdmin
    }
    next()
}