/**
 * Componente de iconos Iconify offline.
 * Los SVG están descargados en presentation/icons/ y embebidos en iconRegistry.js.
 */
function Icon({ icon, size = 24, color = 'currentColor', className = '', spin = false }) {
  const svg = ICON_REGISTRY[icon];

  if (!svg) {
    return null;
  }

  return (
    <Box
      component="span"
      role="img"
      aria-hidden="true"
      className={`local-iconify ${className} ${spin ? 'icon-spin' : ''}`.trim()}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        minWidth: size,
        color,
        lineHeight: 0,
        verticalAlign: 'middle',
        '& svg': {
          width: '100%',
          height: '100%',
          display: 'block',
        },
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

function IconLabel({ icon, label, size = 18, color }) {
  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
      <Icon icon={icon} size={size} color={color} />
      <span>{label}</span>
    </Box>
  );
}
