import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);
  
  // Onclicks.
  const handleSubmit = () => {};
  
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setform({ ...form, prompt: randomPrompt });
  };
  
  const generateImage = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] font-mono text-[32px]">
          Create
        </h1>
        <p className="mt-2 text-[#656e75] text-[16px] max-w[500px]">
          Create imaginative and visually stunning images/creations through
          PaintBot powered by DALL-E AI and share them with the Community
        </p>
      </div>
      <form className="mt-16 max-w-3xl " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="uv"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A photo of a white fur monster dog sitting in bright green room"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div
            className="relative bg-gray-50 border border-gray-300 text-gray-900
           text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
           w-64 p-3 h-64 flex justify-center items-center "
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImg && (
              <div
                className="absolute inset-0 z-0 flex justify-center items-center
              rounded-lg bg-[rgba(0,0,0,0.5)]"
              >
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5 ">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-800 font-medium rounded-md text-sm w-full
           sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? "Generating... " : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2  text-[#666e75] text-[13px]">
            Once you have created the image you want, you can share it with
            others in the PaintBot community.
          </p>
          <button
            type="button"
            onClick={generateImage}
            className="mt-3 text-white bg-blue-600 font-medium rounded-md text-sm w-full
           sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing... " : "Share With Others"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
