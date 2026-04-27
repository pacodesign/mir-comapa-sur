# Design System — Project Dashboard UI

## 🎨 Paleta de Colores

| Token              | Valor aproximado | Uso                                      |
|--------------------|------------------|------------------------------------------|
| `--color-primary`  | `#7C3AED` / `#8B5CF6` | Fondo exterior, acento principal    |
| `--color-accent`   | `#14B8A6` / `#0DBFAD` | CTA principal ("Start a new project") |
| `--color-danger`   | `#EF4444`        | Indicador "Out of schedule"              |
| `--color-warning`  | `#F59E0B`        | Estrellas favoritas                      |
| `--color-link`     | `#F97316`        | Links inline (ej. nps@gmail.com)         |
| `--color-bg`       | `#FFFFFF`        | Fondo del panel principal                |
| `--color-surface`  | `#F3F4F6`        | Fondo de tarjetas y secciones            |
| `--color-border`   | `#E5E7EB`        | Bordes sutiles de cards                  |
| `--color-text-primary`   | `#111827`  | Títulos y datos destacados               |
| `--color-text-secondary` | `#6B7280`  | Subtítulos, metadatos, fechas            |
| `--color-avatar-bg`      | `#F87171`  | Fondo del avatar de perfil (coral)       |

---

## 🔤 Tipografía

| Rol              | Peso       | Tamaño aprox. | Estilo                        |
|------------------|------------|----------------|-------------------------------|
| Heading principal (`Projects`) | 700 Bold | 22–24px | Negro puro, tracking normal |
| Heading secundario (`Templates`) | 400 Regular | 22–24px | Gris medio, mismo tamaño |
| Card title       | 600 SemiBold | 15–16px | Negro                        |
| Body / subtexto  | 400 Regular  | 12–13px | Gris secundario              |
| Stats grandes    | 700 Bold     | 28–32px | Negro, con barra izquierda   |
| Labels de filtros| 400 Regular  | 11–12px | Gris, uppercase opcional     |
| CTA Button       | 600 SemiBold | 13–14px | Blanco sobre fondo teal      |

> **Familia sugerida:** Sans-serif geométrica limpia — similar a `DM Sans`, `Nunito Sans` o `Plus Jakarta Sans`.

---

## 📐 Espaciado y Layout

- **Grid principal:** sidebar fijo izquierdo (~64px) + panel central fluido + panel derecho fijo (~220px)
- **Padding de contenedor:** `24px` horizontal, `20px` vertical
- **Gap entre tarjetas:** `16px`
- **Padding interno de cards:** `20px`
- **Border radius de cards:** `16px`
- **Border radius de botones:** `999px` (fully rounded / pill shape)
- **Border radius de avatares:** `50%` (circular)

---

## 🧩 Componentes

### Card de Proyecto
```
bg: --color-surface (#F3F4F6)
border-radius: 16px
padding: 20px
shadow: ninguna o muy sutil (box-shadow: 0 1px 3px rgba(0,0,0,0.06))
```
- Título en semibold
- Subtexto en gris
- Fila inferior: avatares apilados + timestamp + estrella + menú `···`

### Botón CTA Principal
```
background: --color-accent (#14B8A6)
color: white
border-radius: 999px
padding: 10px 20px
font-weight: 600
font-size: 13px
```

### Sidebar de Navegación
```
width: ~64px
bg: white
iconos: outline, monocromáticos, ~20px
color activo: --color-primary
color inactivo: --color-text-secondary
```

### Panel de Stats (derecha)
```
bg: white
sección de saludo: avatar coral + nombre en bold
stats: label pequeño + número grande bold con barra izquierda de color
  - Total / Completed → barra negra
  - In progress → barra negra
  - Out of schedule → barra roja (--color-danger)
```

### Activity Feed
```
bg: white
items: avatar pequeño (32px) + texto con "label bold" + descripción regular
tag "Coffee Break": bg amarillo/ocre, border-radius: 999px, font-size: 11px
input de mensaje: bg gris claro, border-radius: 999px
```

### Filtros / Dropdowns
```
layout: inline, separados por label + valor + chevron ▾
font-size: 11–12px
color label: gris claro
color valor: negro medio
```

### Avatar Stack
```
tamaño: 28–32px
border: 2px solid white
margin-left: -8px (apilados)
border-radius: 50%
```

---

## 🌟 Efectos y Detalle Visual

- **Sombras:** mínimas o ausentes; interfaz muy plana (flat design)
- **Ilustración:** se usa una ilustración vectorial con fondo morado (#7C3AED) para llenar espacio visual en cards vacías
- **Íconos de archivos en card "Internal":** siluetas outline sobre fondo gris claro, border-radius ~8px
- **Depth visual:** logrado mediante fondos ligeramente distintos (blanco vs gris claro) entre panel y cards, no con sombras
- **Card flotante (tooltip/modal):** `box-shadow: 0 8px 24px rgba(0,0,0,0.12)`, `background: white`, `border-radius: 16px`

---

## ✅ Principios del sistema

1. **Minimalismo funcional:** sin decoración innecesaria, la jerarquía se logra con tipografía y espaciado.
2. **Color como señal:** el color fuerte (teal, rojo, amarillo) aparece solo en acciones y estados críticos.
3. **Consistencia de radio:** `16px` para contenedores, `999px` para elementos interactivos (botones, inputs, tags).
4. **Avatares como presencia social:** el uso de stacks de avatares humaniza el contenido sin agregar ruido.
5. **Datos como protagonistas:** los números grandes con barra lateral crean una jerarquía visual inmediata en el panel de stats.
