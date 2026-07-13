'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About Us' },
  { href: '/contact/', label: 'Contact' },
  { href: '/privacy-policy/', label: 'Privacy Policy' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpg" alt={`${site.name} logo`} />
          <span className="nav-brand-name">
            MINA FZC LLC
            <span className="nav-brand-sub">Dental · Surgical · Medical</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={isActive(l.href) ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
