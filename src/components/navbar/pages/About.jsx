
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-center">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-violet-600">About MultiConverter</h1>
        <p className="text-gray-600 mt-4 text-lg">
          MultiConverter is your one-stop solution for easy and fast conversions across multiple units and currencies.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-violet-500">Why Choose Us</h2>
        <ul className="mt-4 space-y-4 text-left text-gray-700">
          <li className="flex items-center">
            <FaCheckCircle className="text-violet-500 mr-2" /> Convert between currencies with real-time exchange rates
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-violet-500 mr-2" /> Supports multiple unit conversions: length, weight, temperature, and more
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-violet-500 mr-2" /> User-friendly interface with responsive design
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-violet-500 mr-2" /> Accurate and up-to-date data
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-violet-500 mr-2" /> Accessible from all devices, anywhere, anytime
          </li>
        </ul>
      </div>

      {/* Mission Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-violet-500">Our Mission</h2>
        <p className="text-gray-600 mt-4">
          At MultiConverter, we strive to simplify conversions for everyone. Our goal is to create a tool that is
          both powerful and easy to use, so you can focus on what matters without getting bogged down by conversions.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-10">
        <button className="px-8 py-3 text-lg font-medium bg-violet-600 text-white rounded-md hover:bg-violet-700 transition">
          Start Converting
        </button>
      </div>
    </div>
  );
};

export default About;
