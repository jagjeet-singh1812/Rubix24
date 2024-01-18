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
                Mentor's Name{" "}
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
    </div>
  );
};

export default Progressive;

