export type SiteConfig = typeof siteConfig

const links = {
  github: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  instagram: '',
  youtube: '',
  twitch: '',
}

export const siteConfig = {
  title: 'My Site',
  description: 'My site description',
  url: 'https://example.com', // Next public URL in env variable
  twitter: '@example',
  ogImage: 'https://example.com/images/ogp.png',
  links,
}
