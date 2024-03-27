import React from "react";
import RegisterForm from "../../infrastructure/ui/components/molecules/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold my-4">Registro</h1>
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
