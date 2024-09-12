import React, { useState } from 'react';
import Signup from '../components/Signup';
import AdditionalInfo from '../components/AdditionalInfo';
import Login from '../components/Login';

const RegisterAndLogin = () => {
  const [currentStep, setCurrentStep] = useState('signup');
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    country: '',
    state: '',
    district: '',
    college: '',
    department: '',
    joiningYear: '',
    passoutYear: '',
    domain: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 'signup') {
      setCurrentStep('additional');
    } else if (currentStep === 'additional') {
      setCurrentStep('login');
    } else if (currentStep === 'login') {
      setCurrentStep('merged');
    }
  };

  return (
    <div className="min-h-screen px-10 flex flex-col justify-center items-center bg-gray-900 text-gray-100">
      {currentStep === 'signup' && <Signup handleChange={handleChange} handleSubmit={handleSubmit} setCurrentStep={setCurrentStep} />}
      {currentStep === 'additional' && <AdditionalInfo handleChange={handleChange} handleSubmit={handleSubmit} setCurrentStep={setCurrentStep} />}
      {currentStep === 'login' && <Login handleChange={handleChange} handleSubmit={handleSubmit} setCurrentStep={setCurrentStep} />}
    </div>
  );
};

export default RegisterAndLogin;
