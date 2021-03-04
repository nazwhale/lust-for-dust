import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const email = "naz@hyko.uk"

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title}{' '}
            <span className="text-color-main">{name}</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
               <a
                 target="_blank"
                 rel="noopener noreferrer"
                 href={`mailto:${email}`}
                 className="cta-btn cta-btn--hero"
               >
                Send us an email
              </a>
          </p>
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                Learn more about us
              </Link>
            </span>
          </p>
          <p className="hero-cta" style={{paddingTop: "2rem", fontSize: "2.5rem", display: "flex", flexWrap: "wrap", whiteSpace: "pre-wrap"}}>
             or, call Julie on{" "}
            <span style={{whiteSpace : "nowrap"}}>07737 962 245</span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
