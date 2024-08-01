import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faDroplet, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LineChart from './LineChart';
import BarChart from './BarChart';
import "./Dashboard.css";

import Auth from '../pages/Auth';

import { getBalanceApi } from '../services/allApi';


function Dashboard() {
  // const [data, setData] = useState(false)

  // const getData = async()=>{
  //   const result = await getBalanceApi()
  //   setData(result.data[0].accounts[0])
    
  // }
  // console.log(data);

  // useState(()=>{
  //   getData()
  // },[data])
  return (
    <Container fluid className='shadow'>
      {/* First Section */}
      <Row className="m-4">
        <Col xs={12}>
          <p className='fs-4'>Hi, Demo</p>
          {/* <Auth /> */}
          <hr />
          <Row className='mt-5'>
            <Col xs={12} md={6} className=''>
              <p><FontAwesomeIcon icon={faChartPie} className='me-3' />Equity</p>
              <Row>
                <Col xs={6} md={5} className="border-end pe-md-3 mb-3 mb-md-0">
                  <h1 className='overflow-hidden'>1L</h1>
                  <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Margin available</p>
                </Col>
                <Col xs={6} md={7}>
                  <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
                    Margins used <span className="text-dark" style={{ fontSize: '15px' }}>0</span>
                  </p>
                  <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
                    Opening balance <span className="text-dark" style={{ fontSize: '15px' }}>1L</span>
                  </p>
                  <Link className='text-decoration-none text-primary' style={{ fontSize: '13px' }}>
                    <img src="https://cdn-1.webcatalog.io/catalog/zerodha-console/zerodha-console-icon-filled-256.webp?v=1714776598687" alt="" width={'20px'} height={'20px'} /> View Statement
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} className='mb-sm-5'>
              <p className='mt-xs-5'><FontAwesomeIcon icon={faDroplet} className='me-3' /> Commodity</p>
              <Row>
                <Col xs={6} md={5} className="border-end pe-md-3 mb-3 mb-md-0">
                  <h1 className='overflow-hidden'>50K</h1>
                  <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Margin available</p>
                </Col>
                <Col xs={6} md={7}>
                  <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
                    Margins used <span className="text-dark" style={{ fontSize: '15px' }}>0</span>
                  </p>
                  <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
                    Opening balance <span className="text-dark" style={{ fontSize: '15px' }}>50K</span>
                  </p>
                  <Link className='text-decoration-none text-primary' style={{ fontSize: '13px' }}>
                    <img src="https://cdn-1.webcatalog.io/catalog/zerodha-console/zerodha-console-icon-filled-256.webp?v=1714776598687" alt="" width={'20px'} height={'20px'} /> View Statement
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className='my-5'>
            <Col xs={12}>
              <p><FontAwesomeIcon icon={faBriefcase} /> Holdings (17)</p>
              <Row>
                <Col xs={5} md={6} className="border-end pe-md-3 mb-3 mb-md-0">
                  <p className='text-success line-height-sm'>2.24k <span style={{ fontSize: '12px' }}>+16.90%</span></p>
                  <p className="text-muted mb-0" style={{ fontSize: '14px' }}>P&L</p>
                </Col>
                <Col xs={7} md={6}>
                  <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
                    Current value <span className="text-dark" style={{ fontSize: '15px' }}>15.46k</span>
                  </p>
                  <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
                    Investment <span className="text-dark" style={{ fontSize: '15px' }}>13.23k</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="d-flex justify-content-center align-items-center mt-3">
                  <div className='bar1' style={{ width: '100%', height: '60px'}}></div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className='d-md-flex justify-content-between align-items-center' style={{ width: '100%' }}>
                    <p style={{ fontSize: '18px' }}>₹15,463.77</p>
                    <div>
                      <input type="radio" name="investment" id="currentValue" />
                      <label htmlFor="currentValue" className='me-3' style={{ color: 'gray', fontSize: '14px' }}>Current value</label>
                      <input type="radio" name="investment" id="investmentValue" />
                      <label htmlFor="investmentValue" style={{ color: 'gray', fontSize: '14px' }}>Investment value</label>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col xs={12} md={6}>
            <p className='text-center'>Market overview</p>

              <LineChart />
            </Col>
            <Col xs={12} md={6} className='d-flex justify-content-center align-items-center flex-column my-5'>
            <p>Positions (8)</p>
              <BarChart />
            </Col>
          </Row>
          <hr />
        </Col>
      </Row>
      {/* <hr /> */}
    </Container>
  );
}

export default Dashboard;
