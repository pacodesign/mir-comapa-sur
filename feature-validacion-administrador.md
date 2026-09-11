Este módulo reemplaza por completo el módulo actual de validación del administrador. Fase de trabajo: diseño/prototipo. No hay conexión real a base de datos; se usa como referencia la base de indicadores ya implementada localmente. Todos los datos y estados de este feature son demo/mock (ver sección 9), pero la estructura de datos debe quedar lista para que el equipo de desarrollo conecte la BD real después.

## 1. Objetivo

Permitir al usuario **Administrador**:
1. Monitorear, a través de un dashboard, el avance de cumplimiento de indicadores por gerencia.
2. Entrar al detalle de cada gerencia y de cada indicador.
3. Validar (aprobar) o regresar a corrección el cumplimiento de los indicadores de una gerencia al cierre de cada periodo mensual.

---

## 2. Dashboard general (vista principal)

Diseño en **cards/contenedores por gerencia** (no tabla). Cada card debe mostrar:

- Nombre de la gerencia.
- N.º de unidades administrativas / coordinaciones que agrupa.
- Total de indicadores asignados a la gerencia.
- **Indicadores que "vencen" este periodo** vs. total asignados (ej. "8/20 a validar este mes"). Este número depende de la frecuencia de reporte de cada indicador (mensual, trimestral, semestral, anual): solo cuentan los que tienen corte en el mes seleccionado.
- Indicadores ya aprobados por el usuario revisor.
- Estado de cumplimiento general de la gerencia (semaforizado — ver sección 6).
- Estado del flujo de reporte de la gerencia, uno de:
  - `En captura`
  - `Enviado a revisión`
  - `Listo para validar` (revisor ya envió a revisión → admin puede actuar)
  - `Validado` / `Periodo cerrado`
  - `Regresado a corrección` (parcial, solo indicadores observados)

### 2.1 Filtro por periodo
- Selector de periodo mensual. **Default: mes en curso.**
- Debe permitir navegar a periodos anteriores (histórico).
- Cambiar de periodo recalcula todos los datos de todas las cards.

---

## 3. Vista detalle de gerencia

### 3.1 Header / resumen de la gerencia
Contadores tipo KPI en la parte superior:
- Total de indicadores asignados
- Cumplidos
- Con alerta de incumplimiento
- Pendientes (no reportados / no revisados aún)
- En revisión

### 3.2 Listado de indicadores — Cards (no tabla)
Cada card de indicador debe mostrar:
- Nombre del indicador.
- Semáforo de cumplimiento (según rangos configurables — sección 6).
- Avance del periodo actual.
- Avance acumulado (cuando el tipo de indicador lo contemple — ej. acumulado anual).
- Frecuencia de reporte.
- Estado individual: `Pendiente` / `En revisión` / `Aprobado por revisor` / `Validado` / `Regresado a corrección`.

Al hacer clic en una card se abre el **detalle del indicador** (sección 5).

---

## 4. Flujo de validación mensual (aprobación por gerencia)

### 4.1 Habilitación
- El botón "Validar" de una gerencia **solo se habilita** cuando el usuario revisor ya envió el reporte completo de esa gerencia a revisión (estado `Listo para validar`).
- Antes de eso, el administrador puede **ver** el avance en todo momento, pero no validar.

### 4.2 Aprobar
- Es **una sola acción a nivel gerencia** (no indicador por indicador).
- Al aprobar:
  - El estado del periodo de la gerencia cambia a `Validado` / `Periodo cerrado`.
  - Se genera la disponibilidad del reporte de estado de cumplimiento de esa gerencia/periodo.
  - Se dispara **notificación in-app** al/los usuario(s) revisor y enlace que tengan asignación sobre esa gerencia/indicadores (según relación en BD), informando que el reporte fue validado.

### 4.3 Regresar a corrección (rechazo parcial)
- El administrador **no rechaza a nivel general**; deja **observaciones por indicador** (no un comentario general de la gerencia).
- Solo se reabren para edición **los indicadores que recibieron observación** — el resto de la gerencia permanece en su estado (ej. ya aprobados por revisor).
- Se notifica in-app al revisor y enlace responsables de cada indicador observado, incluyendo el comentario del administrador.
- Cuando el revisor corrige y reenvía esos indicadores puntuales, **el administrador revalida solo esos indicadores** (no se reabre la validación general de la gerencia).

### 4.4 Periodo validado / reapertura excepcional
- Un periodo `Validado` puede reabrirse de forma excepcional (acción explícita del administrador) para volver a abrir la captura del indicador.
- Toda reapertura debe quedar registrada en el historial/auditoría del indicador (ver 4.5).

### 4.5 Auditoría (aplica a todo lo anterior)
Cualquiera de estas acciones debe quedar en el **historial del indicador**, con mínimo:
- Acción (validar / regresar a corrección / forzar estado / reabrir periodo)
- Usuario que la ejecutó
- Fecha y hora
- Comentario/justificación (cuando aplique)
- El valor "forzado" manualmente debe distinguirse visualmente del valor originalmente reportado (ej. etiqueta o ícono "Ajustado por administrador").

---

## 5. Detalle de indicador (reutiliza layout de enlace/revisor)

- Debe **reutilizar el mismo layout/componente** que ya usan el usuario enlace y el usuario revisor para ver el detalle de un indicador (consistencia visual y de código).
- El administrador ve esta vista en **modo lectura sobre la captura**, con dos capacidades adicionales exclusivas de su rol:
  1. **Dejar observaciones/comentarios por indicador**, solicitando justificación al enlace/revisor.
  2. **Forzar el estado de cumplimiento del indicador** (override manual del semáforo/resultado), quedando registrado en auditoría (sección 4.5).

---

## 6. Semaforización de cumplimiento

- Cada indicador tiene rangos de cumplimiento propios según su tipo de medición, pero se traducen a un semáforo estándar de 3 colores para consistencia visual en todo el dashboard.
- **Default propuesto (configurable por indicador):**

| Semáforo | Rango de cumplimiento |
|---|---|
| 🟢 Verde | ≥ 95% |
| 🟡 Amarillo | 80% – 94.9% |
| 🔴 Rojo | < 80% |

- Este default debe poder sobreescribirse por indicador (campo de configuración), pensando en que a futuro el equipo de desarrollo lo conecte a una tabla de configuración real por indicador.

---

## 7. Reporte de periodo vs. acumulado

- Cada indicador (cuando su tipo lo contempla) debe mostrar **ambas** vistas:
  - Avance del **periodo actual** (mes seleccionado).
  - Avance **acumulado** (ej. año a la fecha, según corresponda al tipo/frecuencia del indicador).

---

## 8. Relación con estado del revisor

- El administrador puede **visualizar** el estado de avance de la gerencia en cualquier momento (en captura, en revisión, etc.).
- Solo puede **validar** cuando el estado de la gerencia sea `Listo para validar` (el revisor ya envió el reporte a revisión).

---

## 9. Consideraciones de datos — Fase de diseño/prototipo

- Este feature se construye **sin conexión real a base de datos**.
- Se usa como referencia la **base de indicadores ya implementada localmente** (misma fuente que usan las vistas de enlace/revisor) para mantener consistencia de nombres, estructura y frecuencias.
- Todos los estados (validado, regresado a corrección, forzado, notificaciones, historial) deben ser **datos demo/mock**, manejados en estado de la aplicación (ej. estado en memoria / mock store).
- Las acciones del usuario (validar, observar, forzar estado, reabrir) **sí deben reflejar el cambio visualmente** en tiempo real dentro de la sesión, para que el prototipo se sienta funcional.
- Al hacer **refresh de la página**, los datos deben **resetearse a su estado inicial demo**, de forma que el prototipo quede listo para volver a interactuar desde cero.
- La estructura de datos (modelos, relaciones gerencia–unidad administrativa–indicador–revisor–enlace, estados, historial) debe diseñarse ya pensando en el esquema real de BD, para que la conexión futura sea un reemplazo del mock store y no un rediseño.

---

## 10. Estados posibles (resumen para desarrollo)

**Estado de gerencia/periodo:**
`En captura` → `Enviado a revisión` → `Listo para validar` → `Validado / Periodo cerrado`
(con rama lateral: `Regresado a corrección` sobre indicadores puntuales, que al resolverse regresan a `Listo para validar` solo para esos indicadores)

**Estado de indicador:**
`Pendiente` → `En revisión` → `Aprobado por revisor` → `Validado` (con posibilidad de `Regresado a corrección` y de override manual `Ajustado por administrador`)

---

## 11. Fuera de alcance / pendiente para siguientes iteraciones
- Conexión real a base de datos (fase posterior).
- Definición final de si la reapertura excepcional de un periodo `Validado` requiere algún nivel de permiso adicional (ej. rol superior) — queda abierto para revisarse cuando se defina el modelo de permisos.
- Notificaciones por correo (por ahora solo in-app).
