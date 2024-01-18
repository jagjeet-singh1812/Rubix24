// import user from "../assets/profile_img.jpg";
// const Progressive = () => {
//   return (
//     <div>
//       <div className="bg-white-100 dark:bg-gray-800 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row -mx-4">
//             <div className="md:flex-1 px-4">
//               <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
//                 <img
//                   className="w-full h-full object-cover rounded-[50px]"
//                   src={user}
//                   alt="Mentor Image"
//                 />
//               </div>
//               {/* Add buttons for actions if needed */}
//             </div>
//             <div className="md:flex-1 px-4">
//               <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
//                 Mentor's Name{" "}
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
//                 ante justo. Integer euismod libero id mauris malesuada
//                 tincidunt.
//               </p>
//               <div className="flex mb-4">
//                 <div className="mr-4">
//                   <span className="font-bold text-gray-700 dark:text-gray-300">
//                     Experience :{" "}
//                   </span>
//                   <span className="text-gray-600 dark:text-gray-300">
//                     10+ Years
//                   </span>
//                 </div>
//                 <div>
//                   <span className="font-bold text-gray-700 dark:text-gray-300">
//                     Location :{" "}
//                   </span>
//                   <span className="text-gray-600 dark:text-gray-300">
//                     City, Country
//                   </span>
//                 </div>
//               </div>
//               {/* Additional mentor details can be added here */}
//               <div>
//                 <span className="font-bold text-gray-700 dark:text-gray-300">
//                   About Me:
//                 </span>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   sed ante justo. Integer euismod libero id mauris malesuada
//                   tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
//                   Duis dapibus augue vel ipsum pretium, et venenatis sem
//                   blandit. Quisque ut erat vitae nisi ultrices placerat non eget
//                   velit. Integer ornare mi sed ipsum lacinia, non sagittis
//                   mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
//                   tincidunt mi consectetur.
//                 </p>
//               </div>

//               <div className="mt-8">
//                 <span className="font-bold text-gray-700 dark:text-gray-300 block mb-2">
//                   Job Title:
//                 </span>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Your Job Title
//                 </p>
//               </div>

//               {/* Skills Section */}
//               {/* <div className="mt-8">
//                 <span className="font-bold text-gray-700 dark:text-gray-300 block mb-2">
//                   Skills:
//                 </span>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Progressive;

import user from "../assets/profile_img.jpg";

const Progressive = () => {
  const skills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "MongoDB"];
  return (
    <div>
      <div className="bg-white-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover rounded-[50px]"
                  src={user}
                  alt="Mentor Image"
                />
              </div>
              {/* Add buttons for actions if needed */}
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Mentor's Name
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Experience:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    10+ Years
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Location:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    City, Country
                  </span>
                </div>
              </div>
              {/* Additional mentor details can be added here */}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  About Me:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-base mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>

              <div className="mt-8">
                <span className="font-bold text-gray-700 dark:text-gray-300 block mb-2">
                  Job Title:
                </span>
                <p className="text-gray-600 dark:text-gray-300">
                  Your Job Title
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
      <span className="mb-5 text-3xl font-semibold text-black md:text-center md:text-2xl">
        Skills:
      </span>
      <div className="flex justify-center gap-4">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="shadow-pink-600/30 inline-flex items-center rounded-full bg-pink-500 px-6 py-3 text-xl font-light text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:bg-pink-600 hover:shadow-lg"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Progressive;
