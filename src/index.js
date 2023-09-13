import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from './routes/index.js'

const app = express();

//crear ruta dinamica para establecer las rutas de las views
const __dirname = dirname(fileURLToPath(import.meta.url));

//declaro que estare usando ejs como motor de vistas
app.set('view engine', 'ejs');
//declaro donde esta la ruta de las views
app.set('views', join(__dirname, 'views'));

//usar las rutas
app.use(indexRoutes);

//usar los estilos
app.use(express.static(join(__dirname, 'public')))

app.listen(process.env.PORT || 3000);

console.log("server listening to");