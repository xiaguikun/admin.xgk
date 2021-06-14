import React from 'react';
import Nav from '@comp/home/homeComp/Nav.jsx';
import { Row, Col } from 'antd';
import './index.less'

const Home=()=>{
  return (
    <div className="home-container">
      <Row>
        <Col span={5}>
          <Nav></Nav>
        </Col>
        <Col span={10}>content</Col>
      </Row>
    </div>
  )
}

export default Home;