import React, { useState } from 'react';
import AllowanceForm from './appeal/AllowanceForm';
import RelationshipVerification from './english-format/RelationshipVerification';
import ScholarshipVerification from './english-format/ScholarshipVerification';
import PowerofAttorney from './english-format/PowerofAttorney';
import BirthDateVerification from './english-format/BirthDateVerification';
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
      case 'birthdate':
        return <BirthDateVerification />;
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
      </select>

      {renderForm()}
    </div>
  );
}

export default App;
