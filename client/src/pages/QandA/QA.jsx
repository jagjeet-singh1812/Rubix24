import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./QA.css";
import axios from "axios";
import URI from "../../URI";
const QA = () => {
  const [scores, setScores] = useState({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0,
    q9: 0,
    q10: 0,
    q11: 0,
    q12: 0,
  });

  const handleRadioChange = (question, value) => {
    setScores((prevScores) => ({
      ...prevScores,
      [question]: parseInt(value, 10),
    }));
  };

  const calculateTotalScore = () => {
    const totalScore = Object.values(scores).reduce(
      (acc, score) => acc + score,
      0
    );
    return totalScore;
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    console.log("calling ")
    try{
    const totalScore = calculateTotalScore();
    // alert("Form successfully submitted"
    const formdata=new FormData();
    formdata.append("personality_score",totalScore);
    const data=await axios.put(`${URI}/doit/api/mentor-persanality/65a971a591f6ae49b06bbd59`,formdata)   //id = mentor_id
    console.log(data.response);
    console.log(formdata.get("personality_score"));
}
catch(error){
    console.log(error);
    // alert('Something went wronge...')
}}

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <main className="containerx">
          <section className="quiz-containerx">
            <header className="quiz-header">
              <h2>Mentorship Compatibility Questionnaire</h2>
              <div className="quiz-results">
                <p>
                  <strong>Total Score:</strong> {calculateTotalScore()}
                </p>
              </div>
            </header>
            {/* Mentorship Compatibility Form */}
            <form
              className="quiz-form"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              {/* Questions */}
              {questions.map((question, index) => (
                <div key={index} className="quiz-question" role="radiogroup">
                  <p>{question.text}</p>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="form-check">
                      <input
                        type="radio"
                        id={`q${index + 1}${optionIndex + 1}`}
                        name={`q${index + 1}`}
                        value={option.value}
                        onChange={(e) =>
                          handleRadioChange(`q${index + 1}`, e.target.value)
                        }
                      />
                      <label htmlFor={`q${index + 1}${optionIndex + 1}`}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
              {/* Submit button */}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
            {/* End Mentorship Compatibility Form */}
          </section>
        </main>
      </div>
    </div>
  );
};

const questions = [
  {
    text: "How would you describe your mentoring style?",
    options: [
      { label: "Strategic and goal-oriented", value: 3 },
      { label: "Collaborative and supportive", value: 2 },
      { label: "Hands-on and action-oriented", value: 1 },
      { label: "Business and results-driven", value: 4 },
      { label: "Research-oriented and knowledge-focused", value: 5 },
    ],
  },
  {
    text: "In your experience, how do you approach guiding individuals through challenges?",
    options: [
      { label: "Provide strategic advice and planning", value: 3 },
      { label: "Facilitate collaborative problem-solving", value: 2 },
      { label: "Encourage immediate action and decision-making", value: 1 },
      { label: "Mentor for business and entrepreneurship", value: 4 },
      { label: "Mentor for academic and research pursuits", value: 5 },
    ],
  },
  {
    text: "How do you adapt your communication style to best support your mentees?",
    options: [
      { label: "Share precise and detailed information", value: 2 },
      {
        label: "Engage and persuade through effective communication",
        value: 3,
      },
      { label: "Maintain a friendly and approachable demeanor", value: 1 },
      { label: "Communicate for business and networking purposes", value: 4 },
      {
        label: "Foster intellectual discussions for academic growth",
        value: 5,
      },
    ],
  },
  {
    text: "What types of professional or academic changes have you navigated successfully?",
    options: [
      { label: "Embraced and thrived in dynamic environments", value: 3 },
      { label: "Adapted gradually to evolving circumstances", value: 2 },
      { label: "Preferred stability and consistency", value: 1 },
      { label: "Experienced success in entrepreneurial ventures", value: 4 },
      {
        label: "Contributed to advancements in research or academia",
        value: 5,
      },
    ],
  },
  {
    text: "How do you incorporate different learning styles into your mentoring approach?",
    options: [
      { label: "Utilize visual aids and strategic planning", value: 3 },
      { label: "Adapt to various learning preferences", value: 2 },
      { label: "Provide hands-on and practical experiences", value: 1 },
      { label: "Mentor for business skills and entrepreneurship", value: 4 },
      { label: "Foster intellectual and research-based learning", value: 5 },
    ],
  },
  {
    text: "What role do you think collaboration plays in a successful mentor-mentee relationship?",
    options: [
      { label: "Collaborate to achieve shared goals", value: 2 },
      { label: "Balance collaboration and individual growth", value: 3 },
      { label: "Encourage independence and individual initiatives", value: 1 },
      { label: "Mentor for collaborative business ventures", value: 4 },
      {
        label: "Support collaborative research and academic projects",
        value: 5,
      },
    ],
  },
  {
    text: "How do you assist your mentees in effective time management?",
    options: [
      { label: "Set schedules and deadlines for productivity", value: 3 },
      { label: "Guide in prioritizing tasks based on urgency", value: 2 },
      {
        label: "Allow flexibility and adaptability in time management",
        value: 1,
      },
      { label: "Mentor for time-efficient business operations", value: 4 },
      { label: "Support mentees in managing research timelines", value: 5 },
    ],
  },
  {
    text: "What motivates you as a mentor?",
    options: [
      { label: "Seeing mentees achieve recognition and success", value: 3 },
      { label: "Making a positive impact on the lives of mentees", value: 2 },
      { label: "Enjoying the process of mentoring and guiding", value: 1 },
      { label: "Contributing to successful business ventures", value: 4 },
      { label: "Advancing knowledge and research in your field", value: 5 },
    ],
  },
  {
    text: "How do you provide constructive feedback to your mentees?",
    options: [
      { label: "Analyze their performance for improvement", value: 3 },
      {
        label: "Offer constructive criticism with a supportive tone",
        value: 2,
      },
      { label: "Focus on positive reinforcement and encouragement", value: 1 },
      { label: "Provide feedback for successful business outcomes", value: 4 },
      {
        label: "Offer feedback for academic and research advancement",
        value: 5,
      },
    ],
  },
  {
    text: "In which fields do you have the most experience and expertise?",
    options: [
      { label: "Technology and innovation", value: 3 },
      { label: "Social sciences and helping professions", value: 2 },
      { label: "Arts and creativity", value: 1 },
      { label: "Business and entrepreneurship", value: 4 },
      { label: "Science and research", value: 5 },
    ],
  },
  {
    text: "How have you incorporated networking into your professional journey?",
    options: [
      { label: "Proactively sought and initiated connections", value: 3 },
      { label: "Built relationships gradually over time", value: 2 },
      { label: "Preferred a small, close-knit circle", value: 1 },
      { label: "Actively networked for business opportunities", value: 4 },
      { label: "Networked for academic and research collaborations", value: 5 },
    ],
  },
  {
    text: "What are your long-term goals as a mentor?",
    options: [
      { label: "Develop mentees into leaders and managers", value: 3 },
      {
        label: "Make a positive impact on mentees' lives and careers",
        value: 2,
      },
      {
        label: "Enjoy the process of mentoring and guide for personal growth",
        value: 1,
      },
      {
        label: "Mentor for successful business ventures and entrepreneurship",
        value: 4,
      },
      { label: "Contribute to the growth of knowledge and research", value: 5 },
    ],
  },
];


export default QA;
