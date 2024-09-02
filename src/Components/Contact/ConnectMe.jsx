import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Section } from './Section';
import { InfoCard } from '../InfoCard';
import { Link } from 'react-router-dom';
export const ConnectMe = () => {
  // ========== aos animation variables
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
      // ======== form validation
       // State to store form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Your form submission logic here, e.g., sending the data to an API or server
    console.log('Form Data Submitted:', formData);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return (
    <div>
<div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-5xl space-y-8">
        <Section title="Get in Touch">
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div  data-aos="fade-right" className="">
            <InfoCard
              icon={<FaEnvelope size={30} className="text-blue-500" />}
              title="Email"
              content="nasrinbinteenizam@gmail.com"
              hoverColor="hover:bg-blue-100"/>
            </div>
            <div  data-aos="zoom-in" className="div">
            <InfoCard
              icon={<FaPhone size={30} className="text-green-500" />}
              title="Phone"
              content="+880-01706226996"
              hoverColor="hover:bg-green-100" />
            </div>
            <div data-aos="fade-left" className="div">
            <InfoCard
              icon={<FaMapMarkerAlt size={30} className="text-red-500" />}
              title="Address"
              content="Dhaka, Bangladesh"
              hoverColor="hover:bg-red-100"/>
            </div>
          </div>
        </Section>

        <Section title="Find Me Online">
        <div className="flex justify-center gap-6">
          <Link data-aos="zoom-out" to="https://www.facebook.com/profile.php?id=61557964826146" className="group">
            <div className="p-6 border-[1px] border-teal-600 rounded-full bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform group-hover:scale-110">
              <FaFacebook className="text-5xl text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
            </div>
          </Link>
          <Link data-aos="zoom-out" to="https://github.com/NasrinNizam" className="group">
            <div className="p-6 border-[1px] border-teal-600 rounded-full bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform group-hover:scale-110">
              <FaGithub className="text-5xl text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
            </div>
          </Link>
          <Link data-aos="zoom-out" to="https://www.linkedin.com/in/nasrin-sultana-5a59b9301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="group">
            <div className="p-6 border-[1px] border-teal-600 rounded-full bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform group-hover:scale-110">
              <FaLinkedin className="text-5xl text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
            </div>
          </Link>
        </div>
        </Section>

        <section>
      <div data-aos="zoom-in" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">Send a Message</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto transition-shadow duration-300 hover:shadow-2xl">
          <div className="mb-6">
            <label className="block text-lg font-medium mb-3 text-black" htmlFor="name">Your Name</label>
            <input
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-3 text-black" htmlFor="email">Your Email</label>
            <input
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-3 text-black" htmlFor="message">Message</label>
            <textarea
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-teal-600 hover:bg-teal-700 transition duration-300 text-white font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

        <Section title="Find Me Here">
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58373.824592480145!2d90.33708780433246!3d23.876706605218637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1725281445720!5m2!1sen!2sbd"             
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            />
          </div>
        </Section>
      </div>
    </div>
    </div>
  )
}
