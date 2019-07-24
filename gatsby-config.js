/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
 plugins: [
   'gatsby-plugin-sass',
    `gatsby-plugin-netlify-cms`,
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       path: `${__dirname}/blog/`,
       name: 'blog',
        },
      },
      'gatsby-plugin-sharp',
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      }
  ],
}
