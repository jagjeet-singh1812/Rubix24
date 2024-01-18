import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Analydash.css";
const AnalyDash = () => {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-30">
        <section className="dashboard">
          <div className="top">
            <i className="uil uil-bars sidebar-toggle" />
            <div className="search-box">
              <i className="uil uil-search" />
              <input type="text" placeholder="Search here..." />
            </div>
            {/*<img src="images/profile.jpg" alt="">*/}
          </div>
          <div className="dash-content">
            <div className="overview">
              <div className="title">
                <i className="uil uil-tachometer-fast-alt" />
                <span className="text">Dashboard</span>
              </div>
              <div className="boxes">
                <div className="box box1">
                  <i className="uil uil-thumbs-up" />
                  <span className="text">Total Likes</span>
                  <span className="number">50,120</span>
                </div>
                <div className="box box2">
                  <i className="uil uil-comments" />
                  <span className="text">Comments</span>
                  <span className="number">20,120</span>
                </div>
                <div className="box box3">
                  <i className="uil uil-share" />
                  <span className="text">Total Share</span>
                  <span className="number">10,120</span>
                </div>
              </div>
            </div>
            <div className="activity">
              <div className="title">
                <i className="uil uil-clock-three" />
                <span className="text">Recent Activity</span>
              </div>
              <div className="activity-data"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnalyDash;
