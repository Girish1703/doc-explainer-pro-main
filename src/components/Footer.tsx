import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-border bg-muted/40">
    <div className="container py-12">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            The digital backbone for schools and colleges across India.
            Built in Hyderabad for Indian principals.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/product" className="hover:text-foreground">Modules</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/demo" className="hover:text-foreground">Book a Demo</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><a href="mailto:hello@kalnet.co" className="hover:text-foreground">hello@kalnet.co</a></li>
            <li>Hyderabad, India</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} KALNET. All rights reserved.</p>
        <p>Digital Backbone for Schools and Colleges</p>
      </div>
    </div>
  </footer>
);