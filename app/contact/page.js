'use client';

import { site } from '@/lib/site';

export default function ContactPage() {
  // Static site: the form composes an email in the visitor's mail client.
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Wholesale Enquiry — ${data.get('name') || 'Website Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
        `Company: ${data.get('company')}\n` +
        `Email: ${data.get('email')}\n` +
        `Phone / WhatsApp: ${data.get('phone')}\n` +
        `Country: ${data.get('country')}\n\n` +
        `Message:\n${data.get('message')}`
    );
    window.location.href = `${site.contact.emailHref}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#7ea6ff' }}>Contact</span>
          <h1>Let&apos;s work together.</h1>
          <p>
            For wholesale quotations, distributor terms, OEM programs or export
            enquiries — our team responds quickly on WhatsApp and email.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Contact details */}
          <div>
            <div className="contact-item">
              <div className="card-icon" aria-hidden="true">📍</div>
              <div>
                <h3>Address</h3>
                <p>{site.contact.address}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="card-icon" aria-hidden="true">📞</div>
              <div>
                <h3>Phone &amp; WhatsApp</h3>
                <p>
                  <a href={site.contact.phoneHref}>{site.contact.phone}</a>
                  <br />
                  <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp →
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="card-icon" aria-hidden="true">✉️</div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href={site.contact.emailHref}>{site.contact.email}</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="card-icon" aria-hidden="true">🕘</div>
              <div>
                <h3>Business Hours</h3>
                <p>Wholesale enquiries answered promptly — {site.contact.hours}.</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="card-icon" aria-hidden="true">🌐</div>
              <div>
                <h3>Website</h3>
                <p>
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    {site.url.replace('https://', '')}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="form-card">
            <h2>Send an enquiry</h2>
            <p>
              Share your product list, quantities and destination — or simply
              tell us what you need. Submitting opens your email client with
              the message pre-filled.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="company">Company / Clinic</label>
                <input id="company" name="company" type="text" placeholder="Company or clinic name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" placeholder="+971 ..." />
              </div>
              <div className="field">
                <label htmlFor="country">Country</label>
                <input id="country" name="country" type="text" placeholder="Destination country" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Products, quantities and any specifications..."
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
