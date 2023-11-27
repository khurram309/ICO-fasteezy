import React from 'react';

import "./Questions.scss";

function Questions() {
  return (
    <div className="questions">
      <div className="container-lg">
        <h2 className="text-center">Frequently Asked <span>Questions</span></h2>
        <h5 className='text-center'>Got questions about UVO? Check out our FAQs below for answers to common queries. If you don't find what you're looking for, feel free to reach out to our support team.</h5>
      </div>
      <div className="questions-grid mt-5">
        <div>
          <select className="form-select" name="" id="">
            <option defaultValue={`How does UVO provide medical answers?`}>How does UVO provide medical answers?</option>
            <option value="">USA</option>
            <option value="">Istanbul</option>
            <option value="">Jakarta</option>
          </select>
        </div>
        <div>
          <select className="form-select" name="" id="">
            <option defaultValue={`How does UVO provide medical answers?`}>Is UVO a substitute for a doctor's advice?</option>
            <option value="">USA</option>
            <option value="">Istanbul</option>
            <option value="">Jakarta</option>
          </select>
        </div>
        <div>
          <select className="form-select" name="" id="">
            <option defaultValue={`How does UVO provide medical answers?`}>Is my personal data safe with UVO?</option>
            <option value="">USA</option>
            <option value="">Istanbul</option>
            <option value="">Jakarta</option>
          </select>
        </div>
        <div>
          <select className="form-select" name="" id="">
            <option defaultValue={`How does UVO provide medical answers?`}>Can UVO diagnose medical conditions?</option>
            <option value="">USA</option>
            <option value="">Istanbul</option>
            <option value="">Jakarta</option>
          </select>
        </div>
        <div>
          <select className="form-select" name="" id="">
            <option defaultValue={`How does UVO provide medical answers?`}>How can I ask a question to UVO?</option>
            <option value="">USA</option>
            <option value="">Istanbul</option>
            <option value="">Jakarta</option>
          </select>
        </div>
        <div>
          <select className="form-select" name="" id="">
            <option defaultValue={`How does UVO provide medical answers?`}>Is UVO available 24/7?</option>
            <option value="">USA</option>
            <option value="">Istanbul</option>
            <option value="">Jakarta</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Questions;
