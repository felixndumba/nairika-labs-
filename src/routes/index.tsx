import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Blocks,
  Brush,
  CloudCog,
  Code2,
  Menu,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import heroImage from "../assets/nairika-team-hero.jpg";
import studioImage from "../assets/nairika-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nairika Labs Services | Software, Web & Digital Solutions" },
      {
        name: "description",
        content:
          "Nairika Labs Services builds custom systems, websites, cloud solutions and digital products for ambitious businesses.",
      },
      { property: "og:title", content: "Nairika Labs Services | Build what moves business" },
      {
        property: "og:description",
        content: "Software engineering, web development, product design and technology consulting from one agile team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", icon: Code2, title: "System Development", text: "Purpose-built platforms that simplify operations and scale with your organisation." },
  { n: "02", icon: Blocks, title: "Web Development", text: "Fast, expressive websites and web applications engineered to perform." },
  { n: "03", icon: MessagesSquare, title: "IT Consultation", text: "Clear technology strategy, architecture and practical guidance without the jargon." },
  { n: "04", icon: Brush, title: "UI/UX Design", text: "Digital experiences shaped around real people, real needs and measurable outcomes." },
  { n: "05", icon: CloudCog, title: "Cloud & DevOps", text: "Secure cloud infrastructure, automation and reliable deployment pipelines." },
  { n: "06", icon: ShieldCheck, title: "Cybersecurity", text: "Practical protection for your applications, teams and business-critical data." },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nairika Labs home">
          <BrandMark />
          <span>Nairika Labs</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <a href="#about">Studio</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta hidden sm:inline-flex" href="mailto:hello@nairikalabs.com">
          Start a project <ArrowUpRight size={17} />
        </a>
        <button className="menu-button sm:hidden" aria-label="Open menu"><Menu size={22} /></button>
      </header>

      <section id="top" className="hero">
        <img src={heroImage} alt="Nairika Labs team collaborating in a bright technology studio" width={1600} height={1104} />
        <div className="hero-shade" />
        <div className="hero-gridlines" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent digital product studio</p>
          <h1>Build what<br /><em>moves</em> business.</h1>
          <div className="hero-bottom">
            <p>We turn ambitious ideas into dependable digital products — from first sketch to launch and beyond.</p>
            <a href="#services" className="circle-link" aria-label="Explore our services"><ArrowDownRight size={30} /></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">NL / 2026</div>
      </section>

      <section className="ticker" aria-label="Nairika Labs capabilities">
        <div>Strategy <span>✦</span> Design <span>✦</span> Engineering <span>✦</span> Growth <span>✦</span> Strategy <span>✦</span> Design</div>
      </section>

      <section id="about" className="intro section-pad">
        <p className="section-label">[ Who we are ]</p>
        <div className="intro-main">
          <h2>Small team.<br />Serious <em>impact.</em></h2>
          <div className="intro-copy">
            <p>Nairika Labs Services is a hands-on technology partner for organisations ready to work smarter, move faster and make a lasting digital impression.</p>
            <a href="#contact" className="text-link">Meet your technology partner <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>06</strong><span>Core capabilities</span></div>
          <div><strong>360°</strong><span>Product thinking</span></div>
          <div><strong>01</strong><span>Committed team</span></div>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <div className="services-heading">
          <p className="section-label">[ What we do ]</p>
          <h2>Expertise that<br />ships.</h2>
        </div>
        <div className="service-list">
          {services.map(({ n, icon: Icon, title, text }) => (
            <article className="service-item" key={title}>
              <span className="service-number">{n}</span>
              <Icon className="service-icon" strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight className="service-arrow" />
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="process">
        <div className="process-image">
          <img src={studioImage} alt="Nairika Labs designers reviewing a digital product interface" loading="lazy" width={1408} height={1008} />
          <div className="image-stamp">Designed in Nairobi<br />Built for everywhere</div>
        </div>
        <div className="process-copy">
          <p className="section-label">[ How we work ]</p>
          <h2>Clarity before<br />complexity.</h2>
          <p>Great technology starts with the right questions. We learn your business, define the opportunity, and build in focused, visible stages.</p>
          <ol>
            <li><span>01</span><strong>Discover</strong><small>Goals, users, challenges</small></li>
            <li><span>02</span><strong>Design</strong><small>Direction, flows, prototypes</small></li>
            <li><span>03</span><strong>Deliver</strong><small>Build, test, launch</small></li>
          </ol>
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <p className="section-label">[ Have a project in mind? ]</p>
        <h2>Let’s make it<br /><em>real.</em></h2>
        <a href="mailto:hello@nairikalabs.com" className="contact-link">
          hello@nairikalabs.com <ArrowUpRight />
        </a>
        <footer>
          <a className="brand footer-brand" href="#top"><BrandMark /><span>Nairika Labs Services</span></a>
          <p>Technology shaped around your ambition.</p>
          <p>© 2026 Nairika Labs</p>
        </footer>
      </section>
    </main>
  );
}