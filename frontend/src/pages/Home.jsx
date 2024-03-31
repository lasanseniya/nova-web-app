import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import {
  FaBook,
  FaQuestion,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa";

function Feature({ Icon, text }) {
  return (
    <div className="mt-12 flex h-60 w-60 flex-col items-center justify-center rounded-lg border-4 border-transparent bg-blue-300 text-white transition-colors duration-300 hover:border-indigo-900">
      <Icon className="text-4xl text-black" />
      <p className="mt-2 text-black">{text}</p>
    </div>
  );
}

Feature.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a4472] via-[#031f54] to-[#000714]">
      <div className="flex flex-col items-center sm:flex-col sm:justify-center">
        <p className="text-center text-2xl font-bold text-white sm:text-5xl md:mt-12">
          Welcome to Nova!
        </p>
        <p className="text-md mt-4 text-center text-indigo-600 sm:text-xl">
          Generate study notes straight from your favorite tutorials on YouTube
        </p>
      </div>

      <div className="mt-4 flex flex-col justify-center sm:space-x-4 md:flex-row">
        <Feature Icon={FaBook} text="Structured study notes" />
        <Feature Icon={FaQuestion} text="Cue questions" />
        <Feature Icon={FaClipboardList} text="Summary" />
      </div>
      <button
        className="mt-2 mt-9 flex items-center rounded-lg border-2 border-blue-500 bg-transparent p-3 text-sm tracking-wider text-white sm:text-base"
        onClick={() => navigate("/login")}
      >
        Get started
        <FaArrowRight className="ml-1" />
      </button>
    </div>
  );
}

export default LandingPage;
