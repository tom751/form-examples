import React from 'react';
import './App.css';
import SimpleForm from './SimpleForm';
import FormWithCustomInputs from './FormWithCustomInputs';
import FormWithToggeableExtras from './FormWithToggeableExtras';
import FormAcrossMultipleComponents from './FormComponents/FormAcrossMultipleComponents';

function App() {
  return (
    <>
      <h1>Simple form</h1>
      <SimpleForm />
      <h1>Form with custom components from external library</h1>
      <FormWithCustomInputs />
      <h1>Form with optional extra required fields</h1>
      <FormWithToggeableExtras />
      <h1>Form spread across multiple components</h1>
      <FormAcrossMultipleComponents />
      <h1>Wizard form</h1>
      <a href="https://react-hook-form.com/advanced-usage#WizardFormFunnel">
        https://react-hook-form.com/advanced-usage#WizardFormFunnel
      </a>
    </>
  );
}

export default App;
