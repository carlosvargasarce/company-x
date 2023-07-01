import * as React from "react";
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
              <form className="overflow-hidden">
                <div className="mb-6">
                  <input 
                    className="inputCustom"
                    id="email"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <input 
                    className="inputCustom"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <input 
                    className="inputCustom"
                    id="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-6 relative">
                  <select 
                    className="inputCustom appearance-none"
                    id="reason"
                  >
                    {options.map((option, i) => (
                      <option value={option.value} key={i}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <label
                    for="reason"
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
