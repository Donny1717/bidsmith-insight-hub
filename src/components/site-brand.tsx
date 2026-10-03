import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, ShieldCheck } from "lucide-react";

import logoAsset from "@/assets/bidsmith-asf-logo.png.asset.json";

export function SiteBrand({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center" aria-label="BidSmith ASF home">
      <img
        src={logoAsset.url}
        alt="BidSmith ASF"
        className={compact ? "h-12 w-auto" : "h-14 w-auto sm:h-16"}
      />
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 border-b border-border pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <SiteBrand compact />
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              UK public procurement and tender intelligence built around evidence, human authority and traceable decisions.
            </p>
            <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary" href="mailto:info@bidsmithasf.co.uk">
              <Mail size={17} /> info@bidsmithasf.co.uk
            </a>
          </div>
          <div>
            <h2 className="font-display text-sm font-bold uppercase">Solutions</h2>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground" aria-label="Footer solutions">
              <Link to="/">Enterprise platform</Link>
              <Link to="/gateway">BidSmith Gateway</Link>
              <Link to="/" hash="architecture">Architecture</Link>
              <Link to="/" hash="governance">Governance</Link>
            </nav>
          </div>
          <div>
            <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase"><ShieldCheck size={17} className="text-brand-teal" /> Legal & governance</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>Privacy and data protection</p>
              <p>Procurement Act 2023 alignment</p>
              <p>PPN 02/24 control profile</p>
              <p>Human approval governance</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BidSmith ASF. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <span>Evidence-first procurement intelligence</span>
            <a href="#top" className="inline-flex items-center gap-2 font-semibold text-foreground">Back to top <ArrowUp size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}