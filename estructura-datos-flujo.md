# Estructura de datos y flujo del sistema — COMAPA Sur MIR

## 1. Estructura base de datos

El sistema parte de una estructura tipo `.js` / mock data con información MIR real. Esta información alimenta vistas, filtros, detalles y dashboards. El archivo principal es `mir-actividades-data.js`.

---

### 1.1 Entidad base: Indicador MIR

Todos los 132 indicadores de la MIR —sin distinción de nivel (Fin, Propósito, Componente, Actividad)— son objetos del sistema con flujo de reporte, revisión y validación. Cada indicador contiene:

**Campos de definición MIR** (provenientes del Excel oficial):

| Campo                | Descripción                                                       |
|----------------------|-------------------------------------------------------------------|
| `id`                 | Identificador único generado (ej. `PLA-FIN-01`, `COM-ACT-3.1`)   |
| `no`                 | Número correlativo dentro de la gerencia                          |
| `gerencia`           | Gerencia responsable del indicador                                |
| `unidadResponsable`  | Unidad o área dentro de la gerencia                               |
| `iso`                | Código ISO asociado (si aplica)                                   |
| `nivel`              | Nivel MIR: `Fin`, `Propósito`, `Componente`, `Actividad`         |
| `numeroIndicador`    | Número jerárquico del indicador (ej. `1`, `1.1`, `2.3`)          |
| `resumenNarrativo`   | Objetivo que el indicador busca medir                             |
| `nombreIndicador`    | Nombre oficial del indicador                                      |
| `tipoIndicador`      | `Estratégico` o `Gestión`                                         |
| `unidadMedida`       | `Porcentaje`, `Número`, `Variación`                               |
| `frecuenciaMedicion` | `Mensual`, `Trimestral`, `Semestral`, `Anual`                     |
| `numerador`          | Componente numerador de la fórmula (X)                            |
| `denominador`        | Componente denominador de la fórmula (Y)                          |
| `medioVerificacion`  | Documento o fuente que acredita el cumplimiento                   |
| `supuestos`          | Condiciones externas que el indicador asume como dadas            |
| `lineaBase`          | Valor de referencia inicial                                       |
| `metaAnual`          | Meta comprometida para el año en curso                            |
| `observacionesMIR`   | Notas editoriales del Excel (no confundir con observaciones del flujo) |

---

### 1.2 Campos operativos del flujo de reporte

Cada indicador se extiende con campos de workflow para gestionar el ciclo de vida del reporte:

| Campo                      | Tipo / descripción                                                       |
|----------------------------|--------------------------------------------------------------------------|
| `estado`                   | Estado actual en el flujo (ver sección 1.3)                              |
| `periodo`                  | Periodo de reporte (ej. `T1-2026`, `S1-2026`, `junio-2026`)             |
| `fechaLimite`              | Fecha máxima para carga de evidencia en el periodo activo                |
| `responsableEnlace`        | Nombre del usuario Enlace asignado                                       |
| `responsableRevisor`       | Nombre del usuario Revisor asignado                                      |
| `archivosEvidencia`        | Array de archivos cargados `{ id, nombre, tipo, url, tamaño, fechaCarga, cargadoPor }` |
| `observaciones`            | Array de observaciones del Revisor `{ id, texto, autor, fecha, atendida }` |
| `historial`                | Array de eventos del ciclo de vida `{ fecha, hora, usuario, rol, accion, estadoAnterior, estadoNuevo }` |
| `fechaEnvio`               | Fecha en que el Enlace envió a revisión                                  |
| `fechaRevision`            | Fecha en que el Revisor procesó la evidencia                             |
| `fechaAprobacion`          | Fecha de aprobación técnica por el Revisor                               |
| `fechaValidacionAdmin`     | Fecha de validación final por el Administrador                           |
| `justificacionSinEvidencia`| Texto libre cuando no existe medio de verificación disponible            |
| `ultimaActualizacion`      | Fecha de la última acción registrada en el historial                     |

---

### 1.3 Estados del sistema

| Estado               | Descripción                                                              |
|----------------------|--------------------------------------------------------------------------|
| `borrador`           | Reporte en progreso: al menos el avance del período (paso 1) registrado; máximo con medio de verificación cargado (paso 2). Mostrado visualmente para `pendiente_carga` también. |
| `pendiente_carga`    | Estado interno: período abierto sin ningún paso iniciado. Se presenta como `borrador` en la UI. |
| `pendiente_envio`    | Los tres pasos del reporte completados; pendiente de envío a revisión    |
| `enviado_revision`   | Enlace envió; en espera de que el Revisor lo tome                        |
| `observado`          | Revisor emitió observación; requiere corrección del Enlace               |
| `corregido`          | Enlace reenvió corrección; en espera de segunda revisión                 |
| `aprobado_revisor`   | Revisor aprobó técnicamente; en espera de validación del Administrador. Badge: "Aprobado" |
| `cerrado`            | Administrador cerró el indicador — reporte del período finalizado        |
| `vencido`            | Fecha límite superada sin evidencia aprobada                             |

> **Estados eliminados:** `validado_admin` y `publicado` fueron eliminados del flujo activo. Eran redundantes con `cerrado`. Cualquier dato existente con esos estados se muestra visualmente como "Cerrado". El único flujo real de cierre es `aprobado_revisor → cerrado` (acción del Administrador).

---

## 2. Flujo general del sistema

### 2.1 Flujo base

```
1.  Usuario inicia sesión
2.  Sistema identifica rol → redirige al dashboard correspondiente
3.  Enlace consulta indicadores asignados
4.  Enlace carga evidencia o justificación de no evidencia
5.  Enlace envía a revisión
6.  Revisor recibe el indicador en su bandeja
7.  Revisor evalúa técnicamente
8.  → Si aprueba: estado pasa a listo_validar
    → Si observa: estado pasa a observado, notifica al Enlace
9.  Enlace corrige y reenvía (si aplica)
10. Revisor aprueba la corrección → listo_validar
11. Administrador monitorea completitud global por gerencia
12. Administrador valida el indicador → cerrado
13. Sistema conserva historial completo de cada acción
```

### 2.2 Diagrama de estados

```
pendiente_carga (UI: borrador)
  └─► borrador (paso 1 completado)
        └─► pendiente_envio (los 3 pasos completados)
              └─► enviado_revision
                    ├─► aprobado_revisor ──► cerrado (acción del Admin)
                    └─► observado
                          └─► corregido
                                └─► enviado_revision (segunda vuelta)

* aprobado_revisor conserva su estado hasta que el Admin cierre el período
  o hasta que se abra la ventana del siguiente ciclo de reporte
* Cualquier estado antes de aprobado_revisor puede derivar en: vencido
```

### 2.3 Responsabilidades por estado

| Estado              | Quién actúa   | Acción esperada                                |
|---------------------|---------------|------------------------------------------------|
| `pendiente_carga`   | Enlace        | Cargar archivos o justificación                |
| `pendiente_envio`   | Enlace        | Revisar y enviar a revisión                    |
| `enviado_revision`  | Revisor       | Tomar el indicador y comenzar revisión         |
| `observado`         | Enlace        | Leer observación y subir corrección            |
| `corregido`         | Revisor       | Revisar la corrección                          |
| `aprobado_revisor`  | Administrador | Validar el indicador para cerrarlo             |
| `vencido`           | Administrador | Registrar y notificar a la gerencia            |

---

## 3. Volumen de datos reales

La MIR COMAPA Sur contiene **132 indicadores** distribuidos en 4 gerencias:

| Gerencia                        | Fin | Propósito | Componente | Actividad | Total |
|---------------------------------|-----|-----------|------------|-----------|-------|
| Gerencia de Planeación Estratégica | 1 | 1       | 4          | 9         | 15    |
| Gerencia Comercial              | 1   | 1         | 8          | 19        | 29    |
| Gerencia Administrativa         | 1   | 1         | 12         | 32        | 46    |
| Gerencia Técnica                | 1   | 1         | 6          | 33        | 41    |
| **Total**                       | **4** | **4** | **30**     | **94**    | **132** |

Todos los indicadores, sin distinción de nivel, participan en el flujo de reporte.

---

## 4. Notas de implementación

- Los datos de definición MIR provienen del archivo oficial `MIR FINAL COMAPA SUR.xlsx`.
- El archivo `mir-actividades-data.js` es la única fuente de verdad del prototipo — todas las vistas consumen este archivo.
- El campo `historial` sigue la estructura: `{ fecha, hora, usuario, rol, accion, estadoAnterior, estadoNuevo }`.
- El campo `observaciones` sigue la estructura: `{ id, texto, autor, rolAutor, fecha, hora, atendida, categoria }`.
  - `categoria` proviene del catálogo de tipos de observación que el Revisor selecciona al emitir una observación. Valores del catálogo:
    - `Archivo incorrecto` — el archivo adjunto no corresponde al medio de verificación
    - `Evidencia incompleta` — faltan documentos o datos requeridos
    - `Medio de verificación no corresponde` — el archivo no es el documento oficial indicado en la MIR
    - `Formato inválido` — el archivo tiene un formato no aceptado (ej. foto de pantalla en lugar de PDF oficial)
    - `Información ilegible` — el documento está borroso, incompleto o no puede leerse
    - `Justificación insuficiente` — la justificación de ausencia de evidencia no es válida o es muy escueta
    - `Otro` — observación de tipo libre sin categoría específica
  - El valor de `categoria` se usa como título de la observación en la UI del Enlace (vista `detalle-actividad.html`). Si no hay categoría, se muestra "Observación general".
  - La observación aparece en la columna izquierda inmediatamente después del header-card cuando el estado es `observado`, con badge de estado ("Pendiente de corrección" / "Atendida").
- El campo `archivosEvidencia` sigue la estructura: `{ id, nombre, tipo, url, tamanio, estado, fechaCarga, cargadoPor }`.
- El estado `vencido` puede asignarse automáticamente comparando `fechaLimite` con la fecha mock (`2026-06-09`) al cargar cada vista.
- La trazabilidad completa (historial) es un requisito transversal a los tres roles.
- Los IDs siguen el esquema: `[PREFIJO-GERENCIA]-[NIVEL]-[NUMERO]` (ej. `PLA-ACT-1.1`, `COM-COMP-3`, `ADM-FIN-01`).

---

## 5. Flujo de corrección (estado `observado`)

Cuando un indicador tiene estado `observado`, el Enlace debe corregir su reporte antes de re-enviarlo. El flujo en `detalle-actividad.html` es:

### 5.1 Reglas de habilitación del botón "Enviar corrección"

El botón **"Enviar corrección"** se habilita cuando se cumple **al menos una** de estas dos condiciones:

1. **Paso modificado y guardado**: el Enlace modificó algún dato en cualquiera de los tres pasos y presionó el botón de guardar de ese paso. Internamente, `correctionMade` se establece en `true`.
2. **Nota escrita**: el Enlace escribió texto en el campo opcional "Nota de corrección". Internamente, `correctionNote.trim()` tiene contenido.

Si no se cumple ninguna de las dos condiciones, el botón permanece deshabilitado aunque los tres pasos estén completos.

### 5.2 Nota de corrección (opcional)

En el contenedor de envío (`send-action-card`), cuando el estado es `observado`, aparece un campo de texto opcional **"Nota de corrección"** que el Enlace puede usar para describir brevemente qué cambios realizó. Este campo:
- No es obligatorio — el botón "Enviar corrección" se habilita independientemente de si está lleno.
- Se registra en el historial del indicador si contiene texto, adjunto a la acción `'Corrección enviada al Revisor — [texto]'`.
- Se limpia automáticamente al enviar la corrección.
- El botón "Guardar borrador" no aparece en estado `observado` (reemplazado por el flujo de corrección).

### 5.3 Transición de estado

Al confirmar el envío desde estado `observado`:
- El estado del indicador cambia de `observado` → `corregido`.
- Los archivos de evidencia con estado `borrador` o `pendiente_envio` pasan a `enviado`.
- Se registra un evento en el historial con `estadoAnterior: 'observado'`, `estadoNuevo: 'corregido'` y la nota de corrección si existe.
- Se almacena un objeto `correctionDetail` en el indicador con la siguiente estructura:

```json
{
  "nota":  "Texto libre (puede estar vacío)",
  "paso1": true,
  "paso2": true,
  "paso3": false,
  "fecha": "2026-06-12",
  "hora":  "09:15"
}
```

Los campos `paso1`, `paso2`, `paso3` son `true` si el Enlace **guardó** ese paso durante la corrección (variables internas `step1Modified`, `step2Modified`, `step3Modified`); `false` si no lo tocó.

- El Revisor recibe el reporte corregido para una segunda revisión.

---

## 6. Vista del estado `corregido`

Cuando el indicador tiene estado `corregido`, la vista del Enlace en `detalle-actividad.html` sigue las siguientes reglas:

### 6.1 Flujo de trabajo (step tracker)

El tracker del panel izquierdo muestra:
- ✓ Carga de evidencia — completado
- ✓ Enviada a revisión — completado
- ● **En revisión** — activo (igual que `enviado_revision`; el indicador volvió al circuito de revisión)
- ○ Aprobada — pendiente

### 6.2 Card de observación del Revisor

El card de observaciones (que en `observado` sube al top de la columna izquierda) **permanece visible** en estado `corregido`. Los cambios respecto al estado `observado` son:

| Elemento | Estado `observado` | Estado `corregido` |
|---|---|---|
| Título del card | "Observaciones" | "Corrección enviada" |
| Badge por observación | `status-pill warning` "Pendiente de corrección" | `status-pill info` "Corrección en revisión" |
| Botón adicional | — | "Ver detalle" (si existe `correctionDetail`) |

El botón **"Ver detalle"** abre un modal con el detalle de la corrección enviada (ver 6.3).

La sección histórica "Observaciones" en el panel lateral se oculta cuando `corregido` (igual que cuando `observado`), porque el card principal ya tiene la información.

### 6.3 Modal "Detalle de corrección"

El modal (`correccionDetalleModal`) muestra al Enlace:

1. **Fecha y hora** del envío de la corrección (de `correctionDetail.fecha` y `correctionDetail.hora`).
2. **Pasos corregidos**: lista de los 3 pasos con indicador "Corregido" / "Sin modificaciones" según los campos `paso1`, `paso2`, `paso3` de `correctionDetail`.
3. **Nota del enlace**: si `correctionDetail.nota` tiene contenido, se muestra en una caja de texto. Si está vacío, el bloque se oculta.

El modal se cierra con el botón "Cerrar" o haciendo clic fuera del card.

---

## 7. Layout de la vista del Revisor (`detalle-actividad.html?rol=revisor`)

El Revisor accede al detalle de un indicador desde `bandeja-revision.html` mediante el parámetro `?rol=revisor`. **El archivo es `detalle-actividad.html`** — el mismo que usa el Enlace — con contenido condicional controlado por el flag global `isRevisor`. El panel lateral fijo (`action-panel`) se oculta para el Revisor; todo el contenido migró al grid de dos columnas.

### 7.1 Estructura de columnas

```
<div class="detail-cols">   ← grid 2fr / 3fr
  <div class="detail-col"> ← columna izquierda (contexto)
  <div class="detail-col"> ← columna derecha (reporte + acción)
```

**Columna izquierda — contexto del indicador:**
1. `header-card` — ID, título, badge de estado, meta (Enlace, Período, Frecuencia, Recibida, Nivel), y bloque de fechas (`ap-fecha-wrap`: Fecha límite + Tiempo restante). Las fechas se muestran para ambos roles (Enlace y Revisor).
2. **Información MIR** — section-card colapsada por default
3. **Flujo de trabajo** — section-card colapsada (ver 7.2); el Revisor ve 4 pasos usando `revisorSteps`
4. **Responsables** — section-card colapsada; el Revisor ve Admin · Revisor · Enlace con `.asgn-av` avatares
5. **Historial completo** — section-card colapsada

**Columna derecha — reporte del Enlace y acciones:**
1. `correction-alert` — visible solo cuando `isRevisor && estado === 'corregido'`
2. **Reporte del Enlace** — accordion expandido (`renderReporteAccordion`)
3. `revisor-action-card` — panel de acción del Revisor, contenido según estado (ver 7.3); sustituye el `send-action-card` del Enlace

> Las secciones de observaciones activas/históricas del Enlace (`.obs-*`) se ocultan con `!isRevisor` para no duplicar contenido que el Revisor ya ve en el `revisor-action-card`.

### 7.2 Flujo de trabajo del Revisor

El section-card "Flujo de trabajo" muestra 4 pasos usando la variable `revisorSteps` (tipo `{label, done, current}`). Los puntos se renderizan con `.wf-dot.done` / `.wf-dot.active` / `.wf-dot.pending`:

| Paso | Etiqueta dinámica | `done` cuando | `current` cuando |
|------|-------------------|---------------|------------------|
| 1 | Enlace reportó avance | siempre | nunca |
| 2 | "En revisión técnica" / "Corrección recibida" / "Observación emitida" | `approved` | `canRev` o `isObs` |
| 3 | Aprobado por Revisor | `approved` | nunca |
| 4 | Validación del Admin | `isCerrado` | `approved && !isCerrado` |

La etiqueta del Paso 2 cambia según el estado actual:
- Estado `corregido` → "Corrección recibida"
- Estado `observado` (`isObs`) → "Observación emitida"
- Cualquier otro → "En revisión técnica"

Variables locales en `renderMain`: `canRev = isRevisor && ['enviado_revision','pendiente_revision','corregido'].includes(act.estado)` · `isCerrado = act.estado === 'cerrado'`

### 7.3 `revisor-action-card` — contenido por estado

El `div.revisor-action-card` es un card de ancho completo al fondo de la columna derecha. Su contenido interno (`actionCardHtml`) se pre-computa antes del `innerHTML` principal:

| Condición | Contenido del card |
|-----------|--------------------|
| `canRev` (`enviado_revision` / `corregido`) | `review-action-box`: botones **Aprobar reporte** (success) + **Emitir observación** (toggle `obsOpen`) + formulario inline si `obsOpen` |
| `isObs` (`observado`) | Lista de observaciones activas con botón Eliminar por cada una + botones **Aprobar de todas formas** + **Agregar obs** (toggle `obsOpen`) + formulario inline si `obsOpen` |
| `approved && !isCerrado` | `approved-panel` (check verde, fecha de aprobación, wf-steps 4 pasos) + `next-action` callout "Siguiente paso: Admin" |
| `isCerrado` | `closed-panel` (check verde oscuro, wf-steps 4 pasos todos done) |
| ninguno | Texto "Sin acciones disponibles para este estado." |

### 7.4 Interacciones del Revisor en estado `observado`

Cuando el indicador está `observado`, el Revisor puede desde el `revisor-action-card`:

- **Eliminar observación** (`eliminarObservacion(idx)`): eliminación por índice (`splice(idx, 1)`). Si quedan observaciones activas → sigue en `observado`. Si se eliminan todas → estado regresa a `enviado_revision` automáticamente.
- **Aprobar de todas formas** (`confirmarAprobacion()`): estado pasa a `aprobado_revisor` sin eliminar las observaciones existentes.
- **Agregar observación** (toggle `obsOpen = true` → `renderPage()`): muestra formulario inline con campo de texto y selector de categoría. El envío llama a `enviarObservacion()`.

### 7.5 Cambio desde layout anterior

El layout previo usaba `<aside class="action-panel" id="actionPanel">` de posición fija (`position:fixed;right:0;width:280px`) con la función `renderRevisorPanel`. Ambos fueron eliminados. `renderActionPanel` ahora es una función trivial que oculta el panel (`display:none`) para todos los usuarios. Todo el contenido del Revisor migró a la columna derecha del grid de `detail-cols`.
