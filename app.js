const express = require('express');
const app = express();
const port = 3000;

const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const localsCheck = require('./middlewares/localsCheck');
const cookieCheck = require('./middlewares/cookieCheck');


/* CONFIGURACIONES */
app.set('view engine','ejs'); //seteo el motor de vistas
app.set('views',__dirname + '/views');

app.use(express.static(__dirname +'/public'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(session({
    secret : "mercadoAutos forever!!!",
    resave: true, 
    saveUninitialized: true
}));
app.use(cookieParser());

app.use(localsCheck);
app.use(cookieCheck);

/* RUTAS */

const indexRouter = require('./routes/indexRouter');
const autosRouter = require('./routes/autosRouter');
const adminRouter = require('./routes/adminRouter');


app.use('/',indexRouter);
app.use('/autos',autosRouter);
app.use('/admin',adminRouter);

app.listen(port,()=>console.log('Servidor corriendo en el puerto ' + port))