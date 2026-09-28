import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Menu } from "lucide-react";
import { getService, services } from "../lib/services";

export const Route = createFileRoute("/services/$serviceId")({
  head: ({ params }) => {
    const service = getService(params.serviceId);
    return { meta: [
      { title: service ? `${service.title} | Nairika Labs Services` : "Service | Nairika Labs Services" },
      { name: "description", content: service?.short ?? "Explore Nairika Labs technology services." },
      { property: "og:title", content: service ? `${service.title} | Nairika Labs Services` : "Nairika Labs Services" },
      { property: "og:description", content: service?.short ?? "Explore Nairika Labs technology services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: ServicePage,
});

function BrandMark() { return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>; }

function ServicePage() {
  const { serviceId } = Route.useParams();
  const service = getService(serviceId);
  if (!service) {
    return <main className="service-page"><section className="service-hero section-pad"><p className="section-label">[ Service unavailable ]</p><h1>We couldn’t find that service.</h1><Link className="back-link" to="/" hash="services"><ArrowLeft size={17} /> View all services</Link></section></main>;
  }
  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length] ?? services[0];
  const Icon = service.icon;

  return (
    <main className="service-page">
      <header className="site-header service-header">
        <Link className="brand" to="/" aria-label="Nairika Labs home"><BrandMark /><span>Nairika Labs</span></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation"><Link to="/" hash="about">Studio</Link><Link to="/" hash="services">Services</Link><Link to="/" hash="process">Process</Link><Link to="/" hash="contact">Contact</Link></nav>
        <Link className="header-cta hidden sm:inline-flex" to="/" hash="contact">Start a project <ArrowUpRight size={17} /></Link>
        <button className="menu-button sm:hidden" aria-label="Open menu"><Menu size={22} /></button>
      </header>

      <section className="service-hero section-pad">
        <Link className="back-link" to="/" hash="services"><ArrowLeft size={17} /> All services</Link>
        <div className="service-hero-grid"><div><p className="section-label">[ Service {service.number} ]</p><h1>{service.title}</h1></div><div className="service-hero-summary"><Icon strokeWidth={1.3} /><p>{service.promise}</p></div></div>
      </section>

      <section className="service-overview section-pad">
        <div><p className="section-label">[ The opportunity ]</p><h2>Useful technology.<br /><em>Measurable value.</em></h2></div>
        <div className="service-overview-copy"><p>{service.overview}</p><div className="outcomes">{service.outcomes.map((outcome) => <span key={outcome}><Check size={17} />{outcome}</span>)}</div></div>
      </section>

      <section className="service-deliverables section-pad">
        <div><p className="section-label">[ What you receive ]</p><h2>A complete path<br />from idea to impact.</h2></div>
        <ol>{service.deliverables.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowUpRight /></li>)}</ol>
      </section>

      <section className="service-method section-pad"><p className="section-label">[ Our approach ]</p><div className="method-grid">{service.stages.map((stage, index) => <article key={stage.title}><span>0{index + 1}</span><h3>{stage.title}</h3><p>{stage.text}</p></article>)}</div></section>

      <section className="service-cta section-pad"><p className="section-label">[ Ready when you are ]</p><h2>Let’s shape your<br /><em>{service.title.toLowerCase()}</em> project.</h2><Link className="service-cta-button" to="/" hash="contact">Tell us what you need <ArrowRight /></Link></section>

      <footer className="site-footer compact-footer"><div className="footer-top"><div className="footer-intro"><Link className="brand footer-brand" to="/"><BrandMark /><span>Nairika Labs Services</span></Link><p>Technology shaped around your ambition, supported beyond launch.</p></div><div className="footer-column"><strong>Next service</strong>{nextService ? <Link to="/services/$serviceId" params={{ serviceId: nextService.slug }}>{nextService.title} <ArrowUpRight size={16} /></Link> : <Link to="/" hash="services">All services</Link>}</div><div className="footer-column"><strong>Talk to us</strong><a href="mailto:consult@nairikalabs.com">consult@nairikalabs.com</a><span>Nairobi, Kenya</span></div></div><div className="footer-bottom"><span>© 2026 Nairika Labs Services</span><Link to="/">Return home</Link></div></footer>
    </main>
  );
}