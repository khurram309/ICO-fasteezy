import React, { useEffect, useState } from 'react';
import { Button, Col, FigureCaption, Modal, ModalBody, ModalHeader, Row } from "react-bootstrap";
import Select from "react-select";
import './RedeemAlert.scss';

import Amazon from '../../../assets/images/amazon.png';
import { apiRequests } from '../../../Common/apiRequests';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { getAuthCart, updateAuthCart } from '../../../Common/auth';
import { setAuthCart } from '../../../Redux/actions/authActions';

function RedeemAlert(props) {
  const authState = useSelector(state => state.auth);
  const pointBalance = useSelector(state => state.auth.authPoints);
  const LOGO_PUBLIC_URL = import.meta.env.VITE_REACT_APP_API_STORAGE_URL;
  const dispatch = useDispatch();
  const [merchant, setMerchant] = useState(props.merchant);
  const [show, setShow] = useState(props.showRedeem);
  const [giftCodes, setGiftCodes] = useState([]);
  const [giftCodesOptions, setGiftCodesOptions] = useState([]);
  const [selectedGiftcode, setSelectedGiftcode] = useState(null);

  const handleClose = () => {setGiftCodes([]); setSelectedGiftcode(null); setShow(false);}
  const handleShow = () => {getOptions(); setShow(true);}

  const getOptions = async () => {
    const endPoint = `organization/${authState.user.organization_id}/program/${authState.program.id}/merchant/${merchant.id}/redeemable`;
    await apiRequests(endPoint, 'get')
    .then((response) => {
      let giftcodeOptions = [];
      if (response.data.length > 0) {
        giftcodeOptions = response.data.map((gc, i) => {
          return makeOption(i, gc, authState.program.factor_valuation);
        });
      }
      setGiftCodes(response.data);
      setGiftCodesOptions(giftcodeOptions);
    }).catch((err) => {
      console.log(err);
    });
  }

  const makeOption = (i, giftcode, factor_valuation) => {
    let dollarValue = parseFloat(giftcode.sku_value, 3).toFixed(2);
    let pointsValue = giftcode.redemption_value * factor_valuation;
    let label = `$${dollarValue} Gift Code = ${pointsValue}`;
    label += ' points';
    return { label: label, value: i++};
  };

  const onChangeGiftcode = (value) => {
    setSelectedGiftcode(value);
  };

  const onClickAddToCart = () => {
    const selectedIndex = selectedGiftcode.value;
    const item = giftCodes[selectedIndex];
    item.merchant_name = merchant.name;
    item.merchant_icon = merchant.icon;
    let redemption_points = item.redemption_value * authState.program.factor_valuation;
    if ( pointBalance?.pointBalance < redemption_points ) {
      Notiflix.Notify.failure('You do not have sufficient balance to redeem');
      return;
    }
    addToCart(item);
  };
  const addToCart = (itemcart) => {
    let datacart = getAuthCart();
    let addPoints = 0;
    let $addTotal = 0;
    let addNew = true;
    let redemption_points = itemcart.redemption_value * authState.program.factor_valuation;
    if (datacart) {
      if (datacart.total_points + redemption_points > pointBalance.points) {
        Notiflix.Notify.failure('You do not have sufficient balance to add this giftcode');
        return;
      }
      if (datacart.items.length > 0) {
        for (let i in datacart.items) {
          let item = datacart.items[i];
          if (item.merchant_id === itemcart.merchant_id && item.sku_value === itemcart.sku_value && item.redemption_value === itemcart.redemption_value) {
            item.qty += 1;
            addPoints = parseInt(item.redemption_value * authState.program.factor_valuation);
            $addTotal = parseFloat(item.redemption_value);
            addNew = false;
          }
        }
      }
    } else {
      datacart = {
        items: [],
        total_dollar: 0,
        total_points: 0,
      };
    }
    if (addNew) {
      addPoints = parseInt(itemcart.redemption_value * authState.program.factor_valuation);
      $addTotal = parseFloat(itemcart.redemption_value);
      itemcart.qty = 1;
      datacart.items.push(itemcart);
    }
    datacart.total_points += addPoints;
    datacart.total_dollar += $addTotal;
    if (updateAuthCart(datacart)) {
      Notiflix.Notify.success('Added to cart');
      dispatch(setAuthCart(datacart));
      handleClose();
    }
  };

  return (
    <>
      {!props.showRedeem && <Button onClick={handleShow} variant='outlined'>Redeem</Button>}

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered 
      size='lg'
      className="users-modal blue-modal"
      >
        <ModalHeader 
          closeButton
          className='border-0'
        >
        </ModalHeader>
        <ModalBody className='text-center'>
          <div className="cardshadow">
            <Row className='bg-white mx-2 px-3 mb-5 text-center modal-inner py-3'>
              <Col md={4}>
                <img src={ `${LOGO_PUBLIC_URL}/${merchant.logo}` } alt="logo" height={130} />
                <FigureCaption>{`${merchant.website}`}</FigureCaption>
              </Col>
              <Col md={8} className='fc-darkPrimary'>
                <h4>{merchant.name}</h4>
                <p dangerouslySetInnerHTML={{ __html: merchant.description }}></p>
                <div className="d-flex justify-content-center gap-3">
                  <Select options={giftCodesOptions} clearable={false} className="react-select" placeholder={" Select Gift Codes with Points "} classNamePrefix="react-select" value={selectedGiftcode} onChange={onChangeGiftcode} />
                  <Button variant='primary' onClick={() => onClickAddToCart()}>Add to Cart</Button>
                </div>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default RedeemAlert