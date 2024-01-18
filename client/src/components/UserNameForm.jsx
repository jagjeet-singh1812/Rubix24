import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function UserNameForm() {
  const {setFormData, formData, setValidation} = useContext(FormContext);


  const fullNameHandler = (event)=> {
    setFormData(prevData => ({...prevData, Fullname:event.target.value}));
    event.target.value === '' ? setValidation(prevData => ({...prevData, Fullname:false})) : setValidation(prevData => (({...prevData, Fullname:true})));
  }

  const displayPasswordHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      DisplayPassword: event.target.value,
    }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, DisplayPassword: false }))
      : setValidation((prevData) => ({ ...prevData, DisplayPassword: true }));
  };

  const displayEmailHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      DisplayEmail: event.target.value,
    }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, DisplayEmail: false }))
      : setValidation((prevData) => ({ ...prevData, DisplayEmail: true }));
  };


  const displayProfilePicHandler = (event) => {
      setFormData((prevData) => ({
        ...prevData,
        DisplayProfilePic: event.target.files[0],
      }));

      // event.target.files[0] && console.log(formData.DisplayProfilePic);

      event.target.files[0]
        ? setValidation((prevData) => ({
            ...prevData,
            DisplayProfilePic: false,
          }))
        : setValidation((prevData) => ({
            ...prevData,
            DisplayProfilePic: true,
          }));
  };


  return (
    <>
      {/* <span className={`${classes.container} ${classes.headings}`}>
        <h1>Welcome! First things first...</h1>
        <p>You can always change them later.</p>
      </span> */}

      <span className={classes.container}>
        <p>Full Name</p>
        <input
          className="inputField"
          type="text"
          placeholder="Steve Jobs"
          onChange={fullNameHandler}
          value={formData.Fullname}
        />
      </span>

      <span className={classes.container}>
        <p>Email</p>
        <input
          className="inputField"
          type="email"
          placeholder="xyz@gmail.com"
          onChange={displayEmailHandler}
          value={formData.DisplayEmail}
        />
      </span>

      <span className={classes.container}>
        <p>Password</p>
        <input
          className="inputField"
          type="password"
          onChange={displayPasswordHandler}
          value={formData.DisplayPassword}
        />
      </span>

      <span className={classes.container}>
        <p>Profile Pic</p>
        <input
          name="DisplayProfilePic"
          className="inputField"
          type="file"
          onChange={displayProfilePicHandler}
        />
      </span>
    </>
  );
}

export default UserNameForm;
