const MOCK_NOTIFICATIONS = [
  {
    id: 'n-001',
    tipo: 'evidencia_enviada',
    icono: 'upload',
    titulo: 'Evidencia enviada a revisión',
    mensaje: 'Ana Torres envió evidencia para TEC-ACT-01.',
    fecha: '2026-06-09',
    hora: '10:42',
    autor: 'Ana Torres',
    actividadId: 'TEC-ACT-01',
    estadoAnterior: 'Borrador',
    estadoNuevo: 'En revisión',
    leida: false,
    rolesVisibles: ['Revisor', 'Administrador']
  },
  {
    id: 'n-002',
    tipo: 'fecha_proxima',
    icono: 'clock',
    titulo: 'Fecha límite próxima',
    mensaje: 'COM-ACT-15 vence en 2 días sin evidencia cargada.',
    fecha: '2026-06-09',
    hora: '09:00',
    autor: 'Sistema',
    actividadId: 'COM-ACT-15',
    estadoAnterior: null,
    estadoNuevo: null,
    leida: false,
    rolesVisibles: ['Enlace', 'Revisor', 'Administrador']
  },
  {
    id: 'n-003',
    tipo: 'evidencia_observada',
    icono: 'alert',
    titulo: 'Evidencia observada',
    mensaje: 'Carlos Mendoza emitió una observación sobre COM-ACT-08.',
    fecha: '2026-06-08',
    hora: '17:15',
    autor: 'Carlos Mendoza',
    actividadId: 'COM-ACT-08',
    estadoAnterior: 'En revisión',
    estadoNuevo: 'Observada',
    leida: false,
    rolesVisibles: ['Enlace', 'Administrador']
  },
  {
    id: 'n-004',
    tipo: 'correccion_enviada',
    icono: 'edit',
    titulo: 'Corrección enviada',
    mensaje: 'Ana Torres reenvió la corrección de COM-ACT-08.',
    fecha: '2026-06-09',
    hora: '11:05',
    autor: 'Ana Torres',
    actividadId: 'COM-ACT-08',
    estadoAnterior: 'Observada',
    estadoNuevo: 'En revisión',
    leida: false,
    rolesVisibles: ['Revisor', 'Administrador']
  },
  {
    id: 'n-005',
    tipo: 'evidencia_aprobada',
    icono: 'check',
    titulo: 'Evidencia aprobada',
    mensaje: 'TEC-ACT-03 fue aprobada por el Revisor.',
    fecha: '2026-06-08',
    hora: '14:30',
    autor: 'Carlos Mendoza',
    actividadId: 'TEC-ACT-03',
    estadoAnterior: 'En revisión',
    estadoNuevo: 'Aprobada',
    leida: true,
    rolesVisibles: ['Enlace', 'Administrador']
  },
  {
    id: 'n-006',
    tipo: 'actividad_vencida',
    icono: 'x',
    titulo: 'Actividad vencida',
    mensaje: 'ADM-ACT-22 venció sin evidencia cargada.',
    fecha: '2026-06-07',
    hora: '23:59',
    autor: 'Sistema',
    actividadId: 'ADM-ACT-22',
    estadoAnterior: null,
    estadoNuevo: 'Vencida',
    leida: true,
    rolesVisibles: ['Revisor', 'Administrador']
  },
  {
    id: 'n-007',
    tipo: 'coordinacion_incompleta',
    icono: 'alert',
    titulo: 'Coordinación con actividades pendientes',
    mensaje: 'Gerencia Comercial tiene 8 actividades sin evidencia.',
    fecha: '2026-06-07',
    hora: '08:00',
    autor: 'Sistema',
    actividadId: null,
    estadoAnterior: null,
    estadoNuevo: null,
    leida: true,
    rolesVisibles: ['Administrador']
  }
];

function getNotificationsForRole(rol) {
  return MOCK_NOTIFICATIONS.filter(n => n.rolesVisibles.includes(rol));
}

function getUnreadCount(rol) {
  return getNotificationsForRole(rol).filter(n => !n.leida).length;
}
