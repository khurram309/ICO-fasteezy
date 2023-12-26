import React, { useState, useEffect } from 'react';
import { Button, Tab, Tabs, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import search from '../../assets/images/search-arrow.svg';
import list from '../../assets/images/list-icon.svg';
import chat from '../../assets/images/empty-chat.png';
import stars from '../../assets/images/stars.svg';
import trash from '../../assets/images/trash.svg';
import { apiRequests } from '../../Common/apiRequests';

function History(props) {
  const userToken = useSelector(state => state.auth.token);
  const [allChats, setAllChats] = useState();

  useEffect(() => {
    if(userToken != null) {
      getAllChats();
    }
  }, [])

  const getAllChats = async () => {
    const endPoint = `user/chats`;
    await apiRequests(endPoint, 'get')
    .then((response) => {
      setAllChats(response.data.data);
    })
    .catch((err) => {
      console.log(err);
      Notiflix.Notify.failure(err.response.data);
    })
  }

  const renderAllChats = () => {
    return (
      <ul>
        { allChats.map((chat, index) => (
          <li key={index} className='d-flex align-items-center justify-content-between'>
            <Link onClick={() => props.getChat(chat.attributes.chat_id)}>
              <img src={list} alt="List" className="me-3" />
              {chat.attributes.id}
            </Link>
            <div className='trash'><img src={trash} alt="Trash" /></div>
          </li>
        ))}
      </ul>
    )
  }

  return (
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
            { allChats && renderAllChats() || 'No chats found'}
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
  )
}

export default History;
