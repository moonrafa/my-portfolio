import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/_DEV__.svg'
import linkedinIcon from '../assets/img/linkedin-square.svg'
import githubIcon from '../assets/img/github-alt.svg'
import twitterIcon from '../assets/img/twitter.svg'
import lastfmIcon from '../assets/img/lastfm-square.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col size={12} sm={6} className="py-4 logo-footer">
            <img src={logo} />
          </Col>
          <Col size={12} sm={6} className="py-4 text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://linkedin.com/in/moonrafa"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="" />
              </a>
              <a
                href="https://github.com/moonrafa"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="" />
              </a>
              <a
                href="https://twitter.com/kiramekinara"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitterIcon} alt="" />
              </a>
              <a
                href="https://www.last.fm/user/asoftuniverse"
                target="_blank"
                rel="noreferrer"
              >
                <img src={lastfmIcon} alt="" />
              </a>
            </div>
          </Col>
          <Col>
            <p>
              Made with ❤ By Rafaelly Rodrigues &copy; 2022. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
