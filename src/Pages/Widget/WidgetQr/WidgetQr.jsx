import React from 'react'
import { Button, Card, CardBody, CardHeader, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../Widget.scss';

function WidgetQr() {
  return (     
    <>
      <Row className='mt-5'>
        <div className="col-12 col-md-5 mx-auto">
          <Card className="card-shadow border-0">
            <CardHeader className="text-center bg-blue fc-white border-0">
              Share your referral widget on social media
            </CardHeader>
            <CardBody className="d-flex flex-column align-items-center gap-3">
              <p className='m-0'>Add the QR code to all your printed material to boost your referrals.</p>
                <div className="widget-svgs qr">
                  <svg viewBox="0 0 24 24">
                    <path d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z">
                    </path>
                  </svg>
                </div>
              <Button>Copy</Button>
            </CardBody>
          </Card>
        </div>
      </Row>
    </>   
  )
}

export default WidgetQr