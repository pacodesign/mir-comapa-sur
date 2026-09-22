/**
 * mir-gerencial-data.js — COMAPA Sur · Indicadores Gerenciales
 *
 * Indicadores de reporte ejecutivo para las 4 gerencias generales.
 * No siguen el esquema MIR: solo requieren valor mensual e historial.
 * IDs con prefijo GER- para distinguirlos de indicadores MIR (MIR-).
 */

var ACTIVIDADES_GERENCIA = [

  /* ══════════════════════════════════════════════════════════════
     GERENCIA ADMINISTRATIVA — 9 indicadores
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'GER-ADM-001',
    nombreIndicador: 'Saldo en bancos',
    gerencia: 'Gerencia Administrativa',
    area: 'Coordinación de Finanzas',
    unidadMedida: 'MXN',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Saldo disponible en cuentas bancarias institucionales al cierre del período'
  },
  {
    id: 'GER-ADM-002',
    nombreIndicador: 'Pago a proveedores',
    gerencia: 'Gerencia Administrativa',
    area: 'Coordinación de Finanzas',
    unidadMedida: 'MXN',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Importe total pagado a proveedores de bienes y servicios en el período'
  },
  {
    id: 'GER-ADM-003',
    nombreIndicador: 'Recaudación agua y drenaje',
    gerencia: 'Gerencia Administrativa',
    area: 'Coordinación de Finanzas',
    unidadMedida: 'MXN',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Importe total recaudado por conceptos de agua potable y drenaje en el período'
  },
  {
    id: 'GER-ADM-004',
    nombreIndicador: 'Ingreso captado acumulado',
    gerencia: 'Gerencia Administrativa',
    area: 'Coordinación de Finanzas',
    unidadMedida: 'MXN',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Total de ingresos captados de forma acumulada desde el inicio del ejercicio fiscal'
  },
  {
    id: 'GER-ADM-005',
    nombreIndicador: 'Egreso ejercido acumulado',
    gerencia: 'Gerencia Administrativa',
    area: 'Coordinación de Finanzas',
    unidadMedida: 'MXN',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Total de egresos ejercidos de forma acumulada desde el inicio del ejercicio fiscal'
  },
  {
    id: 'GER-ADM-006',
    nombreIndicador: 'Horas extras',
    gerencia: 'Gerencia Administrativa',
    area: 'Coordinación de Recursos Humanos',
    unidadMedida: 'hrs',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Total de horas extras autorizadas y pagadas en el período (incluye GT, GC y GA)'
  },
  {
    id: 'GER-ADM-007',
    nombreIndicador: 'Empleados totales',
    gerencia: 'Gerencia Administrativa',
    area: 'Coordinación de Recursos Humanos',
    unidadMedida: 'personas',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Número total de empleados activos al cierre del período (confianza + sindicalizados)'
  },
  {
    id: 'GER-ADM-008',
    nombreIndicador: 'Contratos vigentes',
    gerencia: 'Gerencia Administrativa',
    area: 'Coordinación de Adquisiciones',
    unidadMedida: 'contratos',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Número total de contratos activos en el período (bienes y servicios)'
  },
  {
    id: 'GER-ADM-009',
    nombreIndicador: 'Demandas laborales activas',
    gerencia: 'Gerencia Administrativa',
    area: 'Coordinación Jurídica',
    unidadMedida: 'demandas',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Número de demandas laborales activas ante autoridades competentes al cierre del período'
  },

  /* ══════════════════════════════════════════════════════════════
     GERENCIA TÉCNICA — 9 indicadores
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'GER-TEC-001',
    nombreIndicador: 'Caudal Altavista',
    gerencia: 'Gerencia Técnica',
    area: 'Coordinación de Plantas Potabilizadoras y Cárcamos',
    unidadMedida: 'lps',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Caudal promedio diario producido en la planta potabilizadora Altavista durante el período'
  },
  {
    id: 'GER-TEC-002',
    nombreIndicador: 'Volumen producido Altavista',
    gerencia: 'Gerencia Técnica',
    area: 'Coordinación de Plantas Potabilizadoras y Cárcamos',
    unidadMedida: 'm³',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Volumen total de agua potable producida en la planta Altavista durante el período'
  },
  {
    id: 'GER-TEC-003',
    nombreIndicador: 'Caudal Laguna de la Puerta',
    gerencia: 'Gerencia Técnica',
    area: 'Coordinación de Plantas Potabilizadoras y Cárcamos',
    unidadMedida: 'lps',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Caudal promedio diario producido en la planta potabilizadora Laguna de la Puerta durante el período'
  },
  {
    id: 'GER-TEC-004',
    nombreIndicador: 'Volumen producido La Puerta',
    gerencia: 'Gerencia Técnica',
    area: 'Coordinación de Plantas Potabilizadoras y Cárcamos',
    unidadMedida: 'm³',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Volumen total de agua potable producida en la planta Laguna de la Puerta durante el período'
  },
  {
    id: 'GER-TEC-005',
    nombreIndicador: 'Atención a fugas',
    gerencia: 'Gerencia Técnica',
    area: 'Coordinación de Distribución y Mantenimiento de Redes',
    unidadMedida: '%',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: true,
    numerador: 'Número de fugas en red de distribución atendidas y reparadas en el período',
    denominador: 'Número total de fugas reportadas en el período'
  },
  {
    id: 'GER-TEC-006',
    nombreIndicador: 'Desazolves realizados',
    gerencia: 'Gerencia Técnica',
    area: 'Coordinación de Distribución y Mantenimiento de Redes',
    unidadMedida: '%',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: true,
    numerador: 'Número de trabajos de desazolve realizados en la red de drenaje en el período',
    denominador: 'Número de desazolves programados en el período'
  },
  {
    id: 'GER-TEC-007',
    nombreIndicador: 'Cobertura red de agua',
    gerencia: 'Gerencia Técnica',
    area: 'Gerencia Técnica',
    unidadMedida: 'km',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Kilómetros totales de red de distribución de agua potable en operación al cierre del período'
  },
  {
    id: 'GER-TEC-008',
    nombreIndicador: 'Cobertura red de drenaje',
    gerencia: 'Gerencia Técnica',
    area: 'Gerencia Técnica',
    unidadMedida: 'km',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Kilómetros totales de red de drenaje sanitario en operación al cierre del período'
  },
  {
    id: 'GER-TEC-009',
    nombreIndicador: 'Título CONAGUA vigente',
    gerencia: 'Gerencia Técnica',
    area: 'Gerencia Técnica',
    unidadMedida: 'm³',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Volumen anual de extracción concesionado por CONAGUA vigente al cierre del período'
  },

  /* ══════════════════════════════════════════════════════════════
     GERENCIA COMERCIAL — 7 indicadores
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'GER-COM-001',
    nombreIndicador: 'Facturación total',
    gerencia: 'Gerencia Comercial',
    area: 'Coordinación de Facturación y Medición',
    unidadMedida: 'MXN',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Importe total facturado por agua potable, drenaje y saneamiento en el período'
  },
  {
    id: 'GER-COM-002',
    nombreIndicador: 'Rezago acumulado',
    gerencia: 'Gerencia Comercial',
    area: 'Coordinación de Control de Rezago',
    unidadMedida: 'MXN',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Cartera vencida total acumulada en el padrón comercial al cierre del período'
  },
  {
    id: 'GER-COM-003',
    nombreIndicador: 'Eficiencia de micromedición',
    gerencia: 'Gerencia Comercial',
    area: 'Coordinación de Facturación y Medición',
    unidadMedida: '%',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: true,
    numerador: 'Número de tomas con medidor activo, en buen estado y con lectura en el período',
    denominador: 'Total de tomas activas del padrón comercial'
  },
  {
    id: 'GER-COM-004',
    nombreIndicador: 'Total de tomas',
    gerencia: 'Gerencia Comercial',
    area: 'Coordinación de Padrón y Censo',
    unidadMedida: 'tomas',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Número total de tomas activas registradas en el padrón comercial al cierre del período'
  },
  {
    id: 'GER-COM-005',
    nombreIndicador: 'Nuevos contratos',
    gerencia: 'Gerencia Comercial',
    area: 'Coordinación de Padrón y Censo',
    unidadMedida: 'contratos',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Número de contratos de servicio nuevos formalizados y registrados en el padrón en el período'
  },
  {
    id: 'GER-COM-006',
    nombreIndicador: 'Servicios limitados',
    gerencia: 'Gerencia Comercial',
    area: 'Coordinación de Política de Ingresos',
    unidadMedida: 'tomas',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Número de tomas con servicio limitado o suspendido por adeudo al cierre del período'
  },
  {
    id: 'GER-COM-007',
    nombreIndicador: 'Importe recuperado',
    gerencia: 'Gerencia Comercial',
    area: 'Coordinación de Control de Rezago',
    unidadMedida: 'MXN',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Importe total recuperado de cartera vencida mediante gestión de cobranza y convenios en el período'
  },

  /* ══════════════════════════════════════════════════════════════
     GERENCIA DE PLANEACIÓN ESTRATÉGICA — 7 indicadores
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'GER-PLA-001',
    nombreIndicador: 'Caudal PTAR Tierra Negra',
    gerencia: 'Gerencia de Planeación Estratégica',
    area: 'Coordinación de Seguimiento a Plantas de Tratamiento',
    unidadMedida: 'lps',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Caudal promedio diario de agua residual tratada en la PTAR Tierra Negra durante el período'
  },
  {
    id: 'GER-PLA-002',
    nombreIndicador: 'Volumen tratado PTAR Tierra Negra',
    gerencia: 'Gerencia de Planeación Estratégica',
    area: 'Coordinación de Seguimiento a Plantas de Tratamiento',
    unidadMedida: 'm³',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Volumen total de agua residual tratada en la PTAR Tierra Negra durante el período'
  },
  {
    id: 'GER-PLA-003',
    nombreIndicador: 'Caudal PTAR Morelos',
    gerencia: 'Gerencia de Planeación Estratégica',
    area: 'Coordinación de Seguimiento a Plantas de Tratamiento',
    unidadMedida: 'lps',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Caudal promedio diario de agua residual tratada en la PTAR Morelos durante el período'
  },
  {
    id: 'GER-PLA-004',
    nombreIndicador: 'Volumen tratado PTAR Morelos',
    gerencia: 'Gerencia de Planeación Estratégica',
    area: 'Coordinación de Seguimiento a Plantas de Tratamiento',
    unidadMedida: 'm³',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Volumen total de agua residual tratada en la PTAR Morelos durante el período'
  },
  {
    id: 'GER-PLA-005',
    nombreIndicador: 'Caudal PTOI Refinería',
    gerencia: 'Gerencia de Planeación Estratégica',
    area: 'Departamento de Seguimiento a Plantas de Tratamiento',
    unidadMedida: 'lps',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Caudal promedio diario de agua industrial tratada en la PTOI Refinería durante el período'
  },
  {
    id: 'GER-PLA-006',
    nombreIndicador: 'Volumen tratado PTOI Refinería',
    gerencia: 'Gerencia de Planeación Estratégica',
    area: 'Departamento de Seguimiento a Plantas de Tratamiento',
    unidadMedida: 'm³',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Volumen total de agua industrial tratada en la PTOI Refinería durante el período'
  },
  {
    id: 'GER-PLA-007',
    nombreIndicador: 'Solicitudes de transparencia',
    gerencia: 'Gerencia de Planeación Estratégica',
    area: 'Coordinación General de Planeación Estratégica',
    unidadMedida: 'solicitudes',
    frecuenciaMedicion: 'Mensual',
    fechaLimite: '10 Sep 2026',
    periodo: 'Agosto 2026',
    estado: 'pendiente_carga',
    tieneDenominador: false,
    numerador: 'Número de solicitudes de acceso a la información pública recibidas y registradas en el período'
  }

];
