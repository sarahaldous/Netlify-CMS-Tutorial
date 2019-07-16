/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
 plugins: [
    `gatsby-plugin-netlify-cms`,
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       path: `${__dirname}/src/markdown-pages`,
       name: `markdown-pages`,
        },
      },
    `gatsby-transormer-remark`,
  ],
}
