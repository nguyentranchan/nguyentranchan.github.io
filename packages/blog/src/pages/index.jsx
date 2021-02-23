import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Row, Col } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import PostCard from '../components/PostCard';
import SEO from '../components/Seo';
import MiniTag from '../components/MiniTag';
import Config from '../../config';

const Blog = ({ data }) => {
  const { allFile: { edges } } = data;
  const rawTags = data.allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter.tags)
    .reduce((prev, curr) => prev.concat(curr));
  rawTags
    .filter((tag, index) => index === rawTags.indexOf(tag))
    .sort(); // Remove duplicates and sort values
  // const tagPage = Config.pages.tag;
  const tagData = Config.tags;
  return (
    <Layout className="outerPadding bgWhite">
      <Header />
      <div className="topTitle">
        <div className="container">
          <h1 className="titleSeparate">Learning <br/> experimenting,<br/> and liberating our ability.</h1>
        </div>
      </div>
      <Layout className="container">
        <SEO
          title="Blog"
          description="I like blogging about various web technologies and other stuff related to
            javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies
            and scenarios I have come across in realtime."
          path="blog"
        />
        
        <SidebarWrapper>
          <div className="tagBox">
            <h2>Discover what matters to you</h2>
            <Row>
              {
                edges.map((val) => (
                  <MiniTag
                    name={val.node.name}
                    color={tagData[val.node.name].color}
                  />
                ))
              }
            </Row>
          </div>
          <h2>Latest</h2>
          <Row gutter={[25, 25]}>
            {
              data.allMarkdownRemark && data.allMarkdownRemark.edges.map((val, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <Col key={key} xs={24} sm={24} md={12} lg={8}>
                  <PostCard data={val} />
                </Col>
              ))
            }
          </Row>
        </SidebarWrapper>
      </Layout>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            path
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 288) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "tags" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Blog;
