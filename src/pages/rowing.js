import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Text from '../components/styles/text';
import Highlight from '../components/styles/highlight';
import InstaPosts from '../components/instaPosts';

const Cite = styled.span`
  font-style: italic;
  font-size: 2.5rem;
  font-weight: bolder;
`;

const StyledA = styled.a`
  color: ${props => props.theme.link_text};
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: color 0.2s cubic-bezier(0.86, 0, 0.07, 1);
  :hover {
    color: ${props => props.theme.body};
  }
  :before {
    content: '';
    display: block;
    height: 0;
    background-color: ${({ theme }) => theme.link_text};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 2px;
    transition: height 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover:before {
    height: 100%;
  }
`;

const Follow = styled.span`
  padding: 0 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

// const Container = styled.main`
//   height: 70vh;
//   overflow-y: scroll;
//   width: 100%;
//   scroll-snap-type: y mandatory;
//   :after {
//     content: '';
//     width: 1rem;
//     background-color: pink;
//   }
// `;

const Section = styled.section`
  position: relative;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 2fr;
  :nth-of-type(2n) {
    grid-template-columns: 2fr 1fr;
  }
`;

const RowingPage = ({ data }) => {
  return (
    <>
      <SEO title="Rowing" keywords={[`rowing`, `olympics`, `sieber`, `paul`]} />
      <Text>
        <Cite>"Rowing is like flying, just better..."</Cite>
        <Section data-sal="fade" data-sal-delay="300" data-sal-easing="ease">
          <p>
            In rowing there is no perfect stroke, you can row your whole life,
            there will always be something to work on. But there is the feeling
            of gliding over the water, being in synchronistation with your team,
            calmly breathing, being alive -{' '}
            <Highlight>this is perfection</Highlight>.
          </p>
          <Img fluid={data.tealRow.childImageSharp.fluid} />
        </Section>
        <Section data-sal="fade" data-sal-delay="600" data-sal-easing="ease">
          <Img fluid={data.mountainRow.childImageSharp.fluid} />
          <p>
            But there is another side to this sport. Nervousness, excitement,
            pain, fun - feelings one feels while racing. Testing yourself
            against the best in the world is something I enjoy as much as the
            calmnes of this sport.
            <br />
            <br />
            The pinacle of racing is definetly{' '}
            <Highlight>racing at Olympic Games</Highlight>. The best rowers in
            the world meet after preparing for four years, giving it there all
            and fighting for those medals. The Olympics are the place and time
            when all the hard work is finished and you can just enjoy and put it
            all out.
            <br />
            <br />
            Right now I'm still in the middle of this journey. Still needing to
            qualify, still needing to put the work in. If you would like to
            support me in this journey, contact me and let's{' '}
            <Highlight>get to work together</Highlight>.
          </p>
        </Section>
        <Section data-sal="fade" data-sal-delay="900" data-sal-easing="ease">
          <Follow>
            Follow my journey on{' '}
            <StyledA
              href="https://www.instagram.com/paul_sieber"
              target="_empty"
            >
              Instagram
            </StyledA>
          </Follow>
          <InstaPosts />
        </Section>
      </Text>
    </>
  );
};

export default RowingPage;

export const pageQuery = graphql`
  query {
    tealRow: file(name: { eq: "teal_row" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mountainRow: file(name: { eq: "row_mountains" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
