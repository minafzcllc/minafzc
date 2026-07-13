import { site } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${site.name} — how we collect, use and protect your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#7ea6ff' }}>Legal</span>
          <h1>Privacy Policy</h1>
          <p>How {site.name} collects, uses and protects your information.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <p className="updated">Last updated: July 2026</p>

          <p>
            {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website{' '}
            {site.url.replace('https://', '')} (the &quot;Website&quot;). This Privacy
            Policy explains what information we collect when you visit our
            Website or contact us, how we use it, and the choices you have.
            By using the Website, you agree to the practices described in this
            policy.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Information you provide to us</h3>
          <p>
            When you contact us by email, phone, WhatsApp or through the
            enquiry form on this Website, we may collect:
          </p>
          <ul>
            <li>Your name and, where applicable, your company or clinic name;</li>
            <li>Contact details such as email address, phone number and country;</li>
            <li>
              The contents of your enquiry, including product requirements,
              quantities and shipping destination;
            </li>
            <li>
              Business information needed to prepare quotations, process
              orders and arrange export shipping (such as billing and delivery
              addresses).
            </li>
          </ul>

          <h3>Information collected automatically</h3>
          <p>
            This is a static informational website. We do not require accounts
            or logins. Our hosting provider may automatically record standard
            technical data such as your IP address, browser type, device
            information, pages visited and access times in server logs. Where
            analytics tools are used, they may collect similar aggregated,
            non-identifying usage data.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiries and provide quotations;</li>
            <li>To process, pack and ship wholesale and export orders;</li>
            <li>
              To prepare invoices, packing lists, certificates and other export
              documentation;
            </li>
            <li>To provide pre-sales and after-sales customer support;</li>
            <li>To maintain business records and comply with legal obligations;</li>
            <li>To improve the content and usability of the Website.</li>
          </ul>
          <p>
            We do not sell, rent or trade your personal information to third
            parties for marketing purposes.
          </p>

          <h2>3. Sharing of Information</h2>
          <p>We may share your information only where necessary, with:</p>
          <ul>
            <li>
              Shipping, freight and logistics partners, in order to deliver
              your orders;
            </li>
            <li>
              Banks and payment providers, in order to process payments;
            </li>
            <li>
              Government, customs or regulatory authorities, where required for
              export compliance or by applicable law;
            </li>
            <li>
              Service providers who host or maintain this Website, under
              appropriate confidentiality obligations.
            </li>
          </ul>

          <h2>4. Communication via WhatsApp and Email</h2>
          <p>
            If you contact us via WhatsApp or email, your communication is also
            subject to the privacy policies of those service providers (such as
            WhatsApp/Meta or your email provider). We recommend reviewing their
            policies. We use these channels solely to communicate with you
            about your enquiries and orders.
          </p>

          <h2>5. Cookies</h2>
          <p>
            The Website may use a small number of cookies or similar
            technologies that are strictly necessary for it to function, and,
            where enabled, analytics cookies to understand general visitor
            traffic. You can control or delete cookies through your browser
            settings; disabling cookies will not prevent you from browsing the
            Website.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain enquiry and order information for as long as needed to
            fulfil your request, maintain our business records and meet legal,
            accounting and export-compliance requirements. Information that is
            no longer required is deleted or anonymized.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect
            the information you share with us against unauthorized access,
            loss or misuse. However, no method of transmission over the
            internet is completely secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Subject to applicable law, you may request access to, correction
            of, or deletion of the personal information we hold about you. You
            may also ask us to stop contacting you at any time. To exercise
            these rights, contact us using the details below.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            The Website may contain links to third-party websites or services
            (for example, WhatsApp). We are not responsible for the privacy
            practices or content of those third parties.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our Website and products are intended for businesses and healthcare
            professionals. We do not knowingly collect personal information
            from children.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated &quot;Last updated&quot; date.
            Continued use of the Website after changes are posted constitutes
            acceptance of the revised policy.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how your
            information is handled, please contact:
          </p>
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
