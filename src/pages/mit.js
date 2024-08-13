import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;

  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const UncopyrightPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const content = (
    <StyledMainContainer className="fillHeight">
      <div>
        <h1>License</h1>
        <p>
          All content on this website is under an MIT license. Yes, that means
          everything can be reused however you like, as long as you give me
          credit and leave a link back to my work.
        </p>

        <p>
          I don&apos;t see my work as wholly original and something I alone created.
          All of my ideas are built on top of other ideas that inspired
          me, either directly or indirectly. For instance, this website was
          originally based on <a href="https://github.com/bchiang7/v4">Brittany
          Chiang</a>&apos;s work.
        </p>

        <p>
          More specifically, you can find the full
          &quot;license&quot; on the <a
            href="https://github.com/umenzi/jpaefra/blob/main/LICENSE"
            target="_blank" rel="noopener noreferrer">GitHub repo for this
          project</a>.
        </p>
      </div>
    </StyledMainContainer>
  );

  return (
    <Layout location={location}>
      <Helmet title="Uncopyrighted"/>

      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames="fadeup">
            {content}
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
};

UncopyrightPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default UncopyrightPage;
