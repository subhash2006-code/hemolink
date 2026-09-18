import { MapPin, Clock } from "lucide-react";

const bloodGroupStyles = {
  "A+": { badge: "bg-red-500 text-white", icon: "text-red-500" },
  "A-": { badge: "bg-orange-500 text-white", icon: "text-orange-500" },
  "B+": { badge: "bg-blue-500 text-white", icon: "text-blue-500" },
  "B-": { badge: "bg-yellow-500 text-white", icon: "text-yellow-600" },
  "O+": { badge: "bg-green-500 text-white", icon: "text-green-500" },
  "O-": { badge: "bg-purple-500 text-white", icon: "text-purple-500" },
  "AB+": { badge: "bg-pink-500 text-white", icon: "text-pink-500" },
  "AB-": { badge: "bg-teal-500 text-white", icon: "text-teal-500" },
};


const urgencyStyles = {
  Critical: "bg-red-100 text-red-700",
  High: "bg-orange-100 text-orange-700",
  Moderate: "bg-blue-100 text-blue-700",
};


export default function EmergencyRequestCard({
  request,
  showUrgency = false,
  onView,
}) {
  const style =
    bloodGroupStyles[request.bloodGroup] ||
    bloodGroupStyles["A+"];


  function handleView() {
    if (onView) {
      onView();
    }
  }


  return (
    <div
      className="
        flex
        w-full
        min-h-[125px]
        items-center
        gap-5
        border-b
        border-border
        py-5
        last:border-0
      "
    >

      {/* ================= BLOOD GROUP ================= */}

      <div
        className={`
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-2xl
          text-base
          font-extrabold
          ${style.badge}
        `}
      >
        {request.bloodGroup}
      </div>


      {/* ================= REQUEST INFORMATION ================= */}

      <div className="min-w-0 flex-1">

        {/* NEEDED + URGENCY */}
        <div className="flex flex-wrap items-center gap-2">

          <p className="text-sm font-extrabold text-foreground">
            Needed: {request.units}{" "}
            {request.units === 1 ? "Unit" : "Units"}
          </p>


          {showUrgency && request.urgency && (
            <span
              className={`
                rounded-md
                px-2.5
                py-1
                text-[11px]
                font-bold
                ${urgencyStyles[request.urgency] || "bg-muted text-foreground"}
              `}
            >
              {request.urgency}
            </span>
          )}

        </div>


        {/* HOSPITAL */}
        <p className="mt-1 text-sm font-semibold text-foreground">
          {request.hospital}
        </p>


        {/* LOCATION + TIME */}
        <div className="mt-2 flex flex-wrap items-center gap-4">

          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">

            <MapPin
              className={`h-3.5 w-3.5 ${style.icon}`}
            />

            {request.distance} km away

          </span>


          {request.timeAgo && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">

              <Clock className="h-3.5 w-3.5" />

              {request.timeAgo}

            </span>
          )}

        </div>

      </div>


      {/* ================= VIEW REQUEST ================= */}

      <button
        type="button"
        onClick={handleView}
        className="
          shrink-0
          rounded-xl
          border
          border-border
          px-8
          py-3
          text-sm
          font-bold
          text-foreground
          transition-colors
          duration-200
          hover:bg-muted
        "
      >
        View Request
      </button>

    </div>
  );
}