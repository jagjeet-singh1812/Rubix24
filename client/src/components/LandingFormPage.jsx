import React, { useContext } from "react";
import PaginateBar from "./PaginateBar";
import classes from "./css/LandingFormPage.module.css";
import UserNameForm from "./UserNameForm";
import WorkspaceForm from "./WorkspaceForm";
import UsageForm from "./UsageForm";
import CongratzPage from "./CongratzPage";
import FormContext from "../store/form-context";
import LastForm from "./LastForm";

function LandingFormPage() {
  const {
    page,
    setCurrentPage,
    numOfPages,
    formData,
    setFinalData,
    resetDataState,
    validate,
    validation,
  } = useContext(FormContext);

  const pageSet = () => {
    if (page === numOfPages) {
      // If we are already on the last page
      if (validate(validation)) {
        // Submit the form directly when on the last page and the form is valid
        setFinalData((current) => [...current, formData]);
        resetDataState();
        alert("Form submitted!"); // You can replace this with your actual submit logic
      } else {
        alert("Your form is incomplete");
      }
    } else if (page < numOfPages) {
      setCurrentPage(page + 1); // Jump to the next page if not on the last page
    }
  };

  return (
    <div className={classes.form}>
      <PaginateBar />
      <div className="card">
        {page === 1 && <UserNameForm />}
        {page === 2 && <WorkspaceForm />}
        {page === 3 && <UsageForm />}
        {page === 4 && <LastForm />}
        {page === 5 && <CongratzPage />}
      </div>
      {/* <button className="button" onClick={pageSet}>
        {page === numOfPages-1 ? `Submit` : (page===numOfPages)?`Hooray`:`Next`}
      </button> */}
      {page <= numOfPages - 1 && (
        <button className="button" onClick={pageSet}> Next
        </button>
      )}
    </div>
  );
}

export default LandingFormPage;
