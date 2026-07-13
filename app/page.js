import Link from 'next/link';
import { site, products } from '@/lib/site';

export const metadata = {
  title: 'Home',
  description: `${site.name} — manufacturer, supplier, wholesaler and exporter of dental, surgical and medical instruments from Ajman, UAE.`,
};

const whyItems = [
  { icon: '🏅', title: 'Premium Quality', text: 'Consistent, inspected quality across every production batch.' },
  { icon: '🔩', title: 'Medical Grade Stainless Steel', text: 'Manufactured from surgical stainless steel for clinical use.' },
  { icon: '🎯', title: 'Precision Engineered', text: 'Fine tolerances and accurate working ends, instrument after instrument.' },
  { icon: '🛡️', title: 'Corrosion Resistant', text: 'Finishes that withstand repeated cleaning and clinical environments.' },
  { icon: '♨️', title: 'Fully Autoclavable', text: 'Safe for standard autoclave sterilization cycles and reuse.' },
  { icon: '🌍', title: 'Worldwide Shipping', text: 'Export from the UAE to markets across Asia, Africa and beyond.' },
  { icon: '📦', title: 'Wholesale Supply', text: 'Bulk quantities and repeat-order reliability for distributors.' },
  { icon: '💬', title: 'Reliable Support', text: 'Responsive pre-sales and after-sales assistance on WhatsApp and email.' },
  { icon: '💰', title: 'Competitive Pricing', text: 'Direct-from-source pricing structured for trade and resale.' },
];

const orderSteps = [
  { title: 'Enquiry', text: 'Send your product list, quantities and destination by WhatsApp or email.' },
  { title: 'Quotation', text: 'Receive a consolidated wholesale quotation with pricing tiers and lead time.' },
  { title: 'Confirmation', text: 'Confirm your order; in-stock items are prepared immediately.' },
  { title: 'Inspection & Packing', text: 'Instruments pass final inspection and are packed for export.' },
  { title: 'Dispatch', text: 'Your consignment ships by air or sea freight with tracking details.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="hero-badge">★ Premium Quality · Ajman, UAE</span>
            <h1>
              Precision in Every <em>Instrument</em>, Perfection in Every <em>Procedure</em>.
            </h1>
            <p className="lead">
              Dental, surgical and medical instruments manufactured from
              medical-grade stainless steel — precision engineered, corrosion
              resistant and fully autoclavable. Supplied at wholesale terms to
              clinics, hospitals and distributors worldwide.
            </p>
            <div className="hero-actions">
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Request a Wholesale Quote
              </a>
              <Link href="/about/" className="btn btn-outline">
                About Our Company
              </Link>
            </div>
          </div>
          <div className="hero-figure">
            <img
              src="/images/hero-banner.jpg"
              alt="MINA FZC LLC dental instrument sets in sterilization cassettes"
            />
          </div>
        </div>
        <div className="hero-strip">
          <div className="container">
            <span>Premium Quality</span>
            <span>Precision Engineered</span>
            <span>Autoclave Safe</span>
            <span>Trusted by Professionals</span>
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Product Range</span>
            <h2>Wide range of dental &amp; surgical instruments</h2>
            <p>
              Restorative, diagnostic, isolation and impression instruments —
              every piece medical-grade stainless steel, autoclavable and
              supplied at wholesale terms.
            </p>
          </div>

          <div className="products">
            {products.map((p) => (
              <article className="product" key={p.code}>
                <img className="product-img" src={p.image} alt={p.name} />
                <div className="product-body">
                  <span className="product-code">Product Code · {p.code}</span>
                  <h3>{p.name}</h3>
                  <p className="slogan">{p.slogan}</p>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '14px' }}>
                    {p.description}
                  </p>
                  <ul>
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            {/* Surgical & medical on request */}
            <article className="product">
              <div
                className="product-body"
                style={{ justifyContent: 'center', textAlign: 'left', minHeight: '360px' }}
              >
                <span className="product-code">Available on Request</span>
                <h3>Surgical &amp; Medical Instruments</h3>
                <p className="slogan">Full range supplied to order.</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '14px' }}>
                  Extraction forceps, scissors, needle holders, elevators,
                  retractors, examination instruments, dressing forceps, kidney
                  trays and more — manufactured to the same medical-grade
                  standard as our dental line.
                </p>
                <Link href="/contact/" className="btn btn-outline-navy" style={{ alignSelf: 'flex-start' }}>
                  Request Specifications
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Built for buyers who cannot compromise</h2>
            <p>
              Our commitments behind every order — from a single set to
              full-container wholesale supply.
            </p>
          </div>
          <div className="grid grid-3">
            {whyItems.map((item) => (
              <div className="card" key={item.title}>
                <div className="card-icon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="section navy">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How to Order</span>
            <h2>From enquiry to delivery in five steps</h2>
          </div>
          <div className="steps">
            {orderSteps.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="step-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Export &amp; Shipping</span>
            <h2>Markets we serve</h2>
            <p>
              Ready stock in the UAE with fast international dispatch by air
              and sea freight. Worldwide shipping available upon request,
              depending on destination and freight availability.
            </p>
          </div>
          <div className="chips">
            {site.markets.map((m) => (
              <span className="chip" key={m}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Ready to stock your clinic or supply your network?</h2>
              <p>
                Send your product list and quantities — wholesale enquiries are
                answered promptly, {site.contact.hours}.
              </p>
            </div>
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ background: '#fff', color: 'var(--navy)' }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
