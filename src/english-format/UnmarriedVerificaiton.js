import React, { useState } from 'react';
import './UnmarriedVerification.css'; // The CSS file for styling

const UnmarriedVerification = () => {
  const [formData, setFormData] = useState({
    letterNo: '2082/83',
    refNo: '',
    date: '2025-10-31',
    applicantTitle: 'Mr.',
    applicantNameBody: '',
    relation: 'son',
    fatherTitle: 'Mr.',
    fatherName: '',
    motherTitle: 'Mrs.',
    motherName: '',
    docType: 'Citizenship',
    docNo: '',
    residencyType: 'permanent',
    municipality: 'Nagarjun Municipality',
    wardNo1: '1',
    district1: 'Kathmandu',
    country1: 'Nepal',
    prevDesignation: '',
    prevWardNo: '',
    prevDistrict: '',
    pronoun: 'he',
    asOfDate: '2025-10-31',
    designation: '',
    applicantName: '',
    applicantAddress: '',
    applicantCitizenship: '',
    applicantPhone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Unmarried Verification Form Data:', formData);
    alert('Form submitted! Check the console for the data.');
  };

  return (
    <div className="unmarried-container">
      <form onSubmit={handleSubmit}>
        <div className="header">
          {/* Replace with your logo path */}
          <img src="https://i.imgur.com/YOUR_LOGO_URL.png" alt="Nagarjun Municipality Logo" className="logo" />
          <h1>Nagarjun Municipality</h1>
          <h2>1 No. Ward Office</h2>
          <h3>Kathmandu, Kathmandu</h3>
          <h3>Bagmati Province, Nepal</h3>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Letter No.:</label>
            <input
              type="text"
              name="letterNo"
              value={formData.letterNo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Ref No.:</label>
            <input
              type="text"
              name="refNo"
              value={formData.refNo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="subject-line">
          <strong>Subject: <u>Unmarried Verification</u></strong>
          <br />
          <strong><u>To Whom It May Concern</u></strong>
        </div>

        <p className="certificate-body">
          This is to certify that
          <select name="applicantTitle" value={formData.applicantTitle} onChange={handleChange}>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </select>
          <input type="text" name="applicantNameBody" placeholder="Name" value={formData.applicantNameBody} onChange={handleChange} required />
          <select name="relation" value={formData.relation} onChange={handleChange}>
            <option>son</option>
            <option>daughter</option>
          </select>
          of
          <select name="fatherTitle" value={formData.fatherTitle} onChange={handleChange}>
            <option>Mr.</option>
          </select>
          <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} required />
          and
          <select name="motherTitle" value={formData.motherTitle} onChange={handleChange}>
            <option>Mrs.</option>
          </select>
          <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} required />
          having
          <select name="docType" value={formData.docType} onChange={handleChange}>
            <option>Citizenship</option>
            <option>Birth Certificate</option>
          </select>
          no.
          <input type="text" name="docNo" placeholder="Document No." value={formData.docNo} onChange={handleChange} required />
          ,
          <select name="residencyType" value={formData.residencyType} onChange={handleChange}>
            <option>permanent</option>
            <option>temporary</option>
          </select>
          resident of
          <select name="municipality" value={formData.municipality} onChange={handleChange}>
            <option>Nagarjun Municipality</option>
          </select>
          Ward No.
          <select name="wardNo1" value={formData.wardNo1} onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input type="text" name="district1" value={formData.district1} onChange={handleChange} />
          <input type="text" name="country1" value={formData.country1} onChange={handleChange} />
          , (Previously designated as
          <select name="prevDesignation" value={formData.prevDesignation} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="VDC">V.D.C</option>
            <option value="Municipality">Municipality</option>
          </select>
          , Ward No.
          <input type="text" name="prevWardNo" placeholder="Ward" value={formData.prevWardNo} onChange={handleChange} required />
          ,
          <input type="text" name="prevDistrict" placeholder="District" value={formData.prevDistrict} onChange={handleChange} required />
          , Nepal) has submitted an application letter for Marital Status Certificate at this Municipality, and according to witnesses at ward level,
          <select name="pronoun" value={formData.pronoun} onChange={handleChange}>
            <option>he</option>
            <option>she</option>
          </select>
          has been found to be single in Marital Status as of
          <input type="text" name="asOfDate" value={formData.asOfDate} onChange={handleChange} required />
          A.D.
        </p>

        <div className="designation-section">
          <input type="text" placeholder="Signature" disabled />
          <select name="designation" value={formData.designation} onChange={handleChange} required>
            <option value="">Select Designation</option>
            <option value="Ward-Chairperson">Ward Chairperson</option>
            <option value="Ward-Secretary">Ward Secretary</option>
          </select>
        </div>

        <div className="applicant-details">
          <h3>Applicant Details</h3>
          <div className="form-group-column">
            <label>Applicant Name *</label>
            <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} required />
          </div>
          <div className="form-group-column">
            <label>Applicant Address *</label>
            <input type="text" name="applicantAddress" value={formData.applicantAddress} onChange={handleChange} required />
          </div>
          <div className="form-group-column">
            <label>Applicant Citizenship Number *</label>
            <input type="text" name="applicantCitizenship" value={formData.applicantCitizenship} onChange={handleChange} required />
          </div>
          <div className="form-group-column">
            <label>Applicant Phone Number *</label>
            <input type="text" name="applicantPhone" value={formData.applicantPhone} onChange={handleChange} required />
          </div>
        </div>

        <div className="submit-area">
          <button type="submit" className="submit-btn">Save and Print Record</button>
        </div>
      </form>
    </div>
  );
};

export default UnmarriedVerification;