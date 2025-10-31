import React, { useState } from 'react';
import AllowanceForm from './appeal/AllowanceForm';
import RelationshipVerification from './english-format/RelationshipVerification';
import './App.css';

function App() {
  const [form, setForm] = useState('allowance');

  const renderForm = () => {
    switch (form) {
      case 'allowance':
        return <AllowanceForm />;
      case 'relationship':
        return <RelationshipVerification />;
      default:
        return <AllowanceForm />;
    }
  };

  return (
    <div className="App">
      <select onChange={(e) => setForm(e.target.value)} value={form}>
        <option value="allowance">Allowance Form</option>
        <option value="relationship">Relationship Verification</option>
      </select>

      {renderForm()}
    </div>
  );
}

export default App;
