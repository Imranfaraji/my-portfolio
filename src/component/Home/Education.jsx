import React from "react";

const Education = () => {
  return (
    <section
      name="education"
      className="w-full bg-gray-100 dark:bg-[#212428] py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Educational Qualification
        </h2>

        <div className="bg-white dark:bg-[#2a2d35] rounded-xl shadow-lg p-8">
          <ul className="space-y-6">
            <li className="border-l-4 border-red-500 pl-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Bachelor of Science (B.Sc) – Soil Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                National University, Honours 3rd Year (Ongoing)
              </p>
            </li>

            <li className="border-l-4 border-red-500 pl-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Higher Secondary Certificate (HSC) – Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                GPA: 5.00 / 5.00
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
