
import React, { useState } from "react";

const CreateAccount = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      setError("Email is required");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    if (!formData.name) {
      setError("Name is required");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    if (!formData.password) {
      setError("Password is required");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    if (!formData.confirmPassword) {
      setError("Confirm password is required");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

    setUser(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pb-1 bg-white">
      <img
        src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
        alt="amazon"
        className="w-28 mt-5"
      />

      <div
        className={`border border-gray-300 rounded-md w-87.5 p-6 mt-4 ${shake ? "animate-shake" : ""}`}
      >
        <h1 className="text-2xl mb-4">Create account</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-sm font-semibold">
              Enter mobile number or email
            </label>

            <input
              name="email"
              type="text"
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2 mt-1 focus:ring-2 focus:ring-yellow-400
               outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Your name</label>

            <input
              name="name"
              type="text"
              placeholder="First and last name"
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2 mt-1 focus:ring-2 focus:ring-yellow-400
               outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">
              Password (at least 6 characters)
            </label>

            <input
              name="password"
              type="password"
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2 mt-1"
            />

            <p className="text-xs text-gray-600 mt-1">
              Passwords must be at least 6 characters.
            </p>
          </div>

          <div>
            <label className="text-sm font-semibold">Re-enter password</label>

            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md p-2 mt-1"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-semibold">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-400 cursor-pointer active:scale-95 hover:bg-yellow-500 py-2 mt-3 rounded-full
             font-medium"
          >
            Submit
          </button>
        </form>

        <hr className="my-4" />

        <p className="text-sm">
          Already a customer?
          <span className="text-blue-600 ml-1 cursor-pointer">
            Sign in instead
          </span>
        </p>

        <p className="text-xs mt-4 text-gray-600">
          By creating an account, you agree to Amazon's
          <span className="text-blue-600 ml-1">Conditions of Use</span>
          and
          <span className="text-blue-600 ml-1">Privacy Notice</span>
        </p>
      </div>

      {/* Footer */}
      <div className="text-sm text-blue-600 mt-10 space-x-5">
        <span>Conditions of Use</span>
        <span>Privacy Notice</span>
        <span>Help</span>
      </div>
    </div>
  );
};

export default CreateAccount;
