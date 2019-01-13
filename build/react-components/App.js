import React from 'react'
import '../../assets/css/main.css'
import { connect } from 'react-redux'

import NavSection from './NavSection'
import NavLabels from './NavLabels'
import NavLabelsMob from './NavLabelsMob'
import NavContent from './NavContent'
import BgColorChanger from './BgColorChanger'
import TextColorChanger from './TextColorChanger'

import getCalculatedHexColor from '../getCalculatedHexColor'
import { CHANGE_COLOR } from '../redux/actionTypes'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.calculatedHexColorInterval = setInterval(() => {
      this.props.dispatch({ type: CHANGE_COLOR, color: getCalculatedHexColor() })
    }, 5000)
    this.props.dispatch({ type: CHANGE_COLOR, color: getCalculatedHexColor() })
  }

  componentWillUnmount () {
    clearInterval(this.calculatedHexColorInterval)
  }

  static updateFramework () {
    window.updateFramework('Vue')
  }

  render () {
    return (

      <div className="flex height-100vh flex--dir-column-mob max-width-100vw overflow-hidden">
        <BgColorChanger className="font-white font-montserrat text-transform-uppercase height-100 nav">
          <nav className="width-100 height-100">
            <div className="flex flex--align-center height-100 display-none--mob">
              <div className="width-100
                    text-align-right
                    font-size-1-1em
                    padding-hor-2em
                    padding-hor-1-5em--tab
                    white-space-no-wrap">
                <NavLabels />
              </div>
            </div>
            <div className="display-none--desktop display-none--tab height-100">
              <NavLabelsMob />
            </div>
          </nav>
        </BgColorChanger>
        <NavContent className="flex__cell height-100vh overflow-y-scroll nav-content">
          <main className="padding-hor-2em padding-hor-1-5em--tab padding-hor-1em--mob">
            <div className="flex flex--align-center max-width-1000px height-100vh">
              <NavSection sectionTitle="welcome">
                <h1 className="font-oswald font-size-5em margin-0 margin-bottom-15px">
                  <TextColorChanger>TIMOTHY J. SCHIFFER</TextColorChanger>
                </h1>
                <div className="font-size-1-1em">I am a Front End Software Engineer with a passion for improving.</div>
              </NavSection>
            </div>
            <NavSection sectionTitle="experience" className="max-width-1000px padding-vert-12-5vh padding-vert-5vh--mob">
              <div className="font-size-1-4em">Shapeways</div>
              <div><span className="font-weight-bold">Senior Front End Software Engineer</span> - July 2018 to current</div>
              <div><span className="font-weight-bold">Front End Software Engineer</span> - Sept 2016 to July 2018</div>
              <div>
                <ul className="margin-vert-0-5em">
                  <li>Team Lead for Creator Flow Funnel</li>
                  <ul>
                    <li><span className="font-weight-bold">Led team of four engineers</span> in redevelopment of main intake flow for all shapeways.com users</li>
                    <li><span className="font-weight-bold">Increased conversion for new users by 36%</span> by implementing streamlined UI and decreasing upload processing time</li>
                  </ul>
                </ul>
                <ul className="margin-vert-0-5em">
                  <li>Champion of Front End Architecture</li>
                  <ul>
                    <li className="font-weight-bold">Led framework transition from Backbone.js to Vue.js</li>
                    <li><span className="font-weight-bold">Implemented patterns and best practices</span> for Vue Instances and Components, Vuex modules, Flex Grid System, and BEM/SCSS modules</li>
                    <li>Contributed to implementation of high-performance View Component pattern for PHP with associated Factory Pattern to centralize database calls and decrease page load time</li>
                  </ul>
                </ul>
                <ul className="margin-vert-0-5em">
                  <li>Developed Node CLI to identify unused CSS in codebase and CMS</li>
                  <ul>
                    <li className="font-weight-bold">Reduced built CSS package by 38%</li>
                  </ul>
                </ul>
              </div>
              <div className="font-size-1-4em">Regeneron Pharmaceuticals</div>
              <div><span className="font-weight-bold">Process Development Engineer</span> - June 2010 to Sept 2016</div>
              <div>
                <ul className="margin-vert-0-5em">
                  <li>Lead of Automation Team</li>
                  <ul>
                    <li><span className="font-weight-bold">Reduced data-mining time by 95% by</span> developing application for creating user defined dashboards for viewing and comparing lab data</li>
                    <li>Managed summer intern as contributor to dashboard application with a focus on unit testing, peer code review and user documentation</li>
                  </ul>
                </ul>
                <ul className="margin-vert-0-5em">
                  <li>Project Lead for the “Paperless Lab Initiative”</li>
                  <ul>
                    <li>Conceived, developed, and launched “Sampling Sheet” application for data entry and display as replacement for paper records; <span className="font-weight-bold">achieved 100% user compliance due to intuitive, spreadsheet-like UI;</span> reduced data entry time by over 90%</li>
                  </ul>
                </ul>
              </div>
            </NavSection>
            <NavSection sectionTitle="education" className="max-width-1000px padding-vert-12-5vh padding-vert-5vh--mob">
              <div className="font-size-1-4em">Rutgers, The State University of New Jersey</div>
              <div className="margin-vert-0-5em">
                <div><span className="font-weight-bold">Masters of Business and Science</span>, concentration in Information Technology</div>
                <div className="padding-left-1-1em">Graduating December 2018</div>
                <div className="padding-left-1-1em">Cumulative GPA: 4.0</div>
                <div className="padding-left-1-1em">Coursework includes Advanced Algorithms, Machine Learning, UX Design, and Database Design</div>
              </div>
              <div className="margin-vert-0-5em">
                <div className="font-weight-bold">Bachelor of Science in Biochemical Engineering, Minor in Biology</div>
                <div className="padding-left-1-1em">Honors Program Class of 2010, <span>magna cum laude</span></div>
                <div className="padding-left-1-1em white-space-pre">Cumulative GPA: 3.52        Major GPA: 3.69</div>
              </div>
            </NavSection>
            <NavSection sectionTitle="skills" className="max-width-1000px padding-vert-12-5vh padding-vert-5vh--mob overflow-hidden">
              <div className="font-size-1-4em">Expert</div>
              <div className="flex flex--align-center flex--wrap margin-right-neg-1-5em">
                <div className="skills-logo padding-right-1-5em margin-vert-1em">
                  <img src="assets/img/HTML5.svg" alt="HTML5 logo" className="height-100" />
                </div>
                <div className="skills-logo padding-right-1-5em margin-vert-1em">
                  <img src="assets/img/CSS3.svg" alt="CSS3 logo" className="height-100" />
                </div>
                <div className="skills-logo padding-right-1-5em margin-vert-1em">
                  <picture>
                    <source srcSet="assets/img/js.webp" type="image/webp" />
                    <source srcSet="assets/img/js.png" type="image/jpeg" />
                    <img src="assets/img/js.png" className="height-100" alt="picture of us" />
                  </picture>
                </div>
                <div className="skills-logo padding-right-1-5em margin-vert-1em">
                  <img src="assets/img/node.svg" alt="Node JS logo" className="height-100" />
                </div>
                <div className="skills-logo padding-right-1-5em margin-vert-1em">
                  <picture>
                    <source srcSet="assets/img/vue.webp" type="image/webp" />
                    <source srcSet="assets/img/vue.png" type="image/jpeg" />
                    <img src="assets/img/vue.png" className="height-100" alt="picture of us" />
                  </picture>
                </div>
                <div className="skills-logo padding-right-1-5em margin-vert-1em">
                  <picture>
                    <source srcSet="assets/img/backbone.webp" type="image/webp" />
                    <source srcSet="assets/img/backbone.png" type="image/jpeg" />
                    <img src="assets/img/backbone.png" className="height-100" alt="picture of us" />
                  </picture>
                </div>
                <div className="skills-logo padding-right-1-5em margin-vert-1em">
                  <picture>
                    <source srcSet="assets/img/sql.webp" type="image/webp" />
                    <source srcSet="assets/img/sql.png" type="image/jpeg" />
                    <img src="assets/img/sql.png" className="height-100" alt="picture of us" />
                  </picture>
                </div>
              </div>
              <div className="font-size-1-4em">Knowledgeable</div>
              <div className="flex flex--align-center flex--wrap margin-right-neg-1-5em">
                <div className="skills-logo padding-right-1-5em margin-vert-1em">
                  <img src="assets/img/python.svg" alt="Python logo" className="height-100" />
                </div>
                <div className="skills-logo padding-right-1-5em margin-vert-1em">
                  <img src="assets/img/php.svg" alt="PHP logo" className="height-100" />
                </div>
              </div>
            </NavSection>
            <NavSection sectionTitle="code samples" className="max-width-1000px padding-vert-12-5vh padding-vert-5vh--mob overflow-hidden">
              <div className="flex flex--wrap-tab flex--wrap-mob margin-right-neg-1-5em">
                <div className="flex__cell-1-2 flex__cell-1-1--tab flex__cell-1-1--mob padding-right-1-5em margin-vert-1em">
                  <div className="font-size-1-4em margin-bottom-0-5em">
                    <a className="plain-link" href="//tjandnina.com" target="_blank">tjandnina.com</a>
                  </div>
                  <div className="margin-vert-0-5em">
                    <a className="plain-link link-icon" href="//github.com/tjschiffer/tjandnina.com" target="_blank">github.com/tjschiffer/tjandnina.com</a>
                  </div>
                  <div className="margin-vert-0-5em">
                    Our multi-language wedding website with information for our guests with RSVP portal.
                    Also has admin page to see guests' status (attending which events and notes) with filtering
                    based on name and status.
                  </div>
                  <div className="margin-vert-0-5em">
                    Built with Node/Express, Vue, Webpack, Babel, and MySQL.
                  </div>
                </div>
                <div className="flex__cell-1-2 flex__cell-1-1--tab flex__cell-1-1--mob padding-right-1-5em margin-vert-1em">
                  <div className="font-size-1-4em margin-bottom-0-5em">
                    <a className="plain-link" href="/" target="_blank">tjschiffer.com</a>
                  </div>
                  <div className="margin-vert-0-5em">
                    <a className="plain-link link-icon" href="//github.com/tjschiffer/tjschiffer.com" target="_blank">github.com/tjschiffer/tjschiffer.com</a>
                  </div>
                  <div className="margin-vert-0-5em">
                    This website! Information on my profession experience, education, skillset, code samples,
                    and contact information. Page state updates with scroll and theme color (side bar/mobile top bar background
                    and title color) is a product of the time within the hour. Anyone else viewing this page right now is seeing
                    the same theme color as you.
                  </div>
                  <div className="margin-vert-0-5em">
                    Additionally, this website is written in both Vue/Vuex and React/Redux. You are currently viewing the
                    website in React. Click <a className="click-link" onClick={App.updateFramework}>here to switch to Vue.</a>
                  </div>
                  <div className="margin-vert-0-5em">
                    Built with Vue, Vuex, React, Redux, Webpack, and Babel.
                  </div>
                </div>
              </div>
            </NavSection>
            <NavSection sectionTitle="contact" className="max-width-1000px
                          padding-vert-12-5vh
                          padding-vert-5vh--mob
                          last-section">
              <div className="margin-bottom-0-5em">Please feel free to reach out to me.</div>
              <div className="margin-bottom-0-5em">
                <a href="mailto:tjschiffer@gmail.com" target="_blank" className="flex flex--align-center plain-link">
                  <i className="icon-mail-alt font-size-1-2em" /><div>tjschiffer@gmail.com</div>
                </a>
              </div>
              <div className="margin-bottom-0-5em">
                <a href="//github.com/tjschiffer" target="_blank" className="flex flex--align-center plain-link">
                  <i className="icon-github-circled font-size-1-2em" /><div>github.com/tjschiffer</div>
                </a>
              </div>
              <div className="margin-bottom-0-5em">
                <a href="//linkedin.com/in/tjschiffer" target="_blank" className="flex flex--align-center plain-link">
                  <i className="icon-linkedin-squared font-size-1-2em" /><div>linkedin.com/in/tjschiffer</div>
                </a>
              </div>
            </NavSection>
          </main>
        </NavContent>
      </div>
    )
  }
}

export default connect()(App)
