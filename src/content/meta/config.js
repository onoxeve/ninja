const base = {
  name: 'onox blog',
  url: 'https://onoxeve.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is Ninja Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: '',

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  /* manifest */
  manifestName: `${base.name}`,
  manifestShortName: `${base.name}`, // max 12 characters
  manifestStartUrl: '/index.html',
  manifestBackgroundColor: '#ffffff',
  manifestThemeColor: '#ffffff',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/content/images/icon.png',

  /* Twitter */
  twitter: '' // used as content of the 'twitter:creator' meta tag
};

module.exports = config;
