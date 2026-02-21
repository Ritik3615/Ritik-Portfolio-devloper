import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering (EEE)",
      institution: "JCT College of Engineering & Technology",
      location: "Coimbatore, Tamil Nadu",
      duration: "2020 – 2024",
      score: "CGPA: 7.8",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Sri Ramanugrah High School",
      location: "Wazirganj, Gaya, Bihar",
      duration: "2018 – 2020",
      score: "56%",
    },
    {
      degree: "Secondary School (10th)",
      institution: "Sri Ramanugrah High School",
      location: "Wazirganj, Gaya, Bihar",
      duration: "2017 – 2018",
      score: "54%",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-16"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold text-blue-300">
                {edu.degree}
              </h3>

              <p className="text-gray-300 mt-2">
                {edu.institution}
              </p>

              <p className="text-gray-400 text-sm">
                {edu.location}
              </p>

              <div className="flex justify-between mt-3 text-gray-400 text-sm">
                <span>{edu.duration}</span>
                <span>{edu.score}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;