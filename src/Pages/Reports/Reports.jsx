import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Reports.scss';

import ReportDeposit from './ReportDeposit/ReportDeposit';
import ReportsEngagement from './ReportsEngagement/ReportsEngagement';

function Reports() {
  const [showReportDeposit, setShowReportDeposit] = useState(true);
  const [showReportEngage, setShowReportEngage] = useState(false);
  return (
    <>
      <div className="reports-wrapper p-2 p-md-4">
        <Row>
          <Col xs={12} md={4}>
            <h4>Reports</h4>
            <Form.Select aria-label="Default select example">
              <option 
                value="Deposit Balance" 
                onClick={() => {setShowReportDeposit(true); setShowReportEngage(false);}}
              >
                Deposit Balance
              </option>
              <option 
                value="Engagement Report" 
                onClick={() => {setShowReportEngage(true); setShowReportDeposit(false);}}
              >
                Engagement Report
              </option>
              <option 
                value="Affiliate Accounts Report"
              >
                Affiliate Accounts Report
              </option>
              <option 
                value="Award Summary"
              >
                Award Summary
                </option>
              <option 
                value="Award Detail"
              >
                Award Detail
              </option>
              <option 
                value="Invoices"
              >
                Invoices
              </option>
              <option 
                value="Campaign Report"
              >
                Campaign Report
              </option>
            </Form.Select>
          </Col>
        </Row>

        {showReportDeposit && <ReportDeposit />}
        {showReportEngage && <ReportsEngagement />}
      </div>
    </>
  )
}

export default Reports