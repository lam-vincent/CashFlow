import React from "react";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-orange-100 to-blue-100 gap-8">
      <LoginForm />
    </div>
  );
};

export default Login;
