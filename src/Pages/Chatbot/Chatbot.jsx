import React, { useRef, useState, useEffect } from 'react';
import { Row, Col, Button, Tab, Tabs, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ClientJS } from 'clientjs';
import { openai } from '../../Common/openai';
import Notiflix from 'notiflix';

import info from '../../assets/images/info-icon.svg';
import bot from '../../assets/images/bot-small.svg';
import plus from '../../assets/images/plus-icon.svg';
import search from '../../assets/images/search-arrow.svg';
import list from '../../assets/images/list-icon.svg';
import chat from '../../assets/images/empty-chat.png';
import stars from '../../assets/images/stars.svg';
import chattitle from '../../assets/images/chat-title.svg';
import share from '../../assets/images/share-icon.svg';
import user from '../../assets/images/avatar.png';
import thumbUp from '../../assets/images/thumb-up.svg';
import thumbDown from '../../assets/images/thumb-down.svg';
import shareChat from '../../assets/images/share-chat.svg';
import copy from '../../assets/images/chat-copy.svg';
import repeat from '../../assets/images/repeat.svg';
import upArrow from '../../assets/images/up-arrow.svg';
import { apiRequests } from '../../Common/apiRequests';
import './Chatbot.scss';
import GetStarted from '../../components/Modals/GetStarted/GetStarted';

function Chatbot() {
  const form  = useRef(null);
  const [validated, setValidated] = useState(false);
  const client = new ClientJS();
  const userToken = useSelector(state => state.auth.token);
  const fingerprint = client.getFingerprint();
  const [deviceToken, setDeviceToken] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    if(userToken == null) {
      setDeviceToken(fingerprint);
      if(deviceToken != null) {
        getChat();
      }
    }
  }, [deviceToken])

  useEffect(() => {
    if(chatId != null || chatId != undefined) {
      getOpenAIList();
    }
  }, [chatId])

  const addMessage = (newMessage) => {
    const messageExists = messages.some((msg) => msg.message === newMessage.message);
    if (!messageExists) {
      setMessages(prevMessages => [...prevMessages, newMessage]);
    }
  };

  const getChat = async () => {
    const endPoint = `public_chats`;
    const userData = {
        device_token: deviceToken
    }
    await apiRequests(endPoint, 'get', userData)
    .then((response) => {
      let message = {
        message: response.data.data.attributes.welcome_message,
        role: 'assistant',
        count: response.data.data.attributes.message_count
      }
      setChatId(response.data.data.attributes.chat_id);
      addMessage(message);
    })
    .catch((err) => {
      Notiflix.Notify.failure(err.response.data);
      console.log(err);
    })
  }

  const sendMessage = async (e) => {
    setShowSignUp(false);
    e.preventDefault();
    const messageForm = e.currentTarget;
    if(!messageForm.checkValidity()) {
      setValidated(true);
      return;
    }
    const data = new FormData(form.current);
    const text = data.get('message');
    const endPoint = 'public_chats';
    const messageData = {
      device_token: deviceToken,
      chat: {
          "chat_id": chatId,
          "message": text
      }
    }
    await apiRequests(endPoint, 'patch', messageData)
    .then((response) => {
      let message = {
        message: text,
        role: 'user',
        count: response.data.data.attributes.message_count
      }
      if(response.status === 200) {
        addMessage(message);
        setTimeout(() => {
          getOpenAIList();
        }, 1000)
      }
    })
    .catch((err) => {
      if(err.response.data.status.code === 403) {
        Notiflix.Notify.failure(err.response.data.status.message);
        setShowSignUp(true);
      }
    })
  }

  const getOpenAIList = async () => {
    const threadMessages = await openai.beta.threads.messages.list(
      chatId
    );
    threadMessages.data.slice().reverse().map((thread, index) => {
      let message = { 
        message: thread.content[0].text.value,
        role: thread.role
      }
      addMessage(message);
    })
  }

  return (
    <>
    <div className="custom-container chatbot-bg mt-md-4 pt-4 pt-md-0">
      <div className="chat-grid">
        <div className="conversation-cover">
          { messages.count == 0 && <div className="chat-tabs-section">

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
          </div> }
          <div className="chat-section">
            <div className="chat-inner">
              <div className='chat-title d-flex justify-content-between align-items-center'>
                <div>
                  <img src={chattitle} alt="chat Title" className="me-4"/>
                  Chat Title
                </div>
                <a href="#" className='chat-share'>
                  Share
                  <img src={share} alt="Share" className="ms-2"/>
                </a>
              </div>
            </div>
            <div className='chat-wrap'>
              { messages.map((message, index) => (
                <>
                  { message.role == 'user' && 
                  <div className='chat-inner'>
                    <div className="chat-grid">
                      <div className="user-img">
                        <img src={user} alt="User"/>
                      </div>
                      <div className="chat-text">
                        <p>{ message.message }</p>
                      </div>
                    </div>
                  </div>
                  }
                  { message.role == 'assistant' && 
                  <>
                  <div className='chat-inner'>
                    <div className="chat-grid">
                      <div className="user-img">
                        <img src={bot} alt="info" />
                      </div>
                      <div className="chat-text">
                        <p>
                          { message.message }
                        </p>
                        <div className="chat-btns-group mt-2">
                          <div className="d-flex justify-content-between align-content-center">
                            <div className='d-flex'>
                              <a className='chat-btn' href='#'>
                                <img src={thumbUp} alt="Thumb Up" />
                              </a>
                              <a className='chat-btn' href='#'>
                                <img src={thumbDown} alt="Thumb Down" />
                              </a>
                              <a className='chat-btn' href='#'>
                                <img src={shareChat} alt="Share" />
                              </a>
                              <a className='chat-btn' href='#'>
                                <img src={copy} alt="Copy Up" />
                              </a>
                            </div>
                            <div>
                              <a className='chat-btn' href='#'>
                                <img src={repeat} alt="Repeat" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  </>}
                </>
              ))}
            </div>
          </div>
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
            <div className='d-flex align-items-center w-100'>
              <div>
                <Link>
                  <img src={bot} alt="info" />
                </Link>
              </div>
              <Form noValidate validated={validated} ref={form} onSubmit={sendMessage}>
                <Form.Control type="text" name="message" placeholder="|How i can help you?" autoComplete="off" autofill="off" required />
                {/* <div>
                  <Button type="submit">
                    <img src={search} alt="info" />
                  </Button>
                </div> */}
              </Form>
            </div>
            <a className='up-arrow'>
              <img src={upArrow} alt="Up Arrow" />
            </a>
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
    { showSignUp && <GetStarted showRegister={showSignUp} /> }
    </>
  )
}

export default Chatbot;
