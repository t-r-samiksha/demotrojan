"use client";
import React, { useState } from "react";
import { Label } from "./label"; // Correct path for Label
import { Input } from "./input"; // Correct path for Input
import { cn } from "../../lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

export default function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    collegename: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstname.trim()) newErrors.firstname = "First name is required.";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
    if (!formData.collegename.trim()) newErrors.collegename = "College name is required.";

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
      <p className="text-neutral-400 text-sm max-w-sm mt-2">
        Login to Trojans if you to register the events exclusively !
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-neutral-400 text-sm max-w-sm mt-2">
              First name
            </Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              className="bg-neutral-800 text-neutral-100"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-neutral-400 text-sm max-w-sm mt-2">
              Last name
            </Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              className="bg-neutral-800 text-neutral-100"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-400 text-sm max-w-sm mt-2">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            className="bg-neutral-800 text-neutral-100"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-neutral-400 text-sm max-w-sm mt-2">
            Password
          </Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            className="bg-neutral-800 text-neutral-100"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
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
  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
  type="submit"
>
  Sign up &rarr;
  <BottomGradient />
</button>

<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
<div className="flex flex-col space-y-4">
  {[
    { icon: IconBrandGithub, label: "GitHub" },
    { icon: IconBrandGoogle, label: "Google" },
  ].map(({ icon: Icon, label }, index) => (
    <button
      key={index}
      className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-input bg-neutral-800 dark:bg-zinc-800 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      type="button"
    >
      <Icon className="h-4 w-4 text-neutral-100" />
      <span className="text-neutral-100 text-sm">{label}</span>
      <BottomGradient />
    </button>
  ))}
</div>
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
