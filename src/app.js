import express from "express";
import { create } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

import usersRoutes from "./routes/users.routes.js";
import viewsRoutes from "./routes/views.routes.js";
import { requestLogger } from "./middlewares/logger.middleware.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// CONFIGURACIÓN HANDLEBARS
const hbs = create({
	helpers: {
    	addOne: (index) => index + 1
  	},
	extname: ".handlebars",
	defaultLayout: "main",
	layoutsDir: path.join(__dirname, "views/layouts"),
	partialsDir: path.join(__dirname, "views/partials"),
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARES GLOBALES
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// RUTA ABSOLUTA PARA ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, "../public")));

// MIDDLEWARE DE AUDITORÍA Y LOGS
app.use(requestLogger);

// RUTAS
app.use("/", viewsRoutes);
app.use("/api/users", usersRoutes);

// MANEJO DE RUTAS NO ENCONTRADAS (404)
app.use((req, res) => {
	res.status(404).render("notFound", {
    	title: "404 - Página no encontrada",
    	layout: "error",
  	});
});

export default app;