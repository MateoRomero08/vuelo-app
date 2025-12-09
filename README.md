# Vuelo-App ✈️

## Descripción

**Vuelo-App** es un sistema web de reserva de vuelos que permite a los usuarios registrados:

- Consultar vuelos disponibles.  
- Reservar vuelos.  
- Ver y cancelar reservas propias.  
- Simular la compra de billetes aéreos.  

Este proyecto está pensado como una prueba técnica funcional, demostrando capacidad de desarrollar un backend en Node.js/Express, gestionar datos, autenticar usuarios y construir una interfaz usable en HTML/JS.

---

## Tecnologías utilizadas

| Tecnología / Plataforma        | Función en el proyecto                                                                 |
|-------------------------------|----------------------------------------------------------------------------------------|
| **Node.js**                   | Entorno de ejecución del backend, permite correr JavaScript en servidor.              |
| **Express.js**                | Framework backend que gestiona rutas, peticiones HTTP y estructura la API REST.       |
| **HTML5 + JavaScript**        | Construye una interfaz simple, dinámica y funcional para interacción del usuario.     |
| **JSON (archivos de datos)**  | Persistencia ligera de información (usuarios, vuelos, reservas) sin base de datos).  |
| **Render (u otra plataforma)**| Despliegue en la nube con auto-deploy desde GitHub.                                  |

---

## Estructura del proyecto

/ (raíz del proyecto)
│ app.js
│ package.json
│ vuelos.json
│ reservas.json
│ usuarios.json
│
├── public/ # Archivos estáticos: HTML, CSS, JS del frontend
├── routes/ # Rutas Express (autenticación, reservas, vuelos…)
└── ... # Otros archivos de configuración o datos

yaml
Copiar código

---

## Instalación y ejecución local

1. Clona el repositorio:

```bash
git clone https://github.com/MateoRomero08/vuelo-app.git
Entra al directorio:

bash
Copiar código
cd vuelo-app
Instala dependencias:

bash
Copiar código
npm install
Inicia la aplicación:

bash
Copiar código
node app.js
Abre tu navegador en la dirección indicada (por defecto http://localhost:3000 o la configurada).

🚀¿ Uso en producción (despliegue)
La aplicación está desplegada públicamente en (inserta aquí tu URL de Render o la plataforma).
Solo necesitas acceder con un navegador para probar su funcionamiento real.

🔐 Registro e inicio de sesión
Registro: ingresa correo y contraseña desde registro.html.

Login: usa el correo y contraseña desde index.html.

Usuarios de prueba: puedes agregar directamente en usuarios.json si prefieres.

⚠️ Nota: La persistencia vía archivos JSON funciona mientras el servidor esté activo. Si usas un servicio como Render, los datos pueden limpiarse al reiniciar el contenedor.

🔎 Endpoints principales de la API
Ruta	Método	Funcionalidad
/api/registrar	POST	Registrar un nuevo usuario
/api/login	POST	Iniciar sesión
/api/vuelos	GET	Obtener lista de vuelos disponibles
/api/reservas	POST	Crear nueva reserva
/api/reservas/:usuario	GET	Obtener reservas activas de un usuario
/api/reservas/cancelar	POST	Cancelar una reserva existente

✅ Estado del Proyecto
La aplicación cubre las funcionalidades básicas de autenticación, consulta de vuelos, reserva, visualización y cancelación.
Está pensada como un prototipo funcional: su persistencia es por archivos JSON, ideal para demostración o pruebas.

🔮 Futuras mejoras
Migrar a una base de datos real (PostgreSQL, MongoDB, etc.) para persistencia permanente.

Añadir cifrado de contraseñas (ej. bcrypt).

Implementar manejo de sesiones o tokens (JWT).

Validación y sanitización de entradas.

Interfaz más amigable / responsive.

Simulación más realista de compra de billetes (pasarela, confirmación de pago, envío de email, etc.).

📄 Licencia
Este proyecto está disponible bajo la licencia MIT — si quieres reutilizarlo, eres libre de hacerlo manteniendo la atribución.

🛠️ Contacto / Créditos
Desarrollado por Mateo Romero .
Si encuentras errores o quieres contribuir, abre un Issue o Pull Request.
