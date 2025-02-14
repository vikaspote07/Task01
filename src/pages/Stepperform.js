import React, { useState } from "react";
import Personaldetails from "./stepperform/personaldetails";
import Countrydetails from "./stepperform/countrydetails";
import Skillsdetails from "./stepperform/skillsdetails";
import Credentaildetails from "./stepperform/credentaildetails";
import { useNavigate } from "react-router-dom";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import Layout from "../component/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const steps = [
  "Personal Information",
  "Details",
  "Skills Details",
  "Credentail Details",
];

export default function Stepperform() {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phoneNumber: "",
    countryId: "",
    stateId: "",
    skills: [],
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            {" "}
            <Personaldetails formData={formData} setFormData={setFormData} />
          </>
        );
      case 1:
        return (
          <>
            <Countrydetails formData={formData} setFormData={setFormData} />
          </>
        );
      case 2:
        return (
          <>
            {" "}
            <Skillsdetails formData={formData} setFormData={setFormData} />
          </>
        );
      case 3:
        return (
          <>
            <Credentaildetails formData={formData} setFormData={setFormData} />
          </>
        );
      default:
        return "Unknown step";
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //confirm password

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("authToken"));
    const formDataToSend = new FormData();

    if (!validateEmail(formData.email)) {
      return toast.error("Please enter a valid email address");
    }

    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("password", formData.password);
    formDataToSend.append(
      "password_confirmation",
      formData.password_confirmation
    );

    formDataToSend.append("skills", formData.skills);
    if (formData.photo) {
      formDataToSend.append("photo", formData.photo);
    }
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("countryId", formData.countryId);
    formDataToSend.append("stateId", formData.stateId);
    formDataToSend.append("token", token);
    const url = process.env.REACT_APP_BASE_URL;
    // console.log(url)
    try {
      const response = await fetch(`${url}/register`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Registration successful");
        navigate("/List");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred during registration");
    }
  };

  return (
    <Layout>
      <Toaster position="top-center" />
      <div className="bg-white p-4 mb-2 rounded-lg dark:border-gray-700 mt-14">
        <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white text-left dark:hover:text-white text-[1.125rem] font-semibold">
          Stepper Form
        </h3>
      </div>
      <div className="bg-white p-4 rounded-lg dark:border-gray-700 mb-2">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="bg-white p-4 rounded-lg dark:border-gray-700">
        {activeStep === steps.length ? (
          <div className="flex justify-center w-full mt-5">
            <div className="p-8 m-4">
              <Typography variant="h5" className="mt-10 mb-10 pb-10">
                Thank you for submitting the form!
              </Typography>
              <Link
                to="/List"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                View List
              </Link>
            </div>
          </div>
        ) : (
          <>
            <Typography variant="h5">{getStepContent(activeStep)}</Typography>
            <div className="flex justify-center">
              <div className="flex justify-between w-full mt-4">
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={
                    activeStep === steps.length - 1 ? handleSubmit : handleNext
                  }
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
