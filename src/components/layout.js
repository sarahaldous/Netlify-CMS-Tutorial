import React from "react"
import { Link } from "gatsby"


const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
    )
export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: `60%`, padding: `0 1rem` }}>
       
         <header style={{ marginBottom: `1.5rem`, backgroundColor: `blue` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, display: `block` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
        </ul>
      </header>
      <h3 style={{display: `block`}}>Netlify CMS Gatsby Site</h3>
    {children}
    <footer>
        <h4> This is the footer.</h4>
    </footer>
      </div>
    )
// export default (children) => (

// {/* <div>
// <Header headerText="pumpkins"/> */}
    
//     // <h3 style={{display: `block`}}>Netlify CMS Gatsby Site</h3>
//     // {children}
//     // <footer>
//     //     <h4> This is the footer.</h4>
//     // </footer>
// //   </div>
// )