import React from 'react';
import Nav from './homeComp/Nav.jsx';
import Header from './homeComp/Header.jsx';
import Main from './homeComp/Main.jsx';
import Footer from './homeComp/Footer.jsx';
import { Row, Col } from 'antd';
import './index.less';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <Row>
        <Col span={4}>
          <Nav></Nav>
        </Col>
        <Col span={19}>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </Col>
      </Row>
    </div>
  );
};

export default HomeContainer;
