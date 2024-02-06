import React from 'react'
import { Button, Card, CardBody, CardHeader, Row, Form, Col } from "react-bootstrap";
import '../Widget.scss';

function WidgetCampaign() {
  return (     
    <>
      <Row className='mt-5'>
        <div className="col-12 col-md-5 mx-auto">
          <Card className="card-shadow border-0">
            <CardHeader className="text-center bg-blue fc-white border-0">
              Start a Campaign
            </CardHeader>
            <CardBody className="d-flex flex-column align-items-center gap-3">
              <p className='m-0'>Fill in your campaign title, start and end date to kick off your own campaign.</p>
              <Form className="w-75">
                <Row>
                  <Col md="12" >    
                    <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="campaignName">
                      <Form.Label className='fs-small-xs'>campaign title</Form.Label>
                      <Form.Control type="text" name="ampaignName" required/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md="6">
                    <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="startDate">
                      <Form.Label className='fs-small-xs'>start date</Form.Label>
                      <Form.Control type="date" name="startDate" required/>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md="6">
                    <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="endDate">
                      <Form.Label className='fs-small-xs'>End Date</Form.Label>
                      <Form.Control type="date" name="endDate" required/>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <Button>Start Campaign</Button>
            </CardBody>
          </Card>
        </div>
      </Row>
    </>   
  )
}

export default WidgetCampaign