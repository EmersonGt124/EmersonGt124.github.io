/**
 * ============================================================================
 * ARCHIVO CENTRAL DE DATOS DEL PORTAFOLIO - NOVATECH SOFTWARE (EmersonGt124)
 * ============================================================================
 * Para agregar un nuevo proyecto, app Android, juego o herramienta:
 * 1. Copia un bloque dentro de la lista PROJECTS.
 * 2. Si es una app para Google Play, agrega también su Política en PRIVACY_POLICIES.
 * 3. Haz commit y push en GitHub Desktop.
 */

const SITE_CONFIG = {
  brandBadge: "⚡ NOVATECH",
  brandTitle: "Software",
  developerName: "EmersonGt124",
  githubUrl: "https://github.com/EmersonGt124",
  heroChip: "🚀 Desarrollador Móvil & Soluciones Digitales",
  heroTitle: "Creando utilidades móviles y experiencias de alta calidad",
  heroDescription:
    "Desarrollo independiente de aplicaciones Android y software de escritorio, enfocado en rendimiento, diseño moderno y herramientas que solucionan necesidades del día a día."
};

// Categorías permitidas: "mobile" | "desktop" | "web" | "dev"
// Colores de badge permitidos: "green" | "cyan" | "purple"
const PROJECTS = [
  {
    id: "media-downloader-pro-android",
    title: "Media Downloader Pro (Móvil)",
    category: "mobile",
    badge: "Android • v1.0",
    badgeColor: "green",
    description:
      "Suite multimedia universal para Android. Permite guardar contenido en alta definición (1080p / 4K) y extraer audio original en MP3 a 320 kbps de TikTok (sin marca de agua), Instagram Reels, Twitter/X, SoundCloud y más de 1000 sitios web.",
    tags: ["Flutter", "Android", "AdMob", "Multi-thread", "SQLite"],
    actions: [
      {
        label: "Política de Privacidad",
        url: "#privacidad",
        style: "secondary"
      }
    ]
  },
  {
    id: "media-downloader-pro-pc",
    title: "Media Downloader Pro (PC)",
    category: "desktop",
    badge: "PC Desktop • Open Source",
    badgeColor: "cyan",
    description:
      "La suite de escritorio definitiva para YouTube, TikTok, Instagram, Twitter/X, SoundCloud y +1000 sitios. Con recorte de fragmentos, descargas paralelas, buscador integrado y conversión real a MP3 a 320 kbps.",
    tags: ["Python", "yt-dlp", "Windows / Linux", "FFmpeg"],
    actions: [
      {
        label: "Ir a Versión Desktop",
        url: "/Media_Video_Downloader_V1.0/",
        style: "primary"
      },
      {
        label: "Ver Código en GitHub",
        url: "https://github.com/EmersonGt124/Media_Video_Downloader_V1.0",
        style: "secondary",
        external: true
      }
    ]
  },
  {
    id: "game-and-tools-studio",
    title: "Game & Tools Studio",
    category: "dev",
    badge: "En Desarrollo",
    badgeColor: "purple",
    isDev: true,
    description:
      "Colección de videojuegos ligeros y utilidades de productividad actualmente en fase de prototipado y pruebas para dispositivos móviles.",
    tags: ["Mobile Games", "Unity / C#", "Flutter", "Productividad"],
    statusText: "Próximamente en Google Play",
    actions: []
  }
];

// Políticas de privacidad (Una por cada app publicada en Google Play)
const PRIVACY_POLICIES = [
  {
    anchorId: "privacidad",
    appName: "Media Downloader Pro",
    lastUpdated: "Noviembre 2026",
    intro:
      "Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información en la aplicación <strong>Media Downloader Pro</strong>, desarrollada por <strong>NovaTech Software / EmersonGt124</strong>. Nos comprometemos a garantizar la total confidencialidad y privacidad de nuestros usuarios.",
    dataCollection:
      "Media Downloader Pro <strong>NO</strong> recopila, almacena ni comparte ningún tipo de información personal identificable (como nombres, correos electrónicos, números de teléfono o contraseñas). La aplicación funciona localmente en el dispositivo del usuario.",
    permissions: [
      {
        name: "Almacenamiento y Archivos Multimedia:",
        detail:
          "Se utiliza estrictamente para guardar los videos y canciones descargados en la carpeta local de Descargas de tu dispositivo. No accedemos a tus fotos personales ni archivos privados."
      },
      {
        name: "Conexión a Internet:",
        detail:
          "Requerida para comunicarse con los servidores de descarga y consultar los enlaces solicitados por el usuario."
      }
    ],
    thirdParty:
      'La aplicación utiliza <strong>Google AdMob</strong> para mostrar anuncios publicitarios y ofrecer recompensas (Modo Turbo). Google AdMob puede recopilar identificadores anónimos de publicidad del dispositivo para personalizar anuncios según las directrices de privacidad de Google. Puedes consultar la política de Google en <a href="https://policies.google.com/privacy" target="_blank">Google Privacy Policy</a>.'
  }
];
