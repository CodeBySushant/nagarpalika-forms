import React, { useState } from 'react';
import AllowanceForm from './appeal/AllowanceForm';
import RelationshipVerification from './english-format/RelationshipVerification';
import ScholarshipVerification from './english-format/ScholarshipVerification';
import PowerofAttorney from './english-format/PowerofAttorney';
import BirthDateVerification from './english-format/BirthDateVerification';
import AddressVerification from './english-format/AddressVerification';
import AnnualIncomeCertificate from './english-format/AnnualIncomeCertificate';
import UnmarriedVerification from './english-format/UnmarriedVerification';
import TaxClearanceCertificate from './english-format/TaxCleranceCertificate';
import TaxClearBasic from './english-format/TaxClearBasic';
import SamePersonCertificate from './english-format/SamePersonCertificate';
import PropertyValuationReport from './english-format/PropertyValuationReport';
import OccupationVerification from './english-format/OccupationVerification';
import MarriageCertificate from './english-format/MarriageCertificate';
import EconomicStatus from './english-format/EconomicStatus';
import DigitalVerification from './english-format/DigitalVerification';
import CertificateOfOccupation from './english-format/CertificateofOccupation';

import AddressVerificationNew from './english-format/new/AddressVerificationNew';
import AnnualIncomeVerificationNew from './english-format/new/AnnualIncomeVerificationNew';
import BirthCertificate from './english-format/new/BirthCertificate';
import OccupationVerificationNew from './english-format/new/OccupationVerificationNew';
import SurnameVerificationAfterMarriage from './english-format/new/SurnameVerificationAfterMarriage';
import SurnameVerificationCertificateNew from './english-format/new/SurnameVerificationCertificateNew';
import TaxClearanceNewFormat from './english-format/new/TaxClearanceNewFormat';
import VerifyRevisedEmblem from './english-format/new/VerifyRevisedEmblem';

import './App.css';

function App() {
  const [form, setForm] = useState('allowance');

  const renderForm = () => {
    switch (form) {
      case 'allowance':
        return <AllowanceForm />;
      case 'relationship':
        return <RelationshipVerification />;
      case 'scholarship':
        return <ScholarshipVerification />;
      case 'powerofattorney':
        return <PowerofAttorney />;
      case 'address':
        return <AddressVerification />;
      case 'annualincome':
        return <AnnualIncomeCertificate />;
      case 'unmarried':
        return <UnmarriedVerification />;
      case 'taxclerance':
        return <TaxClearanceCertificate />;
      case 'taxclearbasic':
        return <TaxClearBasic />;
      case 'sameperson':
        return <SamePersonCertificate />;
      case 'propertyvaluation':
        return <PropertyValuationReport />;
      case 'occupationverification':
        return <OccupationVerification />;
      case 'marriage':
        return <MarriageCertificate />;
      case 'economicstatus':
        return <EconomicStatus />;
      case 'digital':
        return <DigitalVerification />;
      case 'certificateofoccupation':
        return <CertificateOfOccupation />;
      case 'birthdate':
        return <BirthDateVerification />;

      case 'newaddress':
        return <AddressVerificationNew />;
      case 'annualincomenew':
        return <AnnualIncomeVerificationNew />;
      case 'birthcertificate':
        return <BirthCertificate />;
      case 'occupationnew':
        return <OccupationVerificationNew />;
      case 'surnameaftermarriage':
        return <SurnameVerificationAfterMarriage />;
      case 'surnamecertificate':
        return <SurnameVerificationCertificateNew />;
      case 'taxclearancenew':
        return <TaxClearanceNewFormat />;
      case 'revisedemblem':
        return <VerifyRevisedEmblem />;

      default:
        return <AllowanceForm />;
    }
  };

  return (
    <div className="App">
      <select onChange={(e) => setForm(e.target.value)} value={form}>
        <option value="allowance">Allowance Form</option>
        <option value="relationship">Relationship Verification</option>
        <option value="scholarship">Scholarship Verification</option>
        <option value="powerofattorney">Power Of Attorney</option>
        <option value="birthdate">Birthdate Verification</option>
        <option value="address">Address Verification</option>
        <option value="annualincome">Annual Income Certificate</option>
        <option value="unmarried">Unmarried Verification</option>
        <option value="taxclerance">Tax Clearance Certificate</option>
        <option value="taxclearbasic">Tax Clear Basic</option>
        <option value="propertyvaluation">Property Valuation Report</option>
        <option value="occupationverification">Occupation Verification</option>
        <option value="marriage">Marriage Certificate</option>
        <option value="economicstatus">Economic Status</option>
        <option value="digital">Digital Verification</option>
        <option value="certificateofoccupation">Certificate Of Occupation</option>
        <option value="sameperson">Same Person Certificate</option>

        <option value="newaddress">Address Verification New</option>
        <option value="annualincomenew">Annual Income Verification New</option>
        <option value="birthcertificate">Birth Certificate</option>
        <option value="occupationnew">Occupation Verification New</option>
        <option value="surnameaftermarriage">Surname Verification After Marriage</option>
        <option value="surnamecertificate">Surname Verification Certificate New</option>
        <option value="taxclearancenew">Tax Clearance New Format</option>
        <option value="revisedemblem">Verify Revised Emblem</option>

      </select>

      {renderForm()}
    </div>
  );
}

export default App;
