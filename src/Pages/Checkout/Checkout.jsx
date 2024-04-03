import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import './checkout.scss'
import { apiRequests } from '../../Common/apiRequests';
import { useNavigate } from 'react-router-dom';
import { setAuthCart } from '../../Redux/actions/authActions';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.authCart);
  const program = useSelector((state) => state.auth.program);
  const balance = useSelector((state) => state.auth.authPoints);
  const orgranization = useSelector((state) => state.auth.user);

  const confirmOrder = async () => {
    const endPoint = `organization/${orgranization.organization_id}/program/${program.id}/checkout`;
    await apiRequests(endPoint, 'post', cart)
      .then((response) => {
        if(response.data.success) {
          dispatch(setAuthCart(null));
          navigate("/user/redeem");
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Row className='m-0 p-4'>
        <h4>Checkout: Confirm Your Order</h4>
        <p>Clicking 'Confirm My Order' will confirm this redemption and <strong>200 Points</strong> will be deducted from your rewards account.</p>
        <p className='text-center fc-alert fw-500'>Once your order has been placed, it cannot be exchanged or cancelled.</p>
        <p className='m-0'>You will receive an immediate confirmation of your order, with instructions on how you can acquire and redeem your gift code.</p>
        <Col>
        <Table 
          className='checkoutTable ff-primary'
          >
            <thead className='bg-orange2'>
              <tr className='tableHeader'>
                <th></th>
                <th>
                  <h6 className='p-0 m-0 my-1 fc-white'>Merchant</h6>
                </th>
                <th>
                  <h6 className='p-0 m-0 my-1 fc-white'>Gift Code Value</h6>
                </th>
                <th>
                  <h6 className='p-0 m-0 my-1 fc-white'>Quantity</h6>
                </th>
                <th>
                  <h6 className='p-0 m-0 my-1 fc-white'>Unit Price</h6>
                </th>
                <th>
                  <h6 className='p-0 m-0 my-1 fc-white'>Total</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item, index) => (
              <tr key={index}>
                <td></td>
                <td>{item.merchant_name}</td>
                <td>{`$${parseFloat(item.redemption_value, 3).toFixed(2)} Gift Code`}</td>
                <td>{item.qty}</td>
                <td>{item.redemption_value * program.factor_valuation * item.qty} Points</td>
                <td>{cart.total_points} Points</td>
              </tr>
                ))}
            </tbody>
          </Table>
            <div className='w-100'>
              <div className='d-flex w-100 p-3 justify-content-end'>
                <div className="d-flex w-35 pe-5">
                  <div className='w-75 text-start'>
                    <p className='m-0'>Total:</p>
                  </div>
                  <div className='w-25'>
                    <p className='m-0'>{cart.total_points} Points</p>
                  </div>
                </div>
              </div>
              <div className='d-flex w-100 p-3 justify-content-end'>
                <div className='d-flex w-35 pe-5'>
                  <div className='w-75 text-start'>
                    <span>
                      <p className='m-0'>Balance After</p>
                      <p>Purchase:</p>
                    </span>
                  </div>
                  <div className='w-25'>
                    <p className='m-0'>{balance.points - cart.total_points} Points</p>
                  </div>
                </div>
              </div>
            </div>
        </Col>
      </Row>
        <div className="d-flex px-4 justify-content-end">
          <Button onClick={confirmOrder}>Confirm My Order</Button>
        </div>
    </>
  )
}

export default Checkout