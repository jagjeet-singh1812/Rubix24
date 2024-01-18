import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./QA.css";
const QA = () => {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <main className="containerx">
          <section className="quiz-containerx">
            <header className="quiz-header">
              <h2>Quiz</h2>
              <div className="quiz-results">
                <p>
                  <strong>Score:</strong> <span className="quiz-score" />
                </p>
              </div>
            </header>
            {/* Quiz form */}
            <form className="quiz-form" autoComplete="off">
              {/* Question */}
              <div className="quiz-question" role="radiogroup">
                <p>
                  Which rapper’s album featured the songs "N.Y. State of Mind"
                  and "It Ain’t Hard to Tell"?
                </p>
                <div className="form-check">
                  <input type="radio" id="q1a" name="q1" defaultValue="A" />
                  <label htmlFor="q1a">Notorius B.I.G.</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q1b" name="q1" defaultValue="B" />
                  <label htmlFor="q1b">Jay-Z</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q1c" name="q1" defaultValue="C" />
                  <label htmlFor="q1c">Nas</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q1d" name="q1" defaultValue="D" />
                  <label htmlFor="q1d">50 Cent</label>
                </div>
              </div>
              {/* end question */}
              {/* Question */}
              <div className="quiz-question" role="radiogroup">
                <p>
                  Who produced "Pony" (Ginuwine), "Big Pimpin’" (Jay-Z), and
                  "Work It" (Missy Elliott)?
                </p>
                <div className="form-check">
                  <input type="radio" id="q2a" name="q2" defaultValue="A" />
                  <label htmlFor="q2a">Dr. Dre</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q2b" name="q2" defaultValue="B" />
                  <label htmlFor="q2b">Timbaland</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q2c" name="q2" defaultValue="C" />
                  <label htmlFor="q2c">Pharrell</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q2d" name="q2" defaultValue="D" />
                  <label htmlFor="q2d">Diddy</label>
                </div>
              </div>
              {/* end question */}
              {/* Question */}
              <div className="quiz-question" role="radiogroup">
                <p>Which singer has been called the Queen of Hip Hop Soul?</p>
                <div className="form-check">
                  <input type="radio" id="q3a" name="q3" defaultValue="A" />
                  <label htmlFor="q3a">Mariah Carey</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q3b" name="q3" defaultValue="B" />
                  <label htmlFor="q3b">Alicia Keys</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q3c" name="q3" defaultValue="C" />
                  <label htmlFor="q3c">Aaliyah</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q3d" name="q3" defaultValue="D" />
                  <label htmlFor="q3d">Mary J. Blige</label>
                </div>
              </div>
              {/* end question */}
              {/* Question */}
              <div className="quiz-question" role="radiogroup">
                <p>Which record label signed Dr. Dre, Tupac, and Snoop Dogg?</p>
                <div className="form-check">
                  <input type="radio" id="q4a" name="q4" defaultValue="A" />
                  <label htmlFor="q4a">Junior Mafia</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q4b" name="q4" defaultValue="B" />
                  <label htmlFor="q4b">Death Row Records</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q4c" name="q4" defaultValue="C" />
                  <label htmlFor="q4c">The Dungeon Family</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="q4d" name="q4" defaultValue="D" />
                  <label htmlFor="q4d">Roc-A-Fella Records</label>
                </div>
              </div>
              {/* end question */}
              <button type="submit">Show results</button>
            </form>
            {/* end quiz */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default QA;
