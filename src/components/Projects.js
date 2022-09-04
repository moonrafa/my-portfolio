import demo1 from '../assets/img/Sky-Store.png'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col, Tab } from 'react-bootstrap'
import demo10 from '../assets/img/demo10.png'
import demo6 from '../assets/img/demo 6.png'
import qrcode from '../assets/img/demo-desktop (3).png'
import business from '../assets/img/beautysalon-.png'
import noteit from '../assets/img/demo (5).png'
import satellist from '../assets/img/demo-desktop (2).png'
import moongallery from '../assets/img/demo (4).png'
import facebook from '../assets/img/demo-desktop (1).png'
import imageSearcher from '../assets/img/demo1.png'
import skymobile from '../assets/img/demo14.png'
import ebMobile from '../assets/img/demo9.png'
import beMobile from '../assets/img/demo 7.png'
import qrMobile from '../assets/img/demo-mobile (2).png'
import bsMobile from '../assets/img/demo33.png'
import slMobile from '../assets/img/demo-mobile (1).png'
import ig from '../assets/img/demo (3).png'
import clubhouse from '../assets/img/demo (1).png'
import ios from '../assets/img/demo (2).png'
import stLogin from '../assets/img/login.png'
import planet from '../assets/img/i436547.jpeg'
import pdf from '../assets/img/demo8.png'
import pass from '../assets/img/pass.png'

export const Projects = () => {
  const projects = [
    {
      title: 'Sky Store',
      description: 'Online store for merch products',
      imgUrl: demo1,
      href: 'https://github.com/moonrafa/sky-store'
    },
    {
      title: 'Easybank',
      description: 'Digital Bank Landing Page',
      imgUrl: demo10,
      href: 'https://github.com/moonrafa/easybank'
    },
    {
      title: 'Bookmark Extension',
      description: 'Bookmark Extension Landing Page',
      imgUrl: demo6,
      href: 'https://github.com/moonrafa/extension-landing-page'
    },
    {
      title: 'QRCode Generator',
      description: 'Generate QR Code from a link',
      imgUrl: qrcode,
      href: 'https://github.com/moonrafa/qr-code-generator'
    },
    {
      title: 'Beautysalon.',
      description: 'Business Landing Page ',
      imgUrl: business,
      href: 'https://github.com/moonrafa/business-landing-page'
    },
    {
      title: 'Note it',
      description: 'Fullstack Note Sharing App',
      imgUrl: noteit,
      href: 'https://github.com/moonrafa/note-it'
    },
    {
      title: 'Satellist',
      description: 'Fullstack To-do-List App',
      imgUrl: satellist,
      href: 'https://github.com/moonrafa/satellist'
    },
    {
      title: 'Firegram',
      description: 'Photo Uploader App with Database',
      imgUrl: moongallery,
      href: 'https://github.com/moonrafa/firegram-react'
    },
    {
      title: 'Login Facebook',
      description: 'Login Facebook Interface Clone',
      imgUrl: facebook,
      href: 'https://github.com/moonrafa/facebook-login-interface'
    },
    {
      title: 'Image Searcher',
      description: 'React Image Searcher',
      imgUrl: imageSearcher,
      href: 'https://github.com/moonrafa/react-image-searcher'
    }
  ]
  const mobile = [
    {
      title: 'Sky Store',
      description: 'Online store for merch products',
      imgUrl: skymobile,
      href: 'https://github.com/moonrafa/sky-store'
    },
    {
      title: 'Easybank',
      description: 'Digital Bank Landing Page',
      imgUrl: ebMobile,
      href: 'https://github.com/moonrafa/easybank'
    },
    {
      title: 'Bookmark Extension',
      description: 'Bookmark Extension Landing Page',
      imgUrl: beMobile,
      href: 'https://github.com/moonrafa/extension-landing-page'
    },

    {
      title: 'Beautysalon.',
      description: 'Business Landing Page ',
      imgUrl: bsMobile,
      href: 'https://github.com/moonrafa/business-landing-page'
    },
    {
      title: 'QRCode Generator',
      description: 'Generate QR Code from a link',
      imgUrl: qrMobile,
      href: 'https://github.com/moonrafa/qr-code-generator'
    },
    {
      title: 'Satellist',
      description: 'Fullstack To-do-List App',
      imgUrl: slMobile,
      href: 'https://github.com/moonrafa/satellist'
    },
    {
      title: 'Instagram Homepage',
      description: 'Instagram Homepage Clone',
      imgUrl: ig,
      href: 'https://github.com/moonrafa/simple-ig-homepage'
    },
    {
      title: 'Clubhouse ',
      description: 'Clubhouse Homepage Clone',
      imgUrl: clubhouse,
      href: 'https://github.com/moonrafa/clubhouse-tailwind'
    },
    {
      title: 'iOS Summary Screen ',
      description: 'clone of the iOS 15 notification summary screen',
      imgUrl: ios,
      href: 'https://github.com/moonrafa/ios-summary-screen'
    },
    {
      title: 'Satellist',
      description: 'Fullstack Login Page',
      imgUrl: stLogin,
      href: 'https://github.com/moonrafa/satellist'
    }
  ]
  const backProj = [
    {
      title: 'PassGen',
      description: 'Password Generator',
      imgUrl: pass,
      href: 'https://github.com/moonrafa/password-generator'
    },
    {
      title: 'PdfGen',
      description: 'Pdf Generator',
      imgUrl: pdf,
      href: 'https://github.com/moonrafa/pdf-generator'
    },
    {
      title: 'EccVsPorb',
      description:
        'Illustrate on a graph the connection between the eccentricity and the orbital period of a star',
      imgUrl: planet,
      href: 'https://github.com/moonrafa/sky-store'
    }
  ]
  return (
    <section id="projects" className="project">
      <Container>
        <Row>
          <Col>
            <h2> Projects </h2>
            <p>
              I've built projects with a variety of technologies and I am
              creating new ones every day. For more details about each one,
              click on the demo to be taken to its GitHub repository.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Desktop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mobile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Back-End</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {mobile.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {backProj.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="background"
        src={colorSharp2}
      />
    </section>
  )
}
