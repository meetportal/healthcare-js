/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  name: 'HealthCare Portal',
  media: 'media',
  hideGenerator: true,
  excludePrivate: true,
  sidebarLinks: {
    Github: 'https://github.com/meetportal/healthcare-js',
    Website: 'https://meetportal.com',
    'Portal Library': 'https://portal-js.meetportal.com',
    'Developer Console': 'https://marketplace.meetportal.com/developer',
    'Getting Started': '#',
  },
  disableSources: true,
  plugin: './typedoc-plugins/defaults.cjs',
  customCss: './theme/style.css',
}
