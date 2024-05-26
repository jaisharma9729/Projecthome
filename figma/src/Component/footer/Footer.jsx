import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {

  const [input, setInput] = useState({
    name: "",
    mail: "",
    number: "",
    company: "",
    message: ""
  })

  const navigate = useNavigate()

  const inputChange = (e) => {
    e.preventDefault()
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const isFormValid = () => {
    return Object.values(input).every(value => value.trim() !== '');
  };

  const submitForm = () => {
    if (isFormValid()) {
      navigate('/submited')
    }
  };

  return (
    <div className="bg-zinc-100 dark:bg-light-800 p-6 flex justify-center items-center min-h-screen" id="footer">
      <div className="bg-white dark:bg-light-900 shadow-lg rounded-lg p-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-red-600 dark:text-red-400 text-xl font-bold mb-4">Contact</h2>
            <p className="mb-4">We are ready to lead you into the future of B2B commerce and Supply Chain.</p>
            <p className="flex mb-2">
              <img aria-hidden="true" alt="email" src="https://placehold.co/20x20" className="mr-2" />
              <div>
                <span>Write to us at</span>
                <a href="mailto:info@moglixbusiness.com" className="text-blue-600 dark:text-blue-400 ml-1">info@moglixbusiness.com</a>
              </div>
            </p>
            <div className="mb-4">
              <h3 className="font-bold">India</h3>
              <p className="flex items-center mb-1">
                <img aria-hidden="true" alt="location" src="https://placehold.co/20x20" className="mr-2" />
                Smartworks Corporate Park (Tower B), 1st Floor, Sector 125, Noida 201303, Uttar Pradesh
              </p>
            </div>
            <div>
              <h3 className="font-bold">Singapore</h3>
              <p className="flex items-center">
                <img aria-hidden="true" alt="location" src="https://placehold.co/20x20" className="mr-2" />
                7 Temasek Boulevard #12-02C, Suntec Tower One, Singapore 039087
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <!-- Column 1 --> */}
              <div>
                <input type="text" placeholder="Enter Name*" name="name" value={input.name} className="border border-zinc-300 dark:border-zinc-700 p-2 rounded-md w-full mb-4" onChange={inputChange} />
                <input type="email" placeholder="Enter Official Email ID*" name="mail" value={input.mail} className="border border-zinc-300 dark:border-zinc-700 p-2 rounded-md w-full mb-4" onChange={inputChange} />
                <input type="text" placeholder="Enter Phone No*" name="number" value={input.number} className="border border-zinc-300 dark:border-zinc-700 p-2 rounded-md w-full mb-4" onChange={inputChange} />
                <input type="text" placeholder="Company Name*" name="company" value={input.company} className="border border-zinc-300 dark:border-zinc-700 p-2 rounded-md w-full mb-4" onChange={inputChange} />
              </div>
              {/* <!-- Column 2 --> */}
              <div>
                <textarea placeholder="Write your message here.." name="message" value={input.message} className="border border-zinc-300 dark:border-zinc-700 p-2 rounded-md h-24 w-full mb-4" onChange={inputChange}></textarea>
                <button type="submit" className="bg-red-600 dark:bg-red-400 text-white p-2 rounded-md w-full" onClick={submitForm} disabled={!isFormValid()}>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
