import { useState, useEffect } from 'react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImage from '../assets/img/header-img.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import resume from '../assets/CV-english.pdf'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const toRotate = ['A Front-End Developer']
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 1000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => {
      clearInterval(ticker)
    }
  }, [text])
  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center mobile-flex">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? 'text-port animate__animated animate__fadeIn'
                      : 'text-port'
                  }
                >
                  <span className="tagline">Welcome to my portfolio.</span>
                  <h1>
                    {"I'm Rafaelly Rodrigues"}
                    <br />
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Front-End Developer"]'
                    >
                      <span className="wrap"> {text}</span>
                    </span>
                  </h1>
                  <p>
                    I'm majoring in Information Technology at the Federal
                    University of Mato Grosso do Sul (UFMS). I love building
                    beautiful and functional interfaces. I'm passionate and
                    creative, yet logical and analytical, and I believe that
                    building modern websites require a combination of both in
                    order to create the best user experience. I'm naturally
                    curious, quietly confident, and always learning new things
                    and improving my skills.
                  </p>
                  <a
                    href={resume}
                    className="txt-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      Download CV <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faReact} color="#fff" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#fff" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#fff" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faJsSquare} color="#fff" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faNode} color="#fff" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#fff" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
