/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Futako Book Club`,
    siteUrl: `https://www.futakobookclub.com`,
    description: `二子玉川で活動する読書会、Futako Book Clubの公式サイトです。`,
    twitterUsername: `tak_kafka`,
    image: `./src/images/cat_dark.webp`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./src/images/favicon.ico"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};