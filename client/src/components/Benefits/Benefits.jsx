import "./Benefits.css";
const Bene = (props) => {
  return (
    <>
      <div className="containerr">
        <h1>{props.title}</h1>
        <div className="bene_desc">
          {/* <p>
            At MentorConnect, we take pride in being your trusted partner in the
            world of mentorship solutions. When you choose to work with us, you
            benefit from our commitment to excellence, expertise in
            mentor-mentee matching, personalized guidance, and a mentorship
            platform designed for your success. Here are compelling reasons to
            partner with MentorConnect.
          </p> */}
        </div>
        <div className="row_bene">
          <div className="service">
            <i className="fas fa-users"></i>
            <h2>Personalized Mentorship</h2>
            <p>
              Our platform connects you with mentors tailored to your goals and
              aspirations. Receive personalized guidance and support from
              experienced mentors who are dedicated to your success.
            </p>
          </div>
          <div className="service">
            <i className="fas fa-comments"></i>
            <h2>Effective Communication</h2>
            <p>
              We emphasize open and effective communication between mentors and
              mentees. Foster meaningful connections, engage in insightful
              discussions, and make the most of your mentorship experience.
            </p>
          </div>
          <div className="service">
            <i className="fas fa-shield-alt"></i>
            <h2>Confidentiality and Trust</h2>
            <p>
              Your privacy is our priority. We uphold strict confidentiality
              standards to ensure a safe and trustworthy environment for
              mentor-mentee interactions. Your information is secure with us.
            </p>
          </div>
          <div className="service">
            <i className="fas fa-clock"></i>
            <h2>Flexible Scheduling</h2>
            <p>
              Life is busy, and we understand that. Our platform allows for
              flexible scheduling of mentorship sessions, enabling you to make
              the most of your mentorship experience at your convenience.
            </p>
          </div>
          <div className="service">
            <i className="fas fa-chalkboard-teacher"></i>
            <h2>Expert Guidance</h2>
            <p>
              Access expert guidance from mentors with diverse backgrounds and
              experiences. Benefit from their knowledge, skills, and insights to
              accelerate your personal and professional growth.
            </p>
          </div>
          <div className="service">
            <i className="fas fa-heart"></i>
            <h2>Supportive Community</h2>
            <p>
              Join a supportive community of mentees and mentors. Network with
              like-minded individuals, share experiences, and build valuable
              connections that extend beyond your mentorship journey.
            </p>
          </div>
          <div className="service">
            <i className="fas fa-graduation-cap"></i>
            <h2>Continuous Learning</h2>
            <p>
              Engage in continuous learning and skill development. Our
              mentorship platform encourages a culture of lifelong learning,
              helping you stay updated on industry trends and advancements.
            </p>
          </div>

          <div className="service">
            <i className="fas fa-check-circle"></i>
            <h2>Goal Achievement</h2>
            <p>
              Our mentorship platform is dedicated to helping you achieve your
              goals. Benefit from structured guidance, actionable insights, and
              a roadmap designed to lead you towards success in your personal
              and professional endeavors.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bene;
