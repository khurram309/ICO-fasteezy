import React from 'react'
import { Button, Card, CardBody, CardHeader, Row } from "react-bootstrap";
import '../Widget.scss';

function WidgetHTML() {
  return (     
    <>
      <Row className='mt-5'>
        <div className="col-12 col-md-5 mx-auto">
          <Card className="card-shadow border-0">
            <CardHeader className="text-center bg-blue fc-white border-0">
              Add the referral widget to your website
            </CardHeader>
            <CardBody className="d-flex flex-column align-items-center gap-3">
              <p className='m-0'>Copy this line of code and have your web designer add it to your website.</p>
              <Button>Copy</Button>
            </CardBody>
          </Card>
        </div>
      </Row>
    </>   
  )
}

export default WidgetHTML