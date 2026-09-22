const MOCK_USERS = [

  // ── Administrador ────────────────────────────────────────────────────────
  {
    id: 'adm-001', email: 'admin@comapa.mx', password: 'admin123',
    nombre: 'Leticia Solís', iniciales: 'LS', rol: 'Administrador',
    gerencia: 'Planeación Estratégica',
    redirect: 'dashboard-inicio.html'
  },

  // ── Revisor (doble rol) ──────────────────────────────────────────────────
  {
    id: 'rev-001', email: 'revisor@comapa.mx', password: 'revisor123',
    nombre: 'Carlos Mendoza', iniciales: 'CM', rol: 'Revisor',
    gerencia: 'Gerencia Técnica',
    redirect: 'dashboard-revisor.html'
  },

  // ── Enlace Coordinación General — ven TODOS los indicadores de su gerencia ─
  {
    id: 'enl-com-cg', email: 'enlace.cg.comercial@comapa.mx', password: 'enlace123',
    nombre: 'Sandra Vega', iniciales: 'SV', rol: 'Enlace',
    gerencia: 'Gerencia Comercial',
    unidadResponsable: 'Coordinación General Comercial'
  },
  {
    id: 'enl-tec-cg', email: 'enlace.cg.tecnica@comapa.mx', password: 'enlace123',
    nombre: 'Ricardo Morales', iniciales: 'RM', rol: 'Enlace',
    gerencia: 'Gerencia Técnica',
    unidadResponsable: 'Coordinación General Técnica'
  },
  {
    id: 'enl-adm-cg', email: 'enlace.cg.admin@comapa.mx', password: 'enlace123',
    nombre: 'Verónica Ruiz', iniciales: 'VR', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación General Administrativa'
  },
  {
    id: 'enl-pla-cg', email: 'enlace.cg.planeacion@comapa.mx', password: 'enlace123',
    nombre: 'Sofía Castillo', iniciales: 'SC', rol: 'Enlace',
    gerencia: 'Gerencia de Planeación Estratégica',
    unidadResponsable: 'Coordinación General de Planeación Estratégica'
  },

  // ── Enlace específico (sin coordinación general) — ven solo su unidad ────
  {
    id: 'enl-com-001', email: 'enlace@comapa.mx', password: 'enlace123',
    nombre: 'Ana Torres', iniciales: 'AT', rol: 'Enlace',
    gerencia: 'Gerencia Comercial'
  },
  {
    id: 'enl-tec-001', email: 'enlace.tecnica@comapa.mx', password: 'enlace123',
    nombre: 'Jorge Reyes', iniciales: 'JR', rol: 'Enlace',
    gerencia: 'Gerencia Técnica'
  },
  {
    id: 'enl-adm-001', email: 'enlace.admin@comapa.mx', password: 'enlace123',
    nombre: 'María López', iniciales: 'ML', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa'
  },
  {
    id: 'enl-pla-001', email: 'enlace.planeacion@comapa.mx', password: 'enlace123',
    nombre: 'Marco Gutiérrez', iniciales: 'MG', rol: 'Enlace',
    gerencia: 'Gerencia de Planeación Estratégica'
  },

  // ── Enlace — Gerencia General ────────────────────────────────────────────
  {
    id: 'enl-gen-001', email: 'enlace.general@comapa.mx', password: 'enlace123',
    nombre: 'Ana Torres', iniciales: 'AT', rol: 'Enlace',
    gerencia: 'Gerencia General',
    unidadResponsable: 'Gerencia General'
  },

  // ── Enlaces específicos — Gerencia Comercial ─────────────────────────────
  {
    id: 'enl-com-fac', email: 'enlace.facturacion@comapa.mx', password: 'enlace123',
    nombre: 'Roberto Sánchez', iniciales: 'RS', rol: 'Enlace',
    gerencia: 'Gerencia Comercial',
    unidadResponsable: 'Coordinación de Facturación y Medición'
  },
  {
    id: 'enl-com-rez', email: 'enlace.rezago@comapa.mx', password: 'enlace123',
    nombre: 'Patricia Vidal', iniciales: 'PV', rol: 'Enlace',
    gerencia: 'Gerencia Comercial',
    unidadResponsable: 'Coordinación de Control de Rezago'
  },
  {
    id: 'enl-com-usu', email: 'enlace.usuarios@comapa.mx', password: 'enlace123',
    nombre: 'Diana Flores', iniciales: 'DF', rol: 'Enlace',
    gerencia: 'Gerencia Comercial',
    unidadResponsable: 'Coordinación de Atención a Usuarios'
  },
  {
    id: 'enl-com-pad', email: 'enlace.padron@comapa.mx', password: 'enlace123',
    nombre: 'Ramón Ávila', iniciales: 'RA', rol: 'Enlace',
    gerencia: 'Gerencia Comercial',
    unidadResponsable: 'Coordinación de Padrón y Censo'
  },
  {
    id: 'enl-com-ind', email: 'enlace.industria@comapa.mx', password: 'enlace123',
    nombre: 'Verónica Salas', iniciales: 'VS', rol: 'Enlace',
    gerencia: 'Gerencia Comercial',
    unidadResponsable: 'Coordinación de Atención a la Industria y Comercio'
  },
  {
    id: 'enl-com-acc', email: 'enlace.accesible@comapa.mx', password: 'enlace123',
    nombre: 'Norma Ibáñez', iniciales: 'NI', rol: 'Enlace',
    gerencia: 'Gerencia Comercial',
    unidadResponsable: 'Coordinación Módulo de Atención Accesible'
  },

  // ── Enlaces específicos — Gerencia Técnica ───────────────────────────────
  {
    id: 'enl-tec-red', email: 'enlace.redes@comapa.mx', password: 'enlace123',
    nombre: 'Eduardo Herrera', iniciales: 'EH', rol: 'Enlace',
    gerencia: 'Gerencia Técnica',
    unidadResponsable: 'Coordinación de Distribución y Mantenimiento de Redes'
  },
  {
    id: 'enl-tec-pry', email: 'enlace.proyectos@comapa.mx', password: 'enlace123',
    nombre: 'Luis Ramírez', iniciales: 'LR', rol: 'Enlace',
    gerencia: 'Gerencia Técnica',
    unidadResponsable: 'Coordinación de Proyectos y Construcción'
  },
  {
    id: 'enl-tec-pot', email: 'enlace.potabilizadoras@comapa.mx', password: 'enlace123',
    nombre: 'Gabriela Torres', iniciales: 'GT', rol: 'Enlace',
    gerencia: 'Gerencia Técnica',
    unidadResponsable: 'Coordinación de Plantas Potabilizadoras y Cárcamos'
  },
  {
    id: 'enl-tec-esp', email: 'enlace.especiales@comapa.mx', password: 'enlace123',
    nombre: 'Humberto Nava', iniciales: 'HN', rol: 'Enlace',
    gerencia: 'Gerencia Técnica',
    unidadResponsable: 'Coordinación de Proyectos Especiales'
  },

  // ── Enlaces específicos — Gerencia Administrativa ────────────────────────
  {
    id: 'enl-adm-rh', email: 'enlace.rh@comapa.mx', password: 'enlace123',
    nombre: 'Claudia Moreno', iniciales: 'CM2', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación de Recursos Humanos'
  },
  {
    id: 'enl-adm-fin', email: 'enlace.finanzas@comapa.mx', password: 'enlace123',
    nombre: 'Fernando Castro', iniciales: 'FC', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación de Finanzas'
  },
  {
    id: 'enl-adm-inf', email: 'enlace.informatica@comapa.mx', password: 'enlace123',
    nombre: 'Beatriz Ríos', iniciales: 'BR', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación de Informática'
  },
  {
    id: 'enl-adm-jur', email: 'enlace.juridica@comapa.mx', password: 'enlace123',
    nombre: 'Alejandro Medina', iniciales: 'AM', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación Jurídica'
  },
  {
    id: 'enl-adm-adq', email: 'enlace.adquisiciones@comapa.mx', password: 'enlace123',
    nombre: 'Carmen Valdez', iniciales: 'CV', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación de Adquisiciones'
  },
  {
    id: 'enl-adm-con', email: 'enlace.contabilidad@comapa.mx', password: 'enlace123',
    nombre: 'Ernesto Lozano', iniciales: 'EL', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación de Contabilidad'
  },
  {
    id: 'enl-adm-pol', email: 'enlace.politica@comapa.mx', password: 'enlace123',
    nombre: 'Silvia Paredes', iniciales: 'SP', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación de Política de Ingresos'
  },
  {
    id: 'enl-adm-ssh', email: 'enlace.seguridad@comapa.mx', password: 'enlace123',
    nombre: 'Gustavo Núñez', iniciales: 'GN', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación de Seguridad, Salud e Higiene'
  },
  {
    id: 'enl-adm-srv', email: 'enlace.servicios@comapa.mx', password: 'enlace123',
    nombre: 'Lorena Espinoza', iniciales: 'LE', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación de Servicios Generales'
  },
  {
    id: 'enl-adm-vin', email: 'enlace.vinculacion@comapa.mx', password: 'enlace123',
    nombre: 'Marisol Delgado', iniciales: 'MD', rol: 'Enlace',
    gerencia: 'Gerencia Administrativa',
    unidadResponsable: 'Coordinación de Vinculación Social'
  },

  // ── Enlaces específicos — Gerencia de Planeación Estratégica ────────────
  {
    id: 'enl-pla-est', email: 'enlace.estrategia@comapa.mx', password: 'enlace123',
    nombre: 'Isabel Guerrero', iniciales: 'IG', rol: 'Enlace',
    gerencia: 'Gerencia de Planeación Estratégica',
    unidadResponsable: 'Coordinación de Proyectos Estratégicos'
  },
  {
    id: 'enl-pla-seg', email: 'enlace.seguimiento@comapa.mx', password: 'enlace123',
    nombre: 'Andrés Peña', iniciales: 'AP', rol: 'Enlace',
    gerencia: 'Gerencia de Planeación Estratégica',
    unidadResponsable: 'Coordinación de Seguimiento a Plantas de Tratamiento'
  },
  {
    id: 'enl-pla-mc', email: 'enlace.mejora@comapa.mx', password: 'enlace123',
    nombre: 'Rocío Fuentes', iniciales: 'RF', rol: 'Enlace',
    gerencia: 'Gerencia de Planeación Estratégica',
    unidadResponsable: 'Departamento de Mejora Continua y Calidad'
  },
  {
    id: 'enl-pla-dsp', email: 'enlace.deptoseguimiento@comapa.mx', password: 'enlace123',
    nombre: 'Héctor Villanueva', iniciales: 'HV', rol: 'Enlace',
    gerencia: 'Gerencia de Planeación Estratégica',
    unidadResponsable: 'Departamento de Seguimiento a Plantas de Tratamiento'
  },
];

const Session = {
  _key: 'comapa_mir_session',

  getUser() {
    try { return JSON.parse(localStorage.getItem(this._key)); }
    catch { return null; }
  },

  setUser(userData) {
    const { password: _pw, ...safe } = userData;
    localStorage.setItem(this._key, JSON.stringify(safe));
  },

  clear() {
    localStorage.removeItem(this._key);
    localStorage.removeItem('userGerencia');
    localStorage.removeItem('userUnidad');
  },

  login(email, password) {
    const user = MOCK_USERS.find(
      u => u.email.toLowerCase() === email.trim().toLowerCase()
        && u.password === password
    );
    if (!user) return null;
    this.setUser(user);
    return user;
  },

  requireAuth() {
    const user = this.getUser();
    if (!user) {
      window.location.href = 'login.html';
      return null;
    }
    return user;
  }
};

// ── Utilidades de fecha e indicadores ─────────────────────────────────────
function formatFecha(dateStr) {
  if (!dateStr) return '—';
  var p = String(dateStr).split('-');
  if (p.length < 3) return dateStr;
  var meses = ['ene.','feb.','mar.','abr.','may.','jun.','jul.','ago.','sep.','oct.','nov.','dic.'];
  return +p[2]+' '+(meses[+p[1]-1]||p[1])+' '+p[0];
}

function diasRestantes(fechaLimite) {
  if (!fechaLimite) return 0;
  var p = String(fechaLimite).split('-');
  var hoy = new Date(); hoy.setHours(0,0,0,0);
  var lim = new Date(+p[0], +p[1]-1, +p[2]);
  return Math.round((lim - hoy) / (1000*60*60*24));
}

// Configuración de visualización de estados MIR.
// La clase CSS se corresponde directamente con la clase .estado-badge.{estado} en shared.css.
var ESTADO_CFG_MIR = {
  pendiente_carga:  { label:'Sin capturar',      cls:'pendiente_carga',  accion:'Cargar evidencia',    btnCls:'primary' },
  pendiente_envio:  { label:'Listo para enviar', cls:'pendiente_carga',  accion:'Enviar a revisión',   btnCls:'primary' },
  borrador:         { label:'En borrador',        cls:'borrador',         accion:'Continuar captura',   btnCls:'primary' },
  enviado_revision:  { label:'En revisión',           cls:'enviado_revision', accion:'Ver seguimiento',     btnCls:'neutral' },
  pendiente_revision:{ label:'Pendiente de revisión', cls:'enviado_revision', accion:'Revisar ahora',       btnCls:'primary' },
  corregido:        { label:'Corregido',          cls:'corregido',        accion:'Ver seguimiento',     btnCls:'neutral' },
  observado:        { label:'Con observaciones',  cls:'observado',        accion:'Atender observación', btnCls:'warning' },
  aprobado_revisor: { label:'Aprobado',           cls:'aprobado_revisor', accion:'Ver detalle',         btnCls:'neutral' },
  cerrado:          { label:'Validado',           cls:'cerrado',          accion:'Ver detalle',         btnCls:'neutral' },
  listo_validar:    { label:'Listo para validar', cls:'listo_validar',    accion:'Ver detalle',         btnCls:'neutral' },
  vencido:          { label:'Vencido',            cls:'vencido',          accion:'Ver detalle',         btnCls:'danger'  },
  proximo_periodo:  { label:'Próximo período',    cls:'proximo_periodo',  accion:'Ver calendario',      btnCls:'neutral' },
};

// Normaliza el estado raw de un indicador al estado de visualización.
function estadoVista(act) {
  var e = act.estado;
  if (['pendiente_envio','incompleto'].includes(e)) return 'borrador';
  return e;
}

// Encuentra y registra el usuario correcto según gerencia+unidad.
// Usado por el picker de login para guardar un usuario realista en sesión.
Session.loginByUnit = function(gerencia, unidad) {
  var match = MOCK_USERS.find(function(u) {
    if (u.gerencia !== gerencia) return false;
    if (u.rol !== 'Enlace') return false;
    if (unidad) return u.unidadResponsable === unidad;
    return !u.unidadResponsable;
  });
  var user = match || MOCK_USERS.find(function(u) { return u.email === 'enlace@comapa.mx'; });
  if (!user) return null;
  Session.setUser(user);
  try {
    localStorage.setItem('userGerencia', gerencia);
    if (unidad) localStorage.setItem('userUnidad', unidad);
    else localStorage.removeItem('userUnidad');
  } catch(e) {}
  return user;
};

function cerrarSesion() {
  try { Session.clear(); } catch(e) {}
  try { sessionStorage.removeItem('comapa-demo'); } catch(e) {}
  window.location.href = 'login.html';
}

// Busca un indicador por id en ACTIVIDADES_ENLACE (incluye datos demo).
function getActividad(id) {
  if (typeof ACTIVIDADES_ENLACE === 'undefined') return null;
  return ACTIVIDADES_ENLACE.find(function(a) { return a.id === id; }) || null;
}

// Mapa de nivel a etiqueta y clase CSS para badges.
var NIVEL_CFG = {
  'Fin':        { label: 'Fin',        cls: 'nivel-fin' },
  'Propósito':  { label: 'Propósito',  cls: 'nivel-proposito' },
  'Componente': { label: 'Componente', cls: 'nivel-componente' },
  'Actividad':  { label: 'Actividad',  cls: 'nivel-actividad' }
};

// Calcula prioridad de un indicador según días restantes y estado.
function prioridad(act) {
  var d = diasRestantes(act.fechaLimite);
  if (d < 0) return 'vencida';
  var activos = ['pendiente_carga','enviado_revision','pendiente_revision','corregido','observado'];
  if (activos.indexOf(act.estado) === -1) return 'normal';
  if (d <= 7)  return 'alta';
  if (d <= 14) return 'media';
  return 'normal';
}

// Fecha en que el indicador fue enviado a revisión por última vez (desde historial).
function fechaEnvio(act) {
  if (!act || !act.historial || !act.historial.length) return null;
  var envios = act.historial.filter(function(h) { return h.estadoNuevo === 'enviado_revision'; });
  if (!envios.length) return null;
  return envios[envios.length - 1].fecha;
}

// Devuelve todos los indicadores de la gerencia del Revisor activo.
// Respeta localStorage.userGerencia para soportar el picker de gerencia del login.
function getActividadesRevisor() {
  if (typeof ACTIVIDADES_ENLACE === 'undefined') return [];
  var user = Session.getUser();
  if (!user) return ACTIVIDADES_ENLACE;
  var ger;
  try { ger = localStorage.getItem('userGerencia') || user.gerencia; }
  catch(e) { ger = user.gerencia; }
  return ACTIVIDADES_ENLACE.filter(function(a) { return a.gerencia === ger; });
}

// Devuelve los indicadores MIR del usuario enlace activo.
// La gerencia y unidad se toman primero de localStorage (overrides del picker de login),
// y si no existen, del objeto de sesión del usuario.
// Coordinación General → todos los de la gerencia.
// Coordinación específica → solo los de esa unidad.
// Sin unidad asignada → todos los de la gerencia.
function getActividadesEnlace() {
  if (typeof ACTIVIDADES_ENLACE === 'undefined') return [];
  var user = Session.getUser();
  if (!user) return ACTIVIDADES_ENLACE;

  var ger, unidad;
  try {
    ger    = localStorage.getItem('userGerencia') || user.gerencia;
    unidad = localStorage.getItem('userUnidad')   || user.unidadResponsable || null;
  } catch(e) {
    ger    = user.gerencia;
    unidad = user.unidadResponsable || null;
  }

  var byGerencia = ACTIVIDADES_ENLACE.filter(function(a) {
    return a.gerencia === ger;
  });

  if (!unidad || unidad.toLowerCase().indexOf('general') !== -1) {
    return byGerencia;
  }

  return byGerencia.filter(function(a) {
    return a.unidadResponsable === unidad;
  });
}

// Devuelve el nombre de la unidad/gerencia del usuario activo para mostrar en la UI.
function getNombreGerenciaEnlace() {
  var user = Session.getUser();
  if (!user) return 'Gerencia';
  var unidad, ger;
  try {
    unidad = localStorage.getItem('userUnidad')   || user.unidadResponsable || null;
    ger    = localStorage.getItem('userGerencia') || user.gerencia || 'Gerencia';
  } catch(e) {
    unidad = user.unidadResponsable || null;
    ger    = user.gerencia || 'Gerencia';
  }
  return unidad || ger;
}

// Devuelve indicadores de planeación de gerencia (reservado para uso futuro).
function getActividadesGerencia() {
  return [];
}
