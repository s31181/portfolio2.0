module.exports = {
    siteUrl: 'https://robcaluza.com',
    generateRobotsTxt: true,
    exclude: ['/api/*', '/_next/*', '/_static/*', '/_error/*', '/_redirects'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/', disallow: ['/api/*', '/_next/*', '/_static/*', '/_error/*', '/_redirects'] },
        ],
    },
  };

