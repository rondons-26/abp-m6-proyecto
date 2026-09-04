import User from "../models/user.model.js";

// VISTA HOME
export const homeView = (req, res) => {
    try {
        res.render("home", {
            title: "Inicio | Sistema de Gestión",
            activeHome: true,
        });

    } catch (error) {
        res.status(500).render("home", { error: "Error al cargar la vista de inicio." });
    }
};

// VISTA STATUS
export const statusView = (req, res) => {
    try {
        const systemStatus = {
            status: "Operational",
            environment: process.env.NODE_ENV || "development",
            uptime: `${Math.floor(process.uptime())}s`,
            timestamp: new Date().toISOString(),
            nodeVersion: process.version,
        };

        // SI SOLICITA JSON (API/Insomnia/Postman), SE DEVUELVE JSON. SI NO SE RENDERIZA LA VISTA
        if (req.headers.accept && req.headers.accept.includes("application/json")) {
            return res.json(systemStatus);
        }

        res.render("status", {
            title: "Estado del Servidor",
            status: systemStatus,
            activeStatus: true,
        });

    } catch (error) {
        res.status(500).json({ status: "Error", message: "Error al obtener estado del servidor" });
    }
};

// LISTAR USUARIOS
export const usersView = (req, res) => {
    try {
        const users = User.findAll();
        const plainUsers = users.map((user) => ({ ...user }));

        res.render("listUsers", {
            title: "Lista de Usuarios",
            users: plainUsers,
            activeUsers: true,
        });

    } catch (error) {
        res.status(500).render("listUsers", { error: "Error al cargar los usuarios." });
    }
};

// FORMULARIO CREAR USUARIO
export const usersAddView = (req, res) => {
    try {
        res.render("addUsers", {
            title: "Agregar Usuario",
            activeAdd: true,
        });

    } catch (error) {
        res.status(500).render("addUsers", { error: "Error al cargar el formulario." });
    }
};

// FORMULARIO EDITAR USUARIO
export const usersUpdateView = (req, res) => {
    try {
        const { id } = req.params;
        const user = User.findById(id);

        if (!user) {
            return res.status(404).render("home", {
                title: "Usuario No Encontrado",
                error: `El usuario con ID ${id} no existe en el registro.`,
            });
        }

        res.render("updateUser", {
            title: "Editar Usuario",
            user: { ...user },
            id,
        });
        
    } catch (error) {
        res.status(500).render("listUsers", { error: "Error al obtener los datos del usuario." });
    }
};