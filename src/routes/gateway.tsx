import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleCheck, FileKey2, Menu, Network, ShieldCheck, X } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { SiteBrand, SiteFooter } from "@/components/site-brand";

export const Route = createFileRoute("/gateway")({
  head: () => ({
    meta: [
      { title: "BidSmith Gateway | Controlled Procurement Connections" },
      { name: "description", content: "Request a controlled BidSmith Gateway connection for procurement data, evidence and approved enterprise systems." },
      { property: "og:title", content: "BidSmith Gateway | Controlled Procurement Connections" },
      { property: "og:description", content: "A governed connection layer for evidence-first procurement workflows." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GatewayPage,
});

const connectionTypes = [
  [Network, "Tender data", "Connect controlled tender sources and structured requirement records."],
  [FileKey2, "Evidence repositories", "Bring approved evidence into governed, source-linked workflows."],
  [ShieldCheck, "Enterprise systems", "Integrate through reviewed access, defined permissions and accountable ownership."],
] as const;

function GatewayPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="bg-brand-navy px-5 py-2 text-center text-xs font-medium text-primary-foreground">Controlled access · Defined permissions · Human accountability</div>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-20 lg:h-24 max-w-7xl items-center px-5 lg:px-8">
          <SiteBrand compact />
          <nav className="ml-auto hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Primary navigation">
            <Link to="/">Platform</Link>
            <Link to="/gateway" className="text-primary">Gateway</Link>
            <Link to="/" hash="governance">Governance</Link>
          </nav>
          <Button asChild className="ml-8 hidden lg:inline-flex"><a href="#request">Request connection <ArrowRight size={16} /></a></Button>
          <Button variant="outline" className="ml-auto size-11 px-0 lg:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border px-5 py-5 lg:hidden"><div className="flex flex-col gap-4 text-sm font-semibold"><Link to="/">Platform</Link><Link to="/gateway">Gateway</Link><a href="#request" onClick={() => setMenuOpen(false)}>Request connection</a></div></nav>}
      </header>

      <main>
        <section className="bg-brand-navy py-20 text-primary-foreground lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div>
              <span className="text-rise-soft font-mono text-xs font-semibold uppercase text-brand-teal">BidSmith Gateway</span>
              <h1 className="text-rise mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">Connect procurement intelligence without losing control.</h1>
              <p className="text-rise-soft delay-2 mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/75">A governed connection layer for tender data, approved evidence and enterprise systems—with explicit permissions and traceable human ownership.</p>
              <div className="text-rise-soft delay-3 mt-9 flex flex-wrap gap-3"><Button asChild variant="light"><a href="#request">Request a connection <ArrowRight size={17} /></a></Button><Button asChild className="border border-primary-foreground/40 bg-transparent hover:bg-primary-foreground/10"><Link to="/">Explore BidSmith ASF</Link></Button></div>
            </div>
            <div className="border border-primary-foreground/20 bg-primary-foreground/5 p-7 sm:p-9">
              <p className="font-mono text-xs uppercase text-brand-teal">Connection principles</p>
              <div className="mt-7 space-y-5">{["Minimum necessary access", "Named system and human owner", "Auditable connection lifecycle", "Fail-closed security controls"].map((item) => <div key={item} className="flex items-center gap-3 border-b border-primary-foreground/15 pb-5 font-semibold last:border-0 last:pb-0"><Check size={19} className="text-brand-teal" />{item}</div>)}</div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <span className="text-xs font-bold uppercase text-brand-red">Connection scope</span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">One controlled route into the BidSmith evidence environment.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">{connectionTypes.map(([Icon, title, copy], index) => <article key={title} className="border-t-4 border-primary bg-muted p-7"><span className="font-mono text-xs text-brand-red">0{index + 1}</span><Icon className="mt-8 text-primary" size={30}/><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div>
          </div>
        </section>

        <section id="request" className="bg-brand-ice py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div><span className="text-xs font-bold uppercase text-brand-red">Connection request</span><h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Start a governed technical review.</h2><p className="mt-5 leading-7 text-muted-foreground">Tell us what you need to connect. We will review the purpose, data boundaries and responsible owners before any access is considered.</p></div>
            <div className="bg-background p-6 sm:p-9">
              {submitted ? <div className="flex min-h-[430px] flex-col items-center justify-center text-center"><CircleCheck size={48} className="text-brand-teal"/><h3 className="mt-5 text-2xl font-semibold">Connection request prepared.</h3><p className="mt-3 max-w-md text-muted-foreground">This preview has validated your details but has not sent them. Contact info@bidsmithasf.co.uk to continue.</p><Button className="mt-7" onClick={() => setSubmitted(false)}>Prepare another request</Button></div> :
              <form onSubmit={submitRequest}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-semibold">Full name<input required name="name" maxLength={100} className="mt-2 h-12 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary" placeholder="Your name" /></label>
                  <label className="text-sm font-semibold">Work email<input required name="email" type="email" maxLength={255} className="mt-2 h-12 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary" placeholder="name@organisation.gov.uk" /></label>
                  <label className="text-sm font-semibold">Organisation<input required name="organisation" maxLength={150} className="mt-2 h-12 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary" placeholder="Organisation name" /></label>
                  <label className="text-sm font-semibold">Connection type<select name="connectionType" className="mt-2 h-12 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary"><option>Tender data</option><option>Evidence repository</option><option>Enterprise system</option><option>Other controlled connection</option></select></label>
                </div>
                <label className="mt-5 block text-sm font-semibold">Connection requirement<textarea required name="requirement" minLength={20} maxLength={1000} className="mt-2 min-h-32 w-full border border-input bg-background p-3 font-normal outline-none focus:border-primary" placeholder="Describe the system, data and business purpose." /></label>
                <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-muted-foreground"><input required type="checkbox" className="mt-1 accent-primary"/>I agree to be contacted about this BidSmith Gateway request.</label>
                <Button type="submit" className="mt-6 w-full sm:w-auto">Request connection review <ArrowRight size={16}/></Button>
                <p className="mt-4 text-xs text-muted-foreground">No details are sent from this preview form.</p>
              </form>}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}