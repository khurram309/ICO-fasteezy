import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import './Widget.scss';

import WidgetLink from "./WidgetLink/WidgetLink";
import WidgetSocial from "./WidgetSocial/WidgetSocial";
import WidgetQr from "./WidgetQr/WidgetQr";
import WidgetHTML from "./WidgetHTML/WidgetHTML";
import WidgetCampaign from "./WidgetCampaign/WidgetCampaign";

function Widget() {
  const [showWidgetLink, setShowWidetLink] = useState(false);
  const [showWidgetSocial, setShowWidetSocial] = useState(false);
  const [showWidgetQr, setShowWidetQr] = useState(false);
  const [showWidgetHTML, setShowWidetHTML] = useState(false);
  const [showWidgetCampaign, setShowWidetCampaign] = useState(false);

  return (
    <div className="widget-wrapper p-2 p-sm-4">
      <Row>
        <Col xs={12} md={7} lg={5}>
          <h4>Fasteezy Widget</h4>
          <p>Getting referrals, new leads, and positive feedback has never been easier. The 4 tools below can be quickly and easily added to your website, emails, social media feeds, print, and more to request referrals, encourage feedback, and attract new leads.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3 className="mb-4">Select a Share Method:</h3>
          <Row className="share-widgets gy-0 gy-md-3">
            <Col xs={5} md={4} lg={2}>
              <Link 
                className={`card-shadow singleWidget d-flex flex-column align-items-center p-1 p-md-4 fc-darkPrimary justify-content-center gap-2 ${showWidgetLink && 'active'}`} 
                onClick={() => {setShowWidetLink(true); setShowWidetSocial(false); setShowWidetQr(false); setShowWidetHTML(false); setShowWidetCampaign(false);}}
              >
                <h4>Widget Link</h4>
                <svg viewBox="0 0 448 512">
                  <path d="M364.2 83.8C339.8 59.39 300.2 59.39 275.8 83.8L91.8 267.8C49.71 309.9 49.71 378.1 91.8 420.2C133.9 462.3 202.1 462.3 244.2 420.2L396.2 268.2C407.1 257.3 424.9 257.3 435.8 268.2C446.7 279.1 446.7 296.9 435.8 307.8L283.8 459.8C219.8 523.8 116.2 523.8 52.2 459.8C-11.75 395.8-11.75 292.2 52.2 228.2L236.2 44.2C282.5-2.08 357.5-2.08 403.8 44.2C450.1 90.48 450.1 165.5 403.8 211.8L227.8 387.8C199.2 416.4 152.8 416.4 124.2 387.8C95.59 359.2 95.59 312.8 124.2 284.2L268.2 140.2C279.1 129.3 296.9 129.3 307.8 140.2C318.7 151.1 318.7 168.9 307.8 179.8L163.8 323.8C157.1 330.5 157.1 341.5 163.8 348.2C170.5 354.9 181.5 354.9 188.2 348.2L364.2 172.2C388.6 147.8 388.6 108.2 364.2 83.8V83.8z">
                  </path>
                </svg>
              </Link>
            </Col>
            <Col xs={5} md={4} lg={2}>
              <Link className={`card-shadow singleWidget social-media d-flex flex-column align-items-center p-1 p-md-4 fc-darkPrimary justify-content-center gap-2 ${showWidgetSocial && 'active'}`} onClick={() => {setShowWidetSocial(true); setShowWidetLink(false); setShowWidetQr(false); setShowWidetHTML(false); setShowWidetCampaign(false);}}>
                <h4>Social Media</h4>
                <div className="d-flex gap-2">
                  <svg viewBox="0 0 448 512">
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z">
                    </path>
                  </svg>

                  <svg viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                    </path>
                  </svg>

                  <svg viewBox="0 0 448 512">
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z">
                    </path>
                  </svg>
                </div>
              </Link>
            </Col>
            <Col xs={5} md={4} lg={2}>
              <Link className={`card-shadow singleWidget d-flex flex-column align-items-center p-1 p-md-4 fc-darkPrimary justify-content-center gap-2 ${showWidgetQr && 'active'}`} onClick={() => {setShowWidetQr(true); setShowWidetLink(false); setShowWidetSocial(false); setShowWidetHTML(false); setShowWidetCampaign(false);}}>
                <h4>QR Code</h4>
                <svg viewBox="0 0 24 24">
                  <path d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z">
                  </path>
                </svg>
              </Link>
            </Col>
            <Col xs={5} md={4} lg={2}>
              <Link className={`card-shadow singleWidget d-flex flex-column align-items-center p-1 p-md-4 fc-darkPrimary justify-content-center gap-2 ${showWidgetHTML && 'active'}`} onClick={() => {setShowWidetHTML(true); setShowWidetQr(false); setShowWidetLink(false); setShowWidetSocial(false); setShowWidetCampaign(false);}}>
                <h4>Widget HTML</h4>
                <svg viewBox="0 0 640 512">
                  <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z">
                  </path>
                </svg>
              </Link>
            </Col>
            <Col xs={5} md={4} lg={2}>
              <Link className={`card-shadow singleWidget d-flex flex-column align-items-center p-1 p-md-3 fc-darkPrimary justify-content-center gap-2 ${showWidgetCampaign && 'active'}`} onClick={() => {setShowWidetCampaign(true); setShowWidetHTML(false); setShowWidetQr(false); setShowWidetLink(false); setShowWidetSocial(false);}}>
                <h4 className="">Start a Campaign</h4>
                <svg viewBox="0 0 24 24">
                  <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z">
                  </path>
                </svg>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      {showWidgetLink && <WidgetLink />}
      {showWidgetSocial && <WidgetSocial />}
      {showWidgetQr && <WidgetQr />}
      {showWidgetHTML && <WidgetHTML />}
      {showWidgetCampaign && <WidgetCampaign />}
    </div>    
  )
}

export default Widget