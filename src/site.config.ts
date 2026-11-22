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
  /** Luma event page for meetup #1 (registration requires approval). */
  luma: 'https://luma.com/mbvm63vq' as string | null,
  /** PLACEHOLDER: WhatsApp community invite link, e.g. https://chat.whatsapp.com/XXXX */
  whatsapp: null as string | null,
};
