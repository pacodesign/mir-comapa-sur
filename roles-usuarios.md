# Descripción de roles de usuario — COMAPA Sur MIR

## 1. Enlace

El Enlace es el usuario operativo responsable de consultar las actividades, indicadores o medios de verificación que tiene asignados dentro del sistema. Su función principal es cargar evidencia, adjuntar los documentos correspondientes, justificar cuando no cuente con un medio de verificación y enviar la información para revisión.

Este rol no valida técnicamente la información ni aprueba resultados. Su responsabilidad es mantener actualizada la carga de evidencias y atender las observaciones emitidas por el Revisor.

### Responsabilidades principales

- Consultar actividades e indicadores asignados.
- Revisar el medio de verificación requerido.
- Cargar evidencia documental o fotográfica.
- Previsualizar archivos antes de enviarlos.
- Guardar avances como borrador.
- Enviar evidencia a revisión.
- Atender observaciones.
- Reenviar correcciones.
- Consultar historial y notificaciones relacionadas con sus actividades.

### Necesidades principales en interfaz

- Ver claramente qué actividades tiene pendientes.
- Saber qué evidencia debe cargar.
- Identificar fechas límite.
- Reconocer qué actividades fueron observadas.
- Entender qué debe corregir.
- Tener confirmación de que su evidencia fue enviada correctamente.

---

## 2. Revisor

El Revisor es el usuario responsable de validar técnicamente la información enviada por los Enlaces. Su función principal es revisar si la evidencia cargada cumple con el medio de verificación esperado, aprobarla o emitir observaciones cuando la información sea incorrecta, incompleta o insuficiente.

Este rol tiene la responsabilidad técnica más importante dentro del flujo, ya que determina si una actividad puede avanzar hacia la validación del Administrador.

### Responsabilidades principales

- Consultar evidencias enviadas por los Enlaces.
- Revisar técnicamente medios de verificación.
- Validar que los archivos correspondan a la actividad/indicador.
- Aprobar evidencia cuando cumple.
- Emitir observaciones cuando no cumple.
- Solicitar correcciones.
- Revisar evidencias corregidas.
- Consultar historial de cambios.
- Dar seguimiento a actividades pendientes, observadas, corregidas y aprobadas.

### Necesidades principales en interfaz

- Tener una bandeja clara de revisión.
- Priorizar evidencias por estado, fecha límite o urgencia.
- Previsualizar archivos cargados por el Enlace.
- Consultar información MIR para validar contexto.
- Emitir observaciones de forma sencilla.
- Confirmar aprobaciones para evitar errores.
- Ver trazabilidad de cargas, observaciones y correcciones.

---

## 3. Administrador

El Administrador es el usuario responsable de supervisar el avance general del sistema. Su función principal no es revisar técnicamente cada evidencia, sino monitorear la completitud, validar el cumplimiento global, gestionar configuraciones operativas y cerrar o publicar la información validada.

Este rol necesita una vista más ejecutiva que operativa. Debe poder identificar qué gerencias, coordinaciones o unidades están cumpliendo, cuáles están en riesgo y qué información ya fue aprobada por los Revisores.

### Responsabilidades principales

- Monitorear cumplimiento global.
- Consultar avance por gerencia, coordinación o unidad.
- Identificar actividades pendientes, observadas, aprobadas o vencidas.
- Validar información aprobada por Revisores.
- Publicar o cerrar resultados internos.
- Configurar periodos de captura y revisión.
- Administrar usuarios y roles.
- Configurar medios de verificación y reglas operativas.
- Consultar auditoría e historial global.

### Necesidades principales en interfaz

- Ver un dashboard ejecutivo de avance.
- Identificar rápidamente coordinaciones en riesgo.
- Consultar detalle bajo demanda.
- Validar completitud sin saturarse de información técnica.
- Gestionar fechas, usuarios y configuración general.
- Acceder a trazabilidad completa cuando sea necesario.
- Ver quién reportó, quién revisó y quién validó cada actividad.

---

## Relación entre roles

El flujo operativo principal se estructura de la siguiente manera:

1. Enlace carga evidencia.
2. Enlace envía evidencia a revisión.
3. Revisor valida técnicamente.
4. Revisor aprueba o emite observaciones.
5. Enlace corrige si es necesario.
6. Revisor aprueba la evidencia corregida.
7. Administrador monitorea completitud.
8. Administrador valida o publica la información final.

El sistema debe conservar trazabilidad completa de cada acción, incluyendo usuario, rol, fecha, estado anterior, estado nuevo y actividad relacionada.

---

## Mapeo de vistas por rol

| Vista / Funcionalidad                        | Enlace | Revisor | Administrador |
|---------------------------------------------|--------|---------|---------------|
| Dashboard ejecutivo de avance global        | —      | parcial | ✓             |
| Consulta dinámica de MIR (todas)            | —      | ✓       | ✓             |
| Consulta MIR filtrada a indicadores propios | ✓      | —       | —             |
| Detalle de indicador                        | ✓      | ✓       | ✓             |
| Reporte de avance / carga de evidencia      | ✓      | —       | —             |
| Bandeja de revisión                         | —      | ✓       | —             |
| Validación final y publicación              | —      | —       | ✓             |
| Gestión de usuarios y roles                 | —      | —       | ✓             |
| Configuración de periodos                   | —      | —       | ✓             |
| Historial y auditoría global                | —      | parcial | ✓             |

---

## Notas de implementación

- La sesión activa debe indicar siempre el rol del usuario autenticado.
- La navegación lateral (sidebar) debe adaptarse al rol: mostrar sólo las secciones accesibles.
- El estado inicial del prototipo refleja la vista **Administrador** (lo construido hasta ahora).
- Las vistas de Revisor y Enlace se construirán de forma incremental sobre la misma base de estilos y sistema de diseño.
- La trazabilidad de acciones (quién, qué rol, cuándo, qué cambió) es un requisito transversal a los tres roles.
