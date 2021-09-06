require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  
    siteMetadata: {
      title: `mncentrum`,
      description: `Treningi Personalne oraz Medyczne`,
      author: `@gatsbyjs`,
      siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
      social: [{
        url: 'https://www.instagram.com/mn_centrum/',
        name: 'Instagram'
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
      `gatsby-plugin-preload-fonts`,
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

  