import  { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // For now, we'll just log the form data
    console.log('Login data submitted:', formData);
    setError(''); // Clear previous errors

    // Example validation (replace this with real authentication logic)
    if (formData.email === '' || formData.password === '') {
      setError('Please fill in both fields.');
    } else {
      // Proceed with login (API call)
      alert('Logged in successfully!'); // Placeholder for success response
      setFormData({ email: '', password: '' }); // Reset form
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-violet-600 mb-6">Login</h1>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 text-white px-4 py-3 rounded-md text-lg hover:bg-violet-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Dont have an account? <a href="/register" className="text-violet-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
