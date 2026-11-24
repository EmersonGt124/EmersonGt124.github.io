# Portafolio Web Oficial — NovaTech Software (`EmersonGt124`)

Proyecto web independiente alojado en: **https://emersongt124.github.io/**

## 📁 Estructura del Proyecto

```text
emersongt124.github.io/
├── index.html          # Estructura base + script oficial de Google AdSense
├── app-ads.txt         # Verificación de inventario para Google AdMob / Play Store
├── css/
│   └── styles.css      # Tema oscuro moderno, colores, tarjetas y diseño responsivo
├── data/
│   └── projects.js     # ⭐ ARCHIVO DE DATOS: aquí agregas tus nuevos proyectos y políticas
└── js/
    └── app.js          # Motor que dibuja tarjetas, filtros por categoría y políticas
```

## 🚀 Cómo agregar un nuevo proyecto en 30 segundos

No necesitas tocar `index.html` ni `styles.css`. Solo abre **`data/projects.js`** y agrega un objeto nuevo dentro de la lista `PROJECTS`:

```javascript
{
  id: "mi-nuevo-juego",
  title: "Mi Nuevo Juego",
  category: "mobile", // "mobile" | "desktop" | "web" | "dev"
  badge: "Android • v1.0",
  badgeColor: "green", // "green" | "cyan" | "purple"
  description: "Descripción corta del juego o aplicación.",
  tags: ["Unity", "C#", "AdMob"],
  actions: [
    { label: "Ver en Play Store", url: "https://...", style: "primary", external: true }
  ]
}
```

Luego haz **Commit** y **Push** en **GitHub Desktop**, y en 30 segundos aparecerá publicado en **`https://emersongt124.github.io/`**.
