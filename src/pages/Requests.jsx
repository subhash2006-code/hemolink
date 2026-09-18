import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import EmergencyRequestCard from "@/components/dashboard/EmergencyRequestCard";
import { emergencyRequests } from "@/data/requests";

export default function Requests() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [urgency, setUrgency] = useState("");

  const filteredRequests = useMemo(() => {
    return emergencyRequests.filter((request) => {
      const bloodMatch =
        !bloodGroup || request.bloodGroup === bloodGroup;

      const urgencyMatch =
        !urgency || request.urgency === urgency;

      return bloodMatch && urgencyMatch;
    });
  }, [bloodGroup, urgency]);

  return (
    <div className="space-y-6">

      {/* ================= PAGE HEADING ================= */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Emergency Requests
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Review blood requests submitted by receivers. Contact details are shared only after you accept a request.
        </p>
      </div>


      {/* ================= FILTERS ================= */}

      <section className="border-t border-border pt-8">

        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Filters
        </p>

        <div className="grid gap-4 md:grid-cols-2">

          {/* BLOOD GROUP */}
          <div className="relative">

            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="
                h-12
                w-full
                appearance-none
                rounded-xl
                border
                border-border
                bg-background
                px-4
                pr-10
                text-sm
                outline-none
                transition-colors
                focus:border-brand
                focus:ring-2
                focus:ring-brand/10
              "
            >
              <option value="">All blood groups</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            <ChevronDown
              className="
                pointer-events-none
                absolute
                right-4
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-muted-foreground
              "
            />

          </div>


          {/* URGENCY */}
          <div className="relative">

            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="
                h-12
                w-full
                appearance-none
                rounded-xl
                border
                border-border
                bg-background
                px-4
                pr-10
                text-sm
                outline-none
                transition-colors
                focus:border-brand
                focus:ring-2
                focus:ring-brand/10
              "
            >
              <option value="">All urgency levels</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
            </select>

            <ChevronDown
              className="
                pointer-events-none
                absolute
                right-4
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-muted-foreground
              "
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          EMERGENCY REQUESTS
          ONE CARD PER ROW
      ====================================================== */}

      <div className="flex w-full flex-col">

        {filteredRequests.map((request) => (
          <EmergencyRequestCard
            key={request.id}
            request={request}
            showUrgency={true}
          />
        ))}

      </div>


      {/* ================= NO RESULTS ================= */}

      {filteredRequests.length === 0 && (
        <div className="border-t border-border pt-10 text-center">

          <p className="text-sm font-semibold">
            No emergency requests found.
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Try changing the selected filters.
          </p>

        </div>
      )}

    </div>
  );
}