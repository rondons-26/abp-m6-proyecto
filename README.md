# CoreApp Enterprise

![Versión](https://img.shields.io/badge/versión-1.0.0-0b5cab?style=for-the-badge)
![Estado](https://img.shields.io/badge/estado-estable-1f9d55?style=for-the-badge)

> Plataforma empresarial para la gestión, supervisión y auditoría de usuarios.

## Ficha del Proyecto

| Campo | Detalle |
| --- | --- |
| **Autor** | Saúl Rondón |
| **Contexto** | Plataforma desarrollada para el Módulo 6: Desarrollo Web Full Stack |
| **Año** | 2026 |
| **Versión** | 1.0.0 |

## Descripción General

CoreApp Enterprise es una aplicación web orientada a la gestión centralizada de usuarios. El sistema integra una API RESTful para administrar la información de forma consistente, una interfaz corporativa para operar sobre los datos y un mecanismo de auditoría de peticiones en tiempo real mediante registros de actividad.

## Tecnologías y Herramientas

![Node.js](https://img.shields.io/badge/Node.js-ESM-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?style=flat-square&logo=express&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars-HBS-f0772b?style=flat-square&logo=handlebars.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952b3?style=flat-square&logo=bootstrap&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-UI%20feedback-5a67d8?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-f7df1e?style=flat-square&logo=javascript&logoColor=111111)

## Funcionalidades Principales

- **CRUD de usuarios:** creación, consulta, actualización y eliminación de registros.
- **API RESTful:** endpoints para el consumo y la gestión programática de usuarios.
- **Dashboard de monitoreo:** visualización operativa del estado y la actividad de la API.
- **Auditoría mediante logs:** registro de peticiones para facilitar el seguimiento y la trazabilidad.
- **Diseño adaptativo:** experiencia corporativa optimizada para dispositivos de escritorio y móviles.

## Requisitos Previos

- [Node.js](https://nodejs.org/) 18 o superior, con `npm` incluido.
- Git para clonar el repositorio.

## Instalación y Puesta en Marcha

1. **Clonar el repositorio oficial:**

   ```bash
   git clone rondons-26/abp-m6-proyecto
   cd abp-m6
   ```

2. **Instalar las dependencias:**

   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**

   Si el entorno de despliegue requiere valores personalizados, cree un archivo `.env` en la raíz del proyecto y añada las variables definidas para ese entorno. La configuración predeterminada permite iniciar la aplicación sin variables obligatorias.

4. **Ejecutar el servidor:**

   ```bash
   npm start
   ```

   La aplicación estará disponible en [http://localhost:3001](http://localhost:3001).

   Para desarrollo con reinicio automático:

   ```bash
   npm run dev
   ```

   También puede seleccionar un puerto entre `3000` y `3010`:

   ```bash
   node server.js --port 3001
   ```

## Enlaces y Repositorio

[![Repositorio oficial en GitHub](https://img.shields.io/badge/GitHub-Repositorio%20oficial-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rondons-26/abp-m6-proyecto.git)
[![Aplicación desplegada en Render](https://img.shields.io/badge/Render-Aplicaci%C3%B3n%20desplegada-46e3b7?style=for-the-badge&logo=render&logoColor=white)]([<URL_DE_RENDER>](https://coreapp-enterprise.onrender.com/))

- **Repositorio oficial:** [GitHub - CoreApp Enterprise](https://github.com/rondons-26/abp-m6-proyecto.git)
- **Aplicación desplegada:** [Render - CoreApp Enterprise](https://coreapp-enterprise.onrender.com/)

---

_CoreApp Enterprise · Módulo 6 · 2026_