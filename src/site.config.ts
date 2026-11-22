/**
 * Site-wide settings and external links.
 * PLACEHOLDER: a link set to `null` is not live yet; the page shows "coming soon" instead.
 */
export const site = {
  name: 'Kraft Dev',
  url: 'https://kraft.dev',
  tagline: 'Engineering Kraft in the age of AI agents',
  description:
    'Kraft Dev is a monthly in-person meetup in Tel Aviv for engineers, engineering leaders and product builders: engineering craft in the age of AI agents.',
} as const;

export const links = {
  /** Luma event page for meetup #1: the meetup section's register link. */
  luma: 'https://luma.com/mbvm63vq' as string | null,
};

/**
 * Google Form that receives the "Join the WhatsApp community" form (responses land in Doron's Google account).
 * Fields are posted as form-encoded entry.<id> values; empty string disables the form.
 */
export const joinFormEndpoint: string =
  'https://docs.google.com/forms/d/e/1FAIpQLSe5sxT61-_doAk1WbFjIwyykqLDFIXLXcPKSw1sX6JcfaClOg/formResponse';

/** Google Form entry ids for each field of the join form. */
export const joinFormFields: Record<string, string> = {
  fullName: 'entry.617977784',
  company: 'entry.1845830470',
  role: 'entry.1896308029',
  email: 'entry.1921723595',
  phone: 'entry.436260838',
};

/** Google Analytics 4 measurement id (G-XXXXXXXXXX). Empty string = no analytics loaded. */
export const gaMeasurementId: string = '';
