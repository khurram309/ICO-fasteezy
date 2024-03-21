import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function CartClear(props) {
  const cart = useSelector((state) => state.auth.authCart);

  return (
    <>
    {props.showDiv && (<div
      style={{width: '400px', height: '400px', backgroundColor: '#fff', position: 'absolute', top: '60px', right: '10px', zIndex: 999}}>
      {cart.items.map((item, index) => (
        <Row className="cart-item mb-3">
          <Col md={4} className="flex-column">
            <div>
              <strong>{item.merchant_name}</strong>
            </div>
            {/* <span>{giftCode}</span> */}
          </Col>
          <Col md={2}>
            <span>{`x ${item.qty}`}</span>
          </Col>
          <Col md={4}>
            <span>
              {/* {redemptionPoints} */}
              {/* {t("points")} */}
            </span>
          </Col>
          <Col md={2}>
            <span
              // onClick={() => onClickRemoveItem(index, program.factor_valuation)}
              style={{ color: "red", fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
            >
              X
            </span>
          </Col>
        </Row>
      ))}
    </div>
    )}
    </>
  )
}

export default CartClear