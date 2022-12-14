/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Futako Book Club`,
    siteUrl: `https://www.futakobookclub.com`,
    description: `村上春樹さんの作品について語り合う読書会、Futako Book Clubの公式サイトです。`,
    twitterUsername: `@tak_kafka`,
    image: `/ogp.webp`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/favicon.jpg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
