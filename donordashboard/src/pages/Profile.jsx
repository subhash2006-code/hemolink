import { useEffect, useState } from "react";
import {
  Pencil,
  Check,
  Droplet,
  ShieldCheck,
  Droplets,
  Settings as SettingsIcon,
} from "lucide-react";
import { getCurrentDonor, getInitials } from "@/utils/auth";
import { saveDonor } from "@/utils/storage";

const fallback = {
  fullName: "Rahul Verma",
  bloodGroup: "O+",
  phone: "9876543210",
  email: "rahul.verma@example.com",
  dob: "1995-04-12",
  gender: "Male",
  weight: "72",
  house: "B-204",
  street: "Sector 12, Dwarka",
  city: "New Delhi",
  state: "Delhi",
  pincode: "110078",
  lastDonationDate: "2024-05-12",
  totalDonations: 7,
};

export default function Profile() {
  const [donor, setDonor] = useState(fallback);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(fallback);

  // Settings (moved from the former Settings page)
  const [donorAvailability, setDonorAvailability] = useState(true);
  const [emailPreferences, setEmailPreferences] = useState(true);

  useEffect(() => {
    const stored = getCurrentDonor();
    if (stored) {
      const merged = { ...fallback, ...stored };
      setDonor(merged);
      setDraft(merged);
    }
  }, []);

  function save() {
    setDonor(draft);
    saveDonor(draft);
    setEditing(false);
  }

  const address = [donor.house, donor.street, donor.city, donor.state, donor.pincode]
    .filter(Boolean)
    .join(", ");

  const fields = [
    { label: "Full Name", key: "fullName" },
    { label: "Blood Group", key: "bloodGroup" },
    { label: "Phone", key: "phone" },
    { label: "Email", key: "email" },
    { label: "Date of Birth", key: "dob" },
    { label: "Gender", key: "gender" },
    { label: "Weight (kg)", key: "weight" },
    { label: "Last Donation Date", key: "lastDonationDate" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        {editing ? (
          <button
            type="button"
            onClick={save}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            <Check className="h-4 w-4" /> Save Changes
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
          >
            <Pencil className="h-4 w-4" /> Edit Profile
          </button>
        )}
      </div>

      <section>
        <div className="flex flex-wrap items-center gap-5">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-soft text-2xl font-bold text-brand">
            {getInitials(donor.fullName)}
          </span>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{donor.fullName}</h2>
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <MiniStat icon={Droplet} label="Blood Group" value={donor.bloodGroup} tone="brand" />
          <MiniStat
            icon={Droplets}
            label="Total Donations"
            value={donor.totalDonations ?? 7}
            tone="info"
          />
          <MiniStat icon={ShieldCheck} label="Eligibility" value="Eligible" tone="success" />
        </div>
      </section>

      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-bold tracking-tight">Donor Details</h2>
        <dl className="mt-5 grid gap-5 sm:grid-cols-2">
          {fields.map(({ label, key }) => (
            <div key={key}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {label}
              </dt>
              {editing ? (
                <input
                  value={draft[key] || ""}
                  onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
                  className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                />
              ) : (
                <dd className="mt-1 text-sm font-semibold">{donor[key] || "—"}</dd>
              )}
            </div>
          ))}
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Address
            </dt>
            <dd className="mt-1 text-sm font-semibold">{address || "—"}</dd>
          </div>
        </dl>
      </section>

      {/* =====================================================
          SETTINGS (moved from the former Settings page)
      ====================================================== */}

      <section className="border-t border-border pt-8">
        <h2 className="text-lg font-bold tracking-tight">Settings</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your donor preferences.
        </p>

        {/* ================= DONOR AVAILABILITY ================= */}

        <div className="mt-6 border-t border-border pt-6">
          <div className="flex items-center justify-between gap-6">

            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                <SettingsIcon className="h-7 w-7 text-red-600" strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Donor Availability
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Allow receivers to find you when they need your blood group.
                </p>

                <p
                  className={`mt-2 text-xs font-semibold ${
                    donorAvailability ? "text-red-600" : "text-gray-500"
                  }`}
                >
                  {donorAvailability ? "You are available" : "You are unavailable"}
                </p>
              </div>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={donorAvailability}
              aria-label="Toggle donor availability"
              onClick={() => setDonorAvailability((previous) => !previous)}
              className={`relative flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-200 ${
                donorAvailability ? "bg-red-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  donorAvailability ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

          </div>
        </div>

        {/* ================= EMAIL PREFERENCES ================= */}

        <div className="mt-6 border-t border-border pt-6">
          <div className="flex items-center justify-between gap-6">

            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-7 w-7 text-red-600"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Email Preferences
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Receive important updates and notifications through email.
                </p>

                <p
                  className={`mt-2 text-xs font-semibold ${
                    emailPreferences ? "text-red-600" : "text-gray-500"
                  }`}
                >
                  {emailPreferences ? "Email updates enabled" : "Email updates disabled"}
                </p>
              </div>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={emailPreferences}
              aria-label="Toggle email preferences"
              onClick={() => setEmailPreferences((previous) => !previous)}
              className={`relative flex h-8 w-14 shrink-0 items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-200 ${
                emailPreferences ? "bg-red-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  emailPreferences ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value, tone }) {
  const tones = {
    brand: "bg-brand-soft text-brand",
    info: "bg-info-soft text-info",
    success: "bg-success-soft text-success",
  };
  return (
    <div className="flex items-center gap-3">
      <span className={`flex h-11 w-11 items-center justify-center rounded-full ${tones[tone]}`}>
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
}
