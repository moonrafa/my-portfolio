import demo1 from '../assets/img/lastfm-square.svg'
import { Container, Row, Col } from 'react-bootstrap'
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
    <section>
      <Container>
        <Row>
          <Col>
            <h2> Projects </h2>
            <p>
              I've built projects with a variety of technologies and I am
              creating new ones every day. For more details about each one,
              click on the demo to be taken to its GitHub repository.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
