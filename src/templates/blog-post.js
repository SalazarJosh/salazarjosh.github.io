import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  listed,
  title,
  date,
  helmet,
  featuredimage
}) => {  
  const PostContent = contentComponent || Content
  const isBrowser = typeof window !== `undefined`
  var thisLocation = '';
  if(isBrowser){
    thisLocation = window.location.href;
  }
  return (
    <section className="section blogPage">
      {helmet || ''}
      <div className="spacer-md"></div>
      <div className="container content">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title blog-title is-size-2 has-text-weight-bold has-text-centered">
              {title}
            </h1>
            <div className="has-text-centered">
              <ul className="blog-taglist">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="spacer-md"></div>
          </div>
        </div>
        {!listed &&
          <div class="columns">
            <div class="column">
              <div className="unlisted-block">
                <p>This blog is currently unlisted and will not appear in search results.</p>
              </div>
            </div>
          </div>
        }
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PreviewCompatibleImage
              imageInfo={{
                image: featuredimage,
                alt: `low poly self portrait`,
              }}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="spacer-sm"></div>
            <p className="blog-description">{description}</p>
            <PostContent content={content} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="spacer-sm"></div>
            <p className="share-on">SHARE ON</p>
            <div className="share-icon-container">
              <div className="share-icon share-icon-twitter">
                <a href={"https://twitter.com/share?text=Check out this post from Joshua Salazar - " + title + "&url=" + thisLocation} target="blank">
                  <FontAwesomeIcon icon={faTwitterSquare}/>
                </a>
              </div>
              <div className="share-icon share-icon-linkedin">
                <a href={"https://www.linkedin.com/shareArticle?mini=true&url=" + thisLocation + "&title=Check out this post from Joshua Salazar - " + title} target="blank">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </a>
              </div>
              <div className="share-icon share-icon-facebook">
                <a href={"https://www.facebook.com/sharer/sharer.php?u=" + thisLocation + "&t=Check out this post from Joshua Salazar - " + title} target="blank">
                  <FontAwesomeIcon icon={faFacebookSquare}/>
                </a>
              </div>
            </div>
            <div className="spacer-sm"></div>
          </div>
        </div>
        {/* <div className="columns">
          <div className="column is-8 is-offset-2">
            UP next
            TEST
            <div className="spacer-md"></div>

          </div>
        </div> */}
      </div>
      <div className="is-hidden">
        <div className="widealign"></div>
        <table class="table is-bordered">
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.string,
  listed: PropTypes.string
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        listed={post.frontmatter.listed}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        listed
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 1920, quality: 100)
          }
        }
      }
    }
  }
`
