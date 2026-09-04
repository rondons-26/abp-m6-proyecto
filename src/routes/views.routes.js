import express from "express";
import * as viewsController from "../controllers/views.controllers.js";

const router = express.Router();

// VISTAS PÚBLICAS
router.get("/", viewsController.homeView);
router.get("/status", viewsController.statusView);

// VISTAS GESTIÓN DE USUARIOS
router.get("/users", viewsController.usersView);
router.get("/users/add", viewsController.usersAddView);
router.get("/users/update/:id", viewsController.usersUpdateView);

export default router;