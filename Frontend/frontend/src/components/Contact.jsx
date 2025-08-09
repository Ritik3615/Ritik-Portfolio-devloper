import React from "react";

const Contact = () => {
  return (
    <section id="contact" className=" bg-gray-100 bg-gradient-to-r from-gray-900 to-gray-300 bg-lines mb-7">
      <div className="max-w-5xl mx-auto px-4 bg-gradient-to-r from-gray-900 to-gray-300 bg-lines">
        <h2 className="text-3xl font-bold text-center mb-3 text-white">Contact</h2>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 ">
          <p className="text-lg text-gray-700 mb-4">
            I’m open to opportunities, collaborations, and projects.  
            Feel free to reach out!
          </p>

          <div className="space-y-2">
            <p className="text-gray-800 font-medium">
              📞 +91 7338495036
            </p>
            <p className="text-gray-800 font-medium">
              📧 <a href="mailto:rs1105312@gmail.com" className="text-blue-600 hover:underline">
                rs1105312@gmail.com
              </a>
            </p>
            <p className="text-gray-800 font-medium">
              📍 Bengaluru, Karnataka
            </p>
            <p>
              🔗 <a
                href="https://linkedin.com/in/7338-ritik-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </p>
            <p>
              💻 <a
                href="https://github.com/Ritik3615"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
