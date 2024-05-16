import Notiflix from 'notiflix';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../Header/Header.scss';
function CartClear(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.auth.authCart);
  const program = useSelector((state) => state.auth.program);

  const viewCart = () => {
    console.log(cart);
    if(cart == null) {
      Notiflix.Notify.failure('Please add items to cart')
    } else {
      navigate('/user/view-cart')
    }
  }

  return (
    <>
      {props.showDiv && (<div className='cartClear'>
        <button type="button" class="btn-close" aria-label="Close" onClick={() => props.setShowDiv(false)}></button>
        {cart && cart.items.map((item, index) => (
          <Row className="cart-item mb-3 mx-0" key={index}>
            <Col md={4} className="flex-column ps-0">
              <div>
                <p className='merchantName'>{item.merchant_name}</p>
                <p>{`$${parseFloat(item.redemption_value, 3).toFixed(2)} Gift Code`}</p>
              </div>
              {/* <span>{giftCode}</span> */} 
            </Col>
            <Col md={2}>
              <span>{`x ${item.qty}`}</span>
            </Col>
            <Col md={4}>
              <span>
                {item.redemption_value * program.factor_valuation * item.qty}
                {/* {redemptionPoints} */}
                {` Points`}
              </span>
            </Col>
            <Col md={2} className='pe-0'>
              <span className='xMark'
                // onClick={() => onClickRemoveItem(index, program.factor_valuation)}
              >
                X
              </span>
            </Col>
          </Row>
        ))}
        <Row className='m-0 text-end'>
          <Col md={4}>
            <h4>Total:</h4>
          </Col>
          <Col>
            <p>{cart && cart.total_points} Points</p>
          </Col>
        </Row>
        <Row className='m-0'>
          <Col>
            <Button onClick={viewCart}>View Cart</Button>
          </Col>
          <Col>
            <Button onClick={() => navigate('user/checkout')}>Checkout</Button>
          </Col>
        </Row>
      </div>
      )}
    </>
  )
}

export default CartClear