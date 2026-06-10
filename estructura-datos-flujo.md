# Estructura de datos y flujo del sistema — COMAPA Sur MIR

## 1. Estructura base de datos (prototipo)

El sistema parte de una estructura tipo `.js` / mock data con información MIR. Esta información alimenta vistas, filtros, detalles y dashboards.

---

### 1.1 Entidades base esperadas

**Indicador / Actividad MIR**

Cada registro debe contener, como mínimo:

| Campo                  | Descripción                                     |
|------------------------|-------------------------------------------------|
| `id`                   | Identificador único del indicador o actividad   |
| `gerencia`             | Gerencia o unidad administrativa responsable    |
| `nivelCodigo`          | Código del nivel MIR (Fin, Propósito, etc.)     |
| `nivel`                | Nombre del nivel MIR                            |
| `objetivo`             | Objetivo al que pertenece el indicador          |
| `denominacionIndicador`| Nombre oficial del indicador                    |
| `metodoCalculo`        | Fórmula o método de cálculo                     |
| `numerador`            | Componente numerador de la fórmula              |
| `denominador`          | Componente denominador de la fórmula            |
| `frecuenciaMedicion`   | Frecuencia de medición (mensual, trimestral…)   |
| `medioVerificacion`    | Documento o fuente que acredita el cumplimiento |
| `lineaBase`            | Valor de referencia inicial                     |
| `metaAnual`            | Meta comprometida para el año                   |

---

### 1.2 Campos operativos (extendidos por el prototipo)

Para que el flujo funcione, cada actividad/indicador se extiende con:

| Campo                      | Tipo / descripción                                      |
|----------------------------|---------------------------------------------------------|
| `estado`                   | Estado actual en el flujo (ver sección 1.3)             |
| `fechaLimite`              | Fecha máxima para carga de evidencia                    |
| `periodo`                  | Periodo de reporte (ej. `Q1-2026`, `junio-2026`)        |
| `responsableEnlace`        | ID o nombre del usuario Enlace asignado                 |
| `responsableRevisor`       | ID o nombre del usuario Revisor asignado                |
| `archivosEvidencia`        | Array de archivos cargados (nombre, url, fecha, autor)  |
| `observaciones`            | Array de observaciones emitidas por el Revisor          |
| `historial`                | Array de eventos del ciclo de vida del registro         |
| `notificaciones`           | Array de notificaciones generadas por este registro     |
| `justificacionSinEvidencia`| Texto libre cuando no existe medio de verificación      |
| `fechaEnvio`               | Fecha en que el Enlace envió a revisión                 |
| `fechaRevision`            | Fecha en que el Revisor procesó la evidencia            |
| `fechaAprobacion`          | Fecha de aprobación técnica por el Revisor              |
| `fechaValidacionAdmin`     | Fecha de validación final por el Administrador          |

---

### 1.3 Estados del sistema

| Estado                | Descripción                                                          |
|-----------------------|----------------------------------------------------------------------|
| `borrador`            | Registro creado, sin acción del Enlace                               |
| `pendiente_carga`     | Asignado al Enlace, esperando carga de evidencia                     |
| `pendiente_envio`     | Evidencia cargada pero no enviada a revisión                         |
| `enviado_revision`    | Enlace envió; en espera de que el Revisor lo tome                    |
| `pendiente_revision`  | Revisor tiene el registro en su bandeja, aún sin procesar            |
| `observado`           | Revisor emitió observación; requiere corrección del Enlace           |
| `corregido`           | Enlace reenvió corrección; en espera de segunda revisión             |
| `aprobado_revisor`    | Revisor aprobó técnicamente; en espera de validación del Admin       |
| `validado_admin`      | Administrador validó el registro                                     |
| `publicado`           | Información publicada oficialmente                                   |
| `vencido`             | Fecha límite superada sin evidencia cargada o aprobada               |

---

## 2. Flujo general del sistema

### 2.1 Flujo base

```
1.  Usuario inicia sesión
2.  Sistema identifica rol → redirige al dashboard correspondiente
3.  Enlace consulta actividades asignadas
4.  Enlace carga evidencia o justificación de no evidencia
5.  Enlace envía a revisión
6.  Revisor recibe la evidencia en su bandeja
7.  Revisor evalúa técnicamente
8.  → Si aprueba: estado pasa a aprobado_revisor
    → Si observa: estado pasa a observado, notifica al Enlace
9.  Enlace corrige y reenvía (si aplica)
10. Revisor aprueba la corrección → aprobado_revisor
11. Administrador monitorea completitud global
12. Administrador valida y/o publica la información
13. Sistema conserva historial completo de cada acción
```

### 2.2 Diagrama de estados

```
borrador
  └─► pendiente_carga
        └─► pendiente_envio
              └─► enviado_revision
                    └─► pendiente_revision
                          ├─► aprobado_revisor ──► validado_admin ──► publicado
                          └─► observado
                                └─► corregido
                                      └─► pendiente_revision (segunda vuelta)

* Cualquier estado antes de aprobado_revisor puede derivar en: vencido
```

### 2.3 Responsabilidades por estado

| Estado                | Quién actúa        | Acción esperada                              |
|-----------------------|--------------------|----------------------------------------------|
| `pendiente_carga`     | Enlace             | Cargar archivos o justificación              |
| `pendiente_envio`     | Enlace             | Revisar y enviar a revisión                  |
| `enviado_revision`    | Revisor            | Tomar el registro y comenzar revisión        |
| `pendiente_revision`  | Revisor            | Aprobar o emitir observación                 |
| `observado`           | Enlace             | Leer observación y subir corrección          |
| `corregido`           | Revisor            | Revisar la corrección                        |
| `aprobado_revisor`    | Administrador      | Validar y publicar                           |
| `vencido`             | Administrador      | Registrar y notificar a la gerencia          |

---

## 3. Notas de implementación para el prototipo

- Los campos operativos (sección 1.2) se agregan sobre el mock data existente (`mir-data.js` o equivalente).
- El campo `historial` debe ser un array de objetos con estructura mínima: `{ fecha, hora, usuario, rol, accion, estadoAnterior, estadoNuevo }`.
- El campo `observaciones` debe incluir: `{ id, texto, autor, fecha, atendida }`.
- El campo `archivosEvidencia` debe incluir: `{ id, nombre, tipo, url, tamanio, fechaCarga, cargadoPor }`.
- Las `notificaciones` generadas por un registro se vinculan con el sistema global de notificaciones en `mock-notifications.js` mediante el campo `actividadId`.
- El estado `vencido` puede asignarse automáticamente comparando `fechaLimite` con la fecha actual al cargar cada vista.
- La trazabilidad completa (historial) es un requisito transversal a los tres roles y debe registrarse en cada transición de estado.
