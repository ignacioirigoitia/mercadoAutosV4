module.exports = (req,res,next) => {
    if(req.cookies.userAdmin){
        req.session.userAdmin = req.cookies.userAdmin
    }
    next()
}