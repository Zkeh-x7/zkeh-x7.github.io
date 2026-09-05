# Portafolio digital de Johanna Romero

Sitio profesional desarrollado con Next.js, React, TypeScript y CSS, y preparado para publicarse como una exportación estática en GitHub Pages.

## Contenido

- Perfil profesional y trayectoria técnica.
- Proyectos del curso Full Stack JavaScript Trainee.
- Caso de estudio de CreativeFlow Backend.
- Enlaces de contacto y CV descargable.

## Desarrollo local

Requisitos: Node.js 24 y npm.

```bash
npm ci
npm run dev
```

Para generar y validar la versión estática:

```bash
npm test
```

El resultado se crea en la carpeta `out/`. Cada cambio enviado a la rama `main` activa el flujo de publicación de GitHub Pages.

## Seguridad

El repositorio no debe contener archivos `.env`, contraseñas, tokens ni credenciales. Las variables de entorno locales están excluidas mediante `.gitignore`.
