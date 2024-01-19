import { CheckCircleIcon } from "@heroicons/react/solid";
import React, { useContext, useEffect } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink from react-router-dom
import axios from "axios";
import backend from "../Api";
function CongratzPage() {
  const { formData } = useContext(FormContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      const {
        Fullname,
        DisplayPassword,
        DisplayEmail,
        DisplayProfilePic,
        Bio,
        linkdin_url,
        twitter_url,
        github_url,
        premimum_price,
        standard_price,
        lite_price,
        skills,
        work_email,
      } = formData;

      formDataToSend.append("name", Fullname);
      formDataToSend.append("password", DisplayPassword);
      formDataToSend.append("email", DisplayEmail);
      formDataToSend.append("work_email", work_email);
      formDataToSend.append("coverImage", DisplayProfilePic);
      formDataToSend.append("bio", Bio);
      formDataToSend.append("linkedin_url", linkdin_url);
      formDataToSend.append("twitter_url", twitter_url);
      formDataToSend.append("github_url", github_url);
      formDataToSend.append("premium_price", premimum_price);
      formDataToSend.append("standard_price", standard_price);
      formDataToSend.append("lite_price", lite_price);

      skills.forEach((skill, index) => {
        formDataToSend.append(`skills[${index}]`, skill);
      });
      console.log(formDataToSend.get("coverImage"));
      const response = await axios.post(
        `${backend}/api/auth/register`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response?.status === 201) {
        alert("Succesfull");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      // alert("something went wrong");
    }
  };

  return (
    <>
      <CheckCircleIcon className={classes.bigIcon} />
      <span className={`${classes.container} ${classes.headings}`}>
        {/* <h1>Congratulations, {formData.Fullname}!</h1> */}
        <p>You have completed onboarding, you can start using the Eden!</p>
      </span>
      <button onClick={handleSubmit}>Click here to Submit</button>
    </>
  );
}

export default CongratzPage;
