import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ClipboardCheck, GraduationCap, LayoutDashboard, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const features = [
  {
    icon: ClipboardCheck,
    title: "Approval Engine",
    desc: "Leave, fee waivers, transfers — every approval routed, tracked, and signed in one place.",
  },
  {
    icon: GraduationCap,
    title: "Student Portal",
    desc: "Attendance, marks, fees, and notices — students and parents see everything in real time.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    desc: "One screen for the principal: enrolment, dues, staff load, and exam schedules at a glance.",
  },
];

const schools = ["Delhi Public", "St. Mary's", "Bhavan's", "Kendriya", "Narayana", "Chinmaya"];

const Index = () => (
  <>
    <Seo
      title="KALNET — Digital Backbone for Schools and Colleges"
      description="School management software built for Indian principals. Approvals, student portal, admin dashboard. Book a free 30-minute demo."
      path="/"
    />

    {/* Hero */}
    <section className="relative overflow-hidden hero-bg">
      <div className="container py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Built in Hyderabad for Indian schools
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            The Digital Backbone for{" "}
            <span className="bg-gradient-cta bg-clip-text text-transparent">
              Schools and Colleges
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Approvals, student portal, and the principal's dashboard — one
            platform that runs the entire institution. Not 14 spreadsheets.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-cta text-primary-foreground shadow-elegant hover:opacity-90 h-12 px-6 text-base">
              <Link to="/demo">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Free 30-minute demo · 2-week pilot · No credit card
          </p>
        </div>

        {/* Floating product chrome */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-cta opacity-20 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-muted-foreground">app.kalnet.co/dashboard</span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {[
                { l: "Today's attendance", v: "94.2%", s: "+1.8%" },
                { l: "Pending approvals", v: "12", s: "Principal" },
                { l: "Fees collected", v: "₹4.8L", s: "April" },
              ].map((k) => (
                <div key={k.l} className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs text-muted-foreground">{k.l}</p>
                  <p className="mt-2 font-display text-2xl font-bold text-foreground">{k.v}</p>
                  <p className="mt-1 text-xs text-primary">{k.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="border-t border-border bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What's inside</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Three modules. One platform. Zero spreadsheets.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="border-t border-border bg-muted/30 py-16">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by schools and colleges across India
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {schools.map((s) => (
            <div
              key={s}
              className="flex h-14 items-center justify-center rounded-lg border border-border bg-background font-display text-sm font-semibold text-muted-foreground"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why KALNET */}
    <section className="border-t border-border bg-background py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why principals choose KALNET</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Built for the way Indian schools actually work.
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              "Pricing in ₹ — no surprise dollar bills",
              "Designed with principals, not Silicon Valley",
              "2-week pilot — try it before you commit",
              "WhatsApp + email parent communications",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <Zap className="h-6 w-6 text-primary" />
            <p className="mt-4 font-display text-2xl font-bold text-foreground">2 weeks</p>
            <p className="mt-1 text-sm text-muted-foreground">Pilot to first approval routed</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:translate-y-6">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <p className="mt-4 font-display text-2xl font-bold text-foreground">Hosted in India</p>
            <p className="mt-1 text-sm text-muted-foreground">Data stays where regulators expect it</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <GraduationCap className="h-6 w-6 text-primary" />
            <p className="mt-4 font-display text-2xl font-bold text-foreground">K–12 + UG</p>
            <p className="mt-1 text-sm text-muted-foreground">Schools, junior colleges, and degree colleges</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:translate-y-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <p className="mt-4 font-display text-2xl font-bold text-foreground">No training</p>
            <p className="mt-1 text-sm text-muted-foreground">Staff onboard in a single afternoon</p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="border-t border-border bg-secondary py-20 md:py-24">
      <div className="container text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-secondary-foreground md:text-5xl">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-secondary-foreground/70 md:text-lg">
          Book a free 30-minute demo with our team. We'll walk you through KALNET on a screen you can see.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-gradient-cta text-primary-foreground shadow-elegant hover:opacity-90 h-12 px-8 text-base">
            <Link to="/demo">
              Book a free demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Index;
