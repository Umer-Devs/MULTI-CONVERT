import  { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-center">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-violet-600">Contact Us</h1>
        <p className="text-gray-600 mt-4 text-lg">
          We re here to help! Reach out to us with any questions or feedback.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
          <FaPhoneAlt className="text-violet-500 text-3xl mb-3 mx-auto" />
          <p className="font-semibold text-gray-800">Phone</p>
          <p className="text-gray-600">+123 456 7890</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
          <FaEnvelope className="text-violet-500 text-3xl mb-3 mx-auto" />
          <p className="font-semibold text-gray-800">Email</p>
          <p className="text-gray-600">support@multiconverter.com</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
          <FaMapMarkerAlt className="text-violet-500 text-3xl mb-3 mx-auto" />
          <p className="font-semibold text-gray-800">Location</p>
          <p className="text-gray-600">123 MultiConverter Karachi</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="bg-gray-50 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-violet-600 text-white px-6 py-3 rounded-md text-lg hover:bg-violet-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
