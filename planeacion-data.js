// ═══ PLANEACIÓN DE METAS 2026 — Estado compartido ═══
// Persiste en localStorage para simular flujo cross-page en el prototipo

const PLANEACION_KEY = 'comapa_planes_2026';

const PERIODOS_LABELS = {
  Mensual:    ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
  Bimestral:  ['Bim.1 Ene-Feb','Bim.2 Mar-Abr','Bim.3 May-Jun','Bim.4 Jul-Ago','Bim.5 Sep-Oct','Bim.6 Nov-Dic'],
  Trimestral: ['Q1 Ene-Mar','Q2 Abr-Jun','Q3 Jul-Sep','Q4 Oct-Dic'],
  Semestral:  ['S1 Ene-Jun','S2 Jul-Dic'],
  Anual:      ['2026'],
};

const ESTADO_CFG = {
  pendiente:  { label: 'Sin capturar',       color: '#6B7280', bg: '#F3F4F6', icon: '○' },
  borrador:   { label: 'Borrador',            color: '#92400E', bg: '#FEF3C7', icon: '◐' },
  enviado:    { label: 'Enviado a revisor',   color: '#1D4ED8', bg: '#EFF6FF', icon: '●' },
  observado:  { label: 'Con observaciones',   color: '#EA580C', bg: '#FFF7ED', icon: '⚠' },
  aprobado:   { label: 'Aprobado por revisor',color: '#059669', bg: '#D1FAE5', icon: '✓' },
  bloqueado:  { label: 'Aprobado · Fijado',   color: '#16A34A', bg: '#F0FDF4', icon: '🔒' },
};

// Seed data — estados variados para demostrar el flujo completo
const SEED_PLANES = [
  // ── COMERCIAL ──────────────────────────────────────────────────────────────
  {
    id:'COM-ACT-01', gerencia:'comercial', frecuencia:'Trimestral',
    metas:[82,85,87,90],
    comentariosEnlace:'Meta progresiva basada en cierre 2025 (80%). Q1 conservador por ajuste de padrón activo. Se incrementa ~2.5 pp por trimestre.',
    estado:'bloqueado',
    obsRevisor:'Metas consistentes con el histórico y el programa de actualización catastral. Aprobadas.',
    obsAdmin:'Aprobado definitivamente. Leticia Solís — 20 Mar 2026.',
    fechaEnvio:'2026-03-10', fechaRevision:'2026-03-15', fechaAprobacion:'2026-03-20'
  },
  {
    id:'COM-ACT-02', gerencia:'comercial', frecuencia:'Trimestral',
    metas:[75,78,80,83],
    comentariosEnlace:'Incremento gradual desde base 2025 (73%). Q4 optimista pero alcanzable con campaña de detección de medidores irregulares prevista para agosto.',
    estado:'aprobado',
    obsRevisor:'Revisadas contra histórico. Metas razonables y bien justificadas. Se aprueba con seguimiento mensual.',
    obsAdmin:'', fechaEnvio:'2026-03-12', fechaRevision:'2026-03-18', fechaAprobacion:null
  },
  {
    id:'COM-ACT-03', gerencia:'comercial', frecuencia:'Mensual',
    metas:[88,88,89,89,90,90,91,91,92,92,93,93],
    comentariosEnlace:'Meta escalonada mensual. Incremento de 0.5 pp por bimestre. Dic alcanza 93% acorde al POA.',
    estado:'observado',
    obsRevisor:'La meta de Ene-Feb (88%) parece conservadora dado el desempeño actual de 92.4%. Favor de revisar al alza o justificar la caída esperada.',
    obsAdmin:'', fechaEnvio:'2026-04-05', fechaRevision:'2026-04-10', fechaAprobacion:null
  },
  {
    id:'COM-ACT-04', gerencia:'comercial', frecuencia:'Semestral',
    metas:[85,90],
    comentariosEnlace:'S1 conservador por proceso de depuración de padrón en curso. S2 sube una vez consolidado el registro de usuarios activos.',
    estado:'enviado',
    obsRevisor:'', obsAdmin:'', fechaEnvio:'2026-05-02', fechaRevision:null, fechaAprobacion:null
  },
  {
    id:'COM-ACT-05', gerencia:'comercial', frecuencia:'Mensual',
    metas:[140,150,160,150,155,160,165,155,160,170,165,170],
    comentariosEnlace:'Indicador acumulable. Meta total: 1,800 conexiones nuevas. Distribución considera temporalidad de obras y capacidad de brigadas. Dic suma las rezagadas del año.',
    estado:'borrador',
    obsRevisor:'', obsAdmin:'', fechaEnvio:null, fechaRevision:null, fechaAprobacion:null
  },
  {
    id:'COM-ACT-06', gerencia:'comercial', frecuencia:'Mensual',
    metas:[5,5,4,5,5,4,5,5,4,5,5,4],
    comentariosEnlace:'Meta de 5 días hábiles promedio. Dic-Ene puede bajar a 4 días por cierres de fin de año y vacaciones del personal técnico.',
    estado:'enviado',
    obsRevisor:'', obsAdmin:'', fechaEnvio:'2026-05-15', fechaRevision:null, fechaAprobacion:null
  },
  // ── PLANEACIÓN ─────────────────────────────────────────────────────────────
  {
    id:'PE-ACT-01', gerencia:'planeacion', frecuencia:'Trimestral',
    metas:[80,82,84,86],
    comentariosEnlace:'Avance POA trimestral con incremento de 2 pp por trimestre. Acorde al cronograma de compromisos directivos.',
    estado:'bloqueado',
    obsRevisor:'Aprobado. Metas consistentes con el POA 2026 y los compromisos directivos.',
    obsAdmin:'Aprobado. Marco Gutiérrez y Patricia Vázquez confirmaron viabilidad.',
    fechaEnvio:'2026-02-28', fechaRevision:'2026-03-05', fechaAprobacion:'2026-03-12'
  },
  {
    id:'PE-ACT-02', gerencia:'planeacion', frecuencia:'Trimestral',
    metas:[72,74,76,78],
    comentariosEnlace:'Metas conservadoras dado el inicio de nuevos proyectos estratégicos que requieren curva de aprendizaje en Q1-Q2.',
    estado:'aprobado',
    obsRevisor:'Adecuado considerando la complejidad de los proyectos de largo aliento. Se aprueba con seguimiento trimestral.',
    obsAdmin:'', fechaEnvio:'2026-03-01', fechaRevision:'2026-03-06', fechaAprobacion:null
  },
  {
    id:'PE-ACT-05', gerencia:'planeacion', frecuencia:'Trimestral',
    metas:[65,70,75,80],
    comentariosEnlace:'Proyecto nuevo. Inicio bajo por fases de diseño. Escala conforme avanza la implementación.',
    estado:'enviado',
    obsRevisor:'', obsAdmin:'', fechaEnvio:'2026-05-20', fechaRevision:null, fechaAprobacion:null
  },
  // ── TÉCNICA ────────────────────────────────────────────────────────────────
  {
    id:'TEC-ACT-01', gerencia:'tecnica', frecuencia:'Mensual',
    metas:[75,76,76,77,77,78,78,79,79,80,80,81],
    comentariosEnlace:'Mejora incremental en eficiencia de distribución. +1 pp por bimestre. Inicio bajo por trabajos de rehabilitación en sector norte previsto para Q1.',
    estado:'enviado',
    obsRevisor:'', obsAdmin:'', fechaEnvio:'2026-04-20', fechaRevision:null, fechaAprobacion:null
  },
  {
    id:'TEC-ACT-02', gerencia:'tecnica', frecuencia:'Trimestral',
    metas:[93,94,94,95],
    comentariosEnlace:'Cobertura ya en nivel alto (94.2%). Meta de sostenimiento con mejora marginal en Q4 gracias al plan de extensión de red a colonias periféricas.',
    estado:'aprobado',
    obsRevisor:'Cobertura actual es 94.2%. Metas realizables y consistentes con el programa de expansión. Aprobado.',
    obsAdmin:'', fechaEnvio:'2026-03-25', fechaRevision:'2026-04-02', fechaAprobacion:null
  },
  {
    id:'TEC-ACT-04', gerencia:'tecnica', frecuencia:'Bimestral',
    metas:[33,32,31,31,30,30],
    comentariosEnlace:'Reducción progresiva de pérdidas. Meta ambiciosa pero alcanzable con el programa de sectorización.',
    estado:'bloqueado',
    obsRevisor:'Aprobado. Las metas de reducción son alcanzables con el presupuesto de rehabilitación aprobado.',
    obsAdmin:'Aprobado definitivamente.',
    fechaEnvio:'2026-02-20', fechaRevision:'2026-02-26', fechaAprobacion:'2026-03-03'
  },
  // ── ADMINISTRATIVA ─────────────────────────────────────────────────────────
  {
    id:'ADM-ACT-01', gerencia:'administrativa', frecuencia:'Mensual',
    metas:[70,71,72,73,74,75,76,77,78,79,80,81],
    comentariosEnlace:'Ejecución presupuestal progresiva. Q1 lento por adjudicaciones del PAC. Escala conforme se formalizan contratos.',
    estado:'bloqueado',
    obsRevisor:'Revisado y consistente con el PAC 2026 y el calendario de adquisiciones. Aprobado.',
    obsAdmin:'Aprobado definitivamente. Ejecución monitoreada mensualmente.',
    fechaEnvio:'2026-02-25', fechaRevision:'2026-03-03', fechaAprobacion:'2026-03-10'
  },
  {
    id:'ADM-ACT-02', gerencia:'administrativa', frecuencia:'Mensual',
    metas:[88,88,89,89,89,90,90,90,91,91,92,92],
    comentariosEnlace:'Pagos a proveedores en tiempo. Meta alta desde inicio por procesos bien establecidos.',
    estado:'enviado',
    obsRevisor:'', obsAdmin:'', fechaEnvio:'2026-04-28', fechaRevision:null, fechaAprobacion:null
  },
  {
    id:'ADM-ACT-04', gerencia:'administrativa', frecuencia:'Trimestral',
    metas:[78,80,82,84],
    comentariosEnlace:'Eficiencia en adquisiciones. Mejora Q1 por digitalización del módulo de requisiciones.',
    estado:'aprobado',
    obsRevisor:'Metas conservadoras pero alcanzables. Aprobado con recomendación de actualizar mensualmente.',
    obsAdmin:'', fechaEnvio:'2026-04-10', fechaRevision:'2026-04-18', fechaAprobacion:null
  },
];

// ── Persistencia ─────────────────────────────────────────────────────────────

function _loadPlanes() {
  try {
    var s = localStorage.getItem(PLANEACION_KEY);
    if (s) return JSON.parse(s);
  } catch(e) {}
  var p = {};
  SEED_PLANES.forEach(function(plan) { p[plan.id] = plan; });
  _savePlanes(p);
  return p;
}

function _savePlanes(planes) {
  try { localStorage.setItem(PLANEACION_KEY, JSON.stringify(planes)); } catch(e) {}
}

// ── API pública ──────────────────────────────────────────────────────────────

function getPlan(id)         { return _loadPlanes()[id] || null; }
function getAllPlanes()       { return Object.values(_loadPlanes()); }
function getPlanesGerencia(g){ return getAllPlanes().filter(function(p){ return p.gerencia === g; }); }

function upsertPlan(plan) {
  var p = _loadPlanes();
  p[plan.id] = plan;
  _savePlanes(p);
}

function resetPlanes() { localStorage.removeItem(PLANEACION_KEY); }

function estadoBadge(estado) {
  var c = ESTADO_CFG[estado] || ESTADO_CFG.pendiente;
  return '<span style="display:inline-flex;align-items:center;font-size:11px;font-weight:600;padding:3px 10px;border-radius:999px;background:'+c.bg+';color:'+c.color+'">'+c.label+'</span>';
}

function estadoColor(estado) {
  return (ESTADO_CFG[estado] || ESTADO_CFG.pendiente).color;
}
