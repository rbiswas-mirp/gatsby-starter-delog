import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Submit a confession — {site.siteMetadata.title}</title>
        <meta name="description" content={"Submit a confession " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Submit a confession</h1>
          <p>Don't worry, your name and email will be kept confidential. I need this info for combating spam submissions</p>
          <p>To submit a confession anonymously, CLICK <a href="https://forms.gle/2aoV2GiorwGECfxq6">HERE</a></p>
        </div>
        <div>
          <form className="form-container" action="https://formspree.io/f/xvovjojd" method="post">
            <div>
              <label htmlFor="Confession">Confession</label>
              <textarea name="Confession" id="Confession"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
