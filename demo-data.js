// demo-data.js — Datos de demostración COMAPA Platform
// Cubre todos los estados, frecuencias y escenarios de deadline.
// Se activa cuando sessionStorage tiene 'comapa-demo'==='1'
// o cuando la URL incluye el parámetro ?demo=1.
//
// Cómo activar: abrir demo-enlace.html — establece el flag automáticamente.
// Cómo desactivar: sessionStorage.removeItem('comapa-demo') o cerrar la pestaña.

(function () {

  /* ── Detectar modo demo ─────────────────────────────────────────── */
  var isDemo = false;
  try {
    isDemo = sessionStorage.getItem('comapa-demo') === '1';
    if (!isDemo) {
      var _url = new URL(window.location.href);
      if (_url.searchParams.get('demo') === '1') {
        isDemo = true;
        sessionStorage.setItem('comapa-demo', '1');
      }
    }
  } catch (e) {}

  if (!isDemo) return;

  /* ── Contexto de usuario demo ──────────────────────────────────── */
  try {
    localStorage.setItem('userGerencia', 'Demo — Gerencia Comercial');
    localStorage.removeItem('userUnidad');  // sin filtro por unidad
  } catch (e) {}

  /* ── MOCK_DATE del proyecto: 2026-06-09
        Fechas límite calculadas desde esa referencia:
        -5 d → 2026-06-04  (vencida)
         0 d → 2026-06-09  (hoy)
         3 d → 2026-06-12
         7 d → 2026-06-16
        14 d → 2026-06-23
        30 d → 2026-07-09
        61 d → 2026-08-09  ─────────────────────────────────────────── */

  var DEMO = [

    /* ─────────────────────────────────────────────────────────────────
       1. PENDIENTE DE CARGA — VENCIDA (-5 días)
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-VEN-01', no: 901,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Actividad', iso: null,
      resumenNarrativo: 'Asegurar la lectura sistemática de todos los medidores del padrón activo.',
      nombreIndicador: 'Porcentaje de lectura de medidores efectiva',
      tipoIndicador: 'Gestión', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Mensual',
      numerador: 'Medidores leídos en el período',
      denominador: 'Total de medidores activos en padrón',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte mensual de lecturas del sistema comercial',
      supuestos: null, lineaBase: 84.2, metaAnual: 92,
      observacionesMIR: null,
      estado: 'pendiente_carga', periodo: 'T2-2026',
      fechaLimite: '2026-06-04',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-05-30',
      archivosEvidencia: [], observaciones: [], historial: [],
    },

    /* ─────────────────────────────────────────────────────────────────
       2. PENDIENTE DE CARGA — HOY (0 días)
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-HOY-02', no: 902,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Componente', iso: null,
      resumenNarrativo: 'Garantizar la facturación oportuna de todos los usuarios del padrón comercial.',
      nombreIndicador: 'Índice de facturación puntual por zona',
      tipoIndicador: 'Gestión', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Mensual',
      numerador: 'Facturas emitidas en los primeros 5 días hábiles del mes',
      denominador: 'Total de facturas del período',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte de facturación mensual por zona',
      supuestos: null, lineaBase: 76.0, metaAnual: 88,
      observacionesMIR: null,
      estado: 'pendiente_carga', periodo: 'T2-2026',
      fechaLimite: '2026-06-09',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-01',
      archivosEvidencia: [], observaciones: [], historial: [],
    },

    /* ─────────────────────────────────────────────────────────────────
       3. PENDIENTE DE CARGA — URGENTE (3 días) · Bimestral
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-URG-03', no: 903,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Actividad', iso: null,
      resumenNarrativo: 'Optimizar la ejecución de cortes del servicio en usuarios con adeudo superior a 60 días.',
      nombreIndicador: 'Tasa de cortes ejecutados respecto a los programados',
      tipoIndicador: 'Gestión', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Bimestral',
      numerador: 'Cortes de servicio ejecutados en el bimestre',
      denominador: 'Cortes de servicio programados en el bimestre',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte bimestral de gestión de cortes',
      supuestos: null, lineaBase: 61.5, metaAnual: 80,
      observacionesMIR: null,
      estado: 'pendiente_carga', periodo: 'T2-2026',
      fechaLimite: '2026-06-12',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-01',
      archivosEvidencia: [], observaciones: [], historial: [],
    },

    /* ─────────────────────────────────────────────────────────────────
       4. PENDIENTE DE CARGA — URGENTE (7 días) · Trimestral
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-URG-04', no: 904,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Propósito', iso: null,
      resumenNarrativo: 'Mantener actualizado el padrón de usuarios con contratos vigentes.',
      nombreIndicador: 'Porcentaje de contratos activos en el padrón comercial',
      tipoIndicador: 'Estratégico', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Trimestral',
      numerador: 'Contratos activos al cierre del trimestre',
      denominador: 'Total de contratos registrados en el padrón',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte trimestral del padrón comercial',
      supuestos: null, lineaBase: 91.3, metaAnual: 95,
      observacionesMIR: null,
      estado: 'pendiente_carga', periodo: 'T2-2026',
      fechaLimite: '2026-06-16',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-01',
      archivosEvidencia: [], observaciones: [], historial: [],
    },

    /* ─────────────────────────────────────────────────────────────────
       5. PENDIENTE DE CARGA — PRÓXIMO (14 días) · Semestral
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-PRX-05', no: 905,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Fin', iso: null,
      resumenNarrativo: 'Medir la percepción de los usuarios sobre la atención recibida en oficinas comerciales.',
      nombreIndicador: 'Índice de satisfacción del usuario por atención comercial',
      tipoIndicador: 'Estratégico', unidadMedida: 'Índice (0–10)',
      frecuenciaMedicion: 'Semestral',
      numerador: 'Suma de calificaciones otorgadas por los usuarios encuestados',
      denominador: 'Total de usuarios encuestados en el semestre',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Encuesta semestral de satisfacción y reporte de resultados',
      supuestos: null, lineaBase: 7.4, metaAnual: 8.5,
      observacionesMIR: null,
      estado: 'pendiente_carga', periodo: 'T2-2026',
      fechaLimite: '2026-06-23',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-01',
      archivosEvidencia: [], observaciones: [], historial: [],
    },

    /* ─────────────────────────────────────────────────────────────────
       6. PENDIENTE DE CARGA — NORMAL (30 días) · Anual
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-NOR-06', no: 906,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Componente', iso: null,
      resumenNarrativo: 'Ampliar la cobertura del padrón activo de usuarios con medidor instalado y en operación.',
      nombreIndicador: 'Cobertura del padrón de usuarios con medidor instalado',
      tipoIndicador: 'Estratégico', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Anual',
      numerador: 'Usuarios con medidor en buen estado al cierre del año',
      denominador: 'Total de usuarios en el padrón activo',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Censo anual de medidores y reporte de inventario',
      supuestos: null, lineaBase: 68.0, metaAnual: 78,
      observacionesMIR: null,
      estado: 'pendiente_carga', periodo: 'T2-2026',
      fechaLimite: '2026-07-09',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-01',
      archivosEvidencia: [], observaciones: [], historial: [],
    },

    /* ─────────────────────────────────────────────────────────────────
       7. BORRADOR / INCOMPLETO — datos parciales guardados
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-BOR-07', no: 907,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Actividad', iso: null,
      resumenNarrativo: 'Monitorear el cumplimiento de pagos de usuarios con convenio de recuperación.',
      nombreIndicador: 'Porcentaje de recuperación de cartera corriente',
      tipoIndicador: 'Gestión', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Mensual',
      numerador: 'Pagos recibidos de cartera corriente en el mes',
      denominador: 'Total facturado en cartera corriente del mes anterior',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte mensual de cobranza por tipo de cartera',
      supuestos: null, lineaBase: 71.2, metaAnual: 82,
      observacionesMIR: null,
      estado: 'incompleto', periodo: 'T2-2026',
      fechaLimite: '2026-06-12',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-08',
      archivosEvidencia: [],
      observaciones: [],
      historial: [
        { fecha: '2026-06-08', hora: '11:20', accion: 'Borrador guardado (Numerador: 75.3, Denominador: sin confirmar)', rol: 'Enlace', usuario: 'Ana Torres' },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────
       8. ENVIADO A REVISIÓN — en espera del revisor
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-ENV-08', no: 908,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Componente', iso: null,
      resumenNarrativo: 'Medir la eficiencia en la cobranza mensual del total de la cartera activa.',
      nombreIndicador: 'Eficiencia de cobranza mensual',
      tipoIndicador: 'Gestión', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Bimestral',
      numerador: 'Monto cobrado en el mes',
      denominador: 'Monto facturado en el mes',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte bimestral de cobranza por área comercial',
      supuestos: null, lineaBase: 79.4, metaAnual: 88,
      observacionesMIR: null,
      estado: 'enviado_revision', periodo: 'T2-2026',
      fechaLimite: '2026-06-23',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-05',
      archivosEvidencia: [
        { id: 'fd-08-1', nombre: 'reporte_cobranza_may2026.pdf', tipo: 'PDF', tamanio: '0.6 MB', fechaCarga: '2026-06-05 14:10', cargadoPor: 'Ana Torres', estado: 'enviado', preview: null, notes: '' },
      ],
      observaciones: [],
      historial: [
        { fecha: '2026-06-05', hora: '14:05', accion: 'Avance del período reportado: 82.1 (Numerador: 82.1, Denominador: 100)', rol: 'Enlace', usuario: 'Ana Torres' },
        { fecha: '2026-06-05', hora: '14:10', accion: 'Evidencia enviada a revisión (1 archivo)', rol: 'Enlace', usuario: 'Ana Torres', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────
       9. OBSERVADO — 1 observación del revisor, sin atender
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-OBS-09', no: 909,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Actividad', iso: null,
      resumenNarrativo: 'Gestionar activamente la recuperación de la cartera vencida mayor a 90 días.',
      nombreIndicador: 'Índice de gestión de deuda morosa',
      tipoIndicador: 'Gestión', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Mensual',
      numerador: 'Adeudos recuperados de cartera mayor a 90 días en el mes',
      denominador: 'Total de adeudos en cartera mayor a 90 días al inicio del mes',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte mensual de recuperación de cartera vencida',
      supuestos: null, lineaBase: 18.5, metaAnual: 30,
      observacionesMIR: null,
      estado: 'observado', periodo: 'T2-2026',
      fechaLimite: '2026-06-16',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-02',
      archivosEvidencia: [
        { id: 'fd-09-1', nombre: 'reporte_cartera_vencida_may2026.pdf', tipo: 'PDF', tamanio: '0.4 MB', fechaCarga: '2026-06-01 09:30', cargadoPor: 'Ana Torres', estado: 'enviado', preview: null, notes: '' },
      ],
      observaciones: [
        { fecha: '2026-06-02', hora: '16:45', autor: 'Carlos Mendoza', rolAutor: 'Revisor', texto: 'El archivo cargado no corresponde al período reportado. El reporte adjunto está fechado en abril, pero el indicador corresponde a mayo 2026. Favor de cargar el reporte del mes correcto con sello y firma del responsable de cartera.', atendida: false },
      ],
      historial: [
        { fecha: '2026-06-01', hora: '09:25', accion: 'Avance del período reportado: 21.3 (Numerador: 21.3, Denominador: 100)', rol: 'Enlace', usuario: 'Ana Torres' },
        { fecha: '2026-06-01', hora: '09:30', accion: 'Evidencia enviada a revisión (1 archivo)', rol: 'Enlace', usuario: 'Ana Torres', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
        { fecha: '2026-06-02', hora: '16:45', accion: 'Reporte devuelto con observaciones del Revisor', rol: 'Revisor', usuario: 'Carlos Mendoza', estadoAnterior: 'enviado_revision', estadoNuevo: 'observado' },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────
       10. OBSERVADO — 2 observaciones (ciclo múltiple de correcciones)
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-OBS2-10', no: 910,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Componente', iso: null,
      resumenNarrativo: 'Garantizar la atención oportuna de los reportes de usuarios sobre fallas en el servicio comercial.',
      nombreIndicador: 'Porcentaje de atención a reportes comerciales en tiempo',
      tipoIndicador: 'Gestión', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Trimestral',
      numerador: 'Reportes comerciales atendidos en menos de 72 horas en el trimestre',
      denominador: 'Total de reportes comerciales recibidos en el trimestre',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte trimestral del sistema de atención a usuarios',
      supuestos: null, lineaBase: 65.0, metaAnual: 82,
      observacionesMIR: null,
      estado: 'observado', periodo: 'T2-2026',
      fechaLimite: '2026-06-23',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-07',
      archivosEvidencia: [
        { id: 'fd-10-1', nombre: 'reporte_atencion_q1_2026.pdf', tipo: 'PDF', tamanio: '0.8 MB', fechaCarga: '2026-05-20 10:00', cargadoPor: 'Ana Torres', estado: 'enviado', preview: null, notes: '' },
        { id: 'fd-10-2', nombre: 'reporte_atencion_q1_2026_v2.pdf', tipo: 'PDF', tamanio: '0.9 MB', fechaCarga: '2026-06-03 09:15', cargadoPor: 'Ana Torres', estado: 'enviado', preview: null, notes: 'Versión corregida con segregación por zona' },
      ],
      observaciones: [
        { fecha: '2026-05-22', hora: '11:30', autor: 'Carlos Mendoza', rolAutor: 'Revisor', texto: 'El reporte no incluye la segregación de reportes por zona geográfica requerida en la metodología del indicador. Es necesario desglosar los datos por Tampico Norte, Centro y Sur para validar la cobertura.', atendida: true },
        { fecha: '2026-06-07', hora: '09:45', autor: 'Carlos Mendoza', rolAutor: 'Revisor', texto: 'El reporte v2 incluye el desglose por zona, sin embargo el denominador presenta una inconsistencia: el total de reportes recibidos (890) difiere del registro del sistema de tickets (934). Favor de verificar y adjuntar la conciliación correspondiente.', atendida: false },
      ],
      historial: [
        { fecha: '2026-05-20', hora: '10:00', accion: 'Avance del período reportado: 68.5 (Numerador: 68.5, Denominador: 100)', rol: 'Enlace', usuario: 'Ana Torres' },
        { fecha: '2026-05-20', hora: '10:00', accion: 'Evidencia enviada a revisión (1 archivo)', rol: 'Enlace', usuario: 'Ana Torres', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
        { fecha: '2026-05-22', hora: '11:30', accion: 'Reporte devuelto con observaciones (falta desglose por zona)', rol: 'Revisor', usuario: 'Carlos Mendoza', estadoAnterior: 'enviado_revision', estadoNuevo: 'observado' },
        { fecha: '2026-06-03', hora: '09:15', accion: 'Evidencia corregida y reenviada a revisión (1 nuevo archivo)', rol: 'Enlace', usuario: 'Ana Torres', estadoAnterior: 'observado', estadoNuevo: 'enviado_revision' },
        { fecha: '2026-06-07', hora: '09:45', accion: 'Reporte devuelto nuevamente con observaciones (inconsistencia en denominador)', rol: 'Revisor', usuario: 'Carlos Mendoza', estadoAnterior: 'enviado_revision', estadoNuevo: 'observado' },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────
       11. CORREGIDO — reenviado después de observación
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-COR-11', no: 911,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Actividad', iso: null,
      resumenNarrativo: 'Gestionar eficientemente los trámites de reconexión del servicio tras regularización de adeudo.',
      nombreIndicador: 'Tasa de reconexiones gestionadas en tiempo',
      tipoIndicador: 'Gestión', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Mensual',
      numerador: 'Reconexiones realizadas dentro de las 48 h siguientes al pago',
      denominador: 'Total de solicitudes de reconexión recibidas en el mes',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte mensual de reconexiones del sistema comercial',
      supuestos: null, lineaBase: 71.0, metaAnual: 90,
      observacionesMIR: null,
      estado: 'corregido', periodo: 'T2-2026',
      fechaLimite: '2026-06-16',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-07',
      archivosEvidencia: [
        { id: 'fd-11-1', nombre: 'reporte_reconexiones_may2026.pdf', tipo: 'PDF', tamanio: '0.3 MB', fechaCarga: '2026-05-28 16:00', cargadoPor: 'Ana Torres', estado: 'enviado', preview: null, notes: '' },
        { id: 'fd-11-2', nombre: 'reporte_reconexiones_may2026_corregido.pdf', tipo: 'PDF', tamanio: '0.4 MB', fechaCarga: '2026-06-07 08:45', cargadoPor: 'Ana Torres', estado: 'enviado', preview: null, notes: 'Reporte corregido con el desglose solicitado' },
      ],
      observaciones: [
        { fecha: '2026-06-02', hora: '10:15', autor: 'Carlos Mendoza', rolAutor: 'Revisor', texto: 'El reporte no incluye las reconexiones del tramo norte de la zona 4 (Colonia Revolución). Es necesario agregar ese desglose para completar el universo de reconexiones del mes.', atendida: true },
      ],
      historial: [
        { fecha: '2026-05-28', hora: '16:00', accion: 'Avance del período reportado: 85.2 (Numerador: 85.2, Denominador: 100)', rol: 'Enlace', usuario: 'Ana Torres' },
        { fecha: '2026-05-28', hora: '16:00', accion: 'Evidencia enviada a revisión (1 archivo)', rol: 'Enlace', usuario: 'Ana Torres', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
        { fecha: '2026-06-02', hora: '10:15', accion: 'Reporte devuelto con observaciones (falta desglose zona 4 norte)', rol: 'Revisor', usuario: 'Carlos Mendoza', estadoAnterior: 'enviado_revision', estadoNuevo: 'observado' },
        { fecha: '2026-06-07', hora: '08:45', accion: 'Evidencia corregida y reenviada a revisión (1 nuevo archivo)', rol: 'Enlace', usuario: 'Ana Torres', estadoAnterior: 'observado', estadoNuevo: 'corregido' },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────
       12. LISTO PARA VALIDAR — aprobado por el revisor
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-LV-12', no: 912,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Propósito', iso: null,
      resumenNarrativo: 'Regularizar tomas clandestinas o irregulares identificadas en las inspecciones de campo.',
      nombreIndicador: 'Porcentaje de tomas irregulares regularizadas',
      tipoIndicador: 'Estratégico', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Semestral',
      numerador: 'Tomas irregulares regularizadas en el semestre',
      denominador: 'Total de tomas irregulares identificadas al inicio del semestre',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Informe semestral de inspecciones y regularizaciones de campo',
      supuestos: null, lineaBase: 42.0, metaAnual: 65,
      observacionesMIR: null,
      estado: 'listo_validar', periodo: 'T2-2026',
      fechaLimite: '2026-07-09',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-08',
      archivosEvidencia: [
        { id: 'fd-12-1', nombre: 'informe_regularizaciones_s1_2026.pdf', tipo: 'PDF', tamanio: '1.1 MB', fechaCarga: '2026-06-03 11:00', cargadoPor: 'Ana Torres', estado: 'aprobado', preview: null, notes: '' },
        { id: 'fd-12-2', nombre: 'acta_inspeccion_campo_jun2026.xlsx', tipo: 'Excel', tamanio: '0.2 MB', fechaCarga: '2026-06-03 11:05', cargadoPor: 'Ana Torres', estado: 'aprobado', preview: null, notes: '' },
      ],
      observaciones: [
        { fecha: '2026-06-05', hora: '14:00', autor: 'Carlos Mendoza', rolAutor: 'Revisor', texto: 'Es necesario incluir el acta de inspección de campo como documento de soporte para validar el universo de tomas irregulares declarado.', atendida: true },
      ],
      historial: [
        { fecha: '2026-06-03', hora: '11:00', accion: 'Avance del período reportado: 58.0 (Numerador: 58, Denominador: 100)', rol: 'Enlace', usuario: 'Ana Torres' },
        { fecha: '2026-06-03', hora: '11:00', accion: 'Evidencia enviada a revisión (1 archivo)', rol: 'Enlace', usuario: 'Ana Torres', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
        { fecha: '2026-06-05', hora: '14:00', accion: 'Reporte devuelto — falta acta de inspección', rol: 'Revisor', usuario: 'Carlos Mendoza', estadoAnterior: 'enviado_revision', estadoNuevo: 'observado' },
        { fecha: '2026-06-07', hora: '09:30', accion: 'Evidencia corregida y reenviada con acta adjunta (2 archivos)', rol: 'Enlace', usuario: 'Ana Torres', estadoAnterior: 'observado', estadoNuevo: 'corregido' },
        { fecha: '2026-06-08', hora: '17:00', accion: 'Evidencia aprobada por el Revisor. Enviada a validación administrativa.', rol: 'Revisor', usuario: 'Carlos Mendoza', estadoAnterior: 'corregido', estadoNuevo: 'listo_validar' },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────
       13. CERRADO — ciclo completo, validado por administrador
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-CER-13', no: 913,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Actividad', iso: null,
      resumenNarrativo: 'Controlar el crecimiento de la infraestructura comercial a través del registro de nuevas tomas.',
      nombreIndicador: 'Número de nuevas conexiones registradas en el período',
      tipoIndicador: 'Gestión', unidadMedida: 'Número',
      frecuenciaMedicion: 'Anual',
      numerador: 'Nuevas tomas de agua potable registradas en el año',
      denominador: null,
      denominadorFijo: true, denomFijoVal: null,
      medioVerificacion: 'Reporte anual de alta de tomas del sistema comercial',
      supuestos: null, lineaBase: 312, metaAnual: 380,
      observacionesMIR: null,
      estado: 'cerrado', periodo: 'T2-2026',
      fechaLimite: '2026-06-09',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-09',
      archivosEvidencia: [
        { id: 'fd-13-1', nombre: 'reporte_nuevas_conexiones_2025.pdf', tipo: 'PDF', tamanio: '0.7 MB', fechaCarga: '2026-05-10 09:00', cargadoPor: 'Ana Torres', estado: 'aprobado', preview: null, notes: '' },
        { id: 'fd-13-2', nombre: 'listado_tomas_altas_2025.xlsx', tipo: 'Excel', tamanio: '0.5 MB', fechaCarga: '2026-05-10 09:05', cargadoPor: 'Ana Torres', estado: 'aprobado', preview: null, notes: '' },
      ],
      observaciones: [],
      historial: [
        { fecha: '2026-05-10', hora: '09:00', accion: 'Avance del período reportado: 347 (valor absoluto)', rol: 'Enlace', usuario: 'Ana Torres' },
        { fecha: '2026-05-10', hora: '09:05', accion: 'Evidencia enviada a revisión (2 archivos)', rol: 'Enlace', usuario: 'Ana Torres', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
        { fecha: '2026-05-14', hora: '11:00', accion: 'Evidencia aprobada por el Revisor. Enviada a validación administrativa.', rol: 'Revisor', usuario: 'Carlos Mendoza', estadoAnterior: 'enviado_revision', estadoNuevo: 'listo_validar' },
        { fecha: '2026-05-20', hora: '15:30', accion: 'Indicador validado y cerrado por el Administrador.', rol: 'Administrador', usuario: 'Sistema MIR', estadoAnterior: 'listo_validar', estadoNuevo: 'cerrado' },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────
       14. COMPLETO — datos capturados, pendiente de enviar a revisión
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-COMP-14', no: 914,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Componente', iso: null,
      resumenNarrativo: 'Asegurar la entrega oportuna de facturas a los usuarios del padrón activo.',
      nombreIndicador: 'Porcentaje de facturas entregadas en tiempo',
      tipoIndicador: 'Gestión', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Mensual',
      numerador: 'Facturas entregadas dentro del plazo establecido en el mes',
      denominador: 'Total de facturas emitidas en el mes',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Reporte mensual de distribución de facturas por ruta',
      supuestos: null, lineaBase: 81.5, metaAnual: 92,
      observacionesMIR: null,
      estado: 'completo', periodo: 'T2-2026',
      fechaLimite: '2026-06-12',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: '2026-06-08',
      archivosEvidencia: [
        { id: 'fd-14-1', nombre: 'reporte_distribucion_facturas_may2026.pdf', tipo: 'PDF', tamanio: '0.5 MB', fechaCarga: '2026-06-08 16:30', cargadoPor: 'Ana Torres', estado: 'borrador', preview: null, notes: 'Pendiente de enviar a revisión' },
      ],
      observaciones: [],
      historial: [
        { fecha: '2026-06-08', hora: '16:25', accion: 'Avance del período reportado: 88.7 (Numerador: 88.7, Denominador: 100)', rol: 'Enlace', usuario: 'Ana Torres' },
        { fecha: '2026-06-08', hora: '16:30', accion: 'Archivo de evidencia cargado (pendiente de envío a revisión)', rol: 'Enlace', usuario: 'Ana Torres' },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────
       15. EMPTY STATE — sin actividad, deadline lejano (61 días)
    ───────────────────────────────────────────────────────────────── */
    {
      id: 'DEMO-EMP-15', no: 915,
      gerencia: 'Demo — Gerencia Comercial',
      unidadResponsable: 'Demo — Gerencia Comercial',
      nivel: 'Fin', iso: null,
      resumenNarrativo: 'Expandir la cobertura de micro-medición en nuevas tomas para garantizar la precisión en la facturación.',
      nombreIndicador: 'Cobertura de micro-medición en nuevas conexiones',
      tipoIndicador: 'Estratégico', unidadMedida: 'Porcentaje',
      frecuenciaMedicion: 'Anual',
      numerador: 'Nuevas conexiones con medidor instalado en el año',
      denominador: 'Total de nuevas conexiones registradas en el año',
      denominadorFijo: false, denomFijoVal: null,
      medioVerificacion: 'Censo anual de micro-medición en nuevas conexiones',
      supuestos: null, lineaBase: 55.0, metaAnual: 75,
      observacionesMIR: null,
      estado: 'pendiente_carga', periodo: 'T2-2026',
      fechaLimite: '2026-08-09',
      responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
      ultimaActualizacion: null,
      archivosEvidencia: [], observaciones: [], historial: [],
    },

  ];

  /* ── Campos computados (mirror del forEach en mir-actividades-data.js) ─ */
  DEMO.forEach(function(a) {
    a.tieneDenominador = !!(a.denominador && a.denominador.trim());
    a.acumulable       = false;
    a.metodoCalculo    = (a.numerador ? a.numerador.trim() : '—') +
                         (a.denominador ? ' / ' + a.denominador.trim() : '');
    a.nombre           = a.nombreIndicador;
  });

  /* ── Inyectar en el array global de datos ──────────────────────── */
  if (typeof ACTIVIDADES_ENLACE !== 'undefined') {
    Array.prototype.push.apply(ACTIVIDADES_ENLACE, DEMO);
  }

  /* ── Exponer la bandera para uso en páginas ────────────────────── */
  window.COMAPA_DEMO_ACTIVE = true;

  /* ── Indicador visual de modo demo (banner fijo) ──────────────── */
  window.addEventListener('DOMContentLoaded', function () {
    var bar = document.createElement('div');
    bar.id = 'demo-bar';
    bar.innerHTML =
      '<span style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;opacity:.7">MODO DEMO</span>' +
      '&nbsp;·&nbsp;' +
      '<span style="font-size:11px;">Datos de demostración — no reflejan información real</span>' +
      '&nbsp;&nbsp;<button onclick="sessionStorage.removeItem(\'comapa-demo\');localStorage.removeItem(\'userGerencia\');location.reload();" ' +
      'style="background:rgba(255,255,255,.2);border:none;border-radius:4px;padding:2px 8px;font-size:10px;font-weight:600;color:inherit;cursor:pointer;">Salir</button>';
    Object.assign(bar.style, {
      position: 'fixed', bottom: '0', left: '0', right: '0',
      height: '28px', background: '#7C3AED', color: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: '4px', zIndex: '9999', fontFamily: 'inherit',
    });
    document.body.appendChild(bar);
    // Añadir padding al body para que el contenido no quede tapado
    var wrapper = document.querySelector('.app-wrapper') || document.querySelector('main');
    if (wrapper) wrapper.style.paddingBottom = '36px';
  });

})();
