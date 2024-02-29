import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { apiRequests } from '../../../Common/apiRequests';
import { setToken } from '../../../Redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

import './Program.scss';

function Program(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const response = props.response;
  const [show, setShow] = useState(props.showProgram);
  const [selectedProgram, setSelectedProgram] = useState();

  const handleClose = () => setShow(false);

  const handleLogin = async () => {

    const endPoint = `organization/${response.data.user.organization_id}/program/${selectedProgram}/login`;
    const userData = {
      role: 'participant'
    }
    await apiRequests(endPoint, 'post', JSON.stringify(userData))
    .then((res) => {
      dispatch(setToken(response));
      navigate('/user/dashboard');
    }).catch((err) => {
      console.log(err);
    }) 
  }

  return (
    <>
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered className="users-modal"
    >
      <Modal.Header closeButton className="d-flex flex-column-reverse pb-0">
        <Modal.Title>Login to Program</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select aria-label="Default select example" onChange={e => { setSelectedProgram(e.target.value); }}>
          <option>Open this select menu</option>
          {response.data.domain.programs.map((program, index) => (
            <option value={program.id} key={index}>{program.name}</option>
          ))}
        </Form.Select>
        <Button className="w-100" variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default Program;