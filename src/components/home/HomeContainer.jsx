import React from 'react';
import { Row, Col } from 'antd';


const Home=()=>{
  return (
    <div>
      <Row>
        <Col span={5}>nav</Col>
        <Col span={10}>content</Col>
      </Row>
    </div>
  )
}

export default Home;