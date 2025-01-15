import React, { useState } from "react";
import { Label } from "./label"; // Correct path for Label
import { Input } from "./input"; // Correct path for Input
import { cn } from "../../lib/utils";

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    collegename: "",
    department: "",
    year: "I",
    phonenumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.collegename.trim()) newErrors.collegename = "College name is required.";
    if (!formData.department.trim()) newErrors.department = "Department is required.";
    if (!formData.phonenumber.trim()) {
      newErrors.phonenumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = "Phone number must be 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      onClose(); // Close the modal on successful submission
    } else {
      console.log("Validation errors", errors);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Register for the Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="collegename">College Name</Label>
            <Input
              id="collegename"
              type="text"
              value={formData.collegename}
              onChange={handleChange}
              className="w-full mt-1"
            />
            {errors.collegename && <p className="text-red-500 text-sm">{errors.collegename}</p>}
          </div>
          <div className="mb-4">
            <Label htmlFor="department">Department</Label>
            <Input
              id="department"
              type="text"
              value={formData.department}
              onChange={handleChange}
              className="w-full mt-1"
            />
            {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
          </div>
          <div className="mb-4">
            <Label htmlFor="year">Year</Label>
            <select
              id="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md p-2"
            >
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
          </div>
          <div className="mb-4">
            <Label htmlFor="phonenumber">Phone Number</Label>
            <Input
              id="phonenumber"
              type="tel"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-full mt-1"
            />
            {errors.phonenumber && (
              <p className="text-red-500 text-sm">{errors.phonenumber}</p>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
