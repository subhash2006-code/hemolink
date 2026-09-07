import { useState } from "react";
import { ArrowRight, Droplet, HandHeart, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import hemolinkLogo from "@/assets/hemolink-logo.png";

export default function App() {
  const [selected, setSelected] = useState("donor");

  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between px-4 py-4 sm:px-8">
        <span className="text-lg font-bold tracking-tight text-foreground">
          Hemo<span className="text-primary">Link</span>
        </span>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-transform hover:scale-105 hover:bg-primary/90"
        >
          <Home className="h-4 w-4" />
          Home
        </a>
      </nav>

      <main className="flex items-center justify-center px-4 pb-12 pt-4">
      <div className="w-full max-w-2xl rounded-3xl border border-border bg-card p-8 shadow-[0_20px_60px_-30px_oklch(0.52_0.21_25/0.35)] sm:p-12">
        <div className="flex flex-col items-center">
          <img
            src={hemolinkLogo}
            alt="HemoLink — Connect, Donate, Save Lives"
            width={1254}
            height={1254}
            className="h-40 w-40 object-contain sm:h-48 sm:w-48"
          />
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Select Your Role</h1>
          <p className="mt-2 text-sm text-muted-foreground">Choose how you would like to continue</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <RoleCard
            active={selected === "donor"}
            onSelect={() => setSelected("donor")}
            icon={<Droplet className="h-8 w-8 fill-primary text-primary" strokeWidth={0} />}
            title="Donor"
            description="I want to donate blood and help save lives."
            cta="Select Donor"
          />
          <RoleCard
            active={selected === "recipient"}
            onSelect={() => setSelected("recipient")}
            icon={<HandHeart className="h-8 w-8 text-primary" />}
            title="Recipient"
            description="I need blood donation support."
            cta="Select Recipient"
          />
        </div>
      </div>
      </main>
    </div>
  );
}

function RoleCard({ active, onSelect, icon, title, description, cta }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "group flex cursor-pointer flex-col items-center rounded-2xl border p-6 text-center outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "border-primary bg-accent/40 shadow-sm"
          : "border-border bg-card hover:border-primary/40 hover:bg-accent/20",
      )}
    >
      <span
        className={cn(
          "flex h-20 w-20 items-center justify-center rounded-full transition-colors",
          active ? "bg-accent" : "bg-muted",
        )}
      >
        {icon}
      </span>
      <h2 className="mt-5 text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Button variant={active ? "default" : "outline"} className="mt-6 w-full" tabIndex={-1}>
        {cta}
        <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}
