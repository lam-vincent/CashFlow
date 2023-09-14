import React from "react";
import RegisterForm from "../components/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-orange-100 to-blue-100 gap-8">
      <RegisterForm />
    </div>
  );
};

export default Register;
