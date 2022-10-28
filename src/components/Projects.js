import skyStore from '../assets/img/Sky-Store.png'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col, Tab } from 'react-bootstrap'
import easybank from '../assets/img/easybank.png'
import bookmark from '../assets/img/bookmark.png'
import qrcode from '../assets/img/qrdesktop.png'
import business from '../assets/img/beautysalon-.png'
import noteit from '../assets/img/noteit.png'
import satellist from '../assets/img/listDesktop.png'
import moongallery from '../assets/img/demo (4).png'
import facebook from '../assets/img/demo-desktop (1).png'
import imageSearcher from '../assets/img/demo1.png'
import linkedin from '../assets/img/in.png'
import skymobile from '../assets/img/demo14.png'
import ebMobile from '../assets/img/demo9.png'
import beMobile from '../assets/img/demo 7.png'
import qrMobile from '../assets/img/demo-mobile (2).png'
import bsMobile from '../assets/img/demo33.png'
import slMobile from '../assets/img/demo-mobile (1).png'
import ig from '../assets/img/ig.png'
import clubhouse from '../assets/img/demo (1).png'
import ios from '../assets/img/demo (2).png'
import stLogin from '../assets/img/login.png'
import planet from '../assets/img/i436547.jpeg'
import pdf from '../assets/img/demo8.png'
import pass from '../assets/img/pass.png'
import dazzcord from '../assets/img/demo2.png'
import expense from '../assets/img/demo.png'
import gmail from '../assets/img/gmail-clone.png'
import visa from '../assets/img/credit-card.jpg'
import numberFacts from '../assets/img/demo (6).png'
import quiz from '../assets/img/Quiz-Desktop.png'
import netflix from '../assets/img/netflix.png'
import last from '../assets/img/home.png'
import huluMobile from '../assets/img/Hulu.png'
import hulu from '../assets/img/Huludesktop.png'

export const Projects = () => {
  const projects = [
    {
      title: 'Netflix Clone',
      description:
        'Clone of Netflix with User and Payment Authentication using React, Stripe, Redux and Firebase',
      imgUrl: netflix,
      href: 'https://github.com/moonrafa/netflix-clone'
    },
    {
      title: 'Gmail Clone',
      description: 'Clone of Gmail using React, Redux and Firebase',
      imgUrl: gmail,
      href: 'https://github.com/moonrafa/gmail-clone'
    },
    {
      title: 'Dazzcord',
      description: 'Realtime Chat with users and rooms',
      imgUrl: dazzcord,
      href: 'https://github.com/moonrafa/dazzcord'
    },
    {
      title: 'Linkedin Clone',
      description: 'Clone of Linkedin using React, Redux and Firebase',
      imgUrl: linkedin,
      href: 'https://github.com/moonrafa/linkedin-clone'
    },
    {
      title: 'Sky Store',
      description: 'Online store for merch products',
      imgUrl: skyStore,
      href: 'https://github.com/moonrafa/sky-store'
    },
    {
      title: 'Easybank',
      description: 'Digital Bank Landing Page',
      imgUrl: easybank,
      href: 'https://github.com/moonrafa/easybank'
    },
    {
      title: 'Bookmark Extension',
      description: 'Bookmark Extension Landing Page',
      imgUrl: bookmark,
      href: 'https://github.com/moonrafa/extension-landing-page'
    },
    {
      title: 'QRCode Generator',
      description: 'Generate QR Code from a link',
      imgUrl: qrcode,
      href: 'https://github.com/moonrafa/qr-code-generator'
    },
    {
      title: 'Hulu Clone',
      description: 'Clone of Hulu using Next.js and TailwindCSS',
      imgUrl: hulu,
      href: 'https://github.com/moonrafa/hulu-clone'
    },
    {
      title: 'Last.fm Clone',
      description: 'Clone of Last.fm using Reactjs',
      imgUrl: last,
      href: 'https://github.com/moonrafa/lastfm-clone'
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
      description: 'Fullstack To-do-List App Using Meteor.js',
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
      title: 'Quiz',
      description: 'Quiz made with typescript and react',
      imgUrl: quiz,
      href: 'https://github.com/moonrafa/quiz'
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
    },
    {
      title: 'Number Facts',
      description: 'Type a number and get a fact about it',
      imgUrl: numberFacts,
      href: 'https://github.com/moonrafa/number-facts'
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
      title: 'Hulu Clone',
      description: 'Clone of Hulu using Next.js and TailwindCSS',
      imgUrl: huluMobile,
      href: 'https://github.com/moonrafa/hulu-clone'
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
    },
    {
      title: 'Expense Tracker',
      description: 'Track your budget',
      imgUrl: expense,
      href: 'https://github.com/moonrafa/expense-tracker'
    }
  ]
  const backProj = [
    {
      title: 'Credit Card Auth',
      description: 'Credit Card Authentication',
      imgUrl: visa,
      href: 'https://github.com/moonrafa/credit-card-authentication'
    },
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
