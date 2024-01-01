import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { Dropdown, Table } from 'react-bootstrap';
import dot from '../../../assets/images/dot-icon.svg';
import visa from '../../../assets/images/visa-card.svg';
import master from '../../../assets/images/master-card.svg';
import paypal from '../../../assets/images/paypal-card.svg';
import applepay from '../../../assets/images/applepay-card.svg';
import down from '../../../assets/images/down-icon.svg';
import { apiRequests } from '../../../Common/apiRequests';
import './Billing.scss';
import AddPaymentMethod from '../../../components/Modals/AddPaymentMethod/AddPaymentMethod';

function Billing() {
  const [invoices, setInvoices] = useState([]);
  const [paymentMethods, setpaymentMethods] = useState([]);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  useEffect(() => {
    listInvoices();
    listPaymentMethods();
  }, [])

  const listInvoices = async () => {
    const endPoint = `user/invoices`;
    const response = await apiRequests(endPoint, 'get');
    try {
      if (response.status === 200) {
        setInvoices(response.data.data);
      }
    } catch (err) {
      Notiflix.Notify.failure(err.response.data.status.message)
    }
  }

  const listPaymentMethods = async () => {
    const endPoint = `user/payment_methods`;
    const response = await apiRequests(endPoint, 'get');
    try {
      if (response.status === 200) {
        setpaymentMethods(response.data.data);
      }
    } catch (err) {
      Notiflix.Notify.failure(err.response.data.status.message)
    }
  }

  const addPaymentMethod = async () => {
    setShowPaymentMethod(true);
    // const endPoint = `user/payment_methods`;
    // const response = await apiRequests(endPoint, 'post');
    // try {
    //   if (response.status === 200) {
    //     Notiflix.Notify.success(response.data.status.message);
    //     listPaymentMethods();
    //   }
    // } catch (err) {
    //   Notiflix.Notify.failure(err.response.data.status.message)
    // }
  }

  return (
    <>
    <div className="custom-container">
      <div className="billing-page settings">
        <div className="outer">
          <div className="billing-heading d-flex justify-content-between align-items-center">
            <div className="fw-semibold">Payment Methods</div>
            {/* <div className="dot-dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="dot" id="dropdown-basic">
                  <img src={dot} alt="dot" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={addPaymentMethod}>Add Payment Method</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
          </div>

          { paymentMethods.length > 0 ? paymentMethods.map((method, index) => (
            <div className="cards-bar" key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-content-center">
                  <div>
                    {method.attributes.brand === 'visa' && <img src={visa} alt="Visa" className="me-2" />}
                    {method.attributes.brand === 'mastercard' && <img src={master} alt="Master" className="me-2" />}
                    {method.attributes.brand === 'paypal' && <img src={paypal} alt="Paypal" className="me-2" />}
                    {method.attributes.brand === 'applepay' && <img src={applepay} alt="Apple Pay" className="me-2" />}
                  </div>
                  <div className="d-flex flex-column ps-1">
                    <div className="fw-small fw-semibold">{method.attributes.brand} ending in {method.attributes.last_digits}</div>
                    <div className="fw-small-xs gray85">Expire {method.attributes.expiry}</div>
                  </div>
                </div>
                <div className="available status d-flex align-items-center fw-small fw-semibold">
                  <span></span>available
                </div>
              </div>
            </div>
          ))
          : 'No Payment Method Found' }
        </div>

        <div className="billing-outer overflow-hidden ">
          <div className="billing-heading d-flex justify-content-between align-items-center">
            <div className="fw-semibold">Invoices</div>
          </div>
          <Table responsive className="text-nowrap">
            <thead>
              <tr role='row'>
                <th>Invoice ID</th>
                <th>Date <img src={down} alt="down" /></th>
                <th>Amount <img src={down} alt="down" /></th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody role='rowgroup'>
              {invoices.length > 0 ? invoices.map((invoice, index) => (
                <tr role='row' key={index}>
                  <td>{invoice.attributes.stripe_invoice_id}</td>
                  <td>{invoice.attributes.created}</td>
                  <td>${invoice.attributes.total}</td>
                  <td>
                    {invoice.attributes.status === 'paid' && <div className="available status d-inline-flex align-items-center fw-small fw-semibold">
                      <span></span>Paid
                    </div>}
                    {invoice.attributes.status === 'pending' && <div className="pending status d-inline-flex align-items-center fw-small fw-semibold">
                    <span></span>Pending
                  </div>}
                  </td>
                </tr>
              )) : 'No Invoices Found.'}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    {showPaymentMethod && <AddPaymentMethod showModal={showPaymentMethod} />}
    </>
  )
}

export default Billing;
