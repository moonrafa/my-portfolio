import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import icon1 from '../assets/img/browser.svg'
import icon2 from '../assets/img/react.svg'
import icon3 from '../assets/img/mobile.svg'
import icon4 from '../assets/img/database.svg'
import icon5 from '../assets/img/git.svg'
import icon6 from '../assets/img/code-fork.svg'
import icon7 from '../assets/img/code.svg'
import icon8 from '../assets/img/cloud-check.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Skilled in development technologies such as{' '}
                <span className="lightpink">HTML</span>,{' '}
                <span className="lightpink">CSS</span>,{' '}
                <span className="lightpink">JavaScript</span>,{' '}
                <span className="lightpink">JQuery</span>,{' '}
                <span className="lightpink">React</span>,{' '}
                <span className="lightpink">Bootstrap</span>,{' '}
                <span className="lightpink">TailwindCSS</span>,{' '}
                <span className="lightpink">Node.js</span>,{' '}
                <span className="lightpink">Git</span>,{' '}
                <span className="lightpink">Sass</span>,{' '}
                <span className="lightpink">MaterializeCSS</span>,{' '}
                <span className="lightpink">Firebase</span>,{' '}
                <span className="lightpink">MongoDB</span>, and more.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img className="skill-img" src={icon1} alt="skill 1" />
                  <h5>Web Design</h5>
                </div>
                <div className="item">
                  <img className="skill-img" src={icon2} alt="skill 2" />
                  <h5>CSS and JavaScript frameworks</h5>
                </div>
                <div className="item">
                  <img className="skill-img" src={icon3} alt="skill 3" />
                  <h5>Responsive Design</h5>
                </div>
                <div className="item">
                  <img className="skill-img" src={icon4} alt="skill 4" />
                  <h5>Databases</h5>
                </div>
                <div className="item">
                  <img className="skill-img" src={icon5} alt="skill 5" />
                  <h5>Version Control with Git </h5>
                </div>
                <div className="item">
                  <img className="skill-img" src={icon6} alt="skill 6" />
                  <h5>Data Structures and Algorithms </h5>
                </div>
                <div className="item">
                  <img className="skill-img" src={icon7} alt="skill 7" />
                  <h5>Debugging </h5>
                </div>
                <div className="item">
                  <img className="skill-img" src={icon8} alt="skill 8" />
                  <h5>Problem-Solving</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" alt="bg" />
    </section>
  )
}
