// validacion-admin-store.js
// Mock store para el módulo de Validación de Avance del Administrador.
// Estado 100% en memoria: se re-siembra desde cero en cada carga de página.
// Requiere que mir-actividades-data.js (ACTIVIDADES_ENLACE) esté cargado antes.

var ValidationAdminStore = (function () {

  // ── ENUMS ────────────────────────────────────────────────────────────────────

  var ESTADO_IND = {
    pendiente:            'pendiente',
    en_revision:          'en_revision',
    aprobado_revisor:     'aprobado_revisor',
    validado:             'validado',
    regresado_correccion: 'regresado_correccion',
  };

  var ESTADO_PG = {
    en_captura:                   'en_captura',
    enviado_revision:             'enviado_revision',
    listo_para_validar:           'listo_para_validar',
    validado:                     'validado',
    regresado_correccion_parcial: 'regresado_correccion_parcial',
  };

  var ACCION = {
    validar:             'validar',
    regresar_correccion: 'regresar_correccion',
    forzar_estado:       'forzar_estado',
    reabrir_periodo:     'reabrir_periodo',
    agregar_observacion: 'agregar_observacion',
  };

  var TIPO_NOTIF = {
    periodo_validado:     'periodo_validado',
    regresado_correccion: 'regresado_correccion',
    periodo_reabierto:    'periodo_reabierto',
  };

  // ── DEMO PERIOD ──────────────────────────────────────────────────────────────

  var DEMO_PERIODO     = '2026-05';
  var DEMO_PERIODO_ANT = '2026-04';

  // ── STATIC CATALOGS ───────────────────────────────────────────────────────────

  var _GERENCIAS = [
    { id: 'planeacion',     nombre: 'Gerencia de Planeación Estratégica', color: '#7C3AED' },
    { id: 'comercial',      nombre: 'Gerencia Comercial',                 color: '#8B1D3A' },
    { id: 'administrativa', nombre: 'Gerencia Administrativa',            color: '#065F46' },
    { id: 'tecnica',        nombre: 'Gerencia Técnica',                   color: '#0891B2' },
  ];

  var _UNIDADES = [
    // Planeación Estratégica
    { id: 'pla-u1', gerenciaId: 'planeacion',     nombre: 'Gerencia de Planeación Estratégica' },
    { id: 'pla-u2', gerenciaId: 'planeacion',     nombre: 'Coordinación General de Planeación Estratégica' },
    { id: 'pla-u3', gerenciaId: 'planeacion',     nombre: 'Departamento de Mejora Continua y Calidad' },
    { id: 'pla-u4', gerenciaId: 'planeacion',     nombre: 'Coordinación de Proyectos Estratégicos' },
    { id: 'pla-u5', gerenciaId: 'planeacion',     nombre: 'Departamento de Seguimiento a Plantas de Tratamiento' },
    // Comercial
    { id: 'com-u1', gerenciaId: 'comercial',      nombre: 'Gerencia Comercial' },
    { id: 'com-u2', gerenciaId: 'comercial',      nombre: 'Coordinación General Comercial' },
    { id: 'com-u3', gerenciaId: 'comercial',      nombre: 'Coordinación de Facturación y Medición' },
    { id: 'com-u4', gerenciaId: 'comercial',      nombre: 'Coordinación de Atención a Usuarios' },
    { id: 'com-u5', gerenciaId: 'comercial',      nombre: 'Coordinación de Control de Rezago' },
    { id: 'com-u6', gerenciaId: 'comercial',      nombre: 'Coordinación de Padrón y Censo' },
    { id: 'com-u7', gerenciaId: 'comercial',      nombre: 'Coordinación de Atención a la Industria y Comercio' },
    { id: 'com-u8', gerenciaId: 'comercial',      nombre: 'Coordinación de Política de Ingresos' },
    { id: 'com-u9', gerenciaId: 'comercial',      nombre: 'Coordinación de Vinculación Social' },
    // Administrativa
    { id: 'adm-u1',  gerenciaId: 'administrativa', nombre: 'Gerencia Administrativa' },
    { id: 'adm-u2',  gerenciaId: 'administrativa', nombre: 'Coordinación General Administrativa' },
    { id: 'adm-u3',  gerenciaId: 'administrativa', nombre: 'Coordinación de Recursos Humanos' },
    { id: 'adm-u4',  gerenciaId: 'administrativa', nombre: 'Coordinación de Finanzas' },
    { id: 'adm-u5',  gerenciaId: 'administrativa', nombre: 'Coordinación de Contabilidad' },
    { id: 'adm-u6',  gerenciaId: 'administrativa', nombre: 'Coordinación de Adquisiciones' },
    { id: 'adm-u7',  gerenciaId: 'administrativa', nombre: 'Coordinación de Servicios Generales' },
    { id: 'adm-u8',  gerenciaId: 'administrativa', nombre: 'Coordinación de Informática' },
    { id: 'adm-u9',  gerenciaId: 'administrativa', nombre: 'Coordinación de Seguridad, Salud e Higiene' },
    { id: 'adm-u10', gerenciaId: 'administrativa', nombre: 'Coordinación Jurídica' },
    // Técnica
    { id: 'tec-u1', gerenciaId: 'tecnica',        nombre: 'Gerencia Técnica' },
    { id: 'tec-u2', gerenciaId: 'tecnica',        nombre: 'Coordinación General Técnica' },
    { id: 'tec-u3', gerenciaId: 'tecnica',        nombre: 'Coordinación de Distribución y Mantenimiento de Redes' },
    { id: 'tec-u4', gerenciaId: 'tecnica',        nombre: 'Coordinación de Proyectos y Construcción' },
    { id: 'tec-u5', gerenciaId: 'tecnica',        nombre: 'Coordinación de Plantas Potabilizadoras y Cárcamos' },
    { id: 'tec-u6', gerenciaId: 'tecnica',        nombre: 'Coordinación Módulo de Atención Accesible' },
    { id: 'tec-u7', gerenciaId: 'tecnica',        nombre: 'Coordinación de Proyectos Especiales' },
  ];

  var _USUARIOS = [
    { id: 'adm-001', nombre: 'Leticia Solís',        iniciales: 'LS', rol: 'administrador', gerenciaId: null              },
    { id: 'rev-001', nombre: 'Carlos Mendoza',       iniciales: 'CM', rol: 'revisor',       gerenciaId: 'planeacion'      },
    { id: 'rev-002', nombre: 'Carlos Mendoza',       iniciales: 'CM', rol: 'revisor',       gerenciaId: 'comercial'       },
    { id: 'rev-003', nombre: 'Laura Vega',           iniciales: 'LV', rol: 'revisor',       gerenciaId: 'administrativa'  },
    { id: 'rev-004', nombre: 'Miguel Ángel Pérez',   iniciales: 'MP', rol: 'revisor',       gerenciaId: 'tecnica'         },
    { id: 'enl-001', nombre: 'Ana Torres',           iniciales: 'AT', rol: 'enlace',        gerenciaId: 'planeacion'      },
    { id: 'enl-002', nombre: 'Ana Torres',           iniciales: 'AT', rol: 'enlace',        gerenciaId: 'comercial'       },
    { id: 'enl-003', nombre: 'María López',          iniciales: 'ML', rol: 'enlace',        gerenciaId: 'administrativa'  },
    { id: 'enl-004', nombre: 'Jorge Reyes',          iniciales: 'JR', rol: 'enlace',        gerenciaId: 'tecnica'         },
  ];

  // Gerencia name (from ACTIVIDADES_ENLACE) → gerencia id
  var _GER_NAME_MAP = {
    'Gerencia de Planeación Estratégica': 'planeacion',
    'Gerencia Comercial':                 'comercial',
    'Gerencia Administrativa':            'administrativa',
    'Gerencia Técnica':                   'tecnica',
  };

  // Months (1-based) where each frequency has a closing cut
  var _CORTE_MESES = {
    'Mensual':    [1,2,3,4,5,6,7,8,9,10,11,12],
    'Trimestral': [3,6,9,12],
    'Semestral':  [6,12],
    'Anual':      [12],
  };

  // ── UTILITY ───────────────────────────────────────────────────────────────────

  var _seq = 1;
  function _uid() { return 'x' + (_seq++); }

  function _nowStr() {
    var d = new Date('2026-05-28T10:00:00');
    return d.toISOString().slice(0,16).replace('T',' ');
  }

  // Stable hash → integer, used for deterministic "random" per-indicator values
  function _hash(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) {
      h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    return Math.abs(h);
  }

  // Returns an integer in [min, max] derived deterministically from key string
  function _dpct(key, min, max) {
    return min + (_hash(key) % (max - min + 1));
  }

  function _hasCorte(frecuencia, periodoYYYYMM) {
    var month = parseInt(periodoYYYYMM.slice(5,7), 10);
    var meses = _CORTE_MESES[frecuencia];
    return meses ? meses.indexOf(month) !== -1 : true;
  }

  function _semaforo(avance, rangos) {
    if (avance === null || avance === undefined) return 'nd';
    var r = rangos || { verdeMin: 95, amarilloMin: 80 };
    if (avance >= r.verdeMin)    return 'verde';
    if (avance >= r.amarilloMin) return 'amarillo';
    return 'rojo';
  }

  function _getUsuario(id) {
    for (var i = 0; i < _USUARIOS.length; i++) {
      if (_USUARIOS[i].id === id) return _USUARIOS[i];
    }
    return null;
  }

  function _revisorDeGerencia(gerenciaId) {
    for (var i = 0; i < _USUARIOS.length; i++) {
      if (_USUARIOS[i].rol === 'revisor' && _USUARIOS[i].gerenciaId === gerenciaId) return _USUARIOS[i];
    }
    return null;
  }

  function _enlaceDeGerencia(gerenciaId) {
    for (var i = 0; i < _USUARIOS.length; i++) {
      if (_USUARIOS[i].rol === 'enlace' && _USUARIOS[i].gerenciaId === gerenciaId) return _USUARIOS[i];
    }
    return null;
  }

  function _unidadPorNombre(nombre) {
    for (var i = 0; i < _UNIDADES.length; i++) {
      if (_UNIDADES[i].nombre === nombre) return _UNIDADES[i];
    }
    return null;
  }

  // ── SEED DEMO STATE ────────────────────────────────────────────────────────────

  // Per-gerencia demo configuration
  var _GER_DEMO = {
    planeacion:     { estado: ESTADO_PG.validado,                      fechaValidacion: '2026-05-28', validadoPor: 'adm-001' },
    tecnica:        { estado: ESTADO_PG.listo_para_validar,            fechaValidacion: null,         validadoPor: null },
    comercial:      { estado: ESTADO_PG.en_captura,                    fechaValidacion: null,         validadoPor: null },
    administrativa: { estado: ESTADO_PG.regresado_correccion_parcial,  fechaValidacion: null,         validadoPor: null },
  };

  // Observaciones canned para indicadores regresados (administrativa demo)
  var _OBS_REGRESADO = [
    'El valor reportado no corresponde al denominador actualizado. Favor de verificar con el área de finanzas y reenviar con soporte documental.',
    'La evidencia adjunta está incompleta: falta la firma de autorización del responsable de área. Se requiere el documento con firma para poder validar.',
    'Se detecta una discrepancia entre el numerador capturado y el reporte fuente adjunto. Favor de corregir y justificar el ajuste con nota aclaratoria.',
  ];

  function _estadoSeedInd(gerenciaId, indId, hasCorte, relIdx) {
    if (!hasCorte) {
      return { estado: ESTADO_IND.pendiente, avancePeriodo: null, avanceAcumulado: null, obs: null };
    }

    var pct     = _dpct(indId,          72, 103);
    var pctAcum = _dpct(indId + '_ac',  65,  99);

    switch (gerenciaId) {

      case 'planeacion':
        return {
          estado:          ESTADO_IND.validado,
          avancePeriodo:   pct,
          avanceAcumulado: pctAcum,
          obs:             null,
        };

      case 'tecnica':
        return {
          estado:          ESTADO_IND.aprobado_revisor,
          avancePeriodo:   pct,
          avanceAcumulado: pctAcum,
          obs:             null,
        };

      case 'comercial':
        // ~25 % pendiente, rest en_revision
        if (relIdx % 4 === 0) {
          return { estado: ESTADO_IND.pendiente, avancePeriodo: null, avanceAcumulado: null, obs: null };
        }
        return {
          estado:          ESTADO_IND.en_revision,
          avancePeriodo:   _dpct(indId + '_com', 58, 97),
          avanceAcumulado: null,
          obs:             null,
        };

      case 'administrativa':
        // ~17 % regresado_correccion (slots 3 & 8 mod 12), ~42 % aprobado_revisor, rest en_revision
        if (relIdx % 12 === 3) {
          return {
            estado:          ESTADO_IND.regresado_correccion,
            avancePeriodo:   _dpct(indId + '_r1', 52, 78),
            avanceAcumulado: null,
            obs:             _OBS_REGRESADO[0],
          };
        }
        if (relIdx % 12 === 8) {
          return {
            estado:          ESTADO_IND.regresado_correccion,
            avancePeriodo:   _dpct(indId + '_r2', 58, 82),
            avanceAcumulado: null,
            obs:             _OBS_REGRESADO[1 + (relIdx % 2)],
          };
        }
        if (relIdx % 3 === 0) {
          return {
            estado:          ESTADO_IND.aprobado_revisor,
            avancePeriodo:   pct,
            avanceAcumulado: pctAcum,
            obs:             null,
          };
        }
        return {
          estado:          ESTADO_IND.en_revision,
          avancePeriodo:   _dpct(indId + '_ei', 70, 100),
          avanceAcumulado: null,
          obs:             null,
        };

      default:
        return { estado: ESTADO_IND.pendiente, avancePeriodo: null, avanceAcumulado: null, obs: null };
    }
  }

  function _seed() {
    var indicadores = [];
    var reportes    = [];
    var periodosGer = [];
    var historial   = [];
    var notifs      = [];

    // Derive indicadores from the shared data source
    var fuente = (typeof ACTIVIDADES_ENLACE !== 'undefined') ? ACTIVIDADES_ENLACE : [];

    // Track per-gerencia sequential index for deterministic state distribution
    var relIdx = { planeacion: 0, comercial: 0, administrativa: 0, tecnica: 0 };

    fuente.forEach(function (act) {
      var gerenciaId = _GER_NAME_MAP[act.gerencia];
      if (!gerenciaId) return;

      var unidad   = _unidadPorNombre(act.unidadResponsable);
      var revisor  = _revisorDeGerencia(gerenciaId);
      var enlace   = _enlaceDeGerencia(gerenciaId);
      var freq     = act.frecuenciaMedicion || 'Mensual';

      var ind = {
        id:                     act.id,
        nombre:                 act.nombreIndicador,
        gerenciaId:             gerenciaId,
        unidadAdministrativaId: unidad ? unidad.id : null,
        frecuencia:             freq,
        nivel:                  act.nivel || null,
        tipoIndicador:          act.tipoIndicador || 'Gestión',
        unidadMedida:           act.unidadMedida || null,
        iso:                    act.iso || null,
        aplicaAcumulado:        freq !== 'Mensual',
        rangosSemaforo:         { verdeMin: 95, amarilloMin: 80 },
        revisorId:              revisor ? revisor.id : null,
        enlaceId:               enlace  ? enlace.id  : null,
      };
      indicadores.push(ind);

      // Seed ReporteIndicadorPeriodo for the demo period
      relIdx[gerenciaId] = (relIdx[gerenciaId] || 0) + 1;
      var hasCorte = _hasCorte(freq, DEMO_PERIODO);
      var seed     = _estadoSeedInd(gerenciaId, act.id, hasCorte, relIdx[gerenciaId]);

      reportes.push({
        id:                       'rip-' + act.id + '-' + DEMO_PERIODO,
        indicadorId:              act.id,
        periodo:                  DEMO_PERIODO,
        estado:                   seed.estado,
        avancePeriodo:            seed.avancePeriodo,
        avanceAcumulado:          seed.avanceAcumulado,
        valorForzado:             false,
        valorOriginal:            seed.avancePeriodo,
        observacionAdministrador: seed.obs,
      });
    });

    // PeriodoGerencia entries
    _GERENCIAS.forEach(function (g) {
      var demo = _GER_DEMO[g.id];
      periodosGer.push({
        id:              'pg-' + g.id + '-' + DEMO_PERIODO,
        gerenciaId:      g.id,
        periodo:         DEMO_PERIODO,
        estado:          demo.estado,
        fechaValidacion: demo.fechaValidacion,
        validadoPor:     demo.validadoPor,
      });
    });

    // Seed historial entries for already-actioned gerencias
    historial.push({
      id: _uid(), indicadorId: null, gerenciaId: 'planeacion',
      periodo: DEMO_PERIODO, accion: ACCION.validar, usuarioId: 'adm-001',
      fecha: '2026-05-28 09:15',
      comentario: 'Validación del período de mayo 2026. Todos los indicadores dentro de rango aceptable.',
    });
    historial.push({
      id: _uid(), indicadorId: null, gerenciaId: 'administrativa',
      periodo: DEMO_PERIODO, accion: ACCION.regresar_correccion, usuarioId: 'adm-001',
      fecha: '2026-05-27 14:30',
      comentario: 'Se regresan a corrección los indicadores con inconsistencias documentales.',
    });

    // Historial por indicador regresado (administrativa)
    reportes.forEach(function (rip) {
      if (rip.estado !== ESTADO_IND.regresado_correccion) return;
      var ind = null;
      for (var i = 0; i < indicadores.length; i++) {
        if (indicadores[i].id === rip.indicadorId) { ind = indicadores[i]; break; }
      }
      if (!ind || ind.gerenciaId !== 'administrativa') return;
      historial.push({
        id: _uid(), indicadorId: rip.indicadorId, gerenciaId: 'administrativa',
        periodo: DEMO_PERIODO, accion: ACCION.regresar_correccion, usuarioId: 'adm-001',
        fecha: '2026-05-27 14:30',
        comentario: rip.observacionAdministrador,
      });
    });

    // Seed notificaciones
    var plaRev = _revisorDeGerencia('planeacion');
    var plaEnl = _enlaceDeGerencia('planeacion');
    var msgPla = 'El período ' + DEMO_PERIODO + ' de Gerencia de Planeación Estratégica ha sido validado por la administración.';
    if (plaRev) notifs.push({ id: 'n-' + _uid(), usuarioId: plaRev.id, tipo: TIPO_NOTIF.periodo_validado, indicadorId: null, gerenciaId: 'planeacion', periodo: DEMO_PERIODO, mensaje: msgPla, leida: false, fecha: '2026-05-28 09:15' });
    if (plaEnl) notifs.push({ id: 'n-' + _uid(), usuarioId: plaEnl.id, tipo: TIPO_NOTIF.periodo_validado, indicadorId: null, gerenciaId: 'planeacion', periodo: DEMO_PERIODO, mensaje: msgPla, leida: true,  fecha: '2026-05-28 09:15' });

    var admRev = _revisorDeGerencia('administrativa');
    var admEnl = _enlaceDeGerencia('administrativa');
    reportes.forEach(function (rip) {
      if (rip.estado !== ESTADO_IND.regresado_correccion) return;
      var ind = null;
      for (var i = 0; i < indicadores.length; i++) {
        if (indicadores[i].id === rip.indicadorId) { ind = indicadores[i]; break; }
      }
      if (!ind || ind.gerenciaId !== 'administrativa') return;
      var msgAdm = 'Indicador "' + ind.nombre.substring(0, 70) + (ind.nombre.length > 70 ? '…' : '') + '" regresado a corrección: ' + (rip.observacionAdministrador || '');
      if (admRev) notifs.push({ id: 'n-' + _uid(), usuarioId: admRev.id, tipo: TIPO_NOTIF.regresado_correccion, indicadorId: rip.indicadorId, gerenciaId: 'administrativa', periodo: DEMO_PERIODO, mensaje: msgAdm, leida: false, fecha: '2026-05-27 14:30' });
      if (admEnl) notifs.push({ id: 'n-' + _uid(), usuarioId: admEnl.id, tipo: TIPO_NOTIF.regresado_correccion, indicadorId: rip.indicadorId, gerenciaId: 'administrativa', periodo: DEMO_PERIODO, mensaje: msgAdm, leida: false, fecha: '2026-05-27 14:30' });
    });

    return {
      indicadores: indicadores,
      reportes:    reportes,
      periodos:    periodosGer,
      historial:   historial,
      notifs:      notifs,
    };
  }

  // ── MUTABLE IN-MEMORY STATE (re-seeded on every page load) ───────────────────
  var _s = _seed();

  // ── INTERNAL HELPERS ─────────────────────────────────────────────────────────

  function _rip(indicadorId, periodo) {
    for (var i = 0; i < _s.reportes.length; i++) {
      var r = _s.reportes[i];
      if (r.indicadorId === indicadorId && r.periodo === periodo) return r;
    }
    return null;
  }

  function _pg(gerenciaId, periodo) {
    for (var i = 0; i < _s.periodos.length; i++) {
      var p = _s.periodos[i];
      if (p.gerenciaId === gerenciaId && p.periodo === periodo) return p;
    }
    return null;
  }

  function _ind(indicadorId) {
    for (var i = 0; i < _s.indicadores.length; i++) {
      if (_s.indicadores[i].id === indicadorId) return _s.indicadores[i];
    }
    return null;
  }

  function _addH(entry) {
    entry.id   = _uid();
    entry.fecha = entry.fecha || _nowStr();
    _s.historial.push(entry);
  }

  function _addN(n) {
    n.id   = 'n-' + _uid();
    n.fecha = n.fecha || _nowStr();
    n.leida = n.leida || false;
    _s.notifs.push(n);
  }

  function _stats(gerenciaId, periodo) {
    var total = 0, conCorte = 0;
    var pendientes = 0, enRevision = 0, aprobados = 0, regresados = 0, validados = 0;
    var verde = 0, amarillo = 0, rojo = 0, nd = 0;

    for (var i = 0; i < _s.indicadores.length; i++) {
      var ind = _s.indicadores[i];
      if (ind.gerenciaId !== gerenciaId) continue;
      total++;
      var hc = _hasCorte(ind.frecuencia, periodo);
      if (hc) conCorte++;
      var r = _rip(ind.id, periodo);
      if (!r) { pendientes++; nd++; continue; }
      switch (r.estado) {
        case ESTADO_IND.pendiente:            pendientes++; break;
        case ESTADO_IND.en_revision:          enRevision++; break;
        case ESTADO_IND.aprobado_revisor:     aprobados++;  break;
        case ESTADO_IND.regresado_correccion: regresados++; break;
        case ESTADO_IND.validado:             validados++;  break;
      }
      if (r.avancePeriodo !== null && r.avancePeriodo !== undefined) {
        var s = _semaforo(r.avancePeriodo, ind.rangosSemaforo);
        if (s === 'verde')    verde++;
        else if (s === 'amarillo') amarillo++;
        else if (s === 'rojo')     rojo++;
        else nd++;
      } else { nd++; }
    }

    return {
      total: total, conCorte: conCorte,
      pendientes: pendientes, enRevision: enRevision,
      aprobados: aprobados, regresados: regresados, validados: validados,
      verde: verde, amarillo: amarillo, rojo: rojo, sinDatos: nd,
    };
  }

  // ── PUBLIC API ────────────────────────────────────────────────────────────────

  return {

    // Exposed constants (for UI to reference)
    ESTADO_IND:   ESTADO_IND,
    ESTADO_PG:    ESTADO_PG,
    ACCION:       ACCION,
    TIPO_NOTIF:   TIPO_NOTIF,
    DEMO_PERIODO: DEMO_PERIODO,

    /**
     * Devuelve el array de gerencias con KPIs agregados para el periodo indicado.
     * Cada elemento: { id, nombre, color, numUnidades, totalIndicadores, indicadoresConCorte,
     *   aprobados, validados, enRevision, regresados, pendientes, verde, amarillo, rojo,
     *   sinDatos, periodoEstado, fechaValidacion, validadoPor }
     */
    getGerencias: function (periodo) {
      return _GERENCIAS.map(function (g) {
        var st  = _stats(g.id, periodo);
        var pg  = _pg(g.id, periodo);
        var nus = 0;
        for (var i = 0; i < _UNIDADES.length; i++) {
          if (_UNIDADES[i].gerenciaId === g.id) nus++;
        }
        return {
          id:                  g.id,
          nombre:              g.nombre,
          color:               g.color,
          numUnidades:         nus,
          totalIndicadores:    st.total,
          indicadoresConCorte: st.conCorte,
          aprobados:           st.aprobados,
          validados:           st.validados,
          enRevision:          st.enRevision,
          regresados:          st.regresados,
          pendientes:          st.pendientes,
          verde:               st.verde,
          amarillo:            st.amarillo,
          rojo:                st.rojo,
          sinDatos:            st.sinDatos,
          periodoEstado:       pg ? pg.estado        : ESTADO_PG.en_captura,
          fechaValidacion:     pg ? pg.fechaValidacion : null,
          validadoPor:         pg ? pg.validadoPor    : null,
        };
      });
    },

    /**
     * Devuelve el detalle completo de una gerencia para el periodo dado.
     * { gerencia, periodo, periodoGerencia, stats, unidades, indicadores[] }
     * Cada elemento de indicadores: { indicador, unidadNombre, reporte, semaforo, hasCorte }
     */
    getGerenciaDetalle: function (gerenciaId, periodo) {
      var g = null;
      for (var i = 0; i < _GERENCIAS.length; i++) {
        if (_GERENCIAS[i].id === gerenciaId) { g = _GERENCIAS[i]; break; }
      }
      if (!g) return null;

      var st  = _stats(gerenciaId, periodo);
      var pg  = _pg(gerenciaId, periodo);
      var uns = _UNIDADES.filter(function (u) { return u.gerenciaId === gerenciaId; });

      var inds = _s.indicadores
        .filter(function (ind) { return ind.gerenciaId === gerenciaId; })
        .map(function (ind) {
          var r  = _rip(ind.id, periodo);
          var un = null;
          for (var i = 0; i < _UNIDADES.length; i++) {
            if (_UNIDADES[i].id === ind.unidadAdministrativaId) { un = _UNIDADES[i]; break; }
          }
          return {
            indicador:   ind,
            unidadNombre: un ? un.nombre : null,
            reporte:     r || null,
            semaforo:    r ? _semaforo(r.avancePeriodo, ind.rangosSemaforo) : 'nd',
            hasCorte:    _hasCorte(ind.frecuencia, periodo),
          };
        });

      return {
        gerencia:        g,
        periodo:         periodo,
        periodoGerencia: pg || null,
        stats:           st,
        unidades:        uns,
        indicadores:     inds,
      };
    },

    /**
     * Devuelve el detalle de un indicador específico.
     * { indicador, gerencia, unidad, reporte, historial, semaforo, hasCorte, revisor, enlace }
     */
    getIndicadorDetalle: function (indicadorId, periodo) {
      var ind = _ind(indicadorId);
      if (!ind) return null;

      var g   = null;
      for (var i = 0; i < _GERENCIAS.length; i++) {
        if (_GERENCIAS[i].id === ind.gerenciaId) { g = _GERENCIAS[i]; break; }
      }
      var un = null;
      for (var j = 0; j < _UNIDADES.length; j++) {
        if (_UNIDADES[j].id === ind.unidadAdministrativaId) { un = _UNIDADES[j]; break; }
      }
      var r   = _rip(indicadorId, periodo);
      var hist = _s.historial
        .filter(function (h) { return h.indicadorId === indicadorId && h.periodo === periodo; })
        .sort(function (a, b) { return a.fecha > b.fecha ? -1 : 1; });

      return {
        indicador: ind,
        gerencia:  g || null,
        unidad:    un || null,
        reporte:   r  || null,
        historial: hist,
        semaforo:  r ? _semaforo(r.avancePeriodo, ind.rangosSemaforo) : 'nd',
        hasCorte:  _hasCorte(ind.frecuencia, periodo),
        revisor:   _getUsuario(ind.revisorId),
        enlace:    _getUsuario(ind.enlaceId),
      };
    },

    /**
     * Valida (aprueba) el período de una gerencia.
     * Solo permitido cuando periodoEstado === 'listo_para_validar'.
     * Muta estado en memoria; devuelve { ok, error? }.
     */
    validarGerencia: function (gerenciaId, periodo, usuarioId, comentario) {
      var pg = _pg(gerenciaId, periodo);
      if (!pg) return { ok: false, error: 'Período no encontrado.' };
      if (pg.estado !== ESTADO_PG.listo_para_validar) {
        return { ok: false, error: 'La gerencia debe estar en estado "Listo para validar" para poder ser validada.' };
      }

      // Advance all aprobado_revisor indicators to validado
      for (var i = 0; i < _s.reportes.length; i++) {
        var r   = _s.reportes[i];
        var ind = _ind(r.indicadorId);
        if (!ind || ind.gerenciaId !== gerenciaId || r.periodo !== periodo) continue;
        if (r.estado === ESTADO_IND.aprobado_revisor) r.estado = ESTADO_IND.validado;
      }

      pg.estado          = ESTADO_PG.validado;
      pg.fechaValidacion = _nowStr().slice(0, 10);
      pg.validadoPor     = usuarioId;

      _addH({ indicadorId: null, gerenciaId: gerenciaId, periodo: periodo, accion: ACCION.validar, usuarioId: usuarioId, comentario: comentario || null });

      var g   = null;
      for (var j = 0; j < _GERENCIAS.length; j++) { if (_GERENCIAS[j].id === gerenciaId) { g = _GERENCIAS[j]; break; } }
      var msg = 'El período ' + periodo + ' de ' + (g ? g.nombre : gerenciaId) + ' ha sido validado por la administración.';
      var rev = _revisorDeGerencia(gerenciaId);
      var enl = _enlaceDeGerencia(gerenciaId);
      if (rev) _addN({ usuarioId: rev.id, tipo: TIPO_NOTIF.periodo_validado, indicadorId: null, gerenciaId: gerenciaId, periodo: periodo, mensaje: msg });
      if (enl) _addN({ usuarioId: enl.id, tipo: TIPO_NOTIF.periodo_validado, indicadorId: null, gerenciaId: gerenciaId, periodo: periodo, mensaje: msg });

      return { ok: true };
    },

    /**
     * Regresa un indicador específico a corrección con una observación obligatoria.
     * Marca el periodo de la gerencia como regresado_correccion_parcial si no estaba ya validado.
     */
    regresarACorreccion: function (indicadorId, periodo, usuarioId, comentario) {
      if (!comentario || !comentario.trim()) return { ok: false, error: 'La observación es obligatoria para regresar a corrección.' };

      var r = _rip(indicadorId, periodo);
      if (!r) return { ok: false, error: 'Reporte de indicador no encontrado.' };

      var ind = _ind(indicadorId);
      if (!ind) return { ok: false, error: 'Indicador no encontrado.' };

      r.estado                   = ESTADO_IND.regresado_correccion;
      r.observacionAdministrador = comentario.trim();

      var pg = _pg(ind.gerenciaId, periodo);
      if (pg && pg.estado !== ESTADO_PG.validado) {
        pg.estado = ESTADO_PG.regresado_correccion_parcial;
      }

      _addH({ indicadorId: indicadorId, gerenciaId: ind.gerenciaId, periodo: periodo, accion: ACCION.regresar_correccion, usuarioId: usuarioId, comentario: comentario.trim() });

      var g   = null;
      for (var j = 0; j < _GERENCIAS.length; j++) { if (_GERENCIAS[j].id === ind.gerenciaId) { g = _GERENCIAS[j]; break; } }
      var nombreCorto = ind.nombre.substring(0, 80) + (ind.nombre.length > 80 ? '…' : '');
      var msg = 'Indicador "' + nombreCorto + '" regresado a corrección: ' + comentario.trim() + ' — ' + (g ? g.nombre : '') + ', período ' + periodo + '.';
      var rev = _getUsuario(ind.revisorId);
      var enl = _getUsuario(ind.enlaceId);
      if (rev) _addN({ usuarioId: rev.id, tipo: TIPO_NOTIF.regresado_correccion, indicadorId: indicadorId, gerenciaId: ind.gerenciaId, periodo: periodo, mensaje: msg });
      if (enl) _addN({ usuarioId: enl.id, tipo: TIPO_NOTIF.regresado_correccion, indicadorId: indicadorId, gerenciaId: ind.gerenciaId, periodo: periodo, mensaje: msg });

      return { ok: true };
    },

    /**
     * Sobreescribe el valor de avance de un indicador (override manual del admin).
     * nuevoValor: número (porcentaje), comentario obligatorio.
     * Marca el campo valorForzado = true y conserva valorOriginal.
     */
    forzarEstadoIndicador: function (indicadorId, periodo, usuarioId, nuevoValor, comentario) {
      if (!comentario || !comentario.trim()) return { ok: false, error: 'La justificación es obligatoria para forzar el valor.' };
      if (nuevoValor === null || nuevoValor === undefined) return { ok: false, error: 'Debe indicar el nuevo valor.' };

      var r = _rip(indicadorId, periodo);
      if (!r) return { ok: false, error: 'Reporte no encontrado.' };

      if (!r.valorForzado) r.valorOriginal = r.avancePeriodo;
      r.avancePeriodo = nuevoValor;
      r.valorForzado  = true;

      var ind = _ind(indicadorId);
      _addH({
        indicadorId: indicadorId,
        gerenciaId:  ind ? ind.gerenciaId : null,
        periodo:     periodo,
        accion:      ACCION.forzar_estado,
        usuarioId:   usuarioId,
        comentario:  comentario.trim() + ' [Valor original: ' + r.valorOriginal + '% → forzado a: ' + nuevoValor + '%]',
      });

      return { ok: true };
    },

    /**
     * Reabre un período validado (acción excepcional).
     * comentario obligatorio. Revierte indicadores validados → aprobado_revisor.
     */
    reabrirPeriodo: function (gerenciaId, periodo, usuarioId, comentario) {
      if (!comentario || !comentario.trim()) return { ok: false, error: 'La justificación es obligatoria para reabrir un período.' };

      var pg = _pg(gerenciaId, periodo);
      if (!pg) return { ok: false, error: 'Período no encontrado.' };
      if (pg.estado !== ESTADO_PG.validado) return { ok: false, error: 'Solo se pueden reabrir períodos en estado "Validado".' };

      // Revert validated indicators back one step
      for (var i = 0; i < _s.reportes.length; i++) {
        var r   = _s.reportes[i];
        var ind = _ind(r.indicadorId);
        if (!ind || ind.gerenciaId !== gerenciaId || r.periodo !== periodo) continue;
        if (r.estado === ESTADO_IND.validado) r.estado = ESTADO_IND.aprobado_revisor;
      }

      pg.estado          = ESTADO_PG.listo_para_validar;
      pg.fechaValidacion = null;
      pg.validadoPor     = null;

      _addH({ indicadorId: null, gerenciaId: gerenciaId, periodo: periodo, accion: ACCION.reabrir_periodo, usuarioId: usuarioId, comentario: comentario.trim() });

      return { ok: true };
    },

    /**
     * Agrega una observación/comentario a un indicador sin cambiar su estado.
     */
    agregarObservacion: function (indicadorId, periodo, usuarioId, comentario) {
      if (!comentario || !comentario.trim()) return { ok: false, error: 'El comentario no puede estar vacío.' };
      var r   = _rip(indicadorId, periodo);
      var ind = _ind(indicadorId);
      if (!r || !ind) return { ok: false, error: 'Indicador o reporte no encontrado.' };

      _addH({ indicadorId: indicadorId, gerenciaId: ind.gerenciaId, periodo: periodo, accion: ACCION.agregar_observacion, usuarioId: usuarioId, comentario: comentario.trim() });
      return { ok: true };
    },

    /**
     * Devuelve las notificaciones de un usuario, ordenadas más-reciente primero.
     */
    getNotificaciones: function (usuarioId) {
      return _s.notifs
        .filter(function (n) { return n.usuarioId === usuarioId; })
        .sort(function (a, b) { return a.fecha > b.fecha ? -1 : 1; });
    },

    /**
     * Marca una notificación como leída. No devuelve error si ya lo estaba.
     */
    marcarNotificacionLeida: function (notificacionId) {
      for (var i = 0; i < _s.notifs.length; i++) {
        if (_s.notifs[i].id === notificacionId) { _s.notifs[i].leida = true; return; }
      }
    },

    // ── Utilidades para bloques UI ──────────────────────────────────────────────

    /** Calcula el semáforo dado un porcentaje y rangos opcionales. */
    semaforo: function (avance, rangos) { return _semaforo(avance, rangos); },

    /** ¿Tiene corte de reporte este indicador en el periodo dado? */
    hasCorte: function (frecuencia, periodo) { return _hasCorte(frecuencia, periodo); },

    /** Devuelve el objeto gerencia por id, o null. */
    getGerencia: function (id) {
      for (var i = 0; i < _GERENCIAS.length; i++) { if (_GERENCIAS[i].id === id) return _GERENCIAS[i]; }
      return null;
    },

    /** Devuelve las unidades administrativas de una gerencia. */
    getUnidades: function (gerenciaId) {
      return _UNIDADES.filter(function (u) { return u.gerenciaId === gerenciaId; });
    },

    /** Devuelve el historial de acciones de una gerencia (todo, o filtrado por periodo). */
    getHistorialGerencia: function (gerenciaId, periodo) {
      return _s.historial
        .filter(function (h) { return h.gerenciaId === gerenciaId && (!periodo || h.periodo === periodo); })
        .sort(function (a, b) { return a.fecha > b.fecha ? -1 : 1; });
    },

    /** Devuelve todos los usuarios del catálogo. */
    getUsuarios: function () { return _USUARIOS.slice(); },

    /** Devuelve un usuario por id. */
    getUsuario: _getUsuario,

    /** Devuelve el nombre del enum de estado de indicador legible para UI. */
    labelEstadoInd: function (estado) {
      var labels = {
        pendiente:            'Pendiente',
        en_revision:          'En revisión',
        aprobado_revisor:     'Aprobado por revisor',
        validado:             'Validado',
        regresado_correccion: 'Regresado a corrección',
      };
      return labels[estado] || estado;
    },

    /** Devuelve el nombre del enum de estado de periodo legible para UI. */
    labelEstadoPG: function (estado) {
      var labels = {
        en_captura:                   'En captura',
        enviado_revision:             'Enviado a revisión',
        listo_para_validar:           'Listo para validar',
        validado:                     'Validado',
        regresado_correccion_parcial: 'Regresado a corrección (parcial)',
      };
      return labels[estado] || estado;
    },
  };

})();
