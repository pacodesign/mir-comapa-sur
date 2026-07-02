# Descripción de roles de usuario — COMAPA Sur MIR

## 1. Enlace

El Enlace es el usuario operativo responsable de consultar los indicadores MIR que tiene asignados dentro del sistema. Su función principal es cargar evidencia, adjuntar los documentos correspondientes, justificar cuando no cuente con un medio de verificación y enviar la información para revisión.

Este rol no valida técnicamente la información ni aprueba resultados. Su responsabilidad es mantener actualizada la carga de evidencias y atender las observaciones emitidas por el Revisor.

### Responsabilidades principales

- Consultar indicadores MIR asignados (todos los niveles: Fin, Propósito, Componente, Actividad).
- Revisar el medio de verificación requerido por cada indicador.
- Cargar evidencia documental o fotográfica.
- Previsualizar archivos antes de enviarlos.
- Guardar avances como borrador.
- Enviar evidencia a revisión.
- Atender observaciones del Revisor.
- Reenviar correcciones.
- Consultar historial y notificaciones relacionadas con sus indicadores.

### Necesidades principales en interfaz

- Ver claramente qué indicadores tiene pendientes.
- Saber qué evidencia debe cargar para cada indicador.
- Identificar fechas límite de reporte.
- Reconocer qué indicadores fueron observados.
- Entender qué debe corregir.
- Tener confirmación de que su evidencia fue enviada correctamente.

---

## 2. Revisor

El Revisor es el usuario responsable de validar técnicamente la información enviada por los Enlaces. Su función principal es revisar si la evidencia cargada cumple con el medio de verificación esperado por el indicador, aprobarla o emitir observaciones cuando la información sea incorrecta, incompleta o insuficiente.

Este rol tiene la responsabilidad técnica más importante dentro del flujo, ya que determina si un indicador puede avanzar hacia la validación del Administrador.

### Responsabilidades principales

- Consultar evidencias enviadas por los Enlaces.
- Revisar técnicamente los medios de verificación de cada indicador.
- Validar que los archivos correspondan al indicador y período reportado.
- Aprobar evidencia cuando cumple con lo requerido.
- Emitir observaciones cuando no cumple.
- Solicitar correcciones específicas al Enlace.
- Revisar evidencias corregidas y emitir resolución final.
- Consultar historial de cambios por indicador.
- Dar seguimiento a indicadores pendientes, observados, corregidos y aprobados.

### Necesidades principales en interfaz

- Tener una bandeja clara de revisión ordenada por urgencia y estado.
- Priorizar indicadores por fecha límite.
- Previsualizar archivos cargados por el Enlace.
- Consultar la definición MIR del indicador para validar contexto.
- Emitir observaciones de forma sencilla.
- Confirmar aprobaciones para evitar errores.
- Ver trazabilidad de cargas, observaciones y correcciones.

---

## 3. Administrador

El Administrador es el usuario responsable de supervisar el avance general del sistema. Su función principal no es revisar técnicamente cada evidencia, sino monitorear la completitud global, validar el cumplimiento por gerencia y cerrar los indicadores que el Revisor haya aprobado técnicamente.

Este rol necesita una vista más ejecutiva que operativa. Debe poder identificar qué gerencias están cumpliendo, cuáles están en riesgo y qué indicadores ya fueron aprobados por los Revisores y están listos para cerrar.

### Responsabilidades principales

- Monitorear cumplimiento global por gerencia.
- Consultar avance desglosado por nivel MIR (Fin, Propósito, Componente, Actividad).
- Identificar indicadores pendientes, observados, aprobados, vencidos o cerrados.
- Validar y cerrar indicadores en estado `listo_validar`.
- Configurar periodos de captura y revisión.
- Administrar usuarios y roles.
- Configurar medios de verificación y reglas operativas.
- Consultar auditoría e historial global.

### Necesidades principales en interfaz

- Ver un dashboard ejecutivo de avance con KPIs por gerencia.
- Identificar rápidamente indicadores en riesgo o vencidos.
- Validar completitud sin saturarse de información técnica.
- Acceder a los indicadores `listo_validar` de forma prominente para cerrarlos.
- Gestionar fechas, usuarios y configuración general.
- Ver quién reportó, quién revisó y quién validó cada indicador.

---

## Relación entre roles

El flujo operativo principal se estructura de la siguiente manera:

1. Enlace carga evidencia del indicador asignado.
2. Enlace envía evidencia a revisión.
3. Revisor valida técnicamente la evidencia.
4. Revisor aprueba → indicador pasa a `listo_validar`.
5. Revisor emite observaciones → Enlace corrige y reenvía.
6. Administrador monitorea completitud global.
7. Administrador valida el indicador → pasa a `cerrado`.

El sistema conserva trazabilidad completa de cada acción: usuario, rol, fecha, estado anterior, estado nuevo e indicador relacionado.

---

## Mapeo de vistas por rol

| Vista / Funcionalidad                              | Enlace | Revisor | Administrador |
|----------------------------------------------------|--------|---------|---------------|
| Dashboard ejecutivo de avance global               | —      | parcial | ✓             |
| Consulta dinámica de MIR (todos los indicadores)  | —      | ✓       | ✓             |
| Consulta MIR filtrada a indicadores propios        | ✓      | —       | —             |
| Detalle de indicador                               | ✓      | ✓       | ✓             |
| Reporte de avance / carga de evidencia             | ✓      | —       | —             |
| Bandeja de revisión                                | —      | ✓       | —             |
| Validación final (listos para validar → cerrado)  | —      | —       | ✓             |
| Gestión de usuarios y roles                        | —      | —       | ✓             |
| Configuración de periodos                          | —      | —       | ✓             |
| Historial y auditoría global                       | —      | parcial | ✓             |

---

## Notas de implementación

- La sesión activa indica siempre el rol del usuario autenticado.
- La navegación lateral (sidebar, 148px) se adapta al rol: muestra solo las secciones accesibles.
- Los tres roles comparten la misma base de estilos y sistema de diseño.
- La trazabilidad de acciones (quién, qué rol, cuándo, qué cambió) es un requisito transversal a los tres roles.
- Usuarios de demo: Luis Sandoval (Admin / LS), Carlos Mendoza (Revisor / CM), Ana Torres (Enlace / AT).
