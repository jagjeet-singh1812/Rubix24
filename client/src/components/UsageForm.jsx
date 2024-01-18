import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function UsageForm() {
  const { setFormData, formData, setValidation } = useContext(FormContext);

  const bioHandler = (event) => {
    setFormData((prevData) => ({ ...prevData, Bio: event.target.value }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, Bio: false }))
      : setValidation((prevData) => ({ ...prevData, Bio: true }));
  };

  const linkedinUrlHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      linkdin_url: event.target.value,
    }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, linkdin_url: false }))
      : setValidation((prevData) => ({ ...prevData, linkdin_url: true }));
  };

  const twitterUrlHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      twitter_url: event.target.value,
    }));
  };

  const githubUrlHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      github_url: event.target.value,
    }));
  };

  return (
    <>
      <span className={classes.container}>
        <p>Bio</p>
        <textarea
          className="inputField"
          onChange={bioHandler}
          value={formData.Bio}
        />
      </span>

      <span className={classes.container}>
        <p>LinkedIn URL</p>
        <input
          className="inputField"
          type="text"
          placeholder="https://www.linkedin.com/in/your-profile"
          onChange={linkedinUrlHandler}
          value={formData.linkdin_url}
        />
      </span>

      <span className={classes.container}>
        <p>Twitter URL (Optional)</p>
        <input
          className="inputField"
          type="text"
          placeholder="https://twitter.com/your-handle"
          onChange={twitterUrlHandler}
          value={formData.twitter_url}
        />
      </span>

      <span className={classes.container}>
        <p>GitHub URL (Optional)</p>
        <input
          className="inputField"
          type="text"
          placeholder="https://github.com/your-username"
          onChange={githubUrlHandler}
          value={formData.github_url}
        />
      </span>
    </>
  );
}

export default UsageForm;
