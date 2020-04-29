const cssnano = require('css-mqpacker')
const autoprefixer = require('autoprefixer')
const mqPacker = require('css-mqpacker')

module.exports = {
  siteMetadata: {
    title: 'GGJungle',
    siteUrl: `https://ggjungle.vn`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-164915989-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GGJungle',
        short_name: 'GGJ',
        start_url: '/',
        background_color: '#0f4e82',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './src/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          cssnano({
            preset: [
              'default',
              {
                autoprefixer: true,
                discardUnused: true,
                mergeIdents: true,
                zindex: true,
              },
            ],
          }),
          mqPacker({
            sort: true,
          }),
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-svg`,
  ],
}
