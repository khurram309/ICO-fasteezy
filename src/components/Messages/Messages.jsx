import React, { Fragment } from 'react';

import chattitle from '../../assets/images/chat-title.svg';
import share from '../../assets/images/share-icon.svg';
import user from '../../assets/images/avatar.png';
import thumbUp from '../../assets/images/thumb-up.svg';
import thumbDown from '../../assets/images/thumb-down.svg';
import shareChat from '../../assets/images/share-chat.svg';
import copy from '../../assets/images/chat-copy.svg';
import repeat from '../../assets/images/repeat.svg';
import bot from '../../assets/images/bot-small.svg';

function Messages(props) {
  const messages = props.messages;

  return (
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
          <Fragment key={index}>
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
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Messages;