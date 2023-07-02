import React, { useState } from 'react';
import Layout from "../components/layout";
import { FaChevronDown } from "react-icons/fa";

const ContactPage = () => {
  const options = [
    {
      'name': 'Sales',
      'value': 'sales'
    },
    {
      'name': 'Press',
      'value': 'press'
    },
    {
      'name': 'Support',
      'value': 'support'
    },
    {
      'name': 'Demo',
      'value': 'demo'
    }
  ];

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [reason, setReason] = useState('sales');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && name && phone && reason && isEmailValid && isPhoneValid) {
      setIsFormValid(true);
    }
  }

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^(?!.*gmail\.com).*$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    const phoneRegex = /^\d{10,}$/;
    setIsPhoneValid(phoneRegex.test(value));
  };

  const handleReasonChange = (e) => {
    const value = e.target.value;
    setReason(value);
  };

  return (
    <Layout>
      <div className="container">
        <h1 className="mainTitle">Company Name</h1>
        <div className="pt-12 pb-12 sm:pb-4">
          <div className="mb-12">
            <h2 className="mb-2 sm:mb-6 text-2xl">Contact Us</h2>
            <p className="text-sm">Please provide some information to get started.</p>
          </div>
          <div className="sm:flex sm:space-x-8">
            <div className="flex-1 basis-3/5 max-sm:mb-16">
              {!isFormValid ?
                <form className="overflow-hidden" onSubmit={handleSubmit}>
                  <div className="mb-6 relative">
                    <input 
                      className="inputCustom"
                      id="email"
                      required
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Email"
                    />
                    {!isEmailValid ?
                      <span className='text-red text-xs mt-2 block'>Error: You can not use emails from gmail</span>
                    : null}
                  </div>
                  <div className="mb-6">
                    <input 
                      className="inputCustom"
                      required
                      id="name"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-6">
                    <input 
                      className="inputCustom"
                      required
                      id="phoneNumber"
                      value={phone}
                      onChange={handlePhoneChange}
                      type="text"
                      placeholder="Phone Number"
                      minLength={10}
                    />
                    {!isPhoneValid ?
                      <span className='text-red text-xs mt-2 block'>Error: Phone numbers should be at least 10 digit long</span>
                    : null}
                  </div>
                  <div className="mb-6 relative">
                    <select 
                      className="inputCustom appearance-none"
                      id="reason"
                      value={reason}
                      onChange={handleReasonChange}
                    >
                      {options.map((option, i) => (
                        <option value={option.value} key={i}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor="reason"
                      className="absolute text-xs text-grey-400 top-[-8px] left-8 px-6 bg-white"
                    >
                      How We Can Help You?
                    </label>
                    <FaChevronDown className="absolute top-5 right-4 pointer-events-none" />
                  </div>
                  <button
                    className="bg-black hover:bg-white text-white border hover:text-black py-2 px-12 rounded text-center text-2xl float-right transition-colors"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              :
                <div className="p-4 mb-4 text-sm text-green rounded-lg bg-company-black" role="alert">
                  <span className="font-medium">Great!</span> The form has been successfully sent!
                </div>
              }
            </div>
            <div className="flex-1 basis-2/5">
              <div className="mb-6">
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
              </div>
              <div className="mb-6">
                <p><strong>Phone:</strong></p>
                <a href="tel:1-877-777-7777" className="hover:underline text-blue text-lg font-medium">+1 (877) 777-7777</a>
              </div>
              <div>
                <p><strong>Hours:</strong></p>
                <p>Monday - Sunday: <strong>7am - 11pm EST</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage

export const Head = () => <title>Contact Page</title>
