export default function sitemap() {
  const baseUrl = 'https://www.allfinstars.com.au';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/first-home-loans`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/owner-occupier-loans`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/investment-loans`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/smsf-loans`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/refinancing-loans`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/construction-loans`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ]
}
