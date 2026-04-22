import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, GraduationCap, LayoutDashboard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const modules = [
  {
    icon: ClipboardCheck,
    name: "Approval Engine",
    tagline: "Stop chasing signatures.",
    desc: "Every leave request, fee waiver, and transfer follows a clear path. Principals approve from their phone — staff knows exactly where it is.",
    bullets: [
      "Multi-step approval flows you configure once",
      "WhatsApp + email notifications at every step",
      "Full audit trail — who approved what and when",
    ],
    mock: { l: "Leave request · Class IX-B", v: "Awaiting Principal", s: "2 of 3 approved" },
  },
  {
    icon: GraduationCap,
    name: "Student Portal",
    tagline: "One login. Every record.",
    desc: "Students and parents see attendance, marks, fees, and notices in real time. No more phone calls to the office for a marksheet.",
    bullets: [
      "Attendance and marks updated by teachers in seconds",
      "Online fee payment with auto-receipts",
      "Parent-teacher messaging built in",
    ],
    mock: { l: "Aanya Sharma · Class X-A", v: "94% attendance", s: "Term 2 fees: ₹0 due" },
  },
  {
    icon: LayoutDashboard,
    name: "Admin Dashboard",
    tagline: "The principal's command centre.",
    desc: "One screen for enrolment, fee collection, staff load, and exam schedules. The numbers you need before the management meeting.",
    bullets: [
      "Live KPIs — attendance, dues, applications",
      "Export-ready board reports in one click",
      "Role-based access for vice-principals and HODs",
    ],
    mock: { l: "April overview", v: "₹4.8L collected", s: "12 approvals pending" },
  },
];

const Product = () => (
  <>
    <Seo
      title="Product — KALNET School Management Modules"
      description="Explore KALNET's three modules: Approval Engine, Student Portal, and Admin Dashboard — built for Indian schools and colleges."
      path="/product"
    />

    <section className="hero-bg border-b border-border">
      <div className="container py-20 text-center md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">The Product</p>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-foreground md:text-6xl">
          Three modules that run your institution.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Each module works on its own. Together, they replace a stack of registers, WhatsApp groups, and Excel sheets.
        </p>
      </div>
    </section>

    <section className="bg-background">
      {modules.map((m, i) => (
        <div
          key={m.name}
          className={`border-b border-border py-20 md:py-28 ${i % 2 === 1 ? "bg-muted/30" : ""}`}
        >
          <div className="container grid gap-12 md:grid-cols-2 md:items-center">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <m.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary">{m.name}</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">{m.tagline}</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">{m.desc}</p>
              <ul className="mt-6 space-y-3">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-cta opacity-15 blur-2xl" aria-hidden />
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
                  <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-3 text-xs text-muted-foreground">app.kalnet.co</span>
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{m.mock.l}</p>
                    <p className="mt-3 font-display text-3xl font-bold text-foreground">{m.mock.v}</p>
                    <p className="mt-1 text-sm text-primary">{m.mock.s}</p>
                    <div className="mt-6 grid grid-cols-3 gap-2">
                      <div className="h-2 rounded-full bg-primary" />
                      <div className="h-2 rounded-full bg-primary" />
                      <div className="h-2 rounded-full bg-muted" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>

    <section className="bg-secondary py-20">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold text-secondary-foreground md:text-4xl">See it on a real screen.</h2>
        <p className="mt-4 text-secondary-foreground/70">A 30-minute demo will tell you more than 30 minutes of reading.</p>
        <Button asChild size="lg" className="mt-8 bg-gradient-cta text-primary-foreground shadow-elegant h-12 px-8">
          <Link to="/demo">Book a demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Product;