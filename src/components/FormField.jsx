import React,{useContext,useEffect} from "react";
import {themes,ThemeContext} from "../components/ThemeContext"

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  const {theme,toggleTheme}=useContext(ThemeContext);
  const body=document.body;
  useEffect(()=>{
    if(theme===themes.light){
      body.classList.add("dark");
      body.classList.remove("light");
    }else{
      body.classList.add("light");
      body.classList.remove("dark");
    }
  },[theme])
  return (
    <div>
      <div className="flex item-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium "
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649f] outline-none block w-full p-3 border"
      />
    </div>
  );
};

export default FormField;
