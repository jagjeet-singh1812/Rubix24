import React from "react";
import "./Terms.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import URI from "../../URI";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const Terms = () => {
  const handleSubmit = async () => {
    try {
      const key = localStorage.getItem("key");
      const decoded = jwtDecode(key);
      const id = decoded.id;
      console.log(id);
      const response = await axios.post(
        `${URI}/api/verify`,
        {},
        {
          headers: {
            //
            Authorization: id,
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.status === 200) {
        alert("Email has been sent .");
      } else if (response?.status === 202) {
        alert("Working Email is already verified");
      } else if (response?.status === 206) {
        alert("Working Email is Invalid");
      } else if (response?.status === 205) {
        alert("Working Email is not provided");
      } else {
        alert("Unexpected error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div>
          <main className="wrap">
            <section className="container">
              <div className="container__heading">
                <h2>Terms &amp; Conditions</h2>
              </div>
              <div className="container__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Curabitur sodales
                  ligula in libero. Sed dignissim lacinia nunc.{"{"}" "{"}"}
                </p>
                <p>
                  Curabitur tortor. Pellentesque nibh. Aenean quam. In
                  scelerisque sem at dolor. Maecenas mattis. Sed convallis
                  tristique sem. Proin ut ligula vel nunc egestas porttitor.
                  Morbi lectus risus, iaculis vel, suscipit quis, luctus non,
                  massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
                  ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
                  euismod in, nibh. Quisque volutpat condimentum velit.{"{"}" "
                  {"}"}
                </p>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia,
                  urna non tincidunt mattis, tortor neque adipiscing diam, a
                  cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
                  Suspendisse potenti. Nunc feugiat mi a tellus consequat
                  imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
                  Suspendisse in justo eu magna luctus suscipit.{"{"}" "{"}"}
                </p>
                <p>
                  Sed lectus. Integer euismod lacus luctus magna. Quisque
                  cursus, metus vitae pharetra auctor, sem massa mattis sem, at
                  interdum magna augue eget diam. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae;
                  Morbi lacinia molestie dui. Praesent blandit dolor. Sed non
                  quam. In vel mi sit amet augue congue elementum. Morbi in
                  ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
                  viverra nec, blandit vel, egestas et, augue. Vestibulum
                  tincidunt malesuada tellus. Ut ultrices ultrices enim.
                  Curabitur sit amet mauris.{"{"}" "{"}"}
                </p>
                <p>
                  Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.
                  Integer lacinia sollicitudin massa. Cras metus. Sed aliquet
                  risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis,
                  venenatis tristique, dignissim in, ultrices sit amet, augue.
                  Proin sodales libero eget ante. Nulla quam. Aenean laoreet.
                  {"{"}" "{"}"}
                </p>
              </div>
              <div className="container__nav">
                <small>
                  By clicking 'Accept' you are agreeing to our terms and
                  conditions.
                </small>
                <button onClick={handleSubmit} className="button">
                  Accept
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Terms;
