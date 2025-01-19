"use client";
import React, { useState } from "react";
import { Label } from "./label"; // Correct path for Label
import { Input } from "./input"; // Correct path for Input
import { cn } from "../../lib/utils";

export default function SignupFormDemo() {
  const [formData, setFormData] = useState({
    fullname: "",
    department: "",
    year: "",
    gender: "",
    collegename: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!formData.department.trim()) newErrors.department = "Department is required.";
    if (!formData.year.trim()) newErrors.year = "Year is required.";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required.";
    if (!formData.collegename.trim()) newErrors.collegename = "college Name is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
    } else {
      console.log("Validation errors", errors);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black text-white">
      <h2 className="font-bold text-3xl text-neutral-100">Welcome to Trojans</h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="fullname" className="text-neutral-400 text-sm max-w-sm mt-2">
            Full Name
          </Label>
          <Input
            id="fullname"
            placeholder="Tyler Durden"
            type="text"
            className="bg-neutral-800 text-neutral-100"
            value={formData.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>}
        </LabelInputContainer>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="department" className="text-neutral-400 text-sm max-w-sm mt-2">
              Department
            </Label>
            <select
              id="department"
              className="bg-neutral-800 text-neutral-100 rounded-md p-2"
              value={formData.department}
              onChange={handleChange}
            >
             <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="IT">IT</option>
                <option value="MECH">MECH</option>
                <option value="AIDS">AIDS</option>
                <option value="AIML">AIML</option>
                <option value="CZ">CZ</option>
                <option value="CSBS">CSBS</option>
            </select>
            {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="year" className="text-neutral-400 text-sm max-w-sm mt-2">
              Year
            </Label>
            <select
              id="year"
              className="bg-neutral-800 text-neutral-100 rounded-md p-2"
              value={formData.year}
              onChange={handleChange}
            >
              <option value="">Select Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
            {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="gender" className="text-neutral-400 text-sm max-w-sm mt-2">
            Gender
          </Label>
          
          <select
            id="gender"
            className="bg-neutral-800 text-neutral-100 rounded-md p-2 "
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Prefer not to say</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="collegename" className="text-neutral-400 text-sm max-w-sm mt-2">
            Your College Name
          </Label>
          <Input
            id="collegename"
            placeholder="Chennai Institute Of Technology"
            type="text"
            className="bg-neutral-800 text-neutral-100"
            value={formData.collegename}
            onChange={handleChange}
          />
          {errors.collegename && <p className="text-red-500 text-xs mt-1">{errors.collegename}</p>}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)inset,0px-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};