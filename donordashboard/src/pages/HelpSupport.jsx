import { Phone, Mail, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How often can I donate blood?",
    answer:
      "Most healthy donors can donate whole blood every 3 months (12 weeks). Your eligibility also depends on your last donation date and current health status.",
  },
  {
    question: "How do I update my availability?",
    answer:
      "Go to My Profile and scroll to the Settings section at the bottom, where you can toggle your donor availability at any time.",
  },
  {
    question: "How can I respond to a blood request?",
    answer:
      "Open the Requests page from the sidebar, review the request details, and accept the ones that match your blood group and availability.",
  },
  {
    question: "Who can I contact for urgent help?",
    answer:
      "Use the contact options below to reach our support team directly for any urgent donation or account issues.",
  },
];

const contactOptions = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 98765 43210",
    subtitle: "Mon–Sat, 9 AM – 7 PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@hemolink.com",
    subtitle: "We usually reply within 24 hours",
  },
];

export default function HelpSupport() {
  return (
    <div className="w-full max-w-4xl space-y-7">

      {/* ================= PAGE HEADER ================= */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Help &amp; Support
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Find answers to common questions or get in touch with our team.
        </p>
      </div>


      {/* ================= CONTACT OPTIONS ================= */}

      <section className="border-t border-border pt-7">
        <h2 className="text-lg font-bold tracking-tight">Contact Us</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {contactOptions.map(({ icon: Icon, title, detail, subtitle }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </span>

              <div>
                <p className="text-sm font-bold text-foreground">{title}</p>
                <p className="mt-1 text-sm font-semibold text-brand">{detail}</p>
                <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= FAQ ================= */}

      <section className="border-t border-border pt-7">
        <h2 className="text-lg font-bold tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="mt-5 space-y-5">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="flex gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <HelpCircle className="h-4 w-4" />
              </span>

              <div>
                <p className="text-sm font-bold text-foreground">{question}</p>
                <p className="mt-1 text-sm text-muted-foreground">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
