import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Col, Row, Stack, Form, InputGroup } from 'react-bootstrap'
import './Redeem.scss'

import RedeemAlert from '../../components/Modals/RedeemAlert/RedeemAlert';
import { useSelector } from 'react-redux';
import { apiRequests } from '../../Common/apiRequests';

function Redeem() {
  const redeemList = [
    {item: 'digital gift certificates can be redeemed online.', key: 0},
    {item: 'in order to redeem more than one (1) digital gift certificate on the same purchase please call 1-800-XXX-XXXX.', key: 1},
    {item: 'when redeeming a gift certifcate online, when you get to the payment screen there will be an option to add "gift card" to your order. follow the online instructions in order to process your digital gift certificate.', key: 2},
    {item: 'digital gift cards cannot be used to purchase physical gift cards.', key: 3},
    {item: 'if you have questions, our team has answers! just call 1-800-XXX-XXXX.', key: 4},
    {item: 'please be aware that once your order has been placed, it cannot be exchanged or cancelled.', key: 5}
  ]
  const LOGO_PUBLIC_URL = import.meta.env.VITE_REACT_APP_API_STORAGE_URL;
  const authState = useSelector(state => state.auth);
  const pointBalance = useSelector(state => state.auth.authPoints);
  const [merchants, setMerchants] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getMerchants();
  }, [])

  useEffect(() => {
    if(query != "") {
      handleSearch(query);
    } else {
      getMerchants();
    }
  }, [query]);

  const getMerchants = async () => {
    const endPoint = `organization/${authState.user.organization_id}/program/${authState.program.id}/merchant`;
    await apiRequests(endPoint, 'get')
    .then((response) => {
      setMerchants(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleSearch = (query) => {
    const found = merchants.filter(item => {return item.name.toLowerCase().includes(query.toString().toLowerCase())});
    setMerchants(found);
  };

  return (
    <div className="redem-wrapper p-2 p-md-4">
      <Row>
        <Col xs={12} md={7} lg={6}>
          <h4>User Redemption Options</h4>
          <p>Participants can redeem rewards points for instant, digital gift codes to purchase whatever they'd like at the nation's leading merchants!</p>
          <div className='d-flex gap-3'>
            <Button variant='light active'>Redeem My Points</Button>
            <Button variant='light'>View as Manager</Button>
          </div>
        </Col>
        <Col xs={12} md={5} lg={6}>
          <Row className='justify-content-end'>
            <Col xs={12} md={10} lg={5}>
              <div className="card-shadow border border-1 d-flex flex-column gap-2 align-items-center justify-content-center p-4">
                <h4 className='fw-300'>Redeemable Points</h4>
                <p className='fs-large-xxl m-0'><span>{pointBalance ? pointBalance.pointBalance?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 0}</span> points</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span>
                  Redemption Instructions
                </span>
                </Accordion.Header>
              <Accordion.Body>
                <ul className='text-uppercase fs-small fw-500 list-unstyled'>
                  {redeemList.map((redeem, index) => {
                    return (
                      <li key={redeem.key}>
                        <span>{ index+1 }</span>
                        {redeem.item}
                      </li>
                    );
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className='my-5'>
        <Row>
          <Col md={12}>
            <Stack direction='horizontal' gap={2} className='flex-wrap'>
              <Badge bg='light' text='dark'>All</Badge>
              <Badge bg='light' text='dark' className='active'>Most Popular</Badge>
              <Badge bg='light' text='dark'>Food</Badge>
              <Badge bg='light' text='dark'>Retail</Badge>
              <Badge bg='light' text='dark'>Entertainment</Badge>
            </Stack>
          </Col>
        </Row>

        <Row className='my-4'>
          <Col md={12}>
            <Form.Group>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search here.."
                  onChange={(e) => setQuery(e.target.value)}
                />
                <InputGroup.Text className="py-0">
                  <svg viewBox="0 0 24 24" style={{ width: '30px' }}>
                    <path d="M0 0h24v24H0z" fill="none">
                    </path>
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                    </path>
                  </svg>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {merchants && merchants.map((merchant, index) => (
            <Col xs={6} md={6} lg={3} key={index}>
              <div className="dark-card mb-4">
                <div className="d-flex flex-column gap-3 p-2 p-md-4">
                  <img src={ `${LOGO_PUBLIC_URL}/${merchant.logo}` } alt="logo" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='m-0 fs-large fw-500'>{merchant.name}</p>
                    <RedeemAlert merchant={merchant} />
                  </div>
                </div>
              </div>
            </Col>
          ))}
          {merchants.length == 0 && <p>No results found</p>}
        </Row>
      </Row>
    </div>
  )
}

export default Redeem