import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signin from './Signin';
import Signup from './SignUp';
const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSuccess = () => {
    navigate('/landing');
  };

  return (
    <div>
      {isSignup ? (
        <Signup onSuccess={handleSuccess} />
      ) : (
        <Signin onSuccess={handleSuccess} />
      )}
      <button onClick={handleSwitch}>
        {isSignup ? 'Already Signed up? Login' : 'New user? Sign Up'}
      </button>
    </div>
  );
};

export default AuthPage;
