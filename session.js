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

function cerrarSesion() {
  try { Session.clear(); } catch(e) {}
  try { sessionStorage.removeItem('comapa-demo'); } catch(e) {}
  window.location.href = 'login.html';
}
