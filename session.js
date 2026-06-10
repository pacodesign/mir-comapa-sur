const MOCK_USERS = [
  {
    id: 'adm-001',
    email: 'admin@comapa.mx',
    password: 'admin123',
    nombre: 'Leticia Solís',
    iniciales: 'LS',
    rol: 'Administrador',
    gerencia: 'Planeación Estratégica',
    redirect: 'dashboard-inicio.html'
  },
  {
    id: 'rev-001',
    email: 'revisor@comapa.mx',
    password: 'revisor123',
    nombre: 'Carlos Mendoza',
    iniciales: 'CM',
    rol: 'Revisor',
    gerencia: 'Gerencia Técnica',
    redirect: 'dashboard-revisor.html'
  },
  {
    id: 'enl-001',
    email: 'enlace@comapa.mx',
    password: 'enlace123',
    nombre: 'Ana Torres',
    iniciales: 'AT',
    rol: 'Enlace',
    gerencia: 'Gerencia Comercial',
    redirect: 'dashboard-enlace.html'
  }
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
