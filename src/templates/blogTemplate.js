import React from 'react'
import {graphql} from "gatsby"

// export default function Template({
//     data, 
// }) {
//     const { markdownRemark } = data 
//     const {frontmatter, html } = markdownRemark
//     return (
//         <div className="blog-post-container">
//             <div className="blog-post">
//                 <h1>{frontmatter.title}</h1>
//                 <h2>{frontmatter.date}</h2>
//                 <div
//                     className="blog-post-content"
//                     dangerouslySetInnerHTML={{__html: html }}
//                 />
//             </div>
//         </div>
//     )
// }

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug } }) {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
            html
        }
    }
`
const Blog = (props) => {
    return (
        <div>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
            </div>
        </div>
    )
}

export default Blog