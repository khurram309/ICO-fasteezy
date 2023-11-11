import React from 'react';

import { Row, Col, Button, Tab, Tabs, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import info from '../../assets/images/info-icon.svg';
import bot from '../../assets/images/bot-small.svg';
import plus from '../../assets/images/plus-icon.svg';
import search from '../../assets/images/search-arrow.svg';
import list from '../../assets/images/list-icon.svg';
import chat from '../../assets/images/empty-chat.png';
import stars from '../../assets/images/stars.svg';
import './Chatbot.scss';

function Chatbot() {
  return (
    <div className="chatbot-container mt-4 mb-5">
      <div className="chat-grid">
        <div className="conversation-cover">
          <div className="chat-tabs-section">

            <Row className="justify-content-center">
              <Col sm={12} lg={12} xl={11} xxl={8}>
                <h4 className="text-center fw-semibold">Talk to UVO: Your Personal Medical Guru</h4>
                <p className="text-center">UVO is your 24/7 healthcare companion, ready to provide answers and guidance for your medical questions. </p>
              </Col>
            </Row>

            <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
              <div className="gray7c fw-small">Chat creativity</div>
              <div>
                <img src={info} alt="info" />
              </div>
            </div>

            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="home" title="Super">
              </Tab>
              <Tab eventKey="profile" title="Hight">
              </Tab>
              <Tab eventKey="longer-tab" title="Medium">
              </Tab>
              <Tab eventKey="contact" title="Low">
              </Tab>
            </Tabs>
          </div>
          <div className="tabcontent"></div>
          <div className="suggestions">
            <div className="d-flex justify-content-between align-items-center">
              <div className="gray5c fw-semibold">Suggestions</div>
              <div className="remove-tag">
                <Link className="btn-close"></Link>
              </div>
            </div>
            <div className="d-flex justify-content-between align-content-center">
              <div className="btn-tags mt-2">
                <Button as="input" type="button" value="Symptom Assessment" />{' '}
                <Button as="input" type="button" value="Lab Result Interpretation" />{' '}
                <Button as="input" type="button" value="Health Questions" />{' '}
              </div>
              <div className="remove-tags"></div>
            </div>

          <div className="chat-input d-flex justify-content-between align-items-center mt-3">
            <div>
              <Link>
                <img src={bot} alt="info" />
              </Link>
            </div>
            <Form.Control type="text" placeholder="|How i can help you?" />
            <div>
              <Link>
                <img src={plus} alt="info" />
              </Link>
            </div>
          </div>
          </div>
        </div>
        <div className="contextual-sidebar">
          <div className="search-section d-flex align-items-center">
            <img src={search} alt="search" />
            <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
          </div>
          <div className="history-tabs">
            <Tabs
                defaultActiveKey="Prompts"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
              <Tab eventKey="Prompts" title="Prompts">
                <ul>
                  <li>
                    <Link>
                      <img src={list} alt="List" className="me-3" />
                      Experiencing symptoms?
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={list} alt="List" className="me-3" />
                      Need help with lab results?
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={list} alt="List" className="me-3" />
                      Have a health question?
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={list} alt="List" className="me-3" />
                      Experiencing symptoms?
                    </Link>
                  </li>
                  <li>                    
                    <Link>
                      <img src={list} alt="List" className="me-3" />
                      Have a health question?
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={list} alt="List" className="me-3" />
                      Need help with lab results?
                    </Link>
                  </li>
                </ul>
              </Tab>
              <Tab eventKey="History" title="History">
              </Tab>
            </Tabs>
          </div>
          <div className="upgrade-chat mt-0">
            <Link className="btn-close"></Link>
            <div className="empty-chat">
              <img src={chat} alt="chat" className="img-fluid" />
            </div>
            <Button variant="primary w-100">Upgrade to Pro <img src={stars} alt="star" className="ms-2"/> </Button>{' '}
          </div>
          <div className="d-flex justify-content-center fw-semibold">Follow us on</div>
        </div>
      </div>
    </div>
  )
}

export default Chatbot;
