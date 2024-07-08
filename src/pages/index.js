import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

// Background color of our page
const GlobalStyle = createGlobalStyle`
  html body {
    height: 100vh;
    width: 100%;
    background-color: var(--navy) !important;
  }
`;

// Gradient that follows the mouse, based on: https://codepen.io/Iseyaaaaa/pen/qBMNEGN
const Gradient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 650px;
  border-radius: 100%;
  background-image: radial-gradient(#0e2955 1%, #0a192f 200%);
  filter: blur(250px);
  transition: all 450ms ease-out;
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: translate(calc(-50% + 15px), -50%);
  z-index: -1;
`;

const IndexPage = ({ location }) => {
  // We animate the gradient so that it follows the mouse pointer
  useEffect(() => {
    const cursor = document.querySelector('#gradient');

    document.addEventListener('mousemove', function(e) {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
  }, []);

  // finally, we render the page
  return (
    <div>
      <GlobalStyle />
      <Layout location={location}>
        <Gradient id="gradient" />
        <StyledMainContainer className="fillHeight">
          <Hero />
          <About />
          <Jobs />
          <Featured />
          <Projects />
          <Contact />
        </StyledMainContainer>
      </Layout>
    </div>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
