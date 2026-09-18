import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Droplet,
  Droplets,
  ShieldCheck,
  Info,
  ArrowRight,
  ClipboardCheck,
  Eye,
  HeartHandshake,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import EmergencyRequestCard from "@/components/dashboard/EmergencyRequestCard";
import QuickActionCard from "@/components/dashboard/QuickActionCard";
import { emergencyRequests } from "@/data/requests";
import { getCurrentDonor, getFirstName } from "@/utils/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    setDonor(getCurrentDonor());
  }, []);

  const bloodGroup = donor?.bloodGroup || "O+";
  const total = donor?.totalDonations ?? 7;
  const firstName = getFirstName(donor?.fullName);

  return (
    <div>

      {/* =====================================================
          WELCOME HERO
      ====================================================== */}

      <div className="pb-8">

        <p className="text-xs font-bold uppercase tracking-widest text-brand">
          Donor Dashboard
        </p>

        <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Welcome back, {firstName} 👋
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Your donation can help someone receive the care they need.
        </p>

      </div>


      {/* =====================================================
          SUMMARY STATS
      ====================================================== */}

      <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 xl:grid-cols-3">

        <StatCard
          title="Blood Group"
          value={bloodGroup}
          icon={Droplet}
          accent="brand"
          valueClass="text-brand"
        />

        <StatCard
          title="Donations"
          value={total}
          subtitle="Total Donations"
          icon={Droplets}
          accent="info"
          valueClass="text-info"
        />

        <StatCard
          title="Status"
          value="Eligible"
          subtitle="You can donate blood"
          icon={ShieldCheck}
          accent="success"
          valueClass="text-success"
          action={
            <Info
              className="h-5 w-5 text-success"
              aria-hidden="true"
            />
          }
        />

      </div>


      {/* =====================================================
          EMERGENCY REQUESTS
      ====================================================== */}

      <section className="mt-10 border-t border-border pt-8">

        {/* SECTION HEADER */}
        <div className="flex items-center justify-between gap-3">

          <div>
            <h2 className="text-xl font-bold tracking-tight">
              Emergency Requests 
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Requets from people who need your help.
            </p>
          </div>

          <Link
            to="/requests"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-2.5 hover:opacity-75"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>


        {/* REQUEST LIST */}
        <div className="mt-6">

          {emergencyRequests.slice(0, 3).map((request) => (
            <EmergencyRequestCard
              key={request.id}
              request={request}
              onView={() => navigate("/requests")}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          QUICK ACTIONS
      ====================================================== */}

      <section className="mt-10 border-t border-border pt-8">

        <div>
          <h2 className="text-xl font-bold tracking-tight">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            The simple steps you can perform from your donor dashboard.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">

          <QuickActionCard
            title="Review Requests"
            description="Check nearby blood requests that match your ability to help."
            icon={ClipboardCheck}
            accent="brand"
          />

          <QuickActionCard
            title="View Details"
            description="Open a request to review the blood group, hospital and urgency."
            icon={Eye}
            accent="info"
          />

          <QuickActionCard
            title="Accept & Connect"
            description="Accept a suitable request and continue with the donation process."
            icon={HeartHandshake}
            accent="camp"
          />

        </div>

      </section>

    </div>
  );
}