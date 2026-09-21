const accents = {
  brand: { wrap: "bg-brand-soft", icon: "text-brand" },
  info: { wrap: "bg-info-soft", icon: "text-info" },
  camp: { wrap: "bg-camp-soft", icon: "text-camp" },
  warn: { wrap: "bg-warn-soft", icon: "text-warn" },
};

export default function QuickActionCard({ title, description, icon: Icon, accent }) {
  const a = accents[accent];
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-border bg-card p-5 text-left">
      <span className={`flex h-12 w-12 items-center justify-center rounded-full ${a.wrap}`}>
        <Icon className={`h-6 w-6 ${a.icon}`} />
      </span>
      <span className="mt-4 text-base font-bold tracking-tight">{title}</span>
      <span className="mt-1 flex-1 text-sm text-muted-foreground">{description}</span>
    </div>
  );
}
