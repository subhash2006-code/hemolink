import { useState } from "react";
import { Settings as SettingsIcon } from "lucide-react";

export default function Settings() {
  // Donor Availability toggle
  const [donorAvailability, setDonorAvailability] = useState(true);

  // Email Preferences toggle
  const [emailPreferences, setEmailPreferences] = useState(true);

  return (
    <div className="w-full max-w-4xl space-y-7">

      {/* ================= PAGE HEADER ================= */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Settings
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage your donor preferences.
        </p>
      </div>


      {/* ================= DONOR AVAILABILITY ================= */}

      <div className="w-full border-t border-border pt-7">
        <div className="flex items-center justify-between gap-6">

          {/* LEFT CONTENT */}

          <div className="flex items-center gap-5">

            {/* ICON */}

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-red-50
              "
            >
              <SettingsIcon
                className="h-7 w-7 text-red-600"
                strokeWidth={2}
              />
            </div>


            {/* TEXT */}

            <div>
              <h2 className="text-lg font-bold text-foreground">
                Donor Availability
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Allow receivers to find you when they need your blood group.
              </p>

              <p
                className={`
                  mt-2
                  text-xs
                  font-semibold
                  ${
                    donorAvailability
                      ? "text-red-600"
                      : "text-gray-500"
                  }
                `}
              >
                {donorAvailability ? "You are available" : "You are unavailable"}
              </p>
            </div>

          </div>


          {/* TOGGLE */}

          <button
            type="button"
            role="switch"
            aria-checked={donorAvailability}
            aria-label="Toggle donor availability"
            onClick={() =>
              setDonorAvailability((previous) => !previous)
            }
            className={`
              relative
              flex
              h-8
              w-14
              shrink-0
              items-center
              rounded-full
              p-1
              transition-colors
              duration-300
              focus:outline-none
              focus:ring-2
              focus:ring-red-200
              ${
                donorAvailability
                  ? "bg-red-600"
                  : "bg-gray-300"
              }
            `}
          >
            <span
              className={`
                h-6
                w-6
                rounded-full
                bg-white
                shadow-md
                transition-transform
                duration-300
                ${
                  donorAvailability
                    ? "translate-x-6"
                    : "translate-x-0"
                }
              `}
            />
          </button>

        </div>
      </div>


      {/* ================= EMAIL PREFERENCES ================= */}

      <div className="w-full border-t border-border pt-7">
        <div className="flex items-center justify-between gap-6">

          {/* LEFT CONTENT */}

          <div className="flex items-center gap-5">

            {/* ICON */}

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-red-50
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-7 w-7 text-red-600"
              >
                <rect
                  width="20"
                  height="16"
                  x="2"
                  y="4"
                  rx="2"
                />

                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>


            {/* TEXT */}

            <div>
              <h2 className="text-lg font-bold text-foreground">
                Email Preferences
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Receive important updates and notifications through email.
              </p>

              <p
                className={`
                  mt-2
                  text-xs
                  font-semibold
                  ${
                    emailPreferences
                      ? "text-red-600"
                      : "text-gray-500"
                  }
                `}
              >
                {emailPreferences
                  ? "Email updates enabled"
                  : "Email updates disabled"}
              </p>
            </div>

          </div>


          {/* TOGGLE */}

          <button
            type="button"
            role="switch"
            aria-checked={emailPreferences}
            aria-label="Toggle email preferences"
            onClick={() =>
              setEmailPreferences((previous) => !previous)
            }
            className={`
              relative
              flex
              h-8
              w-14
              shrink-0
              items-center
              rounded-full
              p-1
              transition-colors
              duration-300
              focus:outline-none
              focus:ring-2
              focus:ring-red-200
              ${
                emailPreferences
                  ? "bg-red-600"
                  : "bg-gray-300"
              }
            `}
          >
            <span
              className={`
                h-6
                w-6
                rounded-full
                bg-white
                shadow-md
                transition-transform
                duration-300
                ${
                  emailPreferences
                    ? "translate-x-6"
                    : "translate-x-0"
                }
              `}
            />
          </button>

        </div>
      </div>

    </div>
  );
}