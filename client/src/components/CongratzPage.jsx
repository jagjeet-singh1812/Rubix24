import { CheckCircleIcon } from "@heroicons/react/solid";
import React, { useContext, useEffect } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink from react-router-dom
import axios from 'axios'

function CongratzPage() {

  const { formData } = useContext(FormContext);
 
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:8090/api/auth/register",
        formData
      );
      if (response?.status === 201) {
       // navigate("/");
      }
    } catch (error) {
      console.log(error);
      // alert("something went wrong");
    }
  }; 
 
  return (
    <>
      <CheckCircleIcon className={classes.bigIcon}/>
      <span className={`${classes.container} ${classes.headings}`}>
        {/* <h1>Congratulations, {formData.Fullname}!</h1> */}
        <p>You have completed onboarding, you can start using the Eden!</p>
      </span>
      <button onClick={handleSubmit}>Click here to Submit</button>
    </>
  );
}

export default CongratzPage;
