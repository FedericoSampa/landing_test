# Avalith Academy 2026 · Landing IA

Landing page para el programa de Inteligencia Artificial de Avalith Academy 2026.

## Stack

- **React 18** + **Vite 5**
- **CSS puro** con variables y `clamp()` para tipografía fluida
- **100% responsive** (mobile / tablet / desktop)
- Sin dependencias externas pesadas: solo `react` y `react-dom`

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist optimizado
npm run preview  # sirve el build de producción
```

## Estructura del proyecto

```
IA_landing/
├── index.html
├── package.json
├── vite.config.js
├── cleanup.ps1                    # script one-shot para limpiar artefactos
├── public/
│   ├── favicon.svg
│   └── images/                    # fotos / logos del sitio
│       ├── README.md              # qué imagen va en cada lugar
│       ├── hero/                  # foto del hero
│       ├── player/                # cards "¿Qué es ser un Player?"
│       ├── squad/                 # cards "¡Entrá a la cancha!" + ball
│       ├── method/                # cards "Just-in-time"
│       ├── leadership/            # cards "Camino del liderazgo"
│       ├── path/                  # cards "Developer Path" (6 ciclos)
│       ├── stacks/                # cards "Dominá los stacks"
│       ├── partners/              # logos de las empresas partner
│       └── avatar/                # avatar del asesor
├── email-templates/
│   └── postulacion-confirmacion.html  # plantilla email transaccional
└── src/
    ├── main.jsx                   # entry
    ├── App.jsx                    # composición + hash routing
    ├── styles/
    │   └── global.css             # design tokens + reset + utilidades
    └── components/
        ├── CardImage.jsx          # helper de imagen con fallback
        ├── Navbar.jsx/css         # mega-menú 2 columnas
        ├── Hero.jsx/css           # hero azul + foto students
        ├── AvaIA.jsx/css          # esfera 3D + chat AVA IA
        ├── WhatIsPlayer.jsx/css   # comparativa 2 cards
        ├── Squad.jsx/css          # ¡Entrá a la cancha! + pelota
        ├── Method.jsx/css         # método Just-in-time + banner
        ├── Evolution.jsx/css      # radar hexagonal 6D
        ├── DeveloperPath.jsx/css  # 6 ciclos
        ├── Leadership.jsx/css     # 3 etapas
        ├── Partners.jsx/css       # carrusel infinito
        ├── Stacks.jsx/css         # 5 mentores (3+2 centrado)
        ├── SignupForm.jsx/css     # form 4 pasos con ramificación
        ├── FAQ.jsx/css            # acordeón 10 preguntas
        ├── SiteFooter.jsx/css     # footer azul
        ├── PrivacyPage.jsx/css    # ruta #/privacidad
        └── TermsPage.jsx          # ruta #/terminos (reusa PrivacyPage.css)
```

## Rutas

- `/` → landing (todas las secciones en una sola página)
- `#/privacidad` → Política de privacidad
- `#/terminos` → Términos de uso

El ruteo es **hash-based** (no requiere servidor con SPA-fallback). Implementado en `App.jsx` con un `useEffect` que escucha `hashchange`.

## Imágenes

Todas las imágenes son **opcionales** y se cargan con fallback. Si una imagen no existe en la ruta esperada, el componente muestra un gradiente de placeholder en su lugar.

Para reemplazar imágenes, leé `public/images/README.md`. Los nombres de archivo son fijos; sólo hace falta pegar la imagen con el nombre correcto.

El componente `CardImage` prueba `.png`, `.jpg`, `.jpeg` y `.webp` automáticamente — usá el formato que tengas a mano.

## Form de inscripción

El form de "¿Querés ser un Player?" tiene 4 pasos con validaciones:

1. **Datos personales** — nombre, fecha (mayor de 16), email, teléfono
2. **Perfil talent** — Junior o Tech Professional
3. **Formación y background** — campos condicionales según paso 2
4. **Challenge** — pregunta abierta (mín. 20 caracteres)

**Estado actual:** valida y muestra confirmación visual, pero **no manda email todavía**. Para conectarlo, ver opciones en la conversación (Web3Forms, Formspree, backend propio).

La plantilla del email transaccional está en `email-templates/postulacion-confirmacion.html`.

## Limpieza periódica

Vite genera archivos temporales (`vite.config.js.timestamp-*`) y cada `npm run build` que apunta a una carpeta distinta deja `dist-*` por ahí. Para limpiar todo:

```powershell
.\cleanup.ps1
```

(O simplemente borrar manualmente cualquier `dist-*` que no sea `dist`, y los `vite.config.js.timestamp-*.mjs`.)

## Design tokens

Definidos en `src/styles/global.css`:

- **Paleta:** azul Avalith `#2D4DFF` + acento rojo `#FF3D5E`
- **Tipografía:** Inter (UI) + Space Grotesk (display, headings)
- **Tipos fluidos:** `clamp()` en todos los headings y body
- **Radios:** 8 / 14 / 20 / 28 / 999 px
- **Animaciones:** `cubic-bezier(0.4, 0, 0.2, 1)`, respeta `prefers-reduced-motion`

## Próximos pasos sugeridos

1. Reemplazar imágenes placeholder por las reales (ver `public/images/README.md`)
2. Conectar el form a Web3Forms / Formspree / backend propio
3. Subir logos reales en `public/images/partners/` (texto plano de fallback)
4. Reemplazar el SVG de la pelota por la foto oficial (`public/images/squad/ball.png`)
5. Agregar analytics (GA4, Plausible)
6. SEO: meta tags Open Graph, sitemap, robots.txt
