import "../components/css/Mentorpage.css";
import LogoHeader from "../components/LogoHeader";
import LandingFormPage from "../components/LandingFormPage";
import FormProvider from "../store/FormProvider";
import Navigation from "../components/Nav/Nav";

function MentorPage() {
  return (
    <FormProvider>
      <Navigation />
      <div className="temp"></div>
      <div className="app">
        {/* <LogoHeader /> */}
        <LandingFormPage />
      </div>
    </FormProvider>
  );
}

export default MentorPage;
