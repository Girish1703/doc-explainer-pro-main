import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Pilot",
    price: "8,000",
    cadence: "/month",
    blurb: "Try KALNET with one branch for 2 months. No commitment.",
    cta: "Start a pilot",
    features: [
      "Up to 500 students",
      "All 3 modules included",
      "Email + WhatsApp support",
      "2-month minimum, then month-to-month",
    ],
    highlighted: false,
  },
  {
    name: "Annual",
    price: "5,000",
    cadence: "/month, billed annually",
    blurb: "Best for schools rolling out across the institution.",
    cta: "Book a demo",
    features: [
      "Unlimited students",
      "All 3 modules included",
      "Priority support + dedicated onboarding",
      "Custom approval workflows",
      "Board-ready report exports",
    ],
    highlighted: true,
  },
];

const faqs = [
  {
    q: "Are these prices in Indian Rupees?",
    a: "Yes. All KALNET pricing is in ₹ (INR) and includes GST. We never bill in dollars.",
  },
  {
    q: "What does the 2-week pilot include?",
    a: "You get the full platform — all three modules — for one branch with up to 500 students. We'll set it up with you and stay on a WhatsApp group throughout.",
  },
  {
    q: "Do we need to install anything?",
    a: "No. KALNET runs in any modern browser. Your principal, teachers, students, and parents just sign in.",
  },
  {
    q: "Where is our data stored?",
    a: "On servers hosted in India. Your data does not leave the country.",
  },
  {
    q: "Can we migrate from our current system?",
    a: "Yes. We've migrated schools from Excel, ERP Next, and Fedena. Onboarding includes data migration at no extra cost.",
  },
];

const Pricing = () => (
  <>
    <Seo
      title="Pricing — KALNET School Management Software"
      description="Simple ₹-based pricing. Pilot at ₹8,000/month or Annual at ₹5,000/month. All modules included."
      path="/pricing"
    />

    <section className="hero-bg border-b border-border">
      <div className="container py-20 text-center md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold text-foreground md:text-6xl">
          Honest pricing. In rupees.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          One price. All three modules. No per-seat surprises, no dollar conversions.
        </p>
      </div>
    </section>

    <section className="bg-background py-20">
      <div className="container">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 shadow-card transition-all ${
                t.highlighted
                  ? "border-primary bg-card shadow-elegant md:scale-105"
                  : "border-border bg-card"
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-cta px-3 py-1 text-xs font-semibold text-primary-foreground shadow-elegant">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-foreground">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-foreground">₹{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.cadence}</span>
              </div>
              <Button
                asChild
                className={`mt-6 w-full h-11 ${
                  t.highlighted
                    ? "bg-gradient-cta text-primary-foreground shadow-elegant hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:opacity-90"
                }`}
              >
                <Link to="/demo">
                  {t.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-muted/30 py-20">
      <div className="container max-w-3xl">
        <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Frequently asked
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default Pricing;