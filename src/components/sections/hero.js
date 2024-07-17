import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { ReactTyped } from 'react-typed';
import { navDelay, loaderDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--red);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const TEXTS = [
  'I\'m a roboticist',
  'I\'m a violinist',
  'I\'m a filmmaker',
  'I\'m a software engineer',
  'I\'m a grad student',
];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>👋 Hi, my name is</h1>;
  const two = <h2 className="very-big-heading">Javier Páez.</h2>;
  // Typing effect
  const three = (
    <h3 className="big-heading">
      <ReactTyped strings={TEXTS} typeSpeed={100} smartBackspace={true}
        backDelay={1500} backSpeed={50} loop/>
    </h3>
  );
  const four = (
    <>
      <p>
        I'm a Master's student interested in Artificial Intelligence,
        Reinforcement Learning, and Robot Learning.
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="#about" rel="noreferrer">
      Learn more about me!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
