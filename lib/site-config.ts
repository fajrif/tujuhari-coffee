// Single source of truth for site-wide copy, nav, and contact links.
// Sourced from README.md — edit here, components read from these exports.

export const siteMeta = {
  title: 'Tu7uhari Coffee',
  description:
    'Tujuhari Coffee is a Jakarta-based coffee brand that has served customers since 2019, cultivating a community where ideas, collaboration, and innovation thrive.',
}

// Verbatim hero paragraph from the design mockup — longer than siteMeta.description,
// which is the shorter SEO/meta copy.
export const heroCopy =
  'Tujuhari Coffee is a Jakarta-based coffee brand that has served customers since 2019. As an emerging brand focused on helping the nation shape a new culture of productivity and creativity, we have cultivated a diverse community that fosters an environment where ideas, collaboration, and innovation thrive.'

export interface NavLink {
  label: string
  href: string
}

// "Online Order" has no single sitewide ordering URL in the source data —
// routes to Locations so visitors pick a store's delivery platform.
export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Space', href: '#flagship-store' },
  { label: 'Online Order', href: '#locations' },
  { label: 'Collaboration', href: '#collaboration' },
]

// README-authoritative. The design mockup shows a "TikTok" footer link with
// no corresponding URL anywhere in the source doc — omitted rather than invented.
export const socialLinks = {
  instagram: 'https://www.instagram.com/tujuhari_/',
  youtube: 'https://www.youtube.com/channel/UCy8UHWw5ZFYpUY_C_KdRsQA',
  spotify:
    'https://open.spotify.com/user/4l8aqki5xm6s8fnu93a6sf55x?si=VxUKdluiSEuOFSylpLdF3g&nd=1&dlsi=5d7839a2a2334cbd',
}

export const contactInfo = {
  whatsapp: 'https://wa.me/6281944320777',
  whatsappLabel: '+62 819-4432-0777',
  email: 'halo@tujuhari.id',
  hqAddressLines: ['Grand Wijaya Centre B 8-9', 'Kebayoran Baru, South Jakarta,', 'Indonesia'],
}

export const photoCredits =
  "Photo credits to Kafin Noe'man, Peter Sutedja, Work by W, Margent Ortega, Vivien Nathania, and Madrelode / Rachel Patricya."

// Placeholders — client to supply the real URLs; isolated here so no
// component code needs touching when they arrive.
export const externalLinks = {
  menuUrl: 'https://drive.google.com/drive/folders/1UHLLBe9_0ydNup_Og4SGwlG0kfnKNNu1',
  reservationUrl: 'https://wa.me/6281944320777',
}
