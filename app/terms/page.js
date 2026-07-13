import { site } from '@/lib/site';

export const metadata = {
  title: 'Terms & Conditions',
  description: `General terms and conditions for using the ${site.name} website and purchasing our products.`,
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#7ea6ff' }}>Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p>
            General terms governing the use of this website and the sale of our
            products.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <p className="updated">Last updated: July 2026</p>

          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) apply to your use of the
            website operated by {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) and to all
            enquiries, quotations and orders for our products. By using this
            website or placing an order, you agree to these Terms.
          </p>

          <h2>1. About Us</h2>
          <p>
            {site.name} is a manufacturer, supplier, wholesaler and exporter of
            dental, surgical and medical instruments, based at{' '}
            {site.contact.address}.
          </p>

          <h2>2. Website Content</h2>
          <ul>
            <li>
              The content of this website is provided for general information
              about our company and products. It does not constitute medical,
              clinical or professional advice.
            </li>
            <li>
              Product images are for illustration; actual products may vary
              slightly in appearance, and specifications may be updated from
              edition to edition of our catalogue.
            </li>
            <li>
              We make reasonable efforts to keep the website accurate and up to
              date, but we do not warrant that all content is error-free or
              complete at all times.
            </li>
          </ul>

          <h2>3. Intended Use of Products</h2>
          <ul>
            <li>
              Our instruments are intended for use by qualified dental,
              surgical and medical professionals and institutions.
            </li>
            <li>
              Buyers are responsible for ensuring that products are suitable
              for their intended application and are used, cleaned and
              sterilized in accordance with their facility protocols and
              applicable professional standards.
            </li>
            <li>
              Buyers and importers are responsible for confirming that the
              products meet the regulatory requirements of their own country
              before purchase and importation.
            </li>
          </ul>

          <h2>4. Enquiries, Quotations and Orders</h2>
          <ul>
            <li>
              All prices, lead times and availability are confirmed in a
              written quotation. Quotations are valid for the period stated in
              them.
            </li>
            <li>
              An order is binding once confirmed in writing by both parties.
              Made-to-order items are scheduled for production upon
              confirmation.
            </li>
            <li>
              Payment terms, currency and method are as agreed in the
              quotation or order confirmation.
            </li>
            <li>
              We reserve the right to decline or cancel orders where payment
              is not received, where export restrictions apply, or where an
              obvious pricing or typographical error has occurred.
            </li>
          </ul>

          <h2>5. Shipping, Delivery and Risk</h2>
          <ul>
            <li>
              Orders are shipped by air or sea freight as agreed. Estimated
              delivery times are indicative and may vary with destination,
              customs clearance and freight availability.
            </li>
            <li>
              Unless otherwise agreed in writing, risk in the goods passes to
              the buyer in accordance with the shipping terms (Incoterms)
              stated in the quotation or invoice.
            </li>
            <li>
              Import duties, taxes, customs charges and local clearance in the
              destination country are the responsibility of the buyer unless
              otherwise agreed.
            </li>
          </ul>

          <h2>6. Inspection, Returns and Claims</h2>
          <ul>
            <li>
              Please inspect goods promptly upon receipt. Claims for shortages,
              incorrect items or transit damage should be reported to us in
              writing, with supporting photographs where possible, within a
              reasonable period of delivery.
            </li>
            <li>
              Returns are accepted only by prior written agreement. Returned
              items must be unused, in their original packaging and in
              resalable condition, except where the return is due to a defect
              or our error.
            </li>
            <li>
              For hygiene and safety reasons, instruments that have been used,
              sterilized or processed cannot be returned unless defective.
            </li>
          </ul>

          <h2>7. Warranty</h2>
          <p>
            We warrant that our instruments are free from defects in material
            and workmanship under normal use and proper care. This warranty
            does not cover damage caused by misuse, improper cleaning or
            sterilization, modification, or normal wear and tear. Our
            liability under this warranty is limited to repair, replacement or
            refund of the affected item, at our discretion.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, {site.name}{' '}
            shall not be liable for any indirect, incidental, special or
            consequential loss (including loss of profit or business) arising
            from the use of this website or of our products. Nothing in these
            Terms excludes or limits liability that cannot be excluded or
            limited under applicable law.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            All content on this website — including the {site.name} name,
            logo, product descriptions, images and catalogue material — is the
            property of {site.name} or its licensors. It may not be copied,
            reproduced or used for commercial purposes without our prior
            written consent.
          </p>

          <h2>10. OEM and Private Label</h2>
          <p>
            OEM and private-label programs are governed by separate written
            agreements. Buyers commissioning branded products confirm that
            they hold the necessary rights to the trademarks, logos and
            designs they supply, and indemnify us against third-party claims
            arising from their use.
          </p>

          <h2>11. Force Majeure</h2>
          <p>
            We are not liable for delays or failure to perform caused by
            events beyond our reasonable control, including natural disasters,
            port or customs disruptions, freight shortages, governmental
            actions or other force majeure events.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United Arab Emirates.
            Any disputes shall be subject to the jurisdiction of the competent
            courts of the Emirate of Ajman, UAE, unless otherwise agreed in
            writing.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may revise these Terms from time to time. The version published
            on this page at the time of your order or use of the website
            applies.
          </p>

          <h2>14. Contact</h2>
          <ul>
            <li><strong>Company:</strong> {site.name}</li>
            <li><strong>Address:</strong> {site.contact.address}</li>
            <li><strong>Email:</strong> {site.contact.email}</li>
            <li><strong>Phone / WhatsApp:</strong> {site.contact.phone}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
