require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  
    siteMetadata: {
      title: `AKcentrum`,
      description: `Treningi Personalne oraz Medyczne`,
      author: `@gatsbyjs`,
      siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
      social: [{
        url: 'https://www.instagram.com',
        name: 'Instagram'
      },{
        url: 'https://www.facebook.com',
        name : 'Facebook'
      }]
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-theme-contact`,
        options: {
          contactPath: '/contact',
          successPath: '/thanks'
        }
      },
      {
        resolve: `gatsby-plugin-netlify`,
        options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
                 },
      },
      `gatsby-plugin-preload-fonts`,
      `gatsby-plugin-transition-link`,
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/assets/images`,
        },
      
        resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
      }
    }},
    
      `gatsby-transformer-sharp`,
      `gatsby-plugin-fontawesome-css`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
        },
      },
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `./src/data/`,
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `limelight`,
            `open sans\:300,400,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        },
      },
      `gatsby-plugin-gatsby-cloud`,
      
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ],
  }

  