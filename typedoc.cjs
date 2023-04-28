/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  name: 'HealthCare Portal',
  media: 'media',
  hideGenerator: true,
  excludePrivate: true,
  sidebarLinks: {
    Website: 'https://meetportal.com',
    'Portal Library': 'https://portal-js.meetportal.com',
    'Developer Console': 'https://marketplace.meetportal.com/developer',
    'Getting Started': '#',
  },
  disableSources: true,
  // theme: 'just-the-docs',
  plugin: './typedoc-plugins/defaults.cjs',
  customCss: './theme/style.css',
}
