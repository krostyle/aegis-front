import LoginForm from "@/infrastructure/ui/components/molecules/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold my-4">Login</h1>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
