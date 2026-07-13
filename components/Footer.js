import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo.jpg" alt={`${site.name} logo`} />
            <p>{site.description}</p>
            <p className="footer-tagline">{site.tagline}</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about/">About Us</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
              <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
              <li><Link href="/terms/">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4>Products</h4>
            <ul>
              <li>Composite Sets</li>
              <li>PMT Sets</li>
              <li>Chrome Removal Sets</li>
              <li>Rubber Dam Clamps</li>
              <li>Impression Trays</li>
              <li>Precision Tweezers</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>{site.contact.address}</li>
              <li>
                <a href={site.contact.phoneHref}>{site.contact.phone}</a>
              </li>
              <li>
                <a href={site.contact.emailHref}>{site.contact.email}</a>
              </li>
              <li>
                <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            <Link href="/privacy-policy/">Privacy</Link>
            {' · '}
            <Link href="/terms/">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
