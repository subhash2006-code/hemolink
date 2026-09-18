const accents = {
  brand: {
    wrap: "bg-brand-soft",
    icon: "text-brand",
  },

  info: {
    wrap: "bg-info-soft",
    icon: "text-info",
  },

  success: {
    wrap: "bg-success-soft",
    icon: "text-success",
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
  const a = accents[accent];

  return (
    <div className="flex items-center gap-5">

      {/* ================= ICON ================= */}
      <span
        className={`
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-2xl
          ${a.wrap}
        `}
      >

        <Icon
          className={`h-8 w-8 ${a.icon}`}
          strokeWidth={2}
        />

      </span>


      {/* ================= CONTENT ================= */}
      <div className="min-w-0 flex-1">

        <div className="flex items-start justify-between gap-3">

          <p className="text-sm font-semibold text-muted-foreground">
            {title}
          </p>

          {action}

        </div>


        {/* ================= MAIN VALUE ================= */}

        <p
          className={`
            mt-1
            font-extrabold
            tracking-tight
            text-3xl
            ${valueClass}
          `}
        >
          {value}
        </p>


        {/* ================= SUBTITLE ================= */}

        {subtitle && (
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {subtitle}
          </p>
        )}

      </div>

    </div>
  );
}