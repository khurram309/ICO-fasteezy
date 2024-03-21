import React  from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Table, Button } from 'react-bootstrap';
import './ViewCart.scss'
import { useNavigate } from 'react-router-dom';

function ViewCart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.auth.authCart);
  const program = useSelector((state) => state.auth.program);
  const balance = useSelector((state) => state.auth.authPoints);

  return (
    <>
      <Row className='m-0 p-4'>
        <h4>Cart</h4>
        <Col>
          <Table 
            className='cartTable ff-primary'
            striped
            >
              <thead>
                <tr className='tableHeader'>
                  <th>
                    <h6 className='p-0 m-0 my-1'>Merchant</h6>
                  </th>
                  <th></th>
                  <th>
                    <h6 className='p-0 m-0 my-1'>Gift Code Value</h6>
                  </th>
                  <th>
                    <h6 className='p-0 m-0 my-1'>Quantity</h6>
                  </th>
                  <th>
                    <h6 className='p-0 m-0 my-1'>Unit Price</h6>
                  </th>
                  <th>
                    <h6 className='p-0 m-0 my-1'>Total</h6>
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
                <tr>
                  <td colSpan={4}></td>
                  <td>Total:</td>
                  <td>{cart.total_points} Points</td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td>Balance After Purchase: :</td>
                  <td>{balance.points - cart.total_points} Points</td>
                </tr>
              </tbody>
          </Table>
        <Button onClick={() => navigate("/user/checkout")}>Checkout</Button>
        </Col>
      </Row>
    </>
  )
}

export default ViewCart