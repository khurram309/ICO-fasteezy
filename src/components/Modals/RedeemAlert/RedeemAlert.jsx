import React, { useEffect, useState } from 'react';
import { Button, Col, FigureCaption, Modal, ModalBody, ModalHeader, Row } from "react-bootstrap";
import Select from "react-select";
import './RedeemAlert.scss';

import Amazon from '../../../assets/images/amazon.png';
import { apiRequests } from '../../../Common/apiRequests';
import { useSelector } from 'react-redux';

function RedeemAlert(props) {
  const authState = useSelector(state => state.auth);
  const LOGO_PUBLIC_URL = import.meta.env.VITE_REACT_APP_API_STORAGE_URL;
  const [merchant, setMerchant] = useState(props.merchant);
  const [show, setShow] = useState(props.showRedeem);
  const [giftCodes, setGiftCodes] = useState([]);
  const [selectedGiftcode, setSelectedGiftcode] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    // setShowRegister(false);
  };

  useEffect(() => {
    if(show) {
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
          setGiftCodes(giftcodeOptions);
        }).catch((err) => {
          console.log(err);
        });
      }
      getOptions();
    }
  }, [show])

  const makeOption = (i, giftcode, factor_valuation) => {
    let dollarValue = parseFloat(giftcode.sku_value, 3).toFixed(2);
    let pointsValue = giftcode.redemption_value * factor_valuation;
    let label = `$${dollarValue} Gift Code = ${pointsValue}`;
    label += ' points';
  
    return {
      label: label,
      value: i++,
    };
  };

  const onChangeGiftcode = (value) => {
    setSelectedGiftcode(value);
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
                  <Select options={giftCodes} clearable={false} className="react-select" placeholder={" Select Gift Codes with Points "} classNamePrefix="react-select" value={selectedGiftcode} onChange={onChangeGiftcode} />
                  <Button variant='primary'>Add to Cart</Button>
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