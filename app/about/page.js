import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata = {
  title: 'About Us',
  description: `Learn about ${site.name} — a UAE-based manufacturer, supplier, wholesaler and exporter of dental, surgical and medical instruments.`,
};

const qualityItems = [
  {
    title: 'Medical Grade Stainless Steel',
    text: 'Instruments are produced from medical-grade stainless steel selected for hardness, edge retention and biocompatibility in clinical use.',
  },
  {
    title: 'Precision Engineering',
    text: 'Working ends are ground and finished to fine tolerances, then checked for alignment, symmetry and smooth action.',
  },
  {
    title: 'Autoclave-Safe by Design',
    text: 'Every instrument is designed for standard steam autoclave cycles — no coatings or joints that degrade under repeated sterilization.',
  },
  {
    title: 'Corrosion Resistance',
    text: 'Passivated, corrosion-resistant surfaces withstand disinfectants, ultrasonic cleaning and humid clinical environments.',
  },
  {
    title: 'Final Inspection',
    text: 'Visual and functional inspection of finish, tips and mechanisms before packing, with batch-level consistency across wholesale orders.',
  },
  {
    title: 'Documentation Support',
    text: 'Product and export documentation assistance for institutional buyers, importers and regulatory submissions.',
  },
];

const oemItems = [
  { title: 'Custom Marking', text: 'Laser marking of your brand name or logo on instrument handles.' },
  { title: 'Branded Packaging', text: 'Set boxes, blister trays and sleeves designed around your identity.' },
  { title: 'Set Configuration', text: 'Compose custom sets — choose patterns, counts and tray layouts.' },
  { title: 'Scalable Volumes', text: 'From pilot quantities to recurring container-level programs.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#7ea6ff' }}>About Us</span>
          <h1>Instruments engineered for professionals who demand precision.</h1>
          <p>
            Manufacturer · Supplier · Wholesaler · Exporter — based in Ajman,
            United Arab Emirates.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container about-split">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, margin: '14px 0 18px' }}>
              A UAE-based partner for dental, surgical and medical instruments
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '14px' }}>
              {site.name} is a UAE-based manufacturer, supplier, wholesaler and
              exporter of dental, surgical and medical instruments. From our
              base in Ajman, United Arab Emirates, we serve distributors,
              hospitals, dental clinics, medical centers and healthcare
              procurement teams with instruments built from medical-grade
              stainless steel — precision engineered, corrosion resistant and
              fully autoclavable.
            </p>
            <p style={{ color: 'var(--muted)', marginBottom: '14px' }}>
              Every instrument that leaves our facility is inspected for
              finish, alignment and function, because the professionals who use
              our tools work where accuracy is non-negotiable. Whether you are
              stocking a single clinic or supplying a national distribution
              network, we deliver consistent quality, wholesale pricing and
              dependable export logistics.
            </p>
            <div className="chips" style={{ marginTop: '22px' }}>
              {site.roles.map((r) => (
                <span className="chip" key={r}>{r}</span>
              ))}
            </div>
          </div>
          <div>
            <img
              src="/images/hero-banner.jpg"
              alt="MINA FZC LLC instrument range with sterilization cassettes"
            />
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Quality &amp; Sterilization</span>
            <h2>Medical-grade, batch after batch</h2>
            <p>
              Quality in surgical instruments is not a finish — it is a
              process. Each instrument passes through material selection,
              forming, precision grinding, finishing and final inspection
              before it is packed for export.
            </p>
          </div>
          <div className="grid grid-3">
            {qualityItems.map((q) => (
              <div className="card" key={q.title}>
                <h3 style={{ marginTop: 0 }}>{q.title}</h3>
                <p>{q.text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--muted)', fontStyle: 'italic' }}>
            Care guidance: clean promptly after use, sterilize per your
            facility protocol, and store dry.
          </p>
        </div>
      </section>

      {/* OEM */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">OEM &amp; Private Label</span>
            <h2>Your brand. Our precision.</h2>
            <p>
              As a manufacturer, {site.name} supports OEM and private-label
              programs for distributors and dental brands. Build your own
              instrument line on our production base — with your marking, your
              packaging and our quality standard.
            </p>
          </div>
          <div className="grid grid-2">
            {oemItems.map((o, i) => (
              <div className="card" key={o.title} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <span
                  className="step-num"
                  style={{ color: 'var(--royal)', fontSize: '26px', lineHeight: 1.2 }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 style={{ marginTop: 0 }}>{o.title}</h3>
                  <p>{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETS + CTA */}
      <section className="section navy">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Worldwide Supply</span>
            <h2>From ready stock in the UAE to your warehouse</h2>
            <p>
              Core lines held in stock in Ajman for immediate dispatch, with
              air and sea freight options, wholesale pricing tiers, distributor
              support and export documentation handled for you.
            </p>
          </div>
          <div className="chips" style={{ marginBottom: '40px' }}>
            {site.markets.map((m) => (
              <span
                className="chip"
                key={m}
                style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                {m}
              </span>
            ))}
          </div>
          <Link href="/contact/" className="btn btn-primary">
            Start a Wholesale Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
