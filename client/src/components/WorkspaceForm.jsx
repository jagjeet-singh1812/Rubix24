import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function WorkspaceForm() {
  const { setFormData, formData, setValidation } = useContext(FormContext);

  const workEmailHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      work_email: event.target.value,
    }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, work_email: false }))
      : setValidation((prevData) => ({ ...prevData, work_email: true }));
  };

  const jobTitleHandler = (event) => {
    setFormData((prevData) => ({ ...prevData, job_title: event.target.value }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, job_title: false }))
      : setValidation((prevData) => ({ ...prevData, job_title: true }));
  };

  //  const skillsHandler = (event) => {
  //   const selectedSkills = Array.from(event.target.selectedOptions, (option) => option.value);
  //   setFormData((prevData) => ({ ...prevData, skills: selectedSkills }));
  //   selectedSkills.length === 0
  //     ? setValidation((prevData) => ({ ...prevData, skills: false }))
  //     : setValidation((prevData) => ({ ...prevData, skills: true }));
  // };

    const skillsHandler = (event) => {
    const selectedSkills = Array.from(event.target.selectedOptions, (option) => option.value);
    setFormData((prevData) => ({ ...prevData, skills: selectedSkills }));
    selectedSkills.length === 0
      ? setValidation((prevData) => ({ ...prevData, skills: false }))
      : setValidation((prevData) => ({ ...prevData, skills: true }));
  };


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

  return (
    <>
      {/* <span className={`${classes.container} ${classes.headings}`}>
        <h1>Welcome! First things first...</h1>
        <p>You can always change them later.</p>
      </span> */}

      <span className={classes.container}>
        <p>Work Email</p>
        <input
          className="inputField"
          type="email"
          placeholder="work_email@example.com"
          onChange={workEmailHandler}
          value={formData.work_email}
        />
      </span>

      <span className={classes.container}>
        <p>Job Title</p>
        <select
          className="inputField"
          onChange={jobTitleHandler}
          value={formData.job_title}
        >
          <option value="">Select Job Title</option>
          <option value="Academic">Academic</option>
          <option value="Tech">Tech</option>
          <option value="Career">Career</option>
        </select>
      </span>

      <span className={classes.container}>
        <p>Skills</p>
        <div className={classes.skillsContainer}>
          <select
            className={`inputField ${classes.skillsDropdown}`}
            multiple
            onChange={skillsHandler}
            value={formData.skills}
          >
            {/* Populate options based on your skills data */}
            {/* For example: */}
            <option value="Skill1">Skill 1</option>
            <option value="Skill2">Skill 2</option>
            <option value="Skill1">Skill 1</option>
            <option value="Skill2">Skill 2</option>
            <option value="Skill1">Skill 1</option>
            <option value="Skill2">Skill 2</option>
            {/* Add more skills options as needed */}
          </select>
          <div className={classes.selectedSkills}>
            {formData?.skills?.map((skill) => (
              <span key={skill} className={classes.selectedSkill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </span>

      {/* <span className={classes.container}>
        <p>Skills</p>
        <select
          className="inputField"
          multiple
          onChange={skillsHandler}
          value={formData.skills}
        >

          <option value="Skill1">Skill 1</option>
          <option value="Skill2">Skill 2</option>
        </select>
      </span> */}

      {/* <span className={classes.container}>
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
      </span> */}
    </>
  );
}

export default WorkspaceForm;
