const accents = {
  brand: {
    card: "stat-card-brand",
    icon: "stat-icon-brand",
    value: "stat-value-brand",
  },
  info: {
    card: "stat-card-info",
    icon: "stat-icon-info",
    value: "stat-value-info",
  },
  success: {
    card: "stat-card-success",
    icon: "stat-icon-success",
    value: "stat-value-success",
  },
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  accent = "brand",
  valueClass = "",
  action,
}) {
  const a = accents[accent] || accents.brand;

  return (
    <div className={`stat-card compact-stat ${a.card}`}>
      <div className="flex items-start gap-4">
        <span className={`stat-card-icon ${a.icon} flex h-14 w-14 shrink-0 items-center justify-center rounded-full`}>
          <Icon className="h-7 w-7" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            {action}
          </div>
          <p className={`stat-card-value ${a.value} mt-1 text-3xl font-bold tracking-tight ${valueClass}`}>
            {value}
          </p>
          {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
