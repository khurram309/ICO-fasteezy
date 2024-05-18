import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequests } from '../../Common/apiRequests';
import { setAccountBalance, setAuthPoints } from '../../Redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

function AccountBalance() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const getBalance = async () => {
      const endPoint = `organization/${authState.user.organization_id}/program/${authState.program.id}/balance`;
      apiRequests(endPoint, 'get')
      .then((response) => {
        setBalance(response.data);
        dispatch(setAccountBalance(response.data));
      }).catch((err) => {
        console.log(err);
      });
    }
    getBalance();
  }, [])

  useEffect(() => {
    const getPointBalance = async () => {
      const endPoint = `organization/${authState.user.organization_id}/program/${authState.program.id}/user/${authState.user.id}/balance`;
      await apiRequests(endPoint, 'get')
      .then((response) => {
        dispatch(setAuthPoints(response.data));
      }).catch((err) => {
        console.log(err);
      });
    }
    getPointBalance();
  }, [])


  return (
    <>
    <Row>
      <Col xs={12} xl={6} lg={7} className='mx-auto'>
        <h3>Account Balance</h3>
        <div className='bg-pill card-shadow p-3 m-auto'>
          <div className='d-flex align-items-center gap-4 justify-content-center'>
            <h3 className='m-0'>$<span>{balance?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span></h3>
            <Button variant='primary' onClick={() => navigate('/user/funds')}>Add Funds</Button>
          </div>
        </div>
      </Col>
    </Row>
    </>
  )
}

export default AccountBalance;