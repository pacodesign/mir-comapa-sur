// ═══ PLANEACIÓN DE METAS 2026 — Estado compartido ═══
// Persiste en localStorage para simular flujo cross-page en el prototipo

const PLANEACION_KEY = 'comapa_planes_2026';
const PLANEACION_SEED_VER = '2026-v6';

const PERIODOS_LABELS = {
  Mensual:    ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
  Bimestral:  ['Bim.1 Ene-Feb','Bim.2 Mar-Abr','Bim.3 May-Jun','Bim.4 Jul-Ago','Bim.5 Sep-Oct','Bim.6 Nov-Dic'],
  Trimestral: ['Q1 Ene-Mar','Q2 Abr-Jun','Q3 Jul-Sep','Q4 Oct-Dic'],
  Semestral:  ['S1 Ene-Jun','S2 Jul-Dic'],
  Anual:      ['2026'],
};

const ESTADO_CFG = {
  pendiente:           { label: 'Sin capturar',       color: '#6B7280', bg: '#F3F4F6', icon: '○' },
  borrador:            { label: 'Borrador',            color: '#92400E', bg: '#FEF3C7', icon: '◐' },
  enviado:             { label: 'Enviado a revisor',   color: '#1D4ED8', bg: '#EFF6FF', icon: '●' },
  observado:           { label: 'Con observaciones',   color: '#EA580C', bg: '#FFF7ED', icon: '⚠' },
  aprobado:            { label: 'Aprobado por revisor',color: '#059669', bg: '#D1FAE5', icon: '✓' },
  bloqueado:           { label: 'Meta fijada',         color: '#16A34A', bg: '#F0FDF4', icon: '🔒' },
  cambio_en_revision:  { label: 'Cambio en revisión',  color: '#7C3AED', bg: '#F5F3FF', icon: '↩' },
};

// Seed data — estados variados para demostrar el flujo completo
const SEED_PLANES = [
  // ── COMERCIAL ──────────────────────────────────────────────────────────────
  {
    id:'PLA-FIN-16', gerencia:'comercial', frecuencia:'Mensual',
    lineaBase:85, metaAnual:93,
    metas:[88,88,89,89,90,90,91,91,92,92,93,93],
    comentariosEnlace:'Meta escalonada mensual. Incremento de 0.5 pp por bimestre acorde al POA 2026.',
    estado:'bloqueado',
    obsRevisor:'Metas consistentes con el histórico y el programa de cobertura. Aprobadas.',
    obsAdmin:'Aprobado definitivamente. Leticia Solís — 20 Mar 2026.',
    fechaEnvio:'2026-03-10', fechaRevision:'2026-03-15', fechaAprobacion:'2026-03-20'
  },
  {
    id:'PLA-PROP-17', gerencia:'comercial', frecuencia:'Anual',
    lineaBase:82, metaAnual:85,
    metas:[85],
    comentariosEnlace:'Meta anual basada en cierre 2025 (82%) con incremento de 3 pp.',
    estado:'bloqueado',
    obsRevisor:'Revisada contra histórico. Meta razonable y bien justificada.',
    obsAdmin:'Aprobado. Leticia Solís — 22 Mar 2026.',
    fechaEnvio:'2026-03-12', fechaRevision:'2026-03-18', fechaAprobacion:'2026-03-22'
  },
  {
    id:'PLA-COMP-18', gerencia:'comercial', frecuencia:'Trimestral',
    lineaBase:75, metaAnual:92,
    metas:[80,85,88,92],
    comentariosEnlace:'Avance progresivo del POA. Q1 conservador por inicio de actividades.',
    estado:'bloqueado',
    obsRevisor:'Metas consistentes con el POA 2026. Aprobadas.',
    obsAdmin:'Aprobado. Leticia Solís — 24 Mar 2026.',
    fechaEnvio:'2026-03-18', fechaRevision:'2026-03-22', fechaAprobacion:'2026-03-24'
  },
  {
    id:'PLA-COMP-19', gerencia:'comercial', frecuencia:'Mensual',
    lineaBase:0, metaAnual:100,
    metas:[10,20,30,40,50,60,70,80,90,95,98,100],
    comentariosEnlace:'Avance proporcional mensual del sistema Aqua 360.',
    estado:'bloqueado',
    obsRevisor:'Plan de implementación escalonado aceptado.',
    obsAdmin:'Aprobado. Leticia Solís — 23 Mar 2026.',
    fechaEnvio:'2026-03-15', fechaRevision:'2026-03-20', fechaAprobacion:'2026-03-23'
  },
  {
    id:'PLA-ACT-21', gerencia:'comercial', frecuencia:'Trimestral',
    lineaBase:70, metaAnual:88,
    metas:[75,80,84,88],
    comentariosEnlace:'Metas progresivas de ejecución del POA trimestral.',
    estado:'bloqueado',
    obsRevisor:'Metas alineadas al POA. Aprobadas.',
    obsAdmin:'Aprobado. Leticia Solís — 21 Mar 2026.',
    fechaEnvio:'2026-03-10', fechaRevision:'2026-03-17', fechaAprobacion:'2026-03-21'
  },
  {
    id:'PLA-ACT-22', gerencia:'comercial', frecuencia:'Mensual',
    lineaBase:88, metaAnual:98,
    metas:[90,91,92,93,94,95,95,96,96,97,97,98],
    comentariosEnlace:'Metas progresivas de atención de anomalías.',
    estado:'bloqueado',
    obsRevisor:'Metas consistentes con el programa de mantenimiento. Aprobadas.',
    obsAdmin:'Aprobado. Leticia Solís — 22 Mar 2026.',
    fechaEnvio:'2026-03-12', fechaRevision:'2026-03-18', fechaAprobacion:'2026-03-22'
  },
  {
    id:'PLA-COMP-26', gerencia:'comercial', frecuencia:'Trimestral',
    lineaBase:72, metaAnual:88,
    metas:[78,82,85,88],
    comentariosEnlace:'Meta trimestral de movimientos autorizados en padrón. Incremento por digitalización.',
    estado:'bloqueado',
    obsRevisor:'Metas validadas contra histórico 2025. Aprobadas.',
    obsAdmin:'Aprobado definitivamente. Leticia Solís — 22 Mar 2026.',
    fechaEnvio:'2026-03-10', fechaRevision:'2026-03-18', fechaAprobacion:'2026-03-22'
  },
  {
    id:'PLA-ACT-27', gerencia:'comercial', frecuencia:'Trimestral',
    lineaBase:78, metaAnual:90,
    metas:[82,85,87,90],
    comentariosEnlace:'Metas trimestrales alineadas al programa.',
    estado:'bloqueado',
    obsRevisor:'Revisadas contra programa trimestral. Aprobadas.',
    obsAdmin:'Aprobado. Leticia Solís — 25 Mar 2026.',
    fechaEnvio:'2026-03-15', fechaRevision:'2026-03-20', fechaAprobacion:'2026-03-25'
  },
  // ── PLANEACIÓN ─────────────────────────────────────────────────────────────
  {
    id:'PE-ACT-01', gerencia:'planeacion', frecuencia:'Trimestral',
    lineaBase:77, metaAnual:86,
    metas:[80,82,84,86],
    comentariosEnlace:'Avance POA trimestral con incremento de 2 pp por trimestre. Acorde al cronograma de compromisos directivos.',
    estado:'bloqueado',
    obsRevisor:'Aprobado. Metas consistentes con el POA 2026 y los compromisos directivos.',
    obsAdmin:'Aprobado. Marco Gutiérrez y Patricia Vázquez confirmaron viabilidad.',
    fechaEnvio:'2026-02-28', fechaRevision:'2026-03-05', fechaAprobacion:'2026-03-12'
  },
  {
    id:'PE-ACT-02', gerencia:'planeacion', frecuencia:'Trimestral',
    lineaBase:68, metaAnual:78,
    metas:[72,74,76,78],
    comentariosEnlace:'Metas conservadoras dado el inicio de nuevos proyectos estratégicos que requieren curva de aprendizaje en Q1-Q2.',
    estado:'aprobado',
    obsRevisor:'Adecuado considerando la complejidad de los proyectos de largo aliento. Se aprueba con seguimiento trimestral.',
    obsAdmin:'', fechaEnvio:'2026-03-01', fechaRevision:'2026-03-06', fechaAprobacion:null
  },
  {
    id:'PE-ACT-05', gerencia:'planeacion', frecuencia:'Trimestral',
    lineaBase:60, metaAnual:80,
    metas:[65,70,75,80],
    comentariosEnlace:'Proyecto nuevo. Inicio bajo por fases de diseño. Escala conforme avanza la implementación.',
    estado:'enviado',
    obsRevisor:'', obsAdmin:'', fechaEnvio:'2026-05-20', fechaRevision:null, fechaAprobacion:null
  },
  // ── TÉCNICA ────────────────────────────────────────────────────────────────
  {
    id:'TEC-ACT-01', gerencia:'tecnica', frecuencia:'Mensual',
    lineaBase:73, metaAnual:81,
    metas:[75,76,76,77,77,78,78,79,79,80,80,81],
    comentariosEnlace:'Mejora incremental en eficiencia de distribución. +1 pp por bimestre. Inicio bajo por trabajos de rehabilitación en sector norte previsto para Q1.',
    estado:'enviado',
    obsRevisor:'', obsAdmin:'', fechaEnvio:'2026-04-20', fechaRevision:null, fechaAprobacion:null
  },
  {
    id:'TEC-ACT-02', gerencia:'tecnica', frecuencia:'Trimestral',
    lineaBase:92, metaAnual:95,
    metas:[93,94,94,95],
    comentariosEnlace:'Cobertura ya en nivel alto (94.2%). Meta de sostenimiento con mejora marginal en Q4 gracias al plan de extensión de red a colonias periféricas.',
    estado:'aprobado',
    obsRevisor:'Cobertura actual es 94.2%. Metas realizables y consistentes con el programa de expansión. Aprobado.',
    obsAdmin:'', fechaEnvio:'2026-03-25', fechaRevision:'2026-04-02', fechaAprobacion:null
  },
  {
    id:'TEC-ACT-04', gerencia:'tecnica', frecuencia:'Bimestral',
    lineaBase:35, metaAnual:30,
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
    lineaBase:65, metaAnual:81,
    metas:[70,71,72,73,74,75,76,77,78,79,80,81],
    comentariosEnlace:'Ejecución presupuestal progresiva. Q1 lento por adjudicaciones del PAC. Escala conforme se formalizan contratos.',
    estado:'bloqueado',
    obsRevisor:'Revisado y consistente con el PAC 2026 y el calendario de adquisiciones. Aprobado.',
    obsAdmin:'Aprobado definitivamente. Ejecución monitoreada mensualmente.',
    fechaEnvio:'2026-02-25', fechaRevision:'2026-03-03', fechaAprobacion:'2026-03-10'
  },
  {
    id:'ADM-ACT-02', gerencia:'administrativa', frecuencia:'Mensual',
    lineaBase:85, metaAnual:92,
    metas:[88,88,89,89,89,90,90,90,91,91,92,92],
    comentariosEnlace:'Pagos a proveedores en tiempo. Meta alta desde inicio por procesos bien establecidos.',
    estado:'enviado',
    obsRevisor:'', obsAdmin:'', fechaEnvio:'2026-04-28', fechaRevision:null, fechaAprobacion:null
  },
  {
    id:'ADM-ACT-04', gerencia:'administrativa', frecuencia:'Trimestral',
    lineaBase:75, metaAnual:84,
    metas:[78,80,82,84],
    comentariosEnlace:'Eficiencia en adquisiciones. Mejora Q1 por digitalización del módulo de requisiciones.',
    estado:'aprobado',
    obsRevisor:'Metas conservadoras pero alcanzables. Aprobado con recomendación de actualizar mensualmente.',
    obsAdmin:'', fechaEnvio:'2026-04-10', fechaRevision:'2026-04-18', fechaAprobacion:null
  },
];

// ── Persistencia ─────────────────────────────────────────────────────────────

function _loadPlanes() {
  // Always start from seed (demo baseline — never stale)
  var p = {};
  SEED_PLANES.forEach(function(plan) { p[plan.id] = plan; });
  // Overlay user-saved changes, but only if seed version matches
  try {
    var ver = localStorage.getItem(PLANEACION_KEY + '_ver');
    if (ver === PLANEACION_SEED_VER) {
      var s = localStorage.getItem(PLANEACION_KEY);
      if (s) {
        var stored = JSON.parse(s);
        Object.keys(stored).forEach(function(id) { p[id] = stored[id]; });
      }
    } else {
      // Seed changed — discard stale stored data and stamp new version
      localStorage.removeItem(PLANEACION_KEY);
      localStorage.setItem(PLANEACION_KEY + '_ver', PLANEACION_SEED_VER);
    }
  } catch(e) {}
  return p;
}

function _savePlanes(planes) {
  try {
    localStorage.setItem(PLANEACION_KEY, JSON.stringify(planes));
    localStorage.setItem(PLANEACION_KEY + '_ver', PLANEACION_SEED_VER);
  } catch(e) {}
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
