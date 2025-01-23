import React, { useState } from "react";
import "./RegistrationForm.scss"; // Importing the CSS file

const RegistrationForm = ({
  closeModal,
  showToast,

  userId,
  setEventsRegistered,
  event,
  setIsFirstSubmissionMain,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    department: "",
    gender: "",
    collegename: "",
    mobilenumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.year.trim()) newErrors.year = "Year is required.";
    if (!formData.department.trim())
      newErrors.department = "Department is required.";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required.";
    if (!formData.collegename.trim())
      newErrors.collegename = "College name is required.";
    if (!formData.mobilenumber.trim()) {
      newErrors.mobilenumber = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobilenumber)) {
      newErrors.mobilenumber = "Invalid mobile number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const validateField = (fieldId) => {
    const newErrors = { ...errors };
  
    switch (fieldId) {
      case "name":
        if (!formData.name.trim()) {
          newErrors.name = "Name is required.";
        } else {
          delete newErrors.name;
        }
        break;
  
      case "year":
        if (!formData.year.trim()) {
          newErrors.year = "Year is required.";
        } else {
          delete newErrors.year;
        }
        break;
  
      case "department":
        if (!formData.department.trim()) {
          newErrors.department = "Department is required.";
        } else {
          delete newErrors.department;
        }
        break;
  
      case "gender":
        if (!formData.gender.trim()) {
          newErrors.gender = "Gender is required.";
        } else {
          delete newErrors.gender;
        }
        break;
  
      case "collegename":
        if (!formData.collegename.trim()) {
          newErrors.collegename = "College name is required.";
        } else {
          delete newErrors.collegename;
        }
        break;
  
      case "mobilenumber":
        if (!formData.mobilenumber.trim()) {
          newErrors.mobilenumber = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(formData.mobilenumber)) {
          newErrors.mobilenumber = "Invalid mobile number.";
        } else {
          delete newErrors.mobilenumber;
        }
        break;
  
      default:
        break;
    }
  
    setErrors(newErrors);
    return !newErrors[fieldId]; 
  };
  
  const handleNextClick = (e, fieldId, nextCheckboxId) => {
    e.preventDefault();
    const isValid = validateField(fieldId); 
    if (isValid) {
      document.getElementById(nextCheckboxId).checked = true; 
    }
  };
  
  
  
  const handleRegisterSubmit = async (eventData) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/registered/register-event`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: userId,
            event_name: event,
            name: formData.name,
            gender: formData.gender,
            college_name: formData.collegename,
            year: formData.year,
            department: formData.department,
            phone_number: formData.mobilenumber,
          }),
        }
      );

      if (response.ok) {
        const res= await response.json();
        setIsFirstSubmissionMain(false);
        setEventsRegistered(res.user.events);
        
      } else {
        console.error("Failed to register for events.");
      }
    } catch (error) {
      console.error("Error registering for events:", error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      closeModal();
      handleRegisterSubmit(formData);
      showToast("User Registeration Successfull !");
    } else {
      console.log("Validation errors", errors);
    }
  };

  return (
    <div className="bady">
      <input className="c-checkbox" type="checkbox" id="start" />
      <input className="c-checkbox" type="checkbox" id="progress2" />
      <input className="c-checkbox" type="checkbox" id="progress3" />
      <input className="c-checkbox" type="checkbox" id="progress4" />
      <input className="c-checkbox" type="checkbox" id="progress5" />
      <input className="c-checkbox" type="checkbox" id="progress6" />
      <input className="c-checkbox" type="checkbox" id="finish" />
      <div className="c-form__progress" />
      <div className="c-formContainer">
        <div className="c-welcome">
          <div>
            {" "}
            Secure Your Spot Today - Complete Your Event Registration Below!{" "}
          </div>
          <button className="agree-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <form className="c-form" onSubmit={handleSubmit}>
          <div className="c-form__group">
            <label className="c-form__label" htmlFor="name">
              <input
                type="text"
                id="name"
                className="c-form__input"
                placeholder=" "
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label className="c-form__next" htmlFor="progress2" role="button" onClick={(e) => handleNextClick(e, "name", "progress2")}>
                <span className="c-form__nextIcon" />
              </label>
              <span className="c-form__groupLabel">Enter your name</span>
              <b className="c-form__border" />
            </label>
            {errors.name && (
              <p className="error-message">{errors.name}</p>
            )}
          </div>

          <div className="c-form__group">
            <label className="c-form__label" htmlFor="department">
              <select
                id="department"
                className="c-form__input"
                required
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
                {/* Add more departments as needed */}
              </select>
              <label className="c-form__next" htmlFor="progress3" role="button" onClick={(e) => handleNextClick(e, "department", "progress3")}>
                <span className="c-form__nextIcon"  />
              </label>
              <span className="c-form__groupLabel">Select Department</span>
              <b className="c-form__border" />
            </label>
            {errors.department && (
              <p className="error-message">{errors.department}</p>
            )}
          </div>

          <div className="c-form__group">
            <label className="c-form__label" htmlFor="gender">
              <select
                id="gender"
                className="c-form__input"
                required
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Prefer not to say</option>
              </select>
              <label className="c-form__next" htmlFor="progress4" role="button" onClick={(e) => handleNextClick(e, "gender", "progress4")}>
                <span className="c-form__nextIcon" />
              </label>
              <span className="c-form__groupLabel">Select Gender</span>
              <b className="c-form__border" />
            </label>
            {errors.gender && (
              <p className="error-message">{errors.gender}</p>
            )}
          </div>

          <div className="c-form__group">
            <label className="c-form__label" htmlFor="year">
              <select
                id="year"
                className="c-form__input"
                required
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
              <label className="c-form__next" htmlFor="progress5" role="button" onClick={(e) => handleNextClick(e, "year", "progress5")}>
                <span className="c-form__nextIcon" />
              </label>
              <span className="c-form__groupLabel">Select Year</span>
              <b className="c-form__border" />
            </label>
            {errors.year && (
              <p className="error-message">{errors.year}</p>
            )}
          </div>

          <div className="c-form__group">
            <label className="c-form__label" htmlFor="collegename">
              <input
                type="text"
                id="collegename"
                className="c-form__input"
                placeholder=" "
                required
                value={formData.collegename}
                onChange={handleChange}
              />
              <label className="c-form__next" htmlFor="progress6" role="button" onClick={(e) => handleNextClick(e, "collegename", "progress6")}>
                <span className="c-form__nextIcon" />
              </label>
              <span className="c-form__groupLabel">
                Enter your college name
              </span>
              <b className="c-form__border" />
            </label>
            {errors.collegename && (
              <p className="error-message">{errors.collegename}</p>
            )}
          </div>

          <div className="c-form__group">
            <label className="c-form__label" htmlFor="mobilenumber">
              <input
                type="text"
                id="mobilenumber"
                className="c-form__input"
                placeholder=" "
                required
                value={formData.mobilenumber}
                onChange={handleChange}
              />
              <label className="c-form__next" htmlFor="finish" role="button" onClick={(e) => handleNextClick(e, "mobilenumber", "finish")}>
                <span className="c-form__nextIcon" />
              </label>

              <span className="c-form__groupLabel">
                Enter your mobile number
              </span>
              <b className="c-form__border" />
            </label>
            {errors.mobilenumber && (
              <p className="error-message">{errors.mobilenumber}</p>
            )}
          </div>

          <label className="c-form__toggle" htmlFor="start">
            Register
            <span className="c-form__toggleIcon" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
