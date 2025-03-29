import React from "react";
import Navbar from "./Navbar";
import SignupForm from "./SignupForm";

const SignupPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex items-center justify-center flex-grow">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
