import React, { useState } from "react";
import asosiyRasm from "../img/asosiy.png";
import profilRasm from "../img/profil.png";

const AboutUser = () => {
  const [firstName, setFirstName] = useState("Killan");
  const [lastName, setLastName] = useState("James");
  const [email, setEmail] = useState("killanjames@gmail.com");
  const [role, setRole] = useState("Product Designer");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, role });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-[30px]">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative h-72 bg-gradient-to-r from-blue-600 to-purple-400">
          <img
            className="absolute top-0 w-full h-full object-cover opacity-30"
            src={asosiyRasm}
            alt="Header"
          />
          <div className="absolute left-16 -bottom-24">
            <img
              className=" w-40 h-40  rounded-full border-4 border-white shadow-lg"
              src= {profilRasm}
              alt="Profile"
            />
          </div>
          <div className="absolute  -bottom-14 left-72">
            <h1 className="text-4xl  font-bold text-black">Settings</h1>
          </div>
        </div>
        <div className="flex justify-end space-x-4 p-7">
          <button className="bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-md hover:bg-gray-400 transition duration-300">
            Cancel
          </button>
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
            Save
          </button>
        </div>

        <div className="p-5 px-7">
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-8 border-b pb-4 mb-8">
              <button className="text-blue-600 font-semibold border-b-2 border-blue-600">
                My Details
              </button>
              {[
                "Profile",
                "Password",
                "Team",
                "Plan",
                "Billing",
                "Email",
                "Notifications",
              ].map((item) => (
                <button
                  key={item}
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-col w-[60%]">
              <div className="flex w-[100%] justify-between">

              <div className="w-[48%]">
                <label className="block text-gray-700 font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 block w-full px-6 py-4 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <div className="w-[48%]">
                <label className="block text-gray-700 font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 block w-full bg-[#0000] px-6 py-4 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              </div>

              <div className="mt-5">
                <label className="block text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full bg-[#0000] px-6 py-4 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-8 w-[60%]">
              <label className="block text-gray-700 font-semibold">
                Upload Image
              </label>
              <div className="mt-1 w-full border-dashed border-2 border-gray-300 rounded-md shadow-lg p-8 text-center hover:border-blue-500 transition-all duration-300">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16V8a2 2 0 012-2h6a2 2 0 012 2v8m-2 4h4a2 2 0 002-2V10a2 2 0 00-2-2h-4"
                  />
                </svg>
                <p className="mt-2 text-gray-600">
                  Click to upload or drag and drop
                  <br />
                  SVG, PNG, JPG, or GIF (max, 800x400px)
                </p>
              </div>
            </div>

            <div className="mt-10 w-[60%]">
              <label className="block text-gray-700 font-semibold">Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 block w-full bg-[#0000] px-4 py-4 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
