import React, { useState } from "react";
import FormContext from "./form-context";

function FormProvider({ children }) {
  const defaultDataState = {
    Fullname: "",
    DisplayPassword: "",
    DisplayEmail: "",
    DisplayProfilePic: null,
    Bio: "",
    linkdin_url: "",
    twitter_url: "",
    github_url: "",
    premimum_price: "",
    standard_price: "",
    lite_price: "",
    skills: [],
  };

  const defaultValidationState = {
    Fullname: false,
    DisplayPassword: false,
    DisplayEmail: false,
    DisplayProfilePic: false,
    Bio: false,
    linkdin_url: false,
    twitter_url: false,
    github_url: false,
    premimum_price: false,
    standard_price: false,
    lite_price: false,
    skills:false,
  };

  const [page, setPage] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [formData, setFormData] = useState(defaultDataState);
  const [validation, setValidation] = useState(defaultValidationState);

  const validate = (a) =>
    Object.values(a).reduce((sum, next) => sum && next, true);

  const resetDataState = () => {
    setFormData(defaultDataState);
    setValidation(defaultValidationState);
  };

  const setCurrentPage = (val) => {
    setPage(val);
  };

  const initialValue = {
    formData,
    page,
    numOfPages: 5, // Adjust this based on the actual number of pages
    finalData,
    validation,
    setCurrentPage,
    setFormData,
    resetDataState,
    setFinalData,
    setValidation,
    validate,
  };

  return (
    <FormContext.Provider value={initialValue}>{children}</FormContext.Provider>
  );
}

export default FormProvider;
