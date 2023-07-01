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
    "banner": "/dailyhopeless.jpg",
    "socialmedia": [
      {
        "name": "github",
        "link": "https://github.com/nndwn"
      },
      {
        "name": "instagram",
        "link": "https://www.instagram.com/nndwn_"
      },
      {
        "name": "facebook",
        "link": "https://www.facebook.com/nndwn/"
      },
      {
        "name": "twitter",
        "link": "https://www.twitter.com/nndwn"
      }
    ]
  },
  flags: {
    DEV_SSR: false
  },
  plugins: [
    
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-RR06VWV1K2", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          //optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          //origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pxtorem`,
        path: `${__dirname}/pxtorem`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privacy`,
        path: `${__dirname}/privacy`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
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
          cache_busting_mode: 'none'
      }
   },
   `gatsby-plugin-remove-serviceworker`,
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