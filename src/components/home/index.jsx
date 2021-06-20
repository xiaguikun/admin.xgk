import React from 'react';
import Nav from './homeComp/Nav.jsx';
import { Row, Col } from 'antd';
import './index.less';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <Row>
        <Col span={5}>
          <Nav></Nav>
        </Col>
        <Col span={10}>content</Col>
      </Row>
    </div>
  );
};

export default HomeContainer;
