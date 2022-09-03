import demo1 from '../assets/img/lastfm-square.svg'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col, Tab } from 'react-bootstrap'
export const Projects = () => {
  const projects = [
    {
      title: 'React Image Searcher',
      description: '',
      imgUrl: demo1
    },
    {
      title: 'React Image Searcher',
      description: '',
      imgUrl: demo1
    },
    {
      title: 'React Image Searcher',
      description: '',
      imgUrl: demo1
    },
    {
      title: 'React Image Searcher',
      description: '',
      imgUrl: demo1
    },
    {
      title: 'React Image Searcher',
      description: '',
      imgUrl: demo1
    },
    {
      title: 'React Image Searcher',
      description: '',
      imgUrl: demo1
    },
    {
      title: 'React Image Searcher',
      description: '',
      imgUrl: demo1
    },
    {
      title: 'React Image Searcher',
      description: '',
      imgUrl: demo1
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
                  <Nav.Link eventKey="first">Front-End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Back-End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">FullStack</Nav.Link>
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
                <Tab.Pane eventKey="second">Lorem text</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem text</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}
