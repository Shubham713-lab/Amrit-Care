import React, { useState } from 'react';
import { Mail, Phone, User, KeyRound, MapPin, ArrowRight } from 'lucide-react';

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  // State for Login
  const [loginIdentifier, setLoginIdentifier] = useState(''); // Email or Phone
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  // State for Sign Up
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // Updated address state to be an object
  const [address, setAddress] = useState({
    house: '',
    city: '',
    state: '',
    pin: '',
  });

  // Handler for updating the address object
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Basic validation
    if (loginIdentifier.trim() === '') {
      alert('Please enter your email or phone number.');
      return;
    }
    // Simulate sending OTP
    console.log(`Sending OTP to ${loginIdentifier}`);
    setOtpSent(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (otp.trim() === '') {
      alert('Please enter the OTP.');
      return;
    }
    // Simulate OTP verification
    console.log(`Verifying OTP: ${otp}`);
    alert('Login successful!');
    // Reset state
    setOtpSent(false);
    setLoginIdentifier('');
    setOtp('');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Updated validation for the new address fields
    if (
      !fullName ||
      !email ||
      !phone ||
      !address.house ||
      !address.city ||
      !address.state ||
      !address.pin
    ) {
      alert('Please fill in all fields.');
      return;
    }
    // Simulate user registration
    console.log('Signing up user:', { fullName, email, phone, address });
    alert('Sign up successful! Please log in.');
    // Switch to login view after successful signup
    setIsLoginView(true);
    // Reset signup form
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress({ house: '', city: '', state: '', pin: '' });
  };

  const renderLoginForm = () => (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
      <p className="text-gray-500 mb-8">Login using the OTP sent to your email or phone.</p>

      {!otpSent ? (
        <form onSubmit={handleSendOtp}>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={loginIdentifier}
              onChange={(e) => setLoginIdentifier(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2.5 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center gap-2"
          >
            Send OTP <ArrowRight size={18} />
          </button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
           <p className="text-sm text-green-600 bg-green-50 p-3 rounded-md mb-4 text-center">
            An OTP has been sent to <strong>{loginIdentifier}</strong>.
          </p>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <KeyRound className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Enter 4-Digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="4"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2.5 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
           <button
            onClick={() => setOtpSent(false)}
            className="w-full text-sm text-center text-gray-500 mt-4 hover:text-orange-600"
          >
            Use a different email/phone?
          </button>
        </form>
      )}
    </div>
  );

  const renderSignUpForm = () => (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
      <p className="text-gray-500 mb-8">Join us and start your journey.</p>
      <form onSubmit={handleSignUp} className="space-y-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <User className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Mail className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Phone className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        
        {/* New Categorized Address Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative md:col-span-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <MapPin className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              name="house"
              placeholder="House/Apt No., Street"
              value={address.house}
              onChange={handleAddressChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleAddressChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="relative md:col-span-2">
            <input
              type="text"
              name="pin"
              placeholder="PIN Code"
              value={address.pin}
              onChange={handleAddressChange}
              maxLength="6"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2.5 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="flex border-b-2 border-gray-200 mb-6">
          <button
            onClick={() => setIsLoginView(true)}
            className={`w-1/2 py-3 text-center font-semibold transition-all duration-300 ${
              isLoginView
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginView(false)}
            className={`w-1/2 py-3 text-center font-semibold transition-all duration-300 ${
              !isLoginView
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500'
            }`}
          >
            Sign Up
          </button>
        </div>

        {isLoginView ? renderLoginForm() : renderSignUpForm()}
      </div>
    </div>
  );
}
