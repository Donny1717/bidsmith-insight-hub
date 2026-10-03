import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CircleCheck,
  FileCheck2,
  Fingerprint,
  GitBranch,
  LockKeyhole,
  Menu,
  Network,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import controlRoom from "@/assets/bidsmith-control-room.jpg";
import { Button } from "@/components/ui/button";
import { SiteBrand, SiteFooter } from "@/components/site-brand";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "BidSmith ASF | Enterprise Tender Intelligence" },
      { name: "description", content: "Evidence-first tender and public procurement intelligence with traceable requirements, governed claims and human approval." },
      { property: "og:title", content: "BidSmith ASF | Enterprise Tender Intelligence" },
      { property: "og:description", content: "Evidence-first tender control for regulated procurement teams." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const showcase = [
  { id: "graph", label: "Requirement Graph", icon: Network, title: "Turn every tender clause into a controlled requirement.", body: "Register questions, mandatory requirements, award criteria, deadlines and obligations—each linked to its document version, page and source excerpt.", stat: "Source-linked", detail: "Dependencies · conflicts · lifecycle states" },
  { id: "ledger", label: "Claim Ledger", icon: FileCheck2, title: "Know exactly what supports every material claim.", body: "Break responses into reviewable claims, connect each one to approved evidence, and retain the history when evidence or wording changes.", stat: "Evidence-first", detail: "Approved evidence · named owners · expiry control" },
  { id: "audit", label: "Audit Trail", icon: Fingerprint, title: "A tamper-evident record from intake to final export.", body: "Append-only events record actor, action, target, time, result and correlation ID. Final assurance bundles include integrity hashes and human attestations.", stat: "Append-only", detail: "Identity · timestamp · result · correlation" },
];

const phases = [
  ["01", "Secure foundation", "Identity, workspace isolation, role control and immutable audit events."],
  ["02", "Auditable tender core", "Secure intake, requirements, evidence, claims, review and manual export."],
  ["03", "Controlled AI workforce", "Governed AI identities, exact model traceability and evidence-bounded drafting."],
  ["04", "Assured private release", "Independent verification, recovery, monitoring and a verifiable assurance bundle."],
];

function Index() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const current = showcase[active];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!current) return null;

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="bg-brand-navy px-5 py-2 text-center text-xs font-medium text-primary-foreground">
        Built for controlled public procurement · AI may propose, but never approve or submit
      </div>
      <header className="relative z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 lg:h-24 max-w-7xl items-center px-5 lg:px-8">
          <SiteBrand compact />
          <nav className="ml-auto hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Primary navigation">
            <a className="hover:text-primary" href="#platform">Platform</a>
            <a className="hover:text-primary" href="#architecture">Architecture</a>
            <a className="hover:text-primary" href="#governance">Governance</a>
            <a className="hover:text-primary" href="#comparison">Why BidSmith</a>
            <Link className="hover:text-primary" to="/gateway">Gateway</Link>
          </nav>
          <Button asChild className="ml-8 hidden lg:inline-flex"><a href="#demo">Request enterprise demo <ArrowRight size={16} /></a></Button>
          <Button variant="outline" className="ml-auto size-11 px-0 lg:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden"><div className="flex flex-col gap-4 text-sm font-semibold">{[["Platform", "#platform"], ["Architecture", "#architecture"], ["Governance", "#governance"], ["Why BidSmith", "#comparison"], ["Request demo", "#demo"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<Link to="/gateway" onClick={() => setMenuOpen(false)}>BidSmith Gateway</Link></div></nav>}
      </header>

      <main id="top">
        <section className="relative min-h-[600px] sm:min-h-[690px] overflow-hidden bg-brand-navy text-primary-foreground">
          <img src={controlRoom} alt="Procurement specialists reviewing a controlled tender evidence workflow" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-brand-navy/75 lg:bg-transparent lg:[background:linear-gradient(90deg,var(--brand-navy)_0%,color-mix(in_oklab,var(--brand-navy)_94%,transparent)_45%,color-mix(in_oklab,var(--brand-navy)_25%,transparent)_78%,transparent_100%)]" />
          <div className="relative mx-auto flex min-h-[600px] sm:min-h-[690px] max-w-7xl items-center px-5 py-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-rise-soft mb-7 inline-flex items-center gap-2 border-l-4 border-brand-red bg-background/10 px-4 py-2 text-xs font-bold uppercase">Enterprise tender & public procurement intelligence</div>
               <h1 className="text-rise max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">Every tender claim should carry its evidence.</h1>
              <p className="text-rise-soft delay-2 mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/80">BidSmith ASF connects requirements, evidence, claims, approvals and AI activity in one controlled procurement record—built for scrutiny, not black-box automation.</p>
              <div className="text-rise-soft delay-3 mt-9 flex flex-wrap gap-3"><Button asChild variant="light"><a href="#demo">Request enterprise demo <ArrowRight size={17} /></a></Button><Button asChild className="border border-primary-foreground/40 bg-transparent hover:bg-primary-foreground/10"><a href="#platform">Explore the platform</a></Button></div>
              <div className="mt-11 grid max-w-2xl gap-3 border-t border-primary-foreground/20 pt-6 text-xs font-medium sm:grid-cols-3"><span className="flex gap-2"><Check size={16} className="text-brand-teal" /> Evidence-first controls</span><span className="flex gap-2"><Check size={16} className="text-brand-teal" /> Human approval retained</span><span className="flex gap-2"><Check size={16} className="text-brand-teal" /> Tamper-evident records</span></div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background"><div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8"><div className="py-7 sm:pr-7"><span className="text-xs font-bold uppercase text-brand-red">Policy registry</span><p className="mt-2 font-display text-2xl font-semibold text-primary">PPN 02/24</p><p className="mt-1 text-sm">Designed to hold PPN 02/24 and PPN 017 profiles.</p></div><div className="py-7 sm:px-7"><span className="text-xs font-bold uppercase text-brand-red">Legislative alignment</span><p className="mt-2 font-display text-2xl font-semibold text-primary">Procurement Act 2023</p><p className="mt-1 text-sm">Terminology and effective-date aware policy control.</p></div><div className="py-7 sm:pl-7"><span className="text-xs font-bold uppercase text-brand-red">Maker–checker</span><p className="mt-2 font-display text-2xl font-semibold text-primary">Human authority</p><p className="mt-1 text-sm">A named human remains accountable for approval.</p></div></div></section>

        <section id="platform" className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><span data-reveal className="text-xs font-bold uppercase text-brand-red">Interactive showcase</span><h2 data-reveal data-reveal-delay="1" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Trace the answer back to the source.</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Select a control layer to see how BidSmith turns a complex tender into a defensible, reviewable work product.</p><div className="mt-8 border-y border-border">{showcase.map((item, index) => <button key={item.id} type="button" onClick={() => setActive(index)} className={`flex w-full items-center gap-4 border-b border-border px-2 py-5 text-left last:border-0 ${active === index ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}><item.icon size={21} /><span className="font-semibold">{item.label}</span><ArrowRight className="ml-auto" size={17} /></button>)}</div></div><div data-reveal className="relative min-h-[450px] overflow-hidden bg-brand-navy p-7 text-primary-foreground sm:p-10"><div className="absolute right-0 top-0 h-full w-1/2 opacity-20 [background-image:linear-gradient(var(--brand-teal)_1px,transparent_1px),linear-gradient(90deg,var(--brand-teal)_1px,transparent_1px)] [background-size:32px_32px]"/><div key={active} className="relative panel-enter"><div className="flex items-center justify-between border-b border-primary-foreground/20 pb-5"><span className="font-mono text-xs uppercase text-brand-teal">Control layer 0{active + 1}</span><span className="flex items-center gap-2 font-mono text-xs"><span className="size-2 animate-[evidence-pulse_2s_ease-in-out_infinite] bg-brand-teal" /> Trace active</span></div><current.icon className="mt-12 text-brand-teal" size={42} /><h3 className="mt-6 max-w-xl text-3xl font-semibold leading-tight">{current.title}</h3><p className="mt-5 max-w-xl leading-7 text-primary-foreground/70">{current.body}</p><div className="mt-12 grid gap-4 sm:grid-cols-2"><div className="border border-primary-foreground/20 bg-primary-foreground/5 p-5"><p className="font-mono text-xs uppercase text-brand-teal">Control status</p><p className="mt-2 text-xl font-semibold">{current.stat}</p></div><div className="border border-primary-foreground/20 bg-primary-foreground/5 p-5"><p className="font-mono text-xs uppercase text-brand-teal">Record includes</p><p className="mt-2 text-sm">{current.detail}</p></div></div></div></div></div></div></section>

        <section id="architecture" className="bg-brand-ice py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><span data-reveal className="text-xs font-bold uppercase text-brand-red">System architecture</span><h2 data-reveal data-reveal-delay="1" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Control is designed into every layer.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">A modular core keeps procurement work coherent while isolated services handle document parsing and controlled AI workloads.</p></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[[LockKeyhole,"Identity & access","Workspace isolation, role-based access and MFA capability for privileged roles."],[GitBranch,"Tender control core","Projects, requirements, evidence, claims, reviews and policy profiles."],[ShieldCheck,"Governed model gateway","Server-side model access with identity, purpose, limits and a global kill switch."],[Fingerprint,"Audit & assurance","Append-only events, cryptographic hashes, manifests and human attestations."]].map(([Icon,title,body],i) => { const LayerIcon = Icon as typeof LockKeyhole; return <article key={title as string} data-reveal data-reveal-delay={`${(i%4)+1}`} className="border-t-4 border-primary bg-background p-6"><LayerIcon size={27} className="text-primary"/><h3 className="mt-8 text-lg font-semibold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body as string}</p></article>})}</div><div data-reveal className="mt-3 bg-brand-navy px-6 py-5 text-primary-foreground"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><span className="font-mono text-xs uppercase text-brand-teal">Fail-closed foundation</span><p className="text-sm text-primary-foreground/75">If identity, policy, audit or approval dependencies fail, the protected action does not proceed.</p></div></div></div></section>

        <section id="governance" className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-14 lg:grid-cols-2"><div><span data-reveal className="text-xs font-bold uppercase text-brand-red">Human governance</span><h2 data-reveal data-reveal-delay="1" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">AI has a role. A person has authority.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Every production AI deployment is intended to have an identity, exact model record, permitted tools, service period and accountable human owner.</p><div className="mt-8 space-y-4">{["No AI self-approval", "No autonomous tender submission", "No silent evidence replacement", "No unsupported material claim"].map((item,i) => <div key={item} data-reveal data-reveal-delay={`${(i%4)+1}`} className="flex items-center gap-3 border-b border-border pb-4 font-semibold"><CircleCheck className="text-brand-teal" size={21}/>{item}</div>)}</div></div><div data-reveal className="bg-brand-navy p-7 text-primary-foreground sm:p-10"><div className="font-mono text-xs uppercase text-brand-teal">Maker–checker decision record</div><div className="mt-8 space-y-0">{[["01","AI proposal","Drafted from approved evidence"],["02","Maker review","Claim and citation checked"],["03","Checker approval","Independent named approval"],["04","Manual export","Released by an authorised human"]].map(([n,title,copy],i) => <div key={n} data-reveal data-reveal-delay={`${(i%4)+1}`} className="flex gap-5"><div className="flex flex-col items-center"><span className={`grid size-10 place-items-center border font-mono text-xs ${i < 3 ? "border-brand-teal text-brand-teal" : "border-primary-foreground/30"}`}>{n}</span>{i < 3 && <span className="h-12 w-px bg-primary-foreground/20" />}</div><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-primary-foreground/60">{copy}</p></div></div>)}</div></div></div></div></section>

        <section className="border-y border-border bg-muted py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><span data-reveal className="text-xs font-bold uppercase text-brand-red">Assured delivery path</span><h2 data-reveal data-reveal-delay="1" className="mt-4 text-3xl font-bold lg:text-4xl">Four controlled phases. One accountable system.</h2></div><p className="max-w-md text-sm leading-6 text-muted-foreground">Each phase has a working-product exit condition—not simply a design-document milestone.</p></div><div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{phases.map(([number,title,body],i) => <article key={number} data-reveal data-reveal-delay={`${(i%4)+1}`} className="border-b border-r border-border bg-background p-6"><span className="font-mono text-sm font-semibold text-brand-red">{number}</span><h3 className="mt-8 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p></article>)}</div></div></section>

        <section id="comparison" className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><span data-reveal className="text-xs font-bold uppercase text-brand-red">Why BidSmith ASF</span><h2 data-reveal data-reveal-delay="1" className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Move from fragmented files to a defensible procurement record.</h2><div data-reveal className="mt-12 overflow-x-auto"><table className="w-full min-w-[600px] border-collapse text-left"><thead><tr className="bg-brand-navy text-primary-foreground"><th className="p-3 text-xs lg:p-5 lg:text-sm">Control area</th><th className="p-3 text-xs lg:p-5 lg:text-sm">Conventional tender tooling</th><th className="p-3 text-xs lg:p-5 lg:text-sm text-brand-teal">BidSmith ASF</th></tr></thead><tbody>{[["Requirements","Tracked across documents and spreadsheets","Linked graph with source location and lifecycle"],["Claims","Wording detached from supporting records","Claim-to-evidence links and named review"],["AI activity","Provider output with limited operational trace","Named deployment, model, policy, tools and outcome"],["Approval","Implicit status or shared ownership","Maker–checker with independent human authority"],["Audit","Activity logs assembled after the event","Append-only events and integrity hashes"],["Final output","Response files without assurance context","Locked pack with manifests, approvals and exceptions"]].map(([area,legacy,bid]) => <tr key={area} className="border-b border-border"><th className="p-3 text-xs lg:p-5 lg:text-sm font-semibold">{area}</th><td className="p-3 text-xs lg:p-5 lg:text-sm text-muted-foreground">{legacy}</td><td className="border-l-4 border-brand-teal bg-brand-ice p-3 text-xs lg:p-5 lg:text-sm font-medium">{bid}</td></tr>)}</tbody></table></div></div></section>

        <section id="demo" className="bg-brand-navy py-20 text-primary-foreground lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div><span data-reveal className="text-xs font-bold uppercase text-brand-teal">Enterprise demonstration</span><h2 data-reveal data-reveal-delay="1" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">See an evidence-first tender workflow in practice.</h2><p className="mt-5 text-lg leading-8 text-primary-foreground/70">Walk through requirement mapping, evidence controls, claim review and the final assurance bundle with your procurement, bid and risk teams.</p><div className="mt-8 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/70"><p className="font-semibold text-primary-foreground">Suitable for</p><p className="mt-2">Public-sector suppliers · regulated enterprises · bid assurance teams · procurement leaders</p></div></div><div data-reveal className="bg-background p-6 text-foreground sm:p-9">{submitted ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><CircleCheck size={48} className="text-brand-teal"/><h3 className="mt-5 text-2xl font-semibold">Your request is ready for review.</h3><p className="mt-3 max-w-md text-muted-foreground">Thank you. This demonstration form is currently a preview and has not sent your details.</p><Button className="mt-7" onClick={() => setSubmitted(false)}>Submit another request</Button></div> : <form onSubmit={submitDemo}><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Full name<input required className="mt-2 h-12 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary" placeholder="Your name" /></label><label className="text-sm font-semibold">Work email<input required type="email" className="mt-2 h-12 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary" placeholder="name@organisation.gov.uk" /></label><label className="text-sm font-semibold">Organisation<input required className="mt-2 h-12 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary" placeholder="Organisation name" /></label><label className="text-sm font-semibold">Your role<select className="mt-2 h-12 w-full border border-input bg-background px-3 font-normal outline-none focus:border-primary"><option>Procurement leader</option><option>Bid director</option><option>Risk or assurance lead</option><option>Technology leader</option></select></label></div><label className="mt-5 block text-sm font-semibold">What would you like to evaluate?<textarea className="mt-2 min-h-28 w-full border border-input bg-background p-3 font-normal outline-none focus:border-primary" placeholder="Tell us about your tender environment and assurance priorities." /></label><label className="mt-5 flex items-start gap-3 text-xs leading-5 text-muted-foreground"><input required type="checkbox" className="mt-1 accent-primary"/>I agree to be contacted about an enterprise demonstration.</label><Button type="submit" className="mt-6 w-full sm:w-auto">Request enterprise demo <ArrowRight size={16}/></Button><p className="mt-4 text-xs text-muted-foreground">No details are sent from this preview form.</p></form>}</div></div></section>
      </main>

      <SiteFooter />
    </div>
  );
}
