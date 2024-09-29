import React, { useState } from 'react';
import { FaUnlockAlt, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8001/api/auth/register';
    try {
      const result = await axios.post(url, {
        firstName,
        lastName,
        email,
        password,
      });
      toast.success('Registered Successfully');
      navigate('/login');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Registration failed';
      if (err.response?.status === 400) {
        toast.error('Email Already Registered');
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <section className="registerForm">
      <div className="formDiv">
        <ToastContainer /> {/* ToastContainer to show the messages */}
        <form onSubmit={submit}>
          <h2>CUSTOMER REGISTER</h2>
          <div className="inpt">
            <FaUser />
            <input
              type="text"
              placeholder="Your First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inpt">
            <FaUser />
            <input
              type="text"
              placeholder="Your Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inpt">
            <MdEmail />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inpt">
            <FaUnlockAlt />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn2">
            REGISTER
          </button>
        </form>
        <Link to="/login" className="link">LOGIN</Link>
      </div>
    </section>
  );
};

export default Register;
