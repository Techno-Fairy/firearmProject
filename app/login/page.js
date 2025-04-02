'use client';

import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Mail, Phone, Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LoginPage = ({ logoSrc = '/api/placeholder/150/150' }) => {
  const router = useRouter();
  const [isLoginView, setIsLoginView] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('pearl');
  const [password, setPassword] = useState('12345');
  const [email, setEmail] = useState('peanteda@gmail.com');
  const [phonenumber, setPhoneNumber] = useState('74541521');
  
  // Notification state
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success' // 'success' or 'error'
  });

  const fillTestData = () => {
    setUsername('testuser');
    setPassword('password123');
    setEmail('test@example.com');
    setPhoneNumber('1234567890');
  };

  // Show notification function
  const showNotification = (message, type = 'success') => {
    setNotification({
      show: true,
      message,
      type
    });
    
    // Hide notification after 5 seconds
    setTimeout(() => {
      setNotification(prev => ({...prev, show: false}));
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLoginView) {
      // Login logic
      console.log('Login attempt', { username, password });
      
      // Simulate successful login (in a real app, this would be an API call)
      if (username && password) {
        showNotification('Login successful! Redirecting to dashboard...');
        
        // Redirect to dashboard after a brief delay
        setTimeout(() => {
          router.push('/Dashboard'); // Change this to your actual dashboard route
        }, 1500);
      } else {
        showNotification('Login failed. Please check your credentials.', 'error');
      }
    } else {
      // Registration logic
      console.log('Signup attempt', { username, email, phonenumber, password });
      
      // Simulate successful registration (in a real app, this would be an API call)
      if (username && email && phonenumber && password) {
        showNotification('Registration successful! You can now log in.');
        
        // Switch to login view after successful registration
        setTimeout(() => {
          setIsLoginView(true);
        }, 1500);
      } else {
        showNotification('Registration failed. Please fill all fields correctly.', 'error');
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-200 overflow-hidden">
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg ${
          notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <span className="mr-2">
            {notification.type === 'success' ? <Check size={20} /> : <X size={20} />}
          </span>
          <p>{notification.message}</p>
          <button 
            onClick={() => setNotification(prev => ({...prev, show: false}))}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex shadow-2xl rounded-2xl overflow-hidden min-h-[600px]">
        {/* Left Side - Welcome Section */}
        <div className="w-1/2 bg-gradient-to-br from-blue-300 to-blue-400 bg-opacity-50 text-white p-12 flex flex-col justify-center items-center">
          {/* Logo Container */}
          <div className="mb-4 w-60 h-60 from-blue-500 bg-opacity-50 flex items-center justify-center overflow-hidden">
            <img 
              src={"police.png"} 
              alt="Department Logo" 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          
          <h1 className="text-3xl font-bold text-black mb-4 text-center">
            {isLoginView ? 'WELCOME TO FIREARM SYSTEM' : 'HELLO, USER'}
          </h1>
          <p className="text-lg opacity-80 text-center">
            {isLoginView 
              ? 'Please login to your account' 
              : 'Create your account to get started'}
          </p>
          
          {/* Test Data Button - Remove in production */}
          <button 
            type="button" 
            onClick={fillTestData}
            className="text-sm text-blue-800 mt-4 border border-blue-800 px-3 py-1 rounded-lg hover:bg-blue-800 hover:text-white"
          >
            Fill Test Data
          </button>
        </div>

        {/* Right Side - Login/Signup Form */}
        <div className="w-1/2 bg-gray-300 p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-center">
            {isLoginView ? 'Sign in' : 'Sign up'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Input (for Signup) */}
            {!isLoginView && (
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}

           {/*phone number input*/}
           {!isLoginView && (
             <div className="relative">
               <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
               <input 
                 type="number" 
                 placeholder="Phone Number" 
                 value={phonenumber}
                 onChange={(e) => setPhoneNumber(e.target.value)}
                 className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                 required
               />
             </div>
           )}

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Login-specific elements */}
            {isLoginView && (
              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="form-checkbox text-blue-500 rounded"
                  />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {isLoginView ? 'Sign In' : 'Sign Up'}
            </button>

            {/* Switch between Login and Signup */}
            <div className="text-center mt-4">
              <p>
                {isLoginView ? "Don't have an account? " : "Already have an account? "}
                <button 
                  type="button"
                  onClick={() => setIsLoginView(!isLoginView)}
                  className="text-blue-600 hover:underline"
                >
                  {isLoginView ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;