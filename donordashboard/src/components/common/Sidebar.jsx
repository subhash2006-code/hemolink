import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  User,
  Clock,
  HeartHandshake,
  CircleHelp,
  LogOut,
  Droplet,
} from "lucide-react";

import Logo from "@/components/common/Logo";

const items = [
  { to: "/dashboard", label: "Home", icon: Home, staticStyle: true },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/profile", label: "My Profile", icon: User },
  { to: "/history", label: "History", icon: Clock },
  { to: "/requests", label: "Requests", icon: HeartHandshake },
  { to: "/need-blood", label: "Need Blood?", icon: Droplet },
];

const bottomItems = [
  { to: "/help-support", label: "Help & Support", icon: CircleHelp },
];

const base =
  "group flex items-center gap-4 rounded-xl px-4 py-2.5 text-base font-semibold transition-all duration-200";

export default function Sidebar({ onNavigate, onLogout }) {
  return (
    <nav
      className="flex h-full flex-col overflow-y-auto p-4"
      aria-label="Main navigation"
    >

      {/* ================= HEMOLINK LOGO ================= */}
      <div className="flex justify-center px-3 pt-2">

        <Logo
          className="h-auto w-full max-w-[145px] object-contain object-center"
        />

      </div>


      {/* ================= NAVIGATION OPTIONS ================= */}
      <div className="mt-6 flex flex-col gap-1">

        {[...items, ...bottomItems].map(({ to, label, icon: Icon, staticStyle }) => (

          <NavLink
            key={label}
            to={to}
            end
            onClick={onNavigate}
            className={({ isActive }) =>
              `${base} ${
                isActive && !staticStyle
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
                      isActive && !staticStyle
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


        {/* ================= DIVIDER ================= */}
        <div className="my-3 border-t border-border" />


        {/* ================= LOGOUT ================= */}
        <button
          type="button"
          onClick={onLogout}
          className={`${base} text-brand hover:bg-brand-soft`}
        >

          <LogOut className="h-6 w-6 shrink-0" />

          <span>Logout</span>

        </button>

      </div>

    </nav>
  );
}