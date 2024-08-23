import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
    // ===aos function ====//
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);
  return (
    
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Me</h1>
      {/* Contact Information */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">Contact Information</h2>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-full max-w-sm mx-auto">
            <div className="flex items-center justify-center mb-4">
              <HiOutlineMail className="text-5xl text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
            </div>
            <p className="text-lg text-center font-medium text-gray-700 group-hover:text-teal-700 duration-300 transition-all">nasrinbinteenizam@gmail.com</p>
          </div>
          <div className="group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-full max-w-sm mx-auto">
            <div className="flex items-center justify-center mb-4">
              <HiOutlinePhone className="text-5xl text-teal-600 group-hover:text-teal-700 transition-all duration-300" />
            </div>
            <p className="text-lg text-center font-medium text-gray-700 group-hover:text-teal-700 transition-colors duration-300">+880 01706226996</p>
          </div>
        </div>
      </div>

      {/* Message Sending Section */}
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">Send a Message</h2>
        <form className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto transition-shadow duration-300 hover:shadow-2xl">
          <div className="mb-6">
            <label className="block text-lg font-medium mb-3 text-gray-700" htmlFor="name">Your Name</label>
            <input className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300" type="text" id="name" name="name"/>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-3 text-gray-700" htmlFor="email">Your Email</label>
            <input className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300" type="email" id="email" name="email" />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-3 text-gray-700" htmlFor="message">Message</label>
            <textarea className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300" id="message" name="message" rows="4"/>
          </div>
          <button type="submit" className="w-full py-4 rounded-lg bg-teal-600 hover:bg-teal-700 transition duration-300 text-white font-semibold text-lg shadow-lg hover:shadow-xl"> Send Message  </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">Follow Me</h2>
        <div className="flex justify-center gap-6">
          <Link to="https://www.facebook.com/profile.php?id=61557964826146" className="group">
            <div className="p-6 rounded-full bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform group-hover:scale-110">
              <FaFacebook className="text-5xl text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
            </div>
          </Link>
          <Link to="https://github.com/NasrinNizam" className="group">
            <div className="p-6 rounded-full bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform group-hover:scale-110">
              <FaGithub className="text-5xl text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/nasrin-sultana-5a59b9301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="group">
            <div className="p-6 rounded-full bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform group-hover:scale-110">
              <FaLinkedin className="text-5xl text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
            </div>
          </Link>
        </div>
      </div>

      {/* Google Map */}
      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">Find Me Here</h2>
        <div className="rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
          <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093346!2d144.95373531589618!3d-37.81627974202114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f5931e8a5b3!2sFederation%20Square!5e0!3m2!1sen!2sbd!4v1600191873323!5m2!1sen!2sbd" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" className="w-full h-full"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
