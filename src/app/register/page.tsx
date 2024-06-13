import React from "react";

const RegisterPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Create an Account
          </h1>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm placeholder-muted focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm placeholder-muted focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm placeholder-muted focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="********"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-foreground"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm placeholder-muted focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="********"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
