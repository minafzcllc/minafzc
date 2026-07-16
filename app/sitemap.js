import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
    const base = site.url.replace(/\/$/, '');
    const lastModified = new Date();

    return [
        { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
        { url: `${base}/about/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/contact/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/privacy-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${base}/terms/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    ];
}
