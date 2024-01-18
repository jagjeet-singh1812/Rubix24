import React, { useContext } from "react";
import FormContext from "../store/form-context";
import classes from "./css/Form.module.css";

function LastForm() {
  const { setFormData, formData, setValidation } = useContext(FormContext);

  const premimumPriceHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      premimum_price: event.target.value,
    }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, premimum_price: false }))
      : setValidation((prevData) => ({ ...prevData, premimum_price: true }));
  };

  const standardPriceHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      standard_price: event.target.value,
    }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, standard_price: false }))
      : setValidation((prevData) => ({ ...prevData, standard_price: true }));
  };

  const litePriceHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      lite_price: event.target.value,
    }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, lite_price: false }))
      : setValidation((prevData) => ({ ...prevData, lite_price: true }));
  };

  const userHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      User: event.target.value,
    }));
    event.target.value === ""
      ? setValidation((prevData) => ({ ...prevData, User: false }))
      : setValidation((prevData) => ({ ...prevData, User: true }));
  };

  return (
    <>
      <span className={classes.container}>
        <p>Premium Price</p>
        <input
          className="inputField"
          type="text"
          placeholder="Enter premium price"
          onChange={premimumPriceHandler}
          value={formData.premimum_price}
        />
      </span>

      <span className={classes.container}>
        <p>Standard Price</p>
        <input
          className="inputField"
          type="text"
          placeholder="Enter standard price"
          onChange={standardPriceHandler}
          value={formData.standard_price}
        />
      </span>

      <span className={classes.container}>
        <p>Lite Price</p>
        <input
          className="inputField"
          type="text"
          placeholder="Enter lite price"
          onChange={litePriceHandler}
          value={formData.lite_price}
        />
      </span>

    </>
  );
}

export default LastForm;
