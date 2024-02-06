import React, { useState } from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";

import RewardNewUser from "./RewardNewUser/RewardNewUser";
import RewardExistingUser from "./RewardExistingUser/RewardExistingUser";
import './Rewards.scss'

function Rewards() {
  const [showRewardNewUser, setShowRewardNewUser] = useState(true);
  const [showRewardExistingUser, setShowRewardExistingUser] = useState(false);

  const rewardList = [
    {description: 'select monetary/points or custom reward from the dropdown menu.', key: 0},
    {description: 'click the button to choose an existing user or reward a new recipient by entering their name and email address on the form.', key: 1},
    {description: 'To give a monetary reward, type in the dollar amount of the reward and the platform will convert the dollar amount to points. The recipient can INSTANTLY redeem their points for gift codes for food, clothing, services, travel and more.', key: 2},
    {description: 'When giving a custom reward, be sure to add as many details as possible about the offer as well as any restrictions or expiration information.', key: 3}
  ];

  return (
    <>
      <div className="reward-wrapper p-2 p-sm-4">
        <Row>
          <Col xs={12} md={4}>
            <h4>Reward User</h4>
            <p>Giving a reward is simpler than ever and we have 2 ways to do it! Create a custom ”non-monetary” offer of your own for both customers and employees OR give reward points redeemable for gift codes at the nation’s leading merchants.</p>
            <div className="btns-wrapper d-flex gap-3">
              <Button variant="light" className={`fw-500 ${showRewardNewUser && 'active'}`} onClick={() => {setShowRewardNewUser(true); setShowRewardExistingUser(false);}}>Reward New User</Button>
              <Button variant="light" className={`fw-500 ${showRewardExistingUser && 'active'}`} onClick={() => {setShowRewardExistingUser(true); setShowRewardNewUser(false);}}>Reward Existing User</Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Accordion className="my-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>
                    Give a Reward Now!
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="text-uppercase fs-small fw-500 list-unstyled">
                    {rewardList.map((reward, index) => {
                      return (
                        <li className="mb-2" key={reward.key}>
                          <span>{ index+1 }</span>{ reward.description }
                        </li>
                        );
                      })}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {showRewardExistingUser && <RewardExistingUser />}
            { showRewardNewUser && <RewardNewUser />}
          </Col>
        </Row>


      </div>
    </>
  )
}

export default Rewards;