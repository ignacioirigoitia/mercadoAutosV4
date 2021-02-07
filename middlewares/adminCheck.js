module.exports = (req,res,next) => {
    if(req.session.userAdmin){
        next()
    }else{
        res.redirect('/admin/login')
    }
}