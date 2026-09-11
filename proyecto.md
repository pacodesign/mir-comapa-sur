# COMAPA Sur — Sistema MIR · Documento maestro del proyecto

> Última actualización: septiembre 2026

---

## 1. ¿Qué es la plataforma?

La plataforma es un sistema de gestión de reportes de desempeño institucional para COMAPA Sur, la comisión de agua potable y saneamiento de la región sur de Tamaulipas. Su propósito es digitalizar y ordenar el proceso mediante el cual la organización documenta, valida y cierra el cumplimiento de sus indicadores de desempeño — los mismos que el gobierno exige reportar a través de la Matriz de Indicadores para Resultados (MIR) —.

Hoy ese proceso ocurre de manera dispersa: evidencias por correo, archivos de Excel circulando entre áreas, sin visibilidad de quién entregó qué ni en qué estado está cada indicador. La plataforma reemplaza esa operación fragmentada con un flujo estructurado y trazable: cada indicador tiene un responsable, una fecha límite, un estado visible y un historial completo de quién actuó, cuándo y qué decidió.

---

## 2. ¿Para quién se construye y qué problema resuelve?

Se construye para el equipo operativo interno de COMAPA Sur, compuesto por tres perfiles: los **Enlaces de unidad**, que son los responsables de cargar la evidencia de cumplimiento de meta de cada indicador en su área; los **Revisores técnicos**, que validan que esa evidencia cumpla con los requisitos del indicador antes de aprobarlo; y los **Administradores** (Gerencia de Planeación Estratégica), que tienen la vista ejecutiva del avance global por gerencia y dan el cierre definitivo del reporte de cumplimiento de los indicadores.

El problema que resuelve es la falta de control, visibilidad y trazabilidad en un proceso de cumplimiento institucional que hoy depende de la coordinación manual entre múltiples áreas. Sin la plataforma, no existe una fuente única de verdad que diga qué indicadores están completos, cuáles están en observación, cuáles vencieron ni quién es responsable de cada uno en cada momento.

---

## 3. Objetivo general

> Desarrollar una plataforma de gestión de indicadores de desempeño institucional para el personal operativo, técnico y directivo de COMAPA Sur de manera que el proceso de reporte, revisión y validación de la Matriz de Indicadores para Resultados se lleve a cabo con trazabilidad completa, responsabilidades claras y visibilidad en tiempo real del avance por gerencia, eliminando la dependencia de correos, archivos dispersos y seguimiento manual.

---

## 4. Roles de usuario

| Rol | Función principal | Acceso |
|---|---|---|
| **Enlace** | Carga evidencia de sus indicadores asignados y atiende observaciones | Solo sus indicadores y su gerencia |
| **Revisor** | Valida técnicamente la evidencia y aprueba o devuelve con observación | Todos los indicadores de su gerencia asignada |
| **Administrador** | Supervisa el avance global, valida el cierre de periodos y administra el sistema | Todas las gerencias e indicadores, más configuración |

Los tres roles comparten la misma base visual y sistema de diseño, con navegación lateral que se adapta automáticamente al rol activo.

---

## 5. Módulos que incluye la plataforma

### Acceso y sesión
Autenticación con usuario y contraseña, redirección automática al dashboard correspondiente según rol, y cierre de sesión.

### Dashboard por rol
Cada perfil cuenta con un dashboard propio: el Enlace ve sus KPIs personales (pendientes, observados, aprobados); el Revisor ve su bandeja de trabajo con urgencias y movimientos recientes; el Administrador ve el avance consolidado por gerencia.

### Captura de evidencia — Enlace
Vista de indicadores asignados, ficha MIR completa de cada indicador, carga de archivos de evidencia, guardado en borrador, envío a revisión y atención de observaciones con reenvío de correcciones.

### Revisión técnica — Revisor
Bandeja de revisión filtrable por estado y urgencia, detalle del indicador con previsualización de evidencia cargada por el Enlace, acción de aprobación, emisión de observaciones con comentario escrito, e historial de cambios por indicador.

### Validación administrativa — Administrador
Dashboard ejecutivo de avance por gerencia con semaforización, detalle de gerencia con sus indicadores, validación o devolución a corrección con observaciones por indicador, y override manual del estado de cumplimiento con registro en auditoría.

### Planeación de metas
Módulo para que el Enlace configure las metas anuales por indicador, el Revisor las apruebe u observe, y el Administrador monitoree el avance de configuración. Incluye ciclo de planeación con dos fases controladas por fechas (fase de captura y fase de revisión).

### Consulta MIR
Vista completa de los 132 indicadores con filtros por gerencia, nivel, tipo y estado, accesible para Revisor y Administrador.

### Reportes
Generador de PDF para el Revisor con previsualización en pantalla, membrete configurable y descarga. Vista de reporte de avance para el Enlace.

### Historial y trazabilidad
Registro completo de cada acción sobre cada indicador: quién actuó, en qué rol, cuándo y qué cambió de estado.

### Notificaciones in-app
Alertas dentro de la plataforma sobre indicadores observados, fechas límite próximas y cambios de estado relevantes para cada rol.

### Configuración del sistema
Administración del ciclo de planeación (apertura y cierre de fases con fechas). Accesible únicamente para el Administrador.

---

## 6. Fuera del alcance

Lo siguiente **no forma parte de este proyecto**. Cualquier solicitud en esta dirección debe tratarse como un cambio de alcance que requiere evaluación separada.

### Infraestructura y datos reales
- Conexión a base de datos real — el prototipo opera con datos simulados; la integración con BD queda para la fase de desarrollo.
- Persistencia real de acciones entre sesiones — al recargar, los datos demo se restablecen al estado inicial.

### Integraciones con sistemas externos
- SIIRSAP, SAP, sistemas de RH, contabilidad o cualquier otro sistema institucional de COMAPA.
- Importación o sincronización automática desde el archivo Excel oficial de la MIR.
- Exportación de reportes en formato oficial para dependencias de gobierno (SHCP, CONAC, SEPLAFIN).
- Firma digital o autenticación federada con sistemas externos (LDAP, Active Directory, SSO).

### Funcionalidades pendientes para siguientes fases
- Gestión de usuarios: alta, baja, modificación de cuentas y reasignación de gerencias desde la interfaz.
- Notificaciones por correo electrónico — en el alcance actual solo existen notificaciones dentro de la plataforma.
- Configuración individual de rangos de semaforización por indicador — el semáforo aplica hoy un criterio global (verde ≥95%, amarillo 80–94%, rojo <80%).
- Reapertura excepcional de periodos ya validados con nivel de permiso adicional — la regla de negocio está definida pero el control de permisos queda pendiente.
- Módulo de administración de medios de verificación (catálogo configurable por indicador).
- Repositorio documental histórico — gestión de archivos de evidencia de periodos anteriores.

### Alcance organizacional
- Soporte para múltiples organismos operadores — la plataforma es exclusivamente para COMAPA Sur.
- Indicadores fuera de los 4 niveles MIR (Fin, Propósito, Componente, Actividad).

### Canal de acceso
- Aplicación móvil nativa (iOS / Android) — la plataforma es exclusivamente web de escritorio.

---

## 7. Datos del sistema

- **Total de indicadores:** 132
- **Gerencias:** 4 (Planeación Estratégica, Comercial, Administrativa, Técnica)
- **Distribución por nivel:** 4 Fin · 4 Propósito · 30 Componente · 94 Actividad
- **Fuente de datos oficial:** MIR FINAL COMAPA SUR.xlsx
- **Frecuencias de reporte:** Mensual, Trimestral, Semestral, Anual

---

## 8. Glosario de términos y siglas

| Término / Sigla | Descripción completa |
|---|---|
| **COMAPA Sur** | Comisión de Agua Municipal de la región sur de Tamaulipas (Tampico y Cd. Madero). Organismo operador al que sirve esta plataforma. |
| **MIR** | Matriz de Indicadores para Resultados. Instrumento de planeación y evaluación gubernamental que organiza los indicadores de desempeño de una institución en cuatro niveles jerárquicos. |
| **POA** | Programa Operativo Anual. Documento institucional que detalla las actividades y metas comprometidas por la organización para el ejercicio fiscal en curso. Es fuente de evidencia frecuente para indicadores de nivel Actividad. |
| **ISO** | Código de norma ISO asociado a un indicador cuando aplica. Se registra como campo de definición en la ficha del indicador. |
| **KPI** | Key Performance Indicator. Contadores numéricos de resumen que aparecen en los dashboards de cada rol (total asignados, pendientes, observados, aprobados). |
| **SHCP** | Secretaría de Hacienda y Crédito Público. Dependencia federal receptora de reportes MIR. Mencionada como destino de exportación fuera del alcance. |
| **CONAC** | Consejo Nacional de Armonización Contable. Regula los estándares de información financiera gubernamental. Fuera del alcance. |
| **SEPLAFIN** | Secretaría de Planeación y Finanzas del Gobierno de Tamaulipas. Puede requerir reportes de cumplimiento MIR. Fuera del alcance. |
| **SIIRSAP** | Sistema de Información de los Servicios de Agua Potable. Sistema externo sin integración en esta fase. |
| **SAP** | Sistema de planeación de recursos empresariales en uso en COMAPA. Sin integración en esta fase. |
| **SSO / LDAP / Active Directory** | Protocolos de autenticación federada y directorio corporativo. Fuera del alcance de esta fase. |
| **Enlace** | Rol operativo. Carga evidencia de sus indicadores asignados, la envía a revisión y atiende observaciones del Revisor. |
| **Revisor** | Rol técnico. Valida que la evidencia cumpla con el medio de verificación del indicador. Aprueba o emite observaciones. |
| **Administrador** | Rol directivo (Gerencia de Planeación Estratégica). Supervisa el avance global, valida el cierre de periodos y administra la configuración del sistema. |
| **Gerencia** | Unidad organizacional de COMAPA Sur. El sistema opera con cuatro: Planeación Estratégica, Comercial, Administrativa y Técnica. |
| **Unidad Responsable** | Área o coordinación dentro de una gerencia a la que está asignado un indicador y su Enlace correspondiente. |
| **Indicador** | Unidad mínima de medición. Cada uno de los 132 indicadores de la MIR tiene ficha, fórmula, meta, medio de verificación y un flujo de reporte propio. |
| **Nivel MIR** | Clasificación jerárquica del indicador: **Fin** (impacto de largo plazo), **Propósito** (resultado directo), **Componente** (bien o servicio producido), **Actividad** (acción operativa). |
| **Medio de Verificación** | Documento o fuente oficial que acredita el cumplimiento del indicador. Determina qué evidencia debe cargar el Enlace. |
| **Evidencia** | Archivo (PDF, imagen u otro formato) que el Enlace carga para respaldar el cumplimiento del indicador en el periodo reportado. |
| **Periodo de reporte** | Intervalo temporal al que corresponde un reporte. Puede ser mensual (`junio-2026`), trimestral (`T1-2026`, `T2-2026`), semestral (`S1-2026`) o anual. |
| **Frecuencia de medición** | Cadencia con la que se reporta un indicador: Mensual, Trimestral, Semestral o Anual. |
| **Fecha límite** | Fecha máxima para que el Enlace cargue y envíe la evidencia del periodo activo. Su vencimiento sin reporte genera el estado `vencido`. |
| **Meta anual** | Valor comprometido de cumplimiento del indicador para el ejercicio en curso. |
| **Línea base** | Valor de referencia del indicador al inicio del ejercicio, contra el cual se mide el avance. |
| **Ciclo de planeación** | Periodo administrativo con dos fases: **Fase de Captura** (el Enlace registra metas) y **Fase de Revisión** (el Revisor aprueba u observa esas metas). |
| **Semaforización** | Sistema de tres colores para indicar nivel de cumplimiento: verde (≥ 95%), amarillo (80–94.9%), rojo (< 80%). |
| **Bandeja de revisión** | Vista exclusiva del Revisor con todos los indicadores de su gerencia que requieren acción, ordenables por urgencia, estado y fecha límite. |
| **Historial / Auditoría** | Registro cronológico e inmutable de todas las acciones sobre un indicador: usuario, rol, fecha, estado anterior y nuevo. |
| **Borrador** | Estado: indicador registrado sin acción del Enlace. |
| **Pendiente de carga** | Estado: indicador asignado al Enlace, esperando carga de evidencia. |
| **Enviado a revisión** | Estado: el Enlace envió evidencia y espera que el Revisor la tome. |
| **Observado** | Estado: el Revisor devolvió el indicador con observación escrita que el Enlace debe corregir. |
| **Corregido** | Estado: el Enlace reenvió la corrección y espera segunda revisión del Revisor. |
| **Listo para validar** | Estado: el Revisor aprobó técnicamente. El indicador espera validación definitiva del Administrador. |
| **Cerrado** | Estado final: el Administrador validó el indicador. Reporte del periodo cerrado. |
| **Vencido** | Estado de alerta: la fecha límite fue superada sin evidencia aprobada. |
| **Override / Ajuste por Administrador** | Acción que permite al Administrador forzar manualmente el estado de cumplimiento de un indicador, con registro diferenciado en auditoría. |
| **Notificación in-app** | Alerta generada dentro de la plataforma para informar cambios de estado, fechas próximas u observaciones. No incluye correo electrónico en esta fase. |
