import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const About = () => (
  <>
    <Seo
      title="About KALNET — Built in Hyderabad for Indian schools"
      description="KALNET is the digital backbone for schools and colleges in India. Founded by Rishav Raj. Headquartered in Hyderabad."
      path="/about"
    />

    <section className="hero-bg border-b border-border">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About KALNET</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground md:text-6xl">
            Software that finally fits how Indian schools work.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            KALNET started in a Hyderabad classroom — not a Silicon Valley boardroom.
            We built what every principal we met asked for: one platform that runs the institution.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-background py-20">
      <div className="container max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          Indian schools and colleges run on heroic effort — registers, WhatsApp groups,
          spreadsheets, and the principal's memory. It works, until it doesn't.
        </p>
        <p>
          KALNET replaces that patchwork with one simple platform: the{" "}
          <span className="font-semibold text-foreground">Approval Engine</span> for every signature,
          the <span className="font-semibold text-foreground">Student Portal</span> for everything a
          parent wants to see, and the{" "}
          <span className="font-semibold text-foreground">Admin Dashboard</span> for the principal's
          numbers.
        </p>
        <p>
          We sit with principals. We watch how they actually run their day. Then we build for that.
          That's why our pricing is in rupees, our support is on WhatsApp, and our pilots are 2 weeks —
          not 6 months.
        </p>
      </div>
    </section>

    <section className="border-t border-border bg-muted/30 py-20">
      <div className="container max-w-3xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Founder</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground">Rishav Raj</h2>
          <p className="mt-1 text-muted-foreground">CTO &amp; Co-Founder, KALNET</p>
          <p className="mt-5 text-foreground">
            Rishav leads engineering and product at KALNET. He works directly with principals
            in pilot schools and personally runs every demo in the first 90 days.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Headquarters</p>
              <p className="text-sm text-muted-foreground">Hyderabad, Telangana, India</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Get in touch</p>
              <a href="mailto:hello@kalnet.co" className="text-sm text-primary hover:underline">
                hello@kalnet.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-secondary py-20">
      <div className="container text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-secondary-foreground md:text-4xl">
          Want to see what we built?
        </h2>
        <Button asChild size="lg" className="mt-8 bg-gradient-cta text-primary-foreground shadow-elegant h-12 px-8">
          <Link to="/demo">Book a demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default About;