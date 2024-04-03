import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ParticipantCurrentPoints(participant, program) {

  return (
    <>
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>Total Points Rewarded:</td>
          <td>{participant?.totalPointsRewarded ? participant.totalPointsRewarded * program.factor_valuation : 0} </td>
        </tr>
        <tr>
          <td><strong>Current Points Balance:</strong></td>
          <td><strong>{participant?.pointBalance ? participant?.pointBalance * program.factor_valuation : 0 }</strong></td>
        </tr>
        {/* <tr>
          <td><strong>Current Peer Points Balance:</strong></td>
          <td><strong>{participant?.peerBalance ? participant?.peerBalance * program.factor_valuation : 0}</strong></td>
        </tr> */}
      </tbody>
    </Table>
    </>
  )
}

export default ParticipantCurrentPoints