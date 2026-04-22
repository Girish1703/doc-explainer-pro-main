import { useEffect } from "react";
import { Calendar, MessageSquare, Rocket } from "lucide-react";
import { Seo } from "@/components/Seo";

const steps = [
  {
    icon: Calendar,
    title: "Pick a 30-min slot",
    desc: "Choose a time that works for you on the calendar to the right.",
  },
  {
    icon: MessageSquare,
    title: "We walk you through KALNET",
    desc: "Live demo on a real screen — no slides. We answer every question.",
  },
  {
    icon: Rocket,
    title: "Start a 2-week pilot",
    desc: "If you like it, we set up a pilot with one branch within 48 hours.",
  },
];

const Demo = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <>
      <Seo
        title="Book a Demo — KALNET"
        description="Book a free 30-minute demo with the KALNET team. See approvals, student portal, and admin dashboard live."
        path="/demo"
      />

      <section className="hero-bg border-b border-border">
        <div className="container py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Book a Demo</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-foreground md:text-5xl">
            See KALNET in 30 minutes.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            Pick a time that works for you. Rishav from our team will walk you through the platform live.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-foreground">What happens in the demo</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Step {i + 1}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-foreground">{s.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-5">
              <p className="text-sm font-semibold text-foreground">Prefer email?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Write to{" "}
                <a href="mailto:hello@kalnet.co" className="text-primary underline-offset-2 hover:underline">
                  hello@kalnet.co
                </a>{" "}
                and we'll reply within one working day.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              {/* Calendly inline widget — replace data-url with KALNET's real Calendly link */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/kalnet/demo?hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "720px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;