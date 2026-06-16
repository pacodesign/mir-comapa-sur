// ═══ VALIDACIÓN DE REPORTES — Estado por gerencia+período ═══
// Admin valida a nivel de gerencia+período, no indicador por indicador

const VALIDACION_KEY = 'comapa_validaciones';

const VAL_ESTADOS = {
  pendiente: { label: 'Pendiente',            color: '#6B7280', bg: '#F3F4F6', dot: '#9CA3AF' },
  lista:     { label: 'Lista para validar',   color: '#059669', bg: '#D1FAE5', dot: '#10B981' },
  validado:  { label: 'Validado oficialmente',color: '#1D4ED8', bg: '#EFF6FF', dot: '#3B82F6' },
};

// Seed: Q2-2026 (período actual) + Q1-2026 (histórico)
const SEED_VALIDACIONES = [
  // ── Q2-2026 ────────────────────────────────────────────────────────────────
  {
    key: 'planeacion-Q2-2026', gerencia: 'planeacion', periodo: 'Q2-2026',
    estado: 'validado',
    comentariosAdmin: 'Reporte Q2 Planeación Estratégica validado. Los 4 indicadores aprobados por el revisor reflejan el avance esperado del POA. Los 2 indicadores pendientes se reportarán en el cierre de junio.',
    fechaValidacion: '2026-06-01',
    stats: { total:8, aprobados:4, enRevision:2, observados:0, pendientes:2, sinIniciar:0 },
  },
  {
    key: 'tecnica-Q2-2026', gerencia: 'tecnica', periodo: 'Q2-2026',
    estado: 'lista',
    comentariosAdmin: '',
    fechaValidacion: null,
    stats: { total:18, aprobados:10, enRevision:3, observados:2, pendientes:2, sinIniciar:1 },
  },
  {
    key: 'comercial-Q2-2026', gerencia: 'comercial', periodo: 'Q2-2026',
    estado: 'pendiente',
    comentariosAdmin: '',
    fechaValidacion: null,
    stats: { total:12, aprobados:5, enRevision:2, observados:1, pendientes:3, sinIniciar:1 },
  },
  {
    key: 'administrativa-Q2-2026', gerencia: 'administrativa', periodo: 'Q2-2026',
    estado: 'validado',
    comentariosAdmin: 'Reporte Q2 Administrativa validado. La ejecución presupuestal avanza en línea con el PAC 2026. Se autoriza continuación del ejercicio.',
    fechaValidacion: '2026-06-10',
    stats: { total:15, aprobados:7, enRevision:3, observados:1, pendientes:3, sinIniciar:1 },
  },
  // ── Q1-2026 (histórico, todas validadas) ──────────────────────────────────
  {
    key: 'planeacion-Q1-2026', gerencia: 'planeacion', periodo: 'Q1-2026',
    estado: 'validado',
    comentariosAdmin: 'Cierre Q1 Planeación: Todos los indicadores reportados y aprobados. Avance POA dentro de parámetros institucionales.',
    fechaValidacion: '2026-04-05',
    stats: { total:8, aprobados:8, enRevision:0, observados:0, pendientes:0, sinIniciar:0 },
  },
  {
    key: 'tecnica-Q1-2026', gerencia: 'tecnica', periodo: 'Q1-2026',
    estado: 'validado',
    comentariosAdmin: 'Cierre Q1 Técnica: Cobertura e infraestructura dentro de meta. Se notó rezago en 1 indicador de pérdidas, subsanado con nota técnica.',
    fechaValidacion: '2026-04-08',
    stats: { total:18, aprobados:17, enRevision:0, observados:1, pendientes:0, sinIniciar:0 },
  },
  {
    key: 'comercial-Q1-2026', gerencia: 'comercial', periodo: 'Q1-2026',
    estado: 'validado',
    comentariosAdmin: 'Cierre Q1 Comercial: Facturación y cobranza superaron la meta. Medición actualizada al padrón depurado.',
    fechaValidacion: '2026-04-07',
    stats: { total:12, aprobados:11, enRevision:0, observados:1, pendientes:0, sinIniciar:0 },
  },
  {
    key: 'administrativa-Q1-2026', gerencia: 'administrativa', periodo: 'Q1-2026',
    estado: 'validado',
    comentariosAdmin: 'Cierre Q1 Administrativa: Ejecución 100% aprobada. Procesos de adquisición y control de inventario sin observaciones.',
    fechaValidacion: '2026-04-09',
    stats: { total:15, aprobados:15, enRevision:0, observados:0, pendientes:0, sinIniciar:0 },
  },
];

function _loadVals() {
  try {
    var s = localStorage.getItem(VALIDACION_KEY);
    if (s) return JSON.parse(s);
  } catch(e) {}
  var v = {};
  SEED_VALIDACIONES.forEach(function(val){ v[val.key] = val; });
  _saveVals(v);
  return v;
}

function _saveVals(vals) {
  try { localStorage.setItem(VALIDACION_KEY, JSON.stringify(vals)); } catch(e) {}
}

function getValidacion(key)      { return _loadVals()[key] || null; }
function getAllValidaciones()     { return Object.values(_loadVals()); }
function getValsPeriodo(periodo) { return getAllValidaciones().filter(function(v){ return v.periodo === periodo; }); }

function upsertValidacion(val) {
  var v = _loadVals();
  v[val.key] = val;
  _saveVals(v);
}

function resetValidaciones() { localStorage.removeItem(VALIDACION_KEY); }
