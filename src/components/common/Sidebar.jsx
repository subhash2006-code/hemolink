import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Clock,
  HeartHandshake,
  Settings,
  LogOut,
  Droplet,
} from "lucide-react";

import Logo from "@/components/common/Logo";

const items = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/profile", label: "My Profile", icon: User },
  { to: "/history", label: "History", icon: Clock },
  { to: "/requests", label: "Requests", icon: HeartHandshake },
  { to: "/need-blood", label: "Need Blood?", icon: Droplet },
  { to: "/settings", label: "Settings", icon: Settings },
];

const base =
  "group flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-semibold transition-all duration-200";

export default function Sidebar({ onNavigate, onLogout }) {
  return (
    <nav
      className="flex h-full flex-col p-4"
      aria-label="Main navigation"
    >

      {/* ================= HEMOLINK LOGO ================= */}
      <div className="flex justify-center px-3 pt-2">

        <Logo
          className="h-auto w-full max-w-[145px] object-contain object-center"
        />

      </div>


      {/* ================= NAVIGATION OPTIONS ================= */}
      <div className="mt-12 flex flex-col gap-2">

        {items.map(({ to, label, icon: Icon }) => (

          <NavLink
            key={to}
            to={to}
            onClick={onNavigate}
            className={({ isActive }) =>
              `${base} ${
                isActive
                  ? "bg-brand-soft text-brand shadow-sm"
                  : "text-foreground hover:bg-muted hover:translate-x-0.5"
              }`
            }
          >

            {({ isActive }) => (
              <>
                <Icon
                  className={`
                    h-6 w-6
                    shrink-0
                    transition-transform
                    duration-200
                    group-hover:scale-110
                    ${
                      isActive
                        ? "text-brand"
                        : "text-muted-foreground"
                    }
                  `}
                />

                <span>{label}</span>
              </>
            )}

          </NavLink>

        ))}

      </div>


      {/* ================= DIVIDER ================= */}
      <div className="my-6 border-t border-border" />


      {/* ================= LOGOUT ================= */}
      <button
        type="button"
        onClick={onLogout}
        className={`${base} text-brand hover:bg-brand-soft`}
      >

        <LogOut className="h-6 w-6 shrink-0" />

        <span>Logout</span>

      </button>

    </nav>
  );
}