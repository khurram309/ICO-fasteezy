import React from 'react';
import { Container } from 'react-bootstrap';

function PrivacyPolicy() {
  return (
    <Container fluid="lg" className='policy-pages'>
      <h4 className='mt-5 mb-4'>Privacy Policy for UVO AI - AI Doctor Advice Application</h4>

    <ol>
      <li>
        Introduction
        <div>
          Welcome to UVO AI. This Privacy Policy outlines how UVO AI collects, uses, and protects the information provided by users of our AI doctor advice application.
        </div>
      </li>
      <li>
        Information We Collect
        <ol>
          <li>
            Personal Information: UVO AI may collect personal information, such as name, age, and contact details, to provide personalized health advice.
          </li>
          <li>
            Health Information: Users may voluntarily provide health-related information for the AI to generate accurate advice. It is important to note that UVO AI does not store personal health information (PHI). All health-related data is processed in real-time and is not retained in our systems.
          </li>
          <li>
            Usage Data: We may collect non-personal information related to the use of UVO AI, such as device information, IP addresses, and user interactions within the application.
          </li>
        </ol>
      </li>
      <li>
        Use of Information
        <ol>
          <li>
            Health Advice: Personal and health information is used to provide tailored health advice through the UVO AI application. However, it is emphasized that UVO AI does not store PHI.
          </li>
          <li>
            Improvement of Services: Non-personal information is used to analyze user interactions, improve the application's functionality, and enhance user experience.
          </li>
        </ol>
      </li>
      <li>
        Data Security
        <div>
          UVO AI is committed to maintaining the security of user information. We employ industry-standard security measures to protect against unauthorized access, disclosure, or alteration of personal information.
        </div>
      </li>
      <li>
        HIPAA Compliance
        <div>
          UVO AI is designed to be HIPAA-compliant, particularly with respect to the handling of personal health information. It is important to note that UVO AI does not store PHI. All health-related data is processed in real-time, and no personal health information is stored on our servers.
        </div>
      </li>
      <li>
        Third-Party Services
        <div>
          UVO AI may use third-party services to enhance functionality. These services may have their own privacy policies, and users are encouraged to review them.
        </div>
      </li>
      <li>
        User Control and Access
        <div>
          Users have the right to access, modify, or delete their personal information stored by UVO AI. Requests can be submitted through <a href="mailto:admin@uvohealth.com">admin@uvohealth.com</a>.
        </div>
      </li>
      <li>
        Changes to Privacy Policy
        <div>
          UVO AI reserves the right to modify this Privacy Policy at any time. Users will be notified of changes, and continued use of the application implies acceptance of the modified policy.
        </div>
      </li>
      <li>
        Contact Information
        <div>
          For questions or concerns regarding this Privacy Policy, please contact <a href="mailto:admin@uvohealth.com">admin@uvohealth.com</a>.
        </div>
      </li>
      <li>
        Governing Law
        <div>
          This Privacy Policy is governed by and construed in accordance with the laws of the United States.
        </div>
      </li>
    </ol>
    </Container>
  )
}

export default PrivacyPolicy;
