import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

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
                    fields {
                        slug
                    }
                }
            }
        }
    }
`)
const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
    )
return (
    
        <div>
            <header style={{ marginBottom: `1.5rem`, backgroundColor: `blue` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, display: `block` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
        </ul>
      </header>
            <h1>Blog</h1>
            <ol className={blogStyles.post}> 
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
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