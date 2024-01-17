import "../components/css/Mentorpage.css";
import LogoHeader from "../components/LogoHeader";
import LandingFormPage from "../components/LandingFormPage";
import FormProvider from "../store/FormProvider";

function MentorPage() {
  return (
    <FormProvider>
      <div className="app">
        <LogoHeader />
        <LandingFormPage />
      </div>
    </FormProvider>
  );
}

export default MentorPage;
