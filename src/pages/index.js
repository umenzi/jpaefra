import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

// const GlobalStyle = createGlobalStyle`
//   html body {
//     height: 100vh;
//     width: 100%;
//     background-color: var(--navy) !important;
//     background-image: radial-gradient(
//       circle 200px at var(--x, 10px) var(--y, 10px),
//       rgb(12, 28, 53) 1%,
//       var(--navy) 200%
//     ) !important;
//   }
// `;

// const IndexPage = ({ location }) => {
//   useEffect(() => {
//     let lastMousePosition = { x: 0, y: 0 };
//
//     const updateMousePosition = ev => {
//       // Update last known mouse position
//       lastMousePosition = { x: ev.pageX, y: ev.pageY };
//
//       // Use pageX and pageY from the last known mouse position, adjusted for current scroll position
//       const x = lastMousePosition.x - document.body.scrollLeft;
//       const y = lastMousePosition.y - document.body.scrollTop;
//
//       document.documentElement.style.setProperty('--x', `${x}px`);
//       document.documentElement.style.setProperty('--y', `${y}px`);
//     };
//
//     window.addEventListener('mousemove', updateMousePosition);
//     window.addEventListener('scroll', updateMousePosition);
//
//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       window.removeEventListener('scroll', updateMousePosition);
//     };
//   }, []);
//
//   return (
//     <div>
//       <GlobalStyle/>
//       <Layout location={location}>
//         <StyledMainContainer className="fillHeight">
//           <Hero/>
//           <About/>
//           <Jobs/>
//           <Featured/>
//           <Projects/>
//           <Contact/>
//         </StyledMainContainer>
//       </Layout>
//     </div>
//   );
// };

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
