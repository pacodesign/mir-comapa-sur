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
| `borrador`           | Indicador registrado, sin acción del Enlace                              |
| `pendiente_carga`    | Asignado al Enlace, esperando carga de evidencia                         |
| `pendiente_envio`    | Evidencia cargada pero no enviada a revisión                             |
| `enviado_revision`   | Enlace envió; en espera de que el Revisor lo tome                        |
| `observado`          | Revisor emitió observación; requiere corrección del Enlace               |
| `corregido`          | Enlace reenvió corrección; en espera de segunda revisión                 |
| `listo_validar`      | Revisor aprobó técnicamente; en espera de validación del Administrador   |
| `cerrado`            | Administrador validó el indicador — reporte del periodo cerrado          |
| `vencido`            | Fecha límite superada sin evidencia aprobada                             |

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
borrador
  └─► pendiente_carga
        └─► pendiente_envio
              └─► enviado_revision
                    ├─► listo_validar ──► cerrado
                    └─► observado
                          └─► corregido
                                └─► enviado_revision (segunda vuelta)

* Cualquier estado antes de listo_validar puede derivar en: vencido
```

### 2.3 Responsabilidades por estado

| Estado              | Quién actúa   | Acción esperada                                |
|---------------------|---------------|------------------------------------------------|
| `pendiente_carga`   | Enlace        | Cargar archivos o justificación                |
| `pendiente_envio`   | Enlace        | Revisar y enviar a revisión                    |
| `enviado_revision`  | Revisor       | Tomar el indicador y comenzar revisión         |
| `observado`         | Enlace        | Leer observación y subir corrección            |
| `corregido`         | Revisor       | Revisar la corrección                          |
| `listo_validar`     | Administrador | Validar el indicador para cerrarlo             |
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
- El campo `archivosEvidencia` sigue la estructura: `{ id, nombre, tipo, url, tamanio, estado, fechaCarga, cargadoPor }`.
- El estado `vencido` puede asignarse automáticamente comparando `fechaLimite` con la fecha mock (`2026-06-09`) al cargar cada vista.
- La trazabilidad completa (historial) es un requisito transversal a los tres roles.
- Los IDs siguen el esquema: `[PREFIJO-GERENCIA]-[NIVEL]-[NUMERO]` (ej. `PLA-ACT-1.1`, `COM-COMP-3`, `ADM-FIN-01`).
