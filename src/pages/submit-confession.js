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
        <meta name="description" content={"Submit a Confession " + site.siteMetadata.description} />
      </Helmet>
      <div>
        <div>
          <h1 className="post-title">Submit a confession</h1>
          <p>Use the form to submit a confession anonymously</p>
        </div>
        <div>
          <form className="form-container" action="https://formspree.io/f/xvovjojd" method="post">
            <div>
              <label htmlFor="Confession">Confession</label>
              <textarea name="Confession" id="Confession" required></textarea>
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
