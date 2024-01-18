import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";

const Event = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    topicName: "",
    dateEvent: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      console.log(data.get("startTime"));
      console.log(data.get("endTime"));
      console.log(data.get("dateEvent"));

      // Replace 'https://your-backend-endpoint.com/api/create-event' with your actual backend endpoint
      //   const response = await axios.post(
      //     "https://your-backend-endpoint.com/api/create-event",
      //     data,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     }
      //   );

      //   // Handle the response from the backend, e.g., show a success message
      //   console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error sending form data:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-6">Create A Event</h1>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Event Name */}
            <div className="mb-6">
              <label className="block mb-2" htmlFor="eventName">
                Event Name:
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                className="w-full p-2 border rounded"
                value={formData.eventName}
                onChange={handleChange}
              />
            </div>

            {/* Topic Name */}
            <div className="mb-6">
              <label className="block mb-2" htmlFor="topicName">
                Topic Name:
              </label>
              <input
                type="text"
                id="topicName"
                name="topicName"
                className="w-full p-2 border rounded"
                value={formData.topicName}
                onChange={handleChange}
              />
            </div>

            {/* Date */}
            <div className="mb-6">
              <label className="block mb-2" htmlFor="dateEvent">
                Date:
              </label>
              <input
                type="date"
                id="dateEvent"
                name="dateEvent"
                className="w-full p-2 border rounded"
                value={formData.dateEvent}
                onChange={handleChange}
              />
            </div>

            {/* Start Time */}
            <div className="mb-6">
              <label className="block mb-2" htmlFor="startTime">
                Start Time:
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                className="w-full p-2 border rounded"
                value={formData.startTime}
                onChange={handleChange}
              />
            </div>

            {/* End Time */}
            <div className="mb-6">
              <label className="block mb-2" htmlFor="endTime">
                End Time:
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                className="w-full p-2 border rounded"
                value={formData.endTime}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Event;
