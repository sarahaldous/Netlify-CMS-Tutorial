const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const {createNodeField } = actions
    
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blogTemplate.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}
// exports.createPages = ({ actions, graphql }) => {


//     const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

//     return graphql(`
//     {
//         allMarkdownRemark(
//             sort: { order: DESC, fields: [frontmatter__date] }
//             limit: 1000
//         ) {
//             edges {
//                 node {
//                     frontmatter {
//                         path
//                     }
//                 }
//             }
//         }
//     }
// `).then(result => {
//     if (result.errors) {
//         return Promise.reject(result.errors)
//     }

//     return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//             path: node.frontmatter.path,
//             component: blogPostTemplate,
//             context: {}, 
//             })
//         })
//     })
// }
