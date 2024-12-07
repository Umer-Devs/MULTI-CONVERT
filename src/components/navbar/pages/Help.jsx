
import { FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const Help = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-center">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-violet-600">Help & Support</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Find answers to your questions and get the most out of MultiConverter.
        </p>
      </div>

      {/* Getting Started Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-violet-500">Getting Started</h2>
        <p className="text-gray-700 mt-4">
          To start converting, simply select the conversion type (e.g., currency, length, weight), enter your values, and hit Convert.
          Our tool will instantly provide accurate results for you.
        </p>
        <p className="text-gray-700 mt-4">
          For currency conversions, select your preferred currencies from the dropdowns, enter an amount, and view the conversion based on real-time rates.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-violet-500">Frequently Asked Questions</h2>
        <div className="mt-4 text-left space-y-4 text-gray-700">
          <div>
            <p className="flex items-center font-semibold"><FaQuestionCircle className="text-violet-500 mr-2" /> How accurate are the currency rates?</p>
            <p className="ml-6 mt-1">We update exchange rates in real-time using reliable APIs, ensuring you receive the latest rates available.</p>
          </div>
          <div>
            <p className="flex items-center font-semibold"><FaQuestionCircle className="text-violet-500 mr-2" /> Can I convert units other than currency?</p>
            <p className="ml-6 mt-1">Yes! Our tool supports conversions across various units including length, weight, temperature, and more.</p>
          </div>
          <div>
            <p className="flex items-center font-semibold"><FaQuestionCircle className="text-violet-500 mr-2" /> How do I report an issue?</p>
            <p className="ml-6 mt-1">Please contact our support team using the form below if you experience any issues.</p>
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-violet-500">Contact Support</h2>
        <p className="text-gray-700 mt-4">Need additional help? Reach out to our support team, and we’ll get back to you as soon as possible.</p>
        <button className="mt-6 px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 flex items-center mx-auto">
          <FaEnvelope className="mr-2" /> Contact Us
        </button>
      </div>
    </div>
  );
};

export default Help;
