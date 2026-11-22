/**
 * Site-wide settings and external links.
 * PLACEHOLDER: a link set to `null` is not live yet; the page shows "coming soon" instead.
 */
export const site = {
  name: 'Kraft Dev',
  url: 'https://kraft.dev',
  tagline: 'Engineering craft in the age of AI agents',
  description:
    'Kraft Dev is a monthly in-person meetup in Tel Aviv for engineers, engineering leaders and product builders: engineering craft in the age of AI agents.',
} as const;

export const links = {
  /** Luma event page for meetup #1: the meetup section's register link. */
  luma: 'https://luma.com/mbvm63vq' as string | null,
};

/**
 * PLACEHOLDER: URL that receives the "Join the WhatsApp community" form.
 * The form POSTs JSON: { fullName, company, role, email, phone }. Any 2xx response counts as success.
 * Empty string = no backend yet: the submit button is disabled and the form shows "coming soon".
 */
export const joinFormEndpoint: string = '';
