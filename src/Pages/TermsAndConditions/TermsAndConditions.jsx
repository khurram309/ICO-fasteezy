import React from 'react';
import { Container } from 'react-bootstrap';

function TermsAndConditions() {
  return (
    <Container fluid="lg" className='policy-pages'>
      <h4 className='mt-5 mb-4'>Terms of Service for UVO AI - AI Doctor Advice Application</h4>

    <ol>
      <li>
        Introduction
        <div>
          Welcome to UVO AI, your virtual health assistant. By using UVO AI, you agree to comply with and be bound by the following terms and conditions
        </div>
      </li>
      <li>
        Use of UVO AI
        <ol>
          <li>
            UVO AI is an AI-powered application designed to provide general health advice based on the information provided by users. It is not a substitute for professional medical advice, diagnosis, or treatment.
          </li>
          <li>
            Users should not disregard professional medical advice or delay seeking it based on information received from UVO AI.
          </li>
        </ol>
      </li>
      <li>
          User Eligibility
        <div>
          By using UVO AI, you affirm that you are at least 18 years old or have obtained parental consent.
        </div>
      </li>
      <li>
        Medical Disclaimer
        <ol>
          <li>
            UVO AI is not a licensed medical professional. The advice provided is based on algorithms and user-provided information and should not be considered as a substitute for professional medical judgment.
          </li>
          <li>
            Users are advised to consult with a qualified healthcare professional for accurate diagnosis and treatment.
          </li>
        </ol>
      </li>
      <li>
        User Information
        <div>
          Users are responsible for providing accurate and up-to-date information for the AI to generate relevant advice. UVO AI is not liable for any consequences resulting from inaccurate or incomplete user-provided data.
        </div>
      </li>
      <li>
        Limitation of Liability
        <ol>
          <li>
            UVO AI and its creators shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use or inability to use the application.
          </li>
          <li>
            UVO AI does not guarantee the accuracy, completeness, or usefulness of the information provided.
          </li>
        </ol>
      </li>
      <li>
        Privacy
        <div>
          UVO AI is committed to protecting user privacy. Please refer to our Privacy Policy for details on how user data is collected, used, and protected.
        </div>
      </li>
      <li>
        Changes to Terms
        <div>
          UVO AI reserves the right to modify these terms at any time. Users will be notified of any changes, and continued use of the application implies acceptance of the modified terms.
        </div>
      </li>
      <li>
        Governing Law
        <div>
          These terms are governed by and construed in accordance with the laws of USA
        </div>
      </li>
      <li>
        Contact Information
        <div>
          For questions or concerns regarding these terms, please contact <a href="mailto:admin@uvohealth.com">admin@uvohealth.com</a>.
        </div>
      </li>
    </ol>
    </Container>
  )
}

export default TermsAndConditions;
