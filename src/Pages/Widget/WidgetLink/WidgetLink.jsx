import React from 'react'
import { Button, Card, CardBody, CardHeader, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'

function WidgetLink() {
  const copyText = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
      }).catch(err => {
        alert('Failed to copy text: ', err);
      });
    } else {
      // Fallback for browsers that do not support the Clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert('Text copied to clipboard');
      } catch (err) {
        alert('Failed to copy text: ', err);
      }
      document.body.removeChild(textArea);
    }
  }

  return (     
    <>
      <Row className='mt-5'>
        <div className="col-12 col-md-5 mx-auto">
          <Card className="card-shadow border-0">
            <CardHeader className="text-center bg-blue fc-white border-0">
              Widget Link
            </CardHeader>
            <CardBody className="d-flex flex-column align-items-center gap-3">
              <p className="m-0">Copy your Fasteezy widget link to place in marketing campaigns.</p>
              <Link className="fc-darkPrimary">https://fasteezy.com/ref-participants/program/894255</Link>
              <Button onClick={() =>  copyText('https://fasteezy.com/ref-participants/program/894255')}>Copy</Button>
            </CardBody>
          </Card>
        </div>
      </Row>
    </>   
  )
}

export default WidgetLink