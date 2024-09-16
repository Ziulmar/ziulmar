import express from 'express';
import morgan from 'morgan';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';  // Importa el motor Handlebars

// Initialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));

// Configura el motor de plantillas
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');  // Cambia 'views engine' por 'view engine'

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index')});

// Public files
app.use(express.static(join(__dirname, '../public')));  // Corrige la ruta pública

// Run server
app.listen(app.get('port'), () => 
    console.log('Server listening on port', app.get('port'))
);