import { useState } from "react";
// import Slider from '../../components/Slider/Slider'
import { motion } from "framer-motion";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import SearchForm from "../../components/SearchForm";
import TypingEffect from "../../components/Teffect";
import Bene from "../../components/Benefits/Benefits";

import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Drawer from "../../components/Drawer";
import Navigation from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer"
const Home = () => {
  const navigate = useNavigate();
  const [cou, setcou] = useState(true);
  const divVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
    rebound: {
      y: 20,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 30,
      },
    },
  };

  const handleRebound = () => {
    return divVariants.rebound;
  };

  const scrollToTopAndNavigate = (url) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(url);
    }, 500);
  };

  return (
    <div>
      <Navigation/>
      <div className="temp"></div>
      {/* <Slider/> */}
      <div className="main_divv">
        <motion.div
          initial="initial"
          animate="animate"
          variants={divVariants}
          onAnimationComplete={handleRebound}
        >
          <div className="outer_text_home">
            {/* <h1 className="linear">
              Elevate Your Skills with Personalized Mentorship Across Every
              Discipline!
            </h1> */}
            {/* <Effect /> */}
            <TypingEffect
              text={
                "Elevate Your Skills with Personalized Mentorship Across Every Feild!"
              }
            />
            <p className="light centerone">
              Embark on a journey of growth and success! Acquire new skills,
              kickstart exciting projects, and achieve your career aspirations
              with personalized mentorship.
            </p>
            <div className="search_form"><SearchForm /></div>
        
          </div>
        </motion.div>
      </div>

      <h2 className="mb-4  text-center text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Transformation by the numbers
      </h2>
      <ScrollTrigger
        onEnter={() => {
          setcou(true);
          console.log("in");
        }}
        onExit={() => setcou(false)}
      >
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  <span>
                    {cou && <Countup start={0} end={73} duration={3}></Countup>}
                  </span>
                  k+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Mentors
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  <span>
                    {cou && <Countup start={0} end={34} duration={3}></Countup>}
                  </span>
                  k+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Mentee
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  <span>
                    {cou && <Countup start={0} end={70} duration={3}></Countup>}
                  </span>
                  k+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  organizations
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </ScrollTrigger>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Elevate Your Mentorship Experience with Personalized Dashboards.
            </h2>
            <p className="mb-6 font-light text-gray-600 md:text-lg dark:text-gray-400">
              Mentor Connect empowers you to create and achieve your mentorship
              goals through personalized dashboards. Connect with your mentor,
              set meaningful objectives, and track your progress seamlessly.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-dark-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
          <div className="font-light text-dark-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
        </div>
      </section>

      <div className="btn_sections">
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-primary rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 bg-blue-700 hover:bg-blue-800 text-white "
          onClick={() => scrollToTopAndNavigate("find_mentor")}
        >
          Get a Mentor
        </button>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-primary rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 bg-blue-700 hover:bg-blue-800 text-white "
         onClick={() => scrollToTopAndNavigate("mentor_page")}
        >
          Become a Mentor
        </button>

      </div>

      <Bene title="Why Choose us ?" />
      <Footer/>
    </div>

  );
};

export default Home;
