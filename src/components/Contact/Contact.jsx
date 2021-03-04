import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact ✉️" />
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              {btn}
            </a>
            <p className="contact-wrapper__text" style={{paddingTop: "2rem"}}>
              or, call Julie on 07737 962 245
            </p>
          </div>
      </Container>
    </section>
  );
};

export default Contact;
