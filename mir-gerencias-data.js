// mir-gerencias-data.js — Metadatos de gerencias MIR COMAPA Sur
// Todas las gerencias usan datos reales de ACTIVIDADES_ENLACE
const GERENCIAS_MIR = [
  {
    id: 'planeacion',
    nombre: 'Planeación Estratégica',
    gerenciaName: 'Gerencia de Planeación Estratégica',
    descripcion: 'Seguimiento institucional, proyectos estratégicos e indicadores de desempeño.',
    color: '#7C3AED',
    frecuencias: ['Mensual', 'Trimestral', 'Semestral', 'Anual'],
    enlace:  { nombre: 'Ana Torres',     iniciales: 'AT' },
    revisor: { nombre: 'Carlos Mendoza', iniciales: 'CM' },
    periodo: 'T2-2026', fechaLimite: '2026-06-30',
    usaDataReal: true,
  },
  {
    id: 'comercial',
    nombre: 'Gerencia Comercial',
    gerenciaName: 'Gerencia Comercial',
    descripcion: 'Ingresos, medición, facturación, cobranza y atención comercial.',
    color: '#8B1D3A',
    frecuencias: ['Mensual', 'Trimestral', 'Semestral', 'Anual'],
    enlace:  { nombre: 'Ana Torres',     iniciales: 'AT' },
    revisor: { nombre: 'Carlos Mendoza', iniciales: 'CM' },
    periodo: 'T2-2026', fechaLimite: '2026-07-01',
    usaDataReal: true,
  },
  {
    id: 'administrativa',
    nombre: 'Gerencia Administrativa',
    gerenciaName: 'Gerencia Administrativa',
    descripcion: 'Recursos, adquisiciones, finanzas, personal e insumos institucionales.',
    color: '#065F46',
    frecuencias: ['Mensual', 'Trimestral', 'Semestral', 'Anual'],
    enlace:  { nombre: 'María López',    iniciales: 'ML' },
    revisor: { nombre: 'Laura Vega',     iniciales: 'LV' },
    periodo: 'T2-2026', fechaLimite: '2026-06-30',
    usaDataReal: true,
  },
  {
    id: 'tecnica',
    nombre: 'Gerencia Técnica',
    gerenciaName: 'Gerencia Técnica',
    descripcion: 'Operación, mantenimiento, infraestructura y servicios técnicos del ciclo del agua.',
    color: '#0891B2',
    frecuencias: ['Mensual', 'Trimestral', 'Semestral', 'Anual'],
    enlace:  { nombre: 'Jorge Reyes',        iniciales: 'JR' },
    revisor: { nombre: 'Miguel Ángel Pérez', iniciales: 'MP' },
    periodo: 'T2-2026', fechaLimite: '2026-06-30',
    usaDataReal: true,
  },
];

function getGerencia(id) { return GERENCIAS_MIR.find(g => g.id === id) || null; }

function getIndicadoresPorGerencia(gerenciaId) {
  const g = getGerencia(gerenciaId);
  if (!g || typeof ACTIVIDADES_ENLACE === 'undefined') return [];
  return ACTIVIDADES_ENLACE.filter(a => a.gerencia === g.gerenciaName);
}

function getStatsGerencia(gerenciaId) {
  const inds = getIndicadoresPorGerencia(gerenciaId);
  return {
    total:       inds.length,
    listos:      inds.filter(a => a.estado === 'listo_validar').length,
    cerrados:    inds.filter(a => a.estado === 'cerrado').length,
    enRevision:  inds.filter(a => ['enviado_revision','corregido'].includes(a.estado)).length,
    observados:  inds.filter(a => a.estado === 'observado').length,
    pendientes:  inds.filter(a => ['pendiente_carga','pendiente_envio','borrador'].includes(a.estado)).length,
    vencidos:    inds.filter(a => a.estado === 'vencido').length,
  };
}
