import React from 'react';
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="text-center mb-8">
        <h2 className="text-sm uppercase text-orange-500">LET'S RESERVE</h2>
        <h1 className="text-4xl font-bold mt-2 mb-4">EXPERIENCE CULINARY <br />BLISS - RESERVE YOUR <br />TABLE TODAY!</h1>
        <div className="flex justify-center mb-4 flex-col md:flex-row">
          <input
            type="email"
            placeholder="ENTER EMAIL"
            className="p-2 bg-black text-white border border-gray-400 mb-2 md:mb-0 md:mr-2"
          />
          <button className="bg-white text-black px-4 border-white">
            RESERVE NOW
          </button>
        </div>
        <br />
        <br />
        <br />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 mt-10">
        <div className="flex items-center mb-4 md:mb-0">
          <FaMapMarkerAlt className="mr-2" />
          <p className="text-start">
            600 GUERRERO ST, SAN <br />FRANCISCO, CA 94110,<br /> UNITED STATES
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex justify-end mb-4 md:mb-0">
            <a href="#" className="mx-2"><FaFacebookF /></a>
            <a href="#" className="mx-2"><FaTwitter /></a>
            <a href="#" className="mx-2"><FaLinkedinIn /></a>
          </div>
          <div className="text-end text-sm md:ml-4">
            <p>COPYRIGHT <br /> ©2020 FARAZ AL FASLUDI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;