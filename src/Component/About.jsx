import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-5">
          <p className="text-4xl font-bold inline border-b-2  border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt:20g md:mt-16">
        Hello there! I'm Krish Vaswani, a passionate second-year BCA student with a keen interest in web development. I find joy in crafting digital experiences that seamlessly blend creativity and functionality. Currently honing my skills in the ever-evolving realm of web technologies, I aspire to create intuitive and visually appealing websites that leave a lasting impression.
        </p>

        <br />
        <br />

        <p className="text-xl">
        My journey into the world of web development began with a curiosity to understand the intricate dance between code and design. Over the past years, I've delved into languages like HTML, CSS, and JavaScript, turning concepts into captivating web applications. The challenges of this dynamic field fuel my desire to learn and grow continuously. Each line of code I write is a step forward in my mission to create impactful and user-friendly digital solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
