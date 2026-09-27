import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Check, Menu, MoveRight } from "lucide-react";
import heroImage from "../assets/nairika-team-hero.jpg";
import studioImage from "../assets/nairika-studio.jpg";
import { services } from "../lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nairika Labs Services | Software, Web & Digital Solutions" },
      { name: "description", content: "Nairika Labs Services builds custom systems, websites, cloud solutions and digital products with dependable long-term support." },
      { property: "og:title", content: "Nairika Labs Services | Build what moves business" },
      { property: "og:description", content: "Software engineering, web development, product design and technology consulting with support beyond launch." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>;
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Nairika Labs home"><BrandMark /><span>Nairika Labs</span></a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        <a href="#about">Studio</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a>
      </nav>
      <a className="header-cta hidden sm:inline-flex" href="#contact">Start a project <ArrowUpRight size={17} /></a>
      <button className="menu-button sm:hidden" aria-label="Open menu"><Menu size={22} /></button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-intro">
          <a className="brand footer-brand" href="#top"><BrandMark /><span>Nairika Labs Services</span></a>
          <p>Technology shaped around your ambition, supported beyond launch.</p>
        </div>
        <div className="footer-column"><strong>Explore</strong><a href="#about">Studio</a><a href="#services">Services</a><a href="#process">How we work</a><a href="#contact">Contact</a></div>
        <div className="footer-column"><strong>Services</strong>{services.map((service) => <Link key={service.slug} to="/services/$serviceId" params={{ serviceId: service.slug }}>{service.title}</Link>)}</div>
        <div className="footer-column"><strong>Talk to us</strong><a href="mailto:hello@nairikalabs.com">hello@nairikalabs.com</a><span>Nairobi, Kenya</span><span>Available worldwide</span></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Nairika Labs Services</span><span>Build with clarity. Grow with confidence.</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header />
      <section id="top" className="hero">
        <img src={heroImage} alt="Nairika Labs team collaborating in a bright technology studio" width={1600} height={1104} />
        <div className="hero-shade" /><div className="hero-gridlines" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent digital product studio</p>
          <h1>Build what<br /><em>moves</em> business.</h1>
          <div className="hero-bottom"><p>We turn ambitious ideas into dependable digital products — from first sketch to launch and beyond.</p><a href="#about" className="circle-link" aria-label="Discover Nairika Labs"><ArrowDownRight size={30} /></a></div>
        </div>
        <div className="hero-index" aria-hidden="true">NL / 2026</div>
      </section>

      <section id="about" className="intro section-pad">
        <p className="section-label">[ Who we are ]</p>
        <div className="intro-main">
          <h2>A partner for<br />every <em>stage.</em></h2>
          <div className="intro-copy"><p>Nairika Labs Services helps organisations make confident technology decisions, build useful digital products and keep them performing long after launch.</p><p>We bring strategy, design, engineering and responsive support together, giving you one accountable partner from the first conversation through continuous improvement.</p><a href="#contact" className="text-link">Talk with a technology partner <ArrowUpRight size={18} /></a></div>
        </div>
        <div className="support-pillars">
          <article><span>01</span><h3>Built around you</h3><p>Solutions reflect your workflows, customers and goals—not a generic template.</p></article>
          <article><span>02</span><h3>Clear at every step</h3><p>Visible progress, honest advice and practical decisions keep delivery on course.</p></article>
          <article><span>03</span><h3>Supported beyond launch</h3><p>We stay available to maintain, improve and evolve what we build together.</p></article>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <div className="services-heading"><p className="section-label">[ What we do ]</p><h2>Expertise that<br />moves you forward.</h2><p>Focused capabilities that work independently or come together as one complete digital delivery partnership.</p></div>
        <div className="service-grid">
          {services.map(({ slug, number, icon: Icon, title, short }) => (
            <article className="service-card" key={title}>
              <div className="service-card-top"><span>{number}</span><Icon strokeWidth={1.5} /></div>
              <h3>{title}</h3><p>{short}</p>
              <Link className="service-card-link" to="/services/$serviceId" params={{ serviceId: slug }}>Explore service <ArrowUpRight size={18} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="process-section section-pad">
        <div className="process-head"><div><p className="section-label">[ How we work ]</p><h2>Clear steps.<br /><em>Better outcomes.</em></h2></div><p>There are no black boxes. You see the work, understand the decisions and shape the result with us from beginning to end.</p></div>
        <div className="process-visual">
          <div className="process-photo"><img src={studioImage} alt="Nairika Labs designers reviewing a digital product interface" loading="lazy" width={1408} height={1008} /><span>Built together</span></div>
          <ol className="process-steps">
            <li><span>01</span><div><small>Listen</small><h3>Discover</h3><p>We uncover the real challenge, users, priorities and definition of success.</p></div><Check /></li>
            <li><span>02</span><div><small>Shape</small><h3>Design</h3><p>We turn insight into clear journeys, prototypes and a practical delivery plan.</p></div><Check /></li>
            <li><span>03</span><div><small>Create</small><h3>Build</h3><p>We deliver in visible stages, test continuously and keep you close to progress.</p></div><Check /></li>
            <li><span>04</span><div><small>Improve</small><h3>Support</h3><p>We launch carefully, monitor performance and help the product evolve.</p></div><Check /></li>
          </ol>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="contact-intro"><p className="section-label">[ Start a conversation ]</p><h2>Bring us the<br /><em>challenge.</em></h2><p>Tell us where you want to go. We’ll respond with thoughtful questions and a practical next step.</p><a href="mailto:hello@nairikalabs.com">hello@nairikalabs.com <ArrowUpRight /></a></div>
        <form className="contact-form" action="mailto:hello@nairikalabs.com" method="post" encType="text/plain">
          <label>Your name<input name="name" required placeholder="How should we address you?" /></label>
          <label>Work email<input type="email" name="email" required placeholder="you@company.com" /></label>
          <label>Service<select name="service" defaultValue=""><option value="" disabled>What can we help with?</option>{services.map((service) => <option key={service.slug}>{service.title}</option>)}</select></label>
          <label>Tell us about the challenge<textarea name="message" required placeholder="A few details about your goals, timing and current situation…" rows={5} /></label>
          <button type="submit" className="form-submit">Send project enquiry <MoveRight /></button>
        </form>
      </section>
      <Footer />
    </main>
  );
}