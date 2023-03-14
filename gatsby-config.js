/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `dailyhopeless`,
    siteUrl: `https://www.dailyhopeless.com`,
    "color": "#FFD400",
    "location": "batam",
    "country": "indonesia",
    "email": "dailyhopeless.dev@gmail.com",
    "author": "nndwn",
  },
  flags: {
    DEV_SSR: false
  },
  plugins: [
    
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options : {
        typeName : ({node}) => node.name.charAt(0).toUpperCase() + node.name.slice(1)
        //config name without lastname JSON
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
          icon: 'src/images/icon.png',
      }
   },
  {
    resolve: `gatsby-plugin-emotion`,
    options: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: `[local]`,
      cssPropOptimization: true,
    },
  },
],
};