// Datos mock — actividades MIR asignadas a Ana Torres (Gerencia Comercial, Q2-2026)
const ACTIVIDADES_ENLACE = [
  {
    id: 'COM-ACT-01',
    nombre: 'Actualización del padrón de usuarios activos',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'P', nivel: 'Propósito',
    objetivo: 'Mantener actualizado el registro de usuarios del servicio de agua potable para garantizar la correcta asignación de tarifas y cobertura.',
    denominacionIndicador: 'Porcentaje del padrón de usuarios actualizado',
    metodoCalculo: '(Usuarios con información vigente / Total de usuarios registrados) × 100',
    numerador: 'Usuarios con datos verificados en el trimestre',
    denominador: 'Total de usuarios registrados en el padrón',
    frecuenciaMedicion: 'Trimestral',
    medioVerificacion: 'Reporte de padrón firmado por el responsable del área comercial, con sello institucional.',
    formatoEsperado: 'PDF (firmado y sellado)',
    reglasExtra: 'El documento debe contener fecha de corte, número total de registros y firma autógrafa del jefe de área.',
    lineaBase: '68%', metaAnual: '95%', acumulable: false, tieneDenominador: true,
    avanceReportado: { numerador: 428, denominador: 483, resultado: 88.61,
      comentario: 'El padrón refleja las actualizaciones realizadas en campo durante mayo. Se identificaron 55 registros con información desactualizada que requirieron verificación en sitio, lo que retrasó el cierre del trimestre.',
      analisis: { causas: 'Alta rotación de usuarios en colonias perimetrales y falta de sincronización con el sistema catastral municipal.', riesgos: 'Sin la depuración continua, el índice podría deteriorarse en Q3 cuando inicia la campaña de nuevas conexiones.', medidas: 'Se implementará revisión mensual de bajas y altas en coordinación con el área técnica a partir de julio.' } },
    periodosAnteriores: [
      { periodo: 'Q1-2026 (Ene–Mar)', numerador: 384, denominador: 478, resultado: 80.33, estado: 'aprobado' }
    ],
    estado: 'corregido',
    fechaLimite: '2026-07-01', periodo: 'Q2-2026', ultimaActualizacion: '2026-06-08',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [
      { id: 'f-01-a', nombre: 'padron-usuarios-q2-2026.pdf', tipo: 'PDF', tamanio: '2.3 MB', fechaCarga: '2026-06-05 14:30', cargadoPor: 'Ana Torres', estado: 'enviado', notes: '' },
      { id: 'f-01-b', nombre: 'padron-usuarios-q2-2026-v2-sellado.pdf', tipo: 'PDF', tamanio: '2.4 MB', fechaCarga: '2026-06-08 09:15', cargadoPor: 'Ana Torres', estado: 'enviado', notes: 'Versión corregida con sello del área comercial y firma del jefe de área.' }
    ],
    observaciones: [
      { id: 'obs-01-01', texto: 'El padrón de usuarios no incluye el sello institucional requerido ni la firma autógrafa del responsable del área. Por favor adjunte la versión oficial con ambos elementos antes de que sea posible aprobar la actividad.', autor: 'Carlos Mendoza', rolAutor: 'Revisor', fecha: '2026-06-07', hora: '16:30', atendida: true }
    ],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' },
      { fecha: '2026-06-05', hora: '14:30', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Evidencia cargada', estadoAnterior: 'pendiente_carga', estadoNuevo: 'pendiente_envio' },
      { fecha: '2026-06-05', hora: '14:45', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Enviada a revisión', estadoAnterior: 'pendiente_envio', estadoNuevo: 'enviado_revision' },
      { fecha: '2026-06-07', hora: '10:00', usuario: 'Carlos Mendoza', rol: 'Revisor', accion: 'Tomada para revisión', estadoAnterior: 'enviado_revision', estadoNuevo: 'pendiente_revision' },
      { fecha: '2026-06-07', hora: '16:30', usuario: 'Carlos Mendoza', rol: 'Revisor', accion: 'Observación emitida — falta sello institucional', estadoAnterior: 'pendiente_revision', estadoNuevo: 'observado' },
      { fecha: '2026-06-08', hora: '09:15', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Corrección cargada y enviada al Revisor', estadoAnterior: 'observado', estadoNuevo: 'corregido' }
    ]
  },
  {
    id: 'COM-ACT-02',
    nombre: 'Eficiencia del proceso de facturación',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'F', nivel: 'Fin',
    objetivo: 'Garantizar que el proceso de facturación opere sin errores para asegurar la recaudación oportuna del servicio.',
    denominacionIndicador: 'Índice de eficiencia de facturación',
    metodoCalculo: '(Facturas emitidas sin error / Total de facturas emitidas) × 100',
    numerador: 'Facturas emitidas correctamente en el periodo',
    denominador: 'Total de facturas emitidas en el periodo',
    frecuenciaMedicion: 'Mensual',
    medioVerificacion: 'Reporte de facturación mensual generado por el sistema SAP con fecha de impresión.',
    formatoEsperado: 'PDF o Excel',
    reglasExtra: 'Debe incluir el número de folio del reporte y la fecha de generación del sistema.',
    lineaBase: '88%', metaAnual: '97%', acumulable: false, tieneDenominador: true,
    avanceReportado: { numerador: 4851, denominador: 4980, resultado: 97.41 },
    periodosAnteriores: [
      { periodo: 'Enero 2026',   numerador: 4420, denominador: 5012, resultado: 88.19, estado: 'aprobado' },
      { periodo: 'Febrero 2026', numerador: 4522, denominador: 4998, resultado: 90.48, estado: 'aprobado' },
      { periodo: 'Marzo 2026',   numerador: 4672, denominador: 5010, resultado: 93.25, estado: 'aprobado' },
      { periodo: 'Abril 2026',   numerador: 4788, denominador: 5018, resultado: 95.42, estado: 'aprobado' }
    ],
    estado: 'aprobado_revisor',
    fechaLimite: '2026-05-30', periodo: 'Q2-2026', ultimaActualizacion: '2026-05-30',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [
      { id: 'f-02-a', nombre: 'eficiencia-facturacion-may-2026.pdf', tipo: 'PDF', tamanio: '1.8 MB', fechaCarga: '2026-05-28 11:00', cargadoPor: 'Ana Torres', estado: 'aprobado' }
    ],
    observaciones: [],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' },
      { fecha: '2026-05-28', hora: '11:00', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Evidencia cargada y enviada a revisión', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
      { fecha: '2026-05-30', hora: '16:20', usuario: 'Carlos Mendoza', rol: 'Revisor', accion: 'Aprobada técnicamente', estadoAnterior: 'pendiente_revision', estadoNuevo: 'aprobado_revisor' }
    ]
  },
  {
    id: 'COM-ACT-03',
    nombre: 'Seguimiento de facturación mensual por sector',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'C', nivel: 'Componente',
    objetivo: 'Monitorear la facturación por sector para identificar variaciones y ajustar las metas de recaudación.',
    denominacionIndicador: 'Porcentaje de cumplimiento de meta de facturación por sector',
    metodoCalculo: '(Monto facturado por sector / Meta de facturación del sector) × 100',
    numerador: 'Monto total facturado en el sector durante el mes',
    denominador: 'Meta de facturación mensual establecida para el sector',
    frecuenciaMedicion: 'Mensual',
    medioVerificacion: 'Reporte de facturación por sector con firma del jefe de área comercial.',
    formatoEsperado: 'PDF',
    reglasExtra: 'El reporte debe desglosar la facturación por zona geográfica y tipo de usuario (doméstico, comercial, industrial).',
    lineaBase: '78%', metaAnual: '90%', acumulable: false, tieneDenominador: true,
    periodosAnteriores: [
      { periodo: 'Enero 2026',   numerador: 4210000, denominador: 5400000, resultado: 77.96, estado: 'aprobado' },
      { periodo: 'Febrero 2026', numerador: 4380000, denominador: 5400000, resultado: 81.11, estado: 'aprobado' },
      { periodo: 'Marzo 2026',   numerador: 4510000, denominador: 5400000, resultado: 83.52, estado: 'aprobado' },
      { periodo: 'Abril 2026',   numerador: 4620000, denominador: 5400000, resultado: 85.56, estado: 'aprobado' },
      { periodo: 'Mayo 2026',    numerador: 4750000, denominador: 5400000, resultado: 87.96, estado: 'aprobado' }
    ],
    estado: 'pendiente_carga',
    fechaLimite: '2026-06-20', periodo: 'Q2-2026', ultimaActualizacion: '2026-05-15',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [],
    observaciones: [],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' }
    ]
  },
  {
    id: 'COM-ACT-04',
    nombre: 'Índice de satisfacción de usuarios del servicio',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'P', nivel: 'Propósito',
    objetivo: 'Medir la percepción de calidad del servicio por parte de los usuarios para orientar las mejoras operativas.',
    denominacionIndicador: 'Índice de satisfacción de usuarios (ISU)',
    metodoCalculo: '(Usuarios satisfechos o muy satisfechos / Total de usuarios encuestados) × 100',
    numerador: 'Usuarios que reportan satisfacción ≥ 4/5 en encuesta',
    denominador: 'Total de usuarios que respondieron la encuesta',
    frecuenciaMedicion: 'Semestral',
    medioVerificacion: 'Informe de resultados de la encuesta de satisfacción aplicada a usuarios.',
    formatoEsperado: 'PDF con anexo de tabulados en Excel',
    reglasExtra: 'La muestra mínima debe ser de 200 usuarios. El informe debe incluir metodología y margen de error.',
    lineaBase: '71%', metaAnual: '80%', acumulable: false, tieneDenominador: true,
    avanceReportado: { numerador: 183, denominador: 215, resultado: 85.12 },
    periodosAnteriores: [
      { periodo: 'S2-2025 (Jul–Dic)', numerador: 145, denominador: 201, resultado: 72.14, estado: 'aprobado' }
    ],
    estado: 'aprobado_revisor',
    fechaLimite: '2026-05-30', periodo: 'Q2-2026', ultimaActualizacion: '2026-05-29',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [
      { id: 'f-04-a', nombre: 'encuesta-satisfaccion-sem1-2026.pdf', tipo: 'PDF', tamanio: '4.1 MB', fechaCarga: '2026-05-29 10:15', cargadoPor: 'Ana Torres', estado: 'aprobado' },
      { id: 'f-04-b', nombre: 'tabulados-satisfaccion.xlsx', tipo: 'Excel', tamanio: '0.8 MB', fechaCarga: '2026-05-29 10:15', cargadoPor: 'Ana Torres', estado: 'aprobado' }
    ],
    observaciones: [],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' },
      { fecha: '2026-05-29', hora: '10:15', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Evidencia cargada y enviada', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
      { fecha: '2026-05-30', hora: '09:45', usuario: 'Carlos Mendoza', rol: 'Revisor', accion: 'Aprobada técnicamente', estadoAnterior: 'pendiente_revision', estadoNuevo: 'aprobado_revisor' }
    ]
  },
  {
    id: 'COM-ACT-05',
    nombre: 'Registro y seguimiento de nuevas conexiones',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'A', nivel: 'Actividad',
    objetivo: 'Controlar el número de nuevas conexiones domiciliarias tramitadas y concluidas en el periodo.',
    denominacionIndicador: 'Número de nuevas conexiones registradas',
    metodoCalculo: 'Suma de conexiones domiciliarias nuevas activadas en el periodo',
    numerador: 'Conexiones nuevas activadas en el mes',
    denominador: 'N/A (conteo absoluto)',
    frecuenciaMedicion: 'Mensual',
    medioVerificacion: 'Reporte de altas de servicio generado por el sistema de gestión comercial.',
    formatoEsperado: 'PDF o Excel',
    reglasExtra: 'El reporte debe distinguir conexiones domésticas, comerciales e industriales.',
    lineaBase: '142 conexiones/mes', metaAnual: '1,800 conexiones', acumulable: true, tieneDenominador: false,
    avanceReportado: { numerador: null, denominador: null, resultado: null, valor: 163 },
    periodosAnteriores: [
      { periodo: 'Enero 2026',   valor: 142, estado: 'aprobado' },
      { periodo: 'Febrero 2026', valor: 158, estado: 'aprobado' },
      { periodo: 'Marzo 2026',   valor: 171, estado: 'aprobado' },
      { periodo: 'Abril 2026',   valor: 149, estado: 'aprobado' },
      { periodo: 'Mayo 2026',    valor: 163, estado: 'aprobado' }
    ],
    estado: 'aprobado_revisor',
    fechaLimite: '2026-05-30', periodo: 'Q2-2026', ultimaActualizacion: '2026-05-27',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [
      { id: 'f-05-a', nombre: 'altas-servicio-may-2026.pdf', tipo: 'PDF', tamanio: '1.2 MB', fechaCarga: '2026-05-27 15:00', cargadoPor: 'Ana Torres', estado: 'aprobado' }
    ],
    observaciones: [],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' },
      { fecha: '2026-05-27', hora: '15:00', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Evidencia cargada y enviada', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
      { fecha: '2026-05-29', hora: '11:30', usuario: 'Carlos Mendoza', rol: 'Revisor', accion: 'Aprobada técnicamente', estadoAnterior: 'pendiente_revision', estadoNuevo: 'aprobado_revisor' }
    ]
  },
  {
    id: 'COM-ACT-06',
    nombre: 'Atención de quejas y solicitudes de usuarios',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'A', nivel: 'Actividad',
    objetivo: 'Garantizar la atención oportuna de las quejas y solicitudes de los usuarios del servicio.',
    denominacionIndicador: 'Porcentaje de quejas atendidas en tiempo',
    metodoCalculo: '(Quejas atendidas en ≤ 5 días hábiles / Total de quejas recibidas) × 100',
    numerador: 'Quejas resueltas dentro del plazo establecido',
    denominador: 'Total de quejas y solicitudes recibidas en el periodo',
    frecuenciaMedicion: 'Mensual',
    medioVerificacion: 'Reporte mensual de atención a quejas del sistema SARE o equivalente.',
    formatoEsperado: 'PDF con folio SARE',
    reglasExtra: 'Debe incluir folio de cada queja, fecha de ingreso, fecha de resolución y tipo de atención brindada.',
    lineaBase: '76%', metaAnual: '90%', acumulable: false, tieneDenominador: true,
    avanceReportado: { numerador: 54, denominador: 61, resultado: 88.52 },
    periodosAnteriores: [
      { periodo: 'Enero 2026',   numerador: 43, denominador: 62, resultado: 69.35, estado: 'aprobado' },
      { periodo: 'Febrero 2026', numerador: 48, denominador: 64, resultado: 75.00, estado: 'aprobado' },
      { periodo: 'Marzo 2026',   numerador: 51, denominador: 63, resultado: 80.95, estado: 'aprobado' },
      { periodo: 'Abril 2026',   numerador: 52, denominador: 63, resultado: 82.54, estado: 'aprobado' }
    ],
    estado: 'aprobado_revisor',
    fechaLimite: '2026-05-30', periodo: 'Q2-2026', ultimaActualizacion: '2026-05-26',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [
      { id: 'f-06-a', nombre: 'reporte-quejas-may-2026.pdf', tipo: 'PDF', tamanio: '0.9 MB', fechaCarga: '2026-05-26 17:00', cargadoPor: 'Ana Torres', estado: 'aprobado' }
    ],
    observaciones: [],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' },
      { fecha: '2026-05-26', hora: '17:00', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Evidencia cargada y enviada', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
      { fecha: '2026-05-28', hora: '10:00', usuario: 'Carlos Mendoza', rol: 'Revisor', accion: 'Aprobada técnicamente', estadoAnterior: 'pendiente_revision', estadoNuevo: 'aprobado_revisor' }
    ]
  },
  {
    id: 'COM-ACT-07',
    nombre: 'Medición de tomas activas por sector geográfico',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'C', nivel: 'Componente',
    objetivo: 'Identificar el número real de tomas activas en cada sector para optimizar la lectura de medidores y la facturación.',
    denominacionIndicador: 'Porcentaje de tomas activas registradas',
    metodoCalculo: '(Tomas verificadas como activas / Total de tomas en padrón) × 100',
    numerador: 'Tomas con lectura de medidor registrada en el periodo',
    denominador: 'Total de tomas registradas en el padrón activo',
    frecuenciaMedicion: 'Bimestral',
    medioVerificacion: 'Reporte de lecturas de medidor por sector, firmado por el jefe de rutas.',
    formatoEsperado: 'Excel con captura de lecturas',
    reglasExtra: 'El archivo debe contener: sector, número de toma, lectura anterior, lectura actual y consumo calculado.',
    lineaBase: '82%', metaAnual: '93%', acumulable: false, tieneDenominador: true,
    periodosAnteriores: [
      { periodo: 'Bim. 1 (Ene–Feb)', numerador: 3892, denominador: 4810, resultado: 80.91, estado: 'aprobado' },
      { periodo: 'Bim. 2 (Mar–Abr)', numerador: 4105, denominador: 4892, resultado: 83.92, estado: 'aprobado' }
    ],
    estado: 'pendiente_carga',
    fechaLimite: '2026-06-22', periodo: 'Q2-2026', ultimaActualizacion: '2026-05-15',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [],
    observaciones: [],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' }
    ]
  },
  {
    id: 'COM-ACT-08',
    nombre: 'Gestión y seguimiento de la deuda morosa',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'A', nivel: 'Actividad',
    objetivo: 'Controlar la deuda morosa para reducir la cartera vencida y mejorar la recaudación del servicio.',
    denominacionIndicador: 'Porcentaje de recuperación de deuda morosa',
    metodoCalculo: '(Deuda morosa recuperada en el periodo / Total de deuda morosa al inicio) × 100',
    numerador: 'Monto recuperado de usuarios morosos en el mes',
    denominador: 'Monto total de deuda morosa al inicio del periodo',
    frecuenciaMedicion: 'Mensual',
    medioVerificacion: 'Reporte mensual de facturación con desglose de deuda morosa, firmado y con sello del responsable.',
    formatoEsperado: 'PDF (firmado y sellado)',
    reglasExtra: 'El reporte debe incluir: número de cuentas morosas, antigüedad de la deuda, montos por rango y acuerdos de pago activos.',
    lineaBase: '34%', metaAnual: '55%', acumulable: false, tieneDenominador: true,
    avanceReportado: { numerador: 280000, denominador: 620000, resultado: 45.16,
      comentario: 'La recuperación está por debajo de la meta mensual. El mes presentó un volumen inusualmente alto de acuerdos de pago diferidos que aún no se reflejan en el monto recuperado oficial.',
      analisis: { causas: 'Incremento del 18% en usuarios que solicitaron planes de pago a 3 meses. Los acuerdos firmados no se contabilizan como recuperación hasta el primer pago efectivo.', riesgos: 'Si los acuerdos no se cumplen, la deuda se acumulará al siguiente período y empeorará el indicador.', medidas: 'Se está implementando seguimiento individual a cada acuerdo con recordatorio automático de pago a través del sistema de cobranza.' } },
    periodosAnteriores: [
      { periodo: 'Enero 2026',   numerador: 185000, denominador: 620000, resultado: 29.84, estado: 'aprobado' },
      { periodo: 'Febrero 2026', numerador: 208000, denominador: 622000, resultado: 33.44, estado: 'aprobado' },
      { periodo: 'Marzo 2026',   numerador: 238000, denominador: 621000, resultado: 38.33, estado: 'aprobado' },
      { periodo: 'Abril 2026',   numerador: 261000, denominador: 620000, resultado: 42.10, estado: 'aprobado' },
      { periodo: 'Mayo 2026',    numerador: 275000, denominador: 620000, resultado: 44.35, estado: 'aprobado' }
    ],
    estado: 'observado',
    fechaLimite: '2026-06-17', periodo: 'Q2-2026', ultimaActualizacion: '2026-06-08',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [
      { id: 'f-08-a', nombre: 'deuda-morosa-jun-2026.xlsx', tipo: 'Excel', tamanio: '0.6 MB', fechaCarga: '2026-06-03 10:00', cargadoPor: 'Ana Torres', estado: 'observado' }
    ],
    observaciones: [
      {
        id: 'obs-08-01',
        texto: 'El archivo cargado no corresponde al medio de verificación requerido. Favor de adjuntar el reporte mensual de facturación en formato PDF, con sello y firma del responsable. El archivo Excel enviado no cuenta con las firmas necesarias ni el desglose por antigüedad de deuda.',
        autor: 'Carlos Mendoza',
        rolAutor: 'Revisor',
        fecha: '2026-06-08',
        hora: '17:15',
        atendida: false
      }
    ],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' },
      { fecha: '2026-06-03', hora: '10:00', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Evidencia cargada', estadoAnterior: 'pendiente_carga', estadoNuevo: 'pendiente_envio' },
      { fecha: '2026-06-03', hora: '10:15', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Enviada a revisión', estadoAnterior: 'pendiente_envio', estadoNuevo: 'enviado_revision' },
      { fecha: '2026-06-06', hora: '09:00', usuario: 'Carlos Mendoza', rol: 'Revisor', accion: 'Tomada para revisión', estadoAnterior: 'enviado_revision', estadoNuevo: 'pendiente_revision' },
      { fecha: '2026-06-08', hora: '17:15', usuario: 'Carlos Mendoza', rol: 'Revisor', accion: 'Observación emitida — evidencia incorrecta', estadoAnterior: 'pendiente_revision', estadoNuevo: 'observado' }
    ]
  },
  {
    id: 'COM-ACT-09',
    nombre: 'Contratos de servicio vigentes y renovaciones',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'A', nivel: 'Actividad',
    objetivo: 'Controlar el estado de los contratos de servicio para garantizar la formalización legal de los usuarios.',
    denominacionIndicador: 'Porcentaje de contratos vigentes sobre el total de usuarios',
    metodoCalculo: '(Contratos vigentes / Total de usuarios activos) × 100',
    numerador: 'Contratos con vigencia activa en el trimestre',
    denominador: 'Total de usuarios con servicio activo',
    frecuenciaMedicion: 'Trimestral',
    medioVerificacion: 'Reporte de contratos activos generado por el área jurídica-comercial.',
    formatoEsperado: 'PDF',
    reglasExtra: 'El reporte debe incluir: número de contrato, nombre del usuario, fecha de firma y fecha de vencimiento.',
    lineaBase: '61%', metaAnual: '85%', acumulable: false, tieneDenominador: true,
    avanceReportado: { numerador: 3847, denominador: 4682, resultado: 82.17 },
    periodosAnteriores: [
      { periodo: 'Q1-2026 (Ene–Mar)', numerador: 3280, denominador: 4640, resultado: 70.69, estado: 'aprobado' }
    ],
    estado: 'aprobado_revisor',
    fechaLimite: '2026-05-30', periodo: 'Q2-2026', ultimaActualizacion: '2026-05-28',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [
      { id: 'f-09-a', nombre: 'contratos-vigentes-q2-2026.pdf', tipo: 'PDF', tamanio: '3.5 MB', fechaCarga: '2026-05-28 09:30', cargadoPor: 'Ana Torres', estado: 'aprobado' }
    ],
    observaciones: [],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' },
      { fecha: '2026-05-28', hora: '09:30', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Evidencia cargada y enviada', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' },
      { fecha: '2026-05-30', hora: '14:00', usuario: 'Carlos Mendoza', rol: 'Revisor', accion: 'Aprobada técnicamente', estadoAnterior: 'pendiente_revision', estadoNuevo: 'aprobado_revisor' }
    ]
  },
  {
    id: 'COM-ACT-10',
    nombre: 'Análisis mensual de cartera vencida',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'C', nivel: 'Componente',
    objetivo: 'Cuantificar y segmentar la cartera vencida mensual para priorizar las acciones de cobranza.',
    denominacionIndicador: 'Índice de cartera vencida respecto a la facturación total',
    metodoCalculo: '(Monto de cartera vencida / Facturación total del periodo) × 100',
    numerador: 'Saldo de deuda mayor a 90 días de vencida',
    denominador: 'Total facturado en el mismo periodo',
    frecuenciaMedicion: 'Mensual',
    medioVerificacion: 'Reporte de cartera vencida por antigüedad, generado por el sistema de cobranza.',
    formatoEsperado: 'PDF o Excel',
    reglasExtra: 'Debe presentar segmentación por rango de antigüedad: 30, 60, 90 y más de 90 días.',
    lineaBase: '18%', metaAnual: '10%', acumulable: false, tieneDenominador: true,
    avanceReportado: { numerador: 1240000, denominador: 8500000, resultado: 14.59,
      comentario: 'El índice de cartera vencida sigue por encima de la meta de 10%, aunque muestra tendencia a la baja respecto al mes anterior (15.8%). Se adjunta reporte con desglose por antigüedad.',
      analisis: { causas: 'Concentración de cartera vencida en sector industrial (3 grandes cuentas) y en colonias de bajo ingreso donde la morosidad supera el 25%.', riesgos: 'Sin recuperación de las cuentas industriales grandes, no se alcanzará la meta anual del 10%.', medidas: 'Se escaló a dirección jurídica para inicio de cobranza extrajudicial en las 3 cuentas industriales. En colonias de bajo ingreso se aplicará programa de condonación de recargos condicionado a pago de capital.' } },
    periodosAnteriores: [
      { periodo: 'Enero 2026',   numerador: 1680000, denominador: 8100000, resultado: 20.74, estado: 'aprobado' },
      { periodo: 'Febrero 2026', numerador: 1580000, denominador: 8200000, resultado: 19.27, estado: 'aprobado' },
      { periodo: 'Marzo 2026',   numerador: 1480000, denominador: 8300000, resultado: 17.83, estado: 'aprobado' },
      { periodo: 'Abril 2026',   numerador: 1380000, denominador: 8400000, resultado: 16.43, estado: 'aprobado' },
      { periodo: 'Mayo 2026',    numerador: 1335000, denominador: 8450000, resultado: 15.80, estado: 'aprobado' }
    ],
    estado: 'enviado_revision',
    fechaLimite: '2026-07-01', periodo: 'Q2-2026', ultimaActualizacion: '2026-06-06',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [
      { id: 'f-10-a', nombre: 'cartera-vencida-jun-2026.pdf', tipo: 'PDF', tamanio: '1.4 MB', fechaCarga: '2026-06-06 16:00', cargadoPor: 'Ana Torres', estado: 'enviado' }
    ],
    observaciones: [],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' },
      { fecha: '2026-06-06', hora: '16:00', usuario: 'Ana Torres', rol: 'Enlace', accion: 'Evidencia cargada y enviada', estadoAnterior: 'pendiente_carga', estadoNuevo: 'enviado_revision' }
    ]
  },
  {
    id: 'COM-ACT-11',
    nombre: 'Gestión operativa de cobranza activa',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'A', nivel: 'Actividad',
    objetivo: 'Supervisar las acciones de cobranza realizadas en campo para incrementar el nivel de recaudación.',
    denominacionIndicador: 'Porcentaje de visitas de cobranza realizadas sobre las programadas',
    metodoCalculo: '(Visitas de cobranza realizadas / Visitas de cobranza programadas) × 100',
    numerador: 'Visitas de cobranza efectivamente realizadas',
    denominador: 'Total de visitas programadas en el plan de cobranza',
    frecuenciaMedicion: 'Mensual',
    medioVerificacion: 'Reporte de rutas de cobranza con registro de visitas realizadas y resultado.',
    formatoEsperado: 'PDF con firmas de campo',
    reglasExtra: 'El reporte debe incluir nombre del gestor de cobranza, zona asignada y resultado de cada visita (pago, acuerdo, ausente).',
    lineaBase: '70%', metaAnual: '88%', acumulable: false, tieneDenominador: true,
    periodosAnteriores: [
      { periodo: 'Enero 2026',   numerador: 115, denominador: 162, resultado: 70.99, estado: 'aprobado' },
      { periodo: 'Febrero 2026', numerador: 128, denominador: 172, resultado: 74.42, estado: 'aprobado' },
      { periodo: 'Marzo 2026',   numerador: 141, denominador: 178, resultado: 79.21, estado: 'aprobado' },
      { periodo: 'Abril 2026',   numerador: 148, denominador: 180, resultado: 82.22, estado: 'aprobado' },
      { periodo: 'Mayo 2026',    numerador: 156, denominador: 183, resultado: 85.25, estado: 'aprobado' }
    ],
    estado: 'pendiente_carga',
    fechaLimite: '2026-06-25', periodo: 'Q2-2026', ultimaActualizacion: '2026-05-15',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [],
    observaciones: [],
    historial: [
      { fecha: '2026-05-15', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad asignada al Enlace', estadoAnterior: null, estadoNuevo: 'pendiente_carga' }
    ]
  },
  {
    id: 'COM-ACT-12',
    nombre: 'Indicadores de eficiencia operativa comercial',
    gerencia: 'Gerencia Comercial',
    nivelCodigo: 'F', nivel: 'Fin',
    objetivo: 'Consolidar los indicadores estratégicos de la gerencia comercial para el informe anual de desempeño institucional.',
    denominacionIndicador: 'Índice de eficiencia operativa comercial (IEOC)',
    metodoCalculo: 'Promedio ponderado de los indicadores de facturación, cobranza, padrón y satisfacción',
    numerador: 'Suma ponderada de indicadores con meta alcanzada',
    denominador: 'Total de indicadores evaluados en el año',
    frecuenciaMedicion: 'Anual',
    medioVerificacion: 'Informe anual de la Gerencia Comercial con validación del Director General.',
    formatoEsperado: 'PDF (informe ejecutivo)',
    reglasExtra: 'El informe debe incluir metodología de ponderación, fuentes de datos y comparativo con el año anterior.',
    lineaBase: 'N/A (primer año)', metaAnual: '80 puntos (escala 100)', acumulable: false, tieneDenominador: false,
    periodosAnteriores: [],
    estado: 'borrador',
    fechaLimite: '2026-06-30', periodo: 'Q2-2026', ultimaActualizacion: '2026-06-01',
    responsableEnlace: 'Ana Torres', responsableRevisor: 'Carlos Mendoza',
    archivosEvidencia: [],
    observaciones: [],
    historial: [
      { fecha: '2026-06-01', hora: '09:00', usuario: 'Sistema', rol: 'Sistema', accion: 'Actividad creada como borrador', estadoAnterior: null, estadoNuevo: 'borrador' }
    ]
  }
];

// ── Configuración de estados ──────────────────────────────────────────────────
const ESTADO_CFG = {
  borrador:           { label: 'Borrador',          cls: 'borrador',           accion: 'Continuar',           btnCls: 'neutral' },
  pendiente_carga:    { label: 'Pendiente de carga', cls: 'pendiente_carga',    accion: 'Cargar evidencia',    btnCls: 'primary' },
  pendiente_envio:    { label: 'Listo para enviar',  cls: 'pendiente_envio',    accion: 'Enviar a revisión',   btnCls: 'primary' },
  enviado_revision:   { label: 'En revisión',        cls: 'enviado_revision',   accion: 'Ver detalle',         btnCls: 'neutral' },
  pendiente_revision: { label: 'En revisión',        cls: 'enviado_revision',   accion: 'Ver detalle',         btnCls: 'neutral' },
  observado:          { label: 'Observada',           cls: 'observado',          accion: 'Atender observación', btnCls: 'warning' },
  corregido:          { label: 'Corrección enviada',  cls: 'corregido',          accion: 'Ver detalle',         btnCls: 'neutral' },
  aprobado_revisor:   { label: 'Aprobada',            cls: 'aprobado_revisor',   accion: 'Ver aprobada',        btnCls: 'success' },
  validado_admin:     { label: 'Validada',            cls: 'aprobado_revisor',   accion: 'Ver detalle',         btnCls: 'success' },
  publicado:          { label: 'Publicada',           cls: 'aprobado_revisor',   accion: 'Ver detalle',         btnCls: 'success' },
  vencido:            { label: 'Vencida',             cls: 'vencido',            accion: 'Ver detalle',         btnCls: 'danger'  },
};

// ── Configuración de niveles MIR ──────────────────────────────────────────────
const NIVEL_CFG = {
  'F': { label: 'Fin',        cls: 'nivel-fin'        },
  'P': { label: 'Propósito',  cls: 'nivel-proposito'  },
  'C': { label: 'Componente', cls: 'nivel-componente' },
  'A': { label: 'Actividad',  cls: 'nivel-actividad'  },
};

function getActividad(id) {
  return ACTIVIDADES_ENLACE.find(a => a.id === id) || null;
}

function diasRestantes(fechaLimite) {
  const hoy  = new Date('2026-06-09'); // fecha mock del prototipo
  const meta = new Date(fechaLimite);
  return Math.round((meta - hoy) / 86400000);
}

function formatFecha(iso) {
  if (!iso) return '—';
  const [y, m, d] = iso.split('T')[0].split('-');
  const meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  return `${parseInt(d)} ${meses[parseInt(m)-1]} ${y}`;
}

// ── Helpers del Revisor ───────────────────────────────────────────────────────
const ESTADOS_REVISOR = ['enviado_revision','pendiente_revision','observado','corregido','aprobado_revisor','validado_admin','publicado','vencido'];

function getActividadesRevisor() {
  return ACTIVIDADES_ENLACE.filter(a => ESTADOS_REVISOR.includes(a.estado));
}

function prioridad(act) {
  const d = diasRestantes(act.fechaLimite);
  if (act.estado === 'corregido') return 'alta';
  if (d < 0) return 'vencida';
  if (d <= 7) return 'alta';
  if (d <= 14) return 'media';
  return 'normal';
}

function fechaEnvio(act) {
  const envio = [...act.historial].reverse().find(h =>
    ['enviado_revision','corregido'].includes(h.estadoNuevo)
  );
  return envio ? envio.fecha : act.ultimaActualizacion;
}
