import React from 'react';
// import { Row, Col } from 'antd';
// import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Be a partner of GogoJungle Japan, we are leading in the investment field in Japan.
  Now, we are expanding the market to South East Asia like Vietnam, Thailand & China.`,
  paraTwo: `“Human-first technology”
  At GGJungle, we exist to serve, we eager to solve the emerging problems that humanity has been encountering
  We provide technologies, innovative solutions & quality products.`,
  paraThree:
  `“Innovative”
  You can’t solve a problem on the same level that it was created. You have to rise above it to the next level.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['GGJungle', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Us</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
      </div>
      {/* <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Mangalore, KA, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row> */}
    </>
  );
};
export default AboutMe;
