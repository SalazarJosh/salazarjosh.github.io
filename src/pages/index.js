import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import HomepageHeader from '../components/HomepageHeader'
import GSAPComponent from "../components/GSAPComponent";

const IndexPage = () => (
  <Layout>
    <div>
      <HomepageHeader></HomepageHeader>

      <div className="container">
        <div className="spacer-lg"></div>
        <div className="divider"></div>
        <div className="spacer-lg"></div>
        <section className="">
          <GSAPComponent className="homepage-h2 gs_reveal" direction="up" wrapperElement="h2" delay={2}>
            Latest From the Blog
          </GSAPComponent>
          <div className="spacer-sm"></div>
          <div className="content">
            <BlogRoll />
          </div>
          <div className="spacer-sm"></div>
          <div className="view-all-posts-container gs_reveal">
            <div className="has-text-centered view-all-posts">
              <Link to="/blog">
                View All Posts
              </Link>
            </div>
          </div>
        </section>
        <div className="spacer-lg"></div>
        <div className="divider"></div>
        <div className="spacer-lg"></div>
        <section className="">
          <h2 className="homepage-h2 gs_reveal">Shaping My Career</h2>
          <div className="spacer-sm"></div>
          <div className="columns">
            <div className="column gs_reveal">
              <div className="worked-places-container">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 108 108" xmlSpace="preserve">
                  <circle className="st0" cx="54.05" cy="54.01" r="53.95"/>
                  <path className="st1" d="M54.17,68.8L41.24,51.02v12.93h5.17v12.77H22.48V63.95h4.85V44.07h-4.85V31.29h18.8l12.96,17.94l12.98-17.94
                  h18.79v12.77h-4.85v19.89h4.85v12.77H62.09V63.95h5.17V51.02L54.17,68.8z"/>
                </svg>
              </div>
              <div className="spacer-sm"></div>
              <h3 className="career-title">University of Michigan</h3>
              <div className="spacer-xs"></div>
              <p className="career-desc">I currently work with the University of Michigan's College of Literature, Science, and the Arts to bring the presence of the college into a digital space.</p>
            </div>
            <div className="column gs_reveal">
              <div className="worked-places-container">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 108 108" xmlSpace="preserve">
                  <circle className="st0" cx="54.05" cy="54.01" r="53.95"/>
                  <polygon className="st3" points="46.28,36.07 57.07,31.29 80.17,31.29 86.71,36.07 81.73,46.93 64.74,46.93 68.14,39.35 61.91,39.35 
                    52.89,59.44 59.13,59.44 62.63,51.64 79.98,51.64 74.96,62.75 64.2,67.52 40.83,67.52 34.35,62.66 35.91,59.18 43.2,59.18 
                    43.67,58.18 26.93,58.18 27.94,56.01 37.34,56.01 38.68,53.02 50.87,53.02 51.27,52.11 25.77,52.11 27.18,48.97 40.51,48.97 
                  43.76,41.68 48.69,41.68 49.09,40.73 31.85,40.73 32.82,38.58 45.16,38.58 	"/>
                  <polygon className="st3" points="25.21,71.15 77.22,71.15 75.54,74.89 23.53,74.89 	"/>
                  <polygon className="st2" points="24.8,75.54 24.22,76.72 76.8,76.72 79.3,71.15 77.97,71.15 76,75.54 	"/>
                  <polygon className="st2" points="80.04,53.44 81.55,53.44 76.6,64.48 65.1,69.6 40.15,69.6 34.18,65.09 34.74,63.85 40.4,68.1 
                  64.72,68.1 75.45,63.36 	"/>
                  <polygon className="st2" points="35.91,59.18 27.95,59.18 27.48,60.23 35.44,60.23 	"/>
                  <polygon className="st2" points="27,53.02 38.68,53.02 38.14,54.22 26.41,54.22 	"/>
                  <polygon className="st2" points="32.42,41.68 31.91,42.79 43.27,42.79 43.76,41.68 	"/>
                  <polygon className="st2" points="53.79,59.44 55.46,59.44 63.52,41.48 67.18,41.48 67.83,40.07 62.54,40.07 	"/>
                  <polygon className="st2" points="65.81,47.57 65.18,48.97 82.84,48.97 87.95,38.17 87.02,37.48 82.21,47.57 	"/>
                </svg>
              </div>
              <div className="spacer-sm"></div>
              <h3 className="career-title">Central Michigan University</h3>
              <div className="spacer-xs"></div>
              <p className="career-desc">I spent many nights and weekends in the classroom working with students to further their understand of all things web and digital design.</p>
              <div className="spacer-xs"></div>
              <p className="career-desc">Early on in my career I had the opportunity to work on Central Michigan University's digital applications as a UI/UX Designer and Developer.</p>
            </div>
            <div className="column gs_reveal">
              <div className="worked-places-container">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 108 108" xmlSpace="preserve">
                  <circle className="st0" cx="54.05" cy="54.01" r="53.95"/>
                  <path className="st4" d="M54.25,40.69c2.61,0,4.73-2.12,4.73-4.73c0-2.61-2.12-4.73-4.73-4.73c-2.61,0-4.73,2.12-4.73,4.73
                  C49.52,38.57,51.64,40.69,54.25,40.69z"/>
                  <path className="st4" d="M66.22,54.54H42.28c-0.65,0-1.18,0.53-1.18,1.18v2.24c0,0.65,0.53,1.18,1.18,1.18h23.94
                  c0.65,0,1.18-0.53,1.18-1.18v-2.24C67.4,55.07,66.87,54.54,66.22,54.54z"/>
                  <path className="st4" d="M61.92,61.04H46.57c-0.81,0-1.46,0.66-1.46,1.46v12.93c0,0.74,0.6,1.34,1.34,1.34h15.6
                  c0.74,0,1.34-0.6,1.34-1.34V62.5C63.38,61.69,62.73,61.04,61.92,61.04z"/>
                  <path className="st4" d="M63.45,46.94c0-1.8-1.16-3.39-2.86-3.95l-0.01,0l-2.5-0.41c-0.21-0.07-0.44,0.05-0.52,0.26l-2.84,7.78
                    c-0.16,0.45-0.8,0.45-0.96,0l-2.84-7.78c-0.06-0.17-0.22-0.28-0.39-0.28c-0.04,0-2.62,0.43-2.62,0.43
                  c-1.72,0.57-2.87,2.17-2.87,3.98v5.69h18.41L63.45,46.94L63.45,46.94z"/>
                  <path className="st4" d="M55.33,42.45c-0.11-0.12-0.28-0.19-0.45-0.19h-1.26c-0.17,0-0.34,0.06-0.45,0.19
                    c-0.18,0.19-0.2,0.47-0.08,0.69l0.68,1.02l-0.32,2.67l0.62,1.66c0.06,0.17,0.3,0.17,0.36,0l0.62-1.66l-0.32-2.67l0.68-1.02
                  C55.53,42.92,55.51,42.64,55.33,42.45z"/>
                </svg>
              </div>
              <div className="spacer-sm"></div>
              <h3 className="career-title">Speaking</h3>
              <div className="spacer-xs"></div>
              <p className="career-desc">Exploration and experimentation is what I do. I enjoy presenting my work and findings at conferences around the U.S. <Link to="/talks">Check out the Talks page to learn more.</Link></p>
            </div>
          </div>
        </section>
        <div className="spacer-md"></div>
        <section className="">
          <div className="columns">
            <div className="column"></div>
            <div className="column is-one-fifth is-one-third-mobile gs_reveal low-poly-self-container">
              <PreviewCompatibleImage
                imageInfo={{
                    image: '/img/low-poly-self-final.png',
                    alt: `low poly self portrait`,
                }}
              />
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 266.95 350.14" className="low-poly-self-svg" xmlSpace="preserve">
                <polygon className="lp0" points="68.56,304.6 54.94,291.8 68.72,268.16 "/>
                <polygon className="lp1" points="0.74,136.6 11.85,138.46 0,155.38 "/>
                <polygon className="lp2" points="21.64,169.12 15.11,178.37 9.76,169.5 "/>
                <polygon className="lp3" points="64.55,19.43 49.55,19.43 53.77,13.1 "/>
                <polygon className="lp4" points="206.34,333.66 233.93,329.77 238.18,308.66 "/>
                <polygon className="lp1" points="56.1,315.91 47.4,305.04 47.5,319.62 "/>
                <polygon className="lp5" points="7.69,132.12 16,128.24 9.25,127.75 "/>
                <polygon className="lp6" points="235.53,252.57 241.1,239.88 227.3,230.44 "/>
                <polygon className="lp3" points="18.25,75.13 21.59,95.63 31.13,80.26 "/>
                <polygon className="lp7" points="16.96,8.5 37.5,25.32 38.02,0 "/>
                <polygon className="lp8" points="246.95,119.95 224.16,113.72 235.95,134.06 "/>
                <polygon className="lp9" points="79.06,340.14 59.54,340.06 76.36,325.84 "/>
              </svg>
            </div>
            <div className="column">
            </div>
          </div>
        </section>
      </div>
      <div className="background-poly-shape is-hidden-touch">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 66.22 92.75" xmlSpace="preserve">
          <polygon className="st-background-0" points="25.94,20.42 5,29.58 27.33,45.64 "/>
          <polygon className="st-background-1" points="14.08,60.42 27.33,45.64 22,77.86 "/>
          <polygon className="st-background-2" points="30.29,0 25.94,20.42 48.89,33.4 "/>
          <polygon className="st-background-3" points="27.33,45.64 48.89,33.4 25.94,20.42 "/>
          <polygon className="st-background-4" points="0,71.86 14.08,60.42 22,77.86 "/>
          <polygon className="st-background-5" points="40.5,54.42 48.89,33.4 27.33,45.64 "/>
          <polygon className="st-background-6" points="22,77.86 40.5,54.42 27.33,45.64 "/>
          <polygon className="st-background-7" points="59.75,35.42 48.89,33.4 40.5,54.42 "/>
          <polygon className="st-background-8" points="59,77.08 40.5,54.42 22,77.86 "/>
          <polygon className="st-background-9" points="61.78,6.75 48.89,33.4 59.75,35.42 "/>
          <polygon className="st-background-10" points="30.29,0 61.78,6.75 48.89,33.4 "/>
        </svg>
      </div>
      <div className="spacer-md"></div>
    </div>
  </Layout>
)

export default IndexPage