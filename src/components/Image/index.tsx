import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

// interface StaticQueryProps {
//   placeholderImage: {
//     childImageSharp: {
//       fluid: object
//     }
//   }
// }

class Image extends React.PureComponent<{}, {}> {
  public render() {
    return null
    // return (
    //   <StaticQuery
    //     query={graphql`
    //       query {
    //         placeholderImage: file(relativePath: { eq: "intro-mobile.png" }) {
    //           childImageSharp {
    //             fluid(maxWidth: 767) {
    //               ...GatsbyImageSharpFluid
    //             }
    //           }
    //         }
    //       }
    //     `}
    //     render={(data: StaticQueryProps) => (
    //       <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="" className="block md:hidden" />
    //     )}
    //   />
    // )
  }
}

export default Image
