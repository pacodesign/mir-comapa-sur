# Design System — COMAPA Sur MIR Platform

## Paleta de Colores

| Token                      | Valor       | Uso                                                    |
|----------------------------|-------------|--------------------------------------------------------|
| `--color-primary`          | `#8B1D3A`   | Color institucional COMAPA — sidebar activo, acento    |
| `--color-primary-dark`     | `#6B1530`   | Hover sobre elementos primarios                        |
| `--color-accent`           | `#14B8A6`   | CTA principal, botones de acción primaria              |
| `--color-danger`           | `#EF4444`   | Estados de error, indicadores vencidos                 |
| `--color-warning`          | `#F59E0B`   | Indicadores próximos a vencer, observaciones           |
| `--color-success`          | `#22C55E`   | Indicadores aprobados, acciones confirmadas            |
| `--color-bg`               | `#FFFFFF`   | Fondo del contenido principal                          |
| `--color-surface`          | `#F3F4F6`   | Fondo de tarjetas y secciones internas                 |
| `--color-border`           | `#E5E7EB`   | Bordes sutiles de cards y separadores                  |
| `--color-text-primary`     | `#111827`   | Títulos y datos destacados                             |
| `--color-text-secondary`   | `#6B7280`   | Subtítulos, metadatos, fechas                          |

---

## Colores de estado (badges)

| Estado              | Background | Color texto | Dot            |
|---------------------|------------|-------------|----------------|
| `borrador`          | `#F3F4F6`  | `#6B7280`   | `#9CA3AF`      |
| `pendiente_carga`   | `#FEF3C7`  | `#92400E`   | `#F59E0B`      |
| `pendiente_envio`   | `#FEF3C7`  | `#92400E`   | `#F59E0B`      |
| `enviado_revision`  | `#EFF6FF`  | `#1D4ED8`   | `#3B82F6`      |
| `observado`         | `#FFF7ED`  | `#C2410C`   | `#F97316`      |
| `corregido`         | `#F5F3FF`  | `#6D28D9`   | `#8B5CF6`      |
| `listo_validar`     | `#ECFDF5`  | `#059669`   | `#10B981`      |
| `cerrado`           | `#F0FDF4`  | `#15803D`   | `#16A34A`      |
| `vencido`           | `#FEF2F2`  | `#DC2626`   | `#EF4444`      |

---

## Tipografía

**Familia:** Plus Jakarta Sans (Google Fonts)

| Rol                      | Peso | Tamaño   | Estilo                         |
|--------------------------|------|----------|--------------------------------|
| Heading principal        | 700  | 22–24px  | Color texto primario           |
| Heading de sección       | 600  | 16–18px  | Color texto primario           |
| Card title               | 600  | 14–15px  | Color texto primario           |
| Body / descripción       | 400  | 13–14px  | Color texto primario           |
| Metadata / subtexto      | 400  | 11–12px  | Color texto secundario         |
| Badge / chip label       | 600  | 11px     | Según color de estado          |
| Botón                    | 600  | 13px     | Blanco sobre fondo de acción   |

---

## Espaciado y Layout

- **Sidebar:** `148px` ancho fijo, `position: fixed`, altura `100vh`
- **Contenido principal:** `margin-left: 148px` (compensa el sidebar fijo)
- **Padding de página:** `24px` horizontal, `20px` vertical
- **Gap entre tarjetas:** `16px`
- **Padding interno de cards:** `20px`
- **Border radius — cards y contenedores:** `16px` (`--radius-card`)
- **Border radius — botones y chips:** `999px` (`--radius-btn`)
- **Border radius — avatares:** `50%`

---

## Componentes

### Sidebar de Navegación
```
width: 148px
position: fixed
background: white
border-right: 1px solid --color-border
padding: 16px 0

.sidebar-nav
  display: flex / flex-direction: column / gap: 2px
  padding: 0 8px

.nav-item
  height: auto / padding: 7px 10px
  flex-direction: row / gap: 8px / justify-content: flex-start
  border-radius: 10px

  Estado activo: background --color-primary, color white
  Estado inactivo: color --color-text-secondary

.nav-item svg: width/height 18px
.nav-label: font-size 11px / font-weight 600 / white-space: nowrap
```

### Card de Indicador
```
background: --color-surface
border-radius: --radius-card (16px)
padding: 20px
shadow: 0 1px 3px rgba(0,0,0,0.06)
```

### Badge de Estado
```
display: inline-flex / align-items: center / gap: 5px
padding: 3px 8px / border-radius: 999px
font-size: 11px / font-weight: 600

::before: dot circular 6px, background según estado
```

### Botón Primario
```
background: --color-primary (#8B1D3A)
color: white / border-radius: 999px
padding: 8px 16px / font-weight: 600 / font-size: 13px
```

### Botón CTA / Acción positiva
```
background: --color-accent (#14B8A6)
color: white / border-radius: 999px
padding: 8px 16px / font-weight: 600
```

### Avatar de usuario
```
width/height: 32px / border-radius: 50%
font-size: 12px / font-weight: 700 / color: white
Admin (LS): background #059669
Revisor (CM): background #8B1D3A
Enlace (AT): background #1D4ED8
```

### KPI Card (dashboard)
```
background: white / border: 1px solid --color-border
border-radius: 16px / padding: 16px 20px
Número grande: font-size 28–32px / font-weight 700
Label: font-size 12px / color --color-text-secondary
```

---

## Principios del sistema

1. **Color institucional primero:** `#8B1D3A` (burdeos COMAPA) es el color de referencia — sidebar, acciones primarias, acento de marca.
2. **Color como señal de estado:** cada estado del flujo tiene un color semántico consistente en badges, paneles y notificaciones.
3. **Consistencia de radio:** `16px` para contenedores, `999px` para elementos interactivos (botones, badges, chips).
4. **Sidebar horizontal-row:** íconos de 18px a la izquierda, etiqueta a la derecha. Ancho fijo de 148px.
5. **Minimalismo funcional:** sin decoración innecesaria — la jerarquía se logra con tipografía y espaciado, no con sombras.
6. **Datos como protagonistas:** KPIs numéricos grandes con contexto de texto pequeño bajo ellos.
