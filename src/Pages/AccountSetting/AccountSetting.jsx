import React from 'react'
import './AccountSetting.scss'
import { Button, Form } from 'react-bootstrap'
import User from '../../assets/images/person.svg'
import Trash from '../../assets/images/trash.svg'
import { Link } from 'react-router-dom'

function AccountSetting() {
  return (
    <div className="account-wrapper p-4">
      <div className="upper-account-wrapper">
        <h4>Account Settings</h4>
        <p className='fw-300'>Manage your account settings</p>
        <div className="d-flex w-50 gap-3 flex-column flex-sm-row">
          <Button variant='primary'>Subscription</Button>
          <Button variant='primary'>Invite Account Manager</Button>
        </div>
      </div>
      <div className="lower-account-wrapper my-4 d-flex justify-content-between">
        <div className="account-basic card-shadow p-4">
          <div className="avtar-wrapper">
            <div className="trash">
              <Link>
                <img src={ Trash } alt="Trash" />
              </Link>
            </div>
            <img src={ User } alt="Avatar" />
          </div>

          <div className="person-info mt-4">
            <h4>My Profile</h4>
            <Form>
              <div className='d-flex flex-column gap-3'>
                <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="accountName">
                  <Form.Label className='fs-small-xs'>account Name</Form.Label>
                  <Form.Control type="text" name="accountName" placeholder="Choose Your Username" required/>
                </Form.Group>

                <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="firstName">
                  <Form.Label className='fs-small-xs'>first name</Form.Label>
                  <Form.Control type="text" name="firstName" placeholder="Your First Name" required/>
                </Form.Group>
                
                <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="lastName">
                  <Form.Label className='fs-small-xs'>last name</Form.Label>
                  <Form.Control type="text" name="lastName" placeholder="Your Last Name" required/>
                </Form.Group>
                
                <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="email">
                  <Form.Label className='fs-small-xs'>Email</Form.Label>
                  <Form.Control type="text" name="email" placeholder="abc@emaple.com" required/>
                </Form.Group>
              </div>
            </Form>
          </div>

        </div>
        <div className="account-security">
          <div className="security">
            <h4>Security</h4>
            <div className='card-shadow p-4'>
              <Form>
                <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="password">
                  <Form.Label className='fs-small-xs'>password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                
                <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="confirmPassword">
                  <Form.Label className='fs-small-xs'>confirm password</Form.Label>
                  <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" required/>
                </Form.Group>
              </Form>
            </div>
          </div>

          <div className="payment-method my-3">
            <h4>Payment Method</h4>
            <div className='card-shadow p-4'>
              <Form>
                <div className='d-flex gap-3'>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="cardNumber">
                    <Form.Label className='fs-small-xs'>Card Number</Form.Label>
                    <Form.Control type="number" name="cardNumber" required/>
                  </Form.Group>
                  <Form.Group className="mb-3 w-25 text-uppercase fs-small" controlId="expDate">
                    <Form.Label className='fs-small-xs'>EXP date</Form.Label>
                    <Form.Control type="number" name="expDate" placeholder="Expiry Date" required/>
                  </Form.Group>
                </div>
                <div className='d-flex gap-3'>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="cardName">
                    <Form.Label className='fs-small-xs'>name on card</Form.Label>
                    <Form.Control type="text" name="cardName" required/>
                  </Form.Group>
                  <Form.Group className="mb-3 w-25 text-uppercase fs-small" controlId="cvv">
                    <Form.Label className='fs-small-xs'>cvv</Form.Label>
                    <Form.Control type="number" name="cvv" placeholder="CVV" required/>
                  </Form.Group>
                </div>
              </Form>
            </div>
          </div>

          <div className="billing-info">
            <h4>Billing Information</h4>
            <div className="card-shadow p-4">
              <Form>
                <div className='d-flex gap-3 align-items-end'>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="address">
                    <Form.Label className='fs-small-xs'>address</Form.Label>
                    <Form.Control type="text" name="address" placeholder='555 Candy Cane Lane' required/>
                  </Form.Group>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="cvv">
                    {/* <Form.Label className='fs-small-xs'>cvv</Form.Label> */}
                    <Form.Control type="text" name="address" placeholder="Street Address Line 2" required/>
                  </Form.Group>
                </div>

                <div className='address-wrapper d-flex gap-1 gap-sm-2 align-items-end'>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="city">
                    <Form.Label className='fs-small-xs'>city</Form.Label>
                    <Form.Control type="text" name="city" placeholder='Pittsburgh' required/>
                  </Form.Group>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="country">
                    <Form.Label className='fs-small-xs'>country</Form.Label>
                    <Form.Control type="text" name="country" placeholder="United States of America" required/>
                  </Form.Group>
                  <div className='d-flex gap-1 gap-sm-2 flex-row flex-sm-column'>
                    <Form.Group className="mb-3 w-50 text-uppercase fs-small" controlId="state">
                      <Form.Label className='fs-small-xs'>state</Form.Label>
                      <Form.Control type="text" name="state" placeholder="PA" required/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 text-uppercase fs-small" controlId="zipCode">
                      <Form.Label className='fs-small-xs'>zip code</Form.Label>
                      <Form.Control type="number" name="zipCode" placeholder="12345" required/>
                    </Form.Group>

                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="btn-wrapper my-3">
            <Button variant='primary' className='w-100'>Save Settings</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSetting