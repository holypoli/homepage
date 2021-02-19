import React from 'react';
import styled from 'styled-components';
import { StaticQuery } from 'gatsby';

const InstaImage = styled.img`
  padding: 2rem;
  @media screen and (min-width: 420px) {
    width: 40%;
  }
`;

const InstaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function InstaPosts() {
  return (
    <StaticQuery
      query={graphql`
        query InstaQuery {
          allInstaNode(
            limit: 6
            sort: { order: DESC, fields: timestamp }
            filter: { mediaType: { eq: "GraphImage" } }
          ) {
            edges {
              node {
                likes
                id
                caption
                username
                original
                mediaType
                thumbnails {
                  config_height
                  config_width
                  src
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <InstaWrapper>
            {data.allInstaNode.edges.map(edge => (
              <InstaImage
                src={edge.node.thumbnails[3].src}
                key={edge.node.id}
                width={edge.node.thumbnails[3].config_width}
                height={edge.node.thumbnails[3].config_heigth}
              />
            ))}
          </InstaWrapper>
        );
      }}
    />
  );
}

export default InstaPosts;
