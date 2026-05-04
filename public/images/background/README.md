# SVGs de fondo para secciones azules

Pegá acá los archivos SVG de las decoraciones de fondo que exportaste del Figma.

## Opción A — UN solo SVG compartido (recomendada si todos los fondos azules son iguales)

Nombre del archivo: **`circles.svg`**

Se va a usar en todas las secciones azules:
- Hero
- Squad ("¡Entrá a la cancha!")
- Evolution ("¡Evolución del Player!")
- SignupForm ("¿Querés ser un Player?")
- SiteFooter

## Opción B — Un SVG por sección (si cada sección tiene una composición distinta)

Nombres esperados:
- `circles-hero.svg`
- `circles-squad.svg`
- `circles-evolution.svg`
- `circles-signup.svg`
- `circles-footer.svg`

El sistema prueba primero el específico (ej. `circles-hero.svg`) y si no existe, usa el genérico `circles.svg`. Si tampoco hay genérico, deja los círculos generados por código (el `.bg-orb` actual).

---

## Cómo se aplica

El SVG se renderiza como `background-image` del fondo de la sección, con:
- `background-repeat: no-repeat`
- `background-size: cover` (o `contain`, según prefieras)
- `background-position: center`

Si querés ajustar tamaño/posición específica, decime qué sección y los valores y se los configuro.

## Formato esperado

- **SVG con viewBox** (no width/height fijos), así escala bien.
- **Sin fondo sólido propio** — el SVG debería tener solo los círculos/decoraciones, transparente alrededor. El azul del fondo lo pone la sección.
- Idealmente 1440 × ~600 / 800 px de viewBox para que las proporciones queden parejas con el resto del diseño.
