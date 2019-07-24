import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        path
                    }
                    html
                    excerpt
                }
            }
        }
    }
`)

return (
        <div>
            <h1>Blog</h1>
            <ol>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <Link to={`/blog/${edge.node.frontmatter.path}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </Link>
                        </li>
                        )
                    })}
            </ol>
        </div>
    )
}

export default BlogPage