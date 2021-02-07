module.exports = {
    index : (req,res) =>{
        res.render('home',{
            title : "Mercado Autos",
            mensaje: "Bienvenido a mi Sitio"
        });
    },
    about : function(req,res){
        res.render('about');
    }
}