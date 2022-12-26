import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="lg:text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <div className="overflow-scroll sm:overflow-visible">
          <p className="text-xl mt-20 ">
            My name is Yossavorn Iangleard. I am 25 years old.I graduated with a
            bachelor's degree from Nuclear and Radiation Engineering, Faculty of
            Engineering, Chulalongkorn University, Thailand, in 2020. My
            undergrad's thesis was to make a simple nuclear reactor simulation
            using Python programming.
          </p>

          <br />
          <p className="text-xl ">
            After that, I received a scholarship from Ulsan National Institute
            of Technology (UNIST) and continued my master's degree there. I
            attended Computational Reactor Physics Laboratory which is a part of
            Nuclear Engineering department. My research works there were to use
            computer programming, such as MATLAB, Python, to solve the
            mathematical problem, such as numerical analysis and matrix.
            Moreover, I had an opportunity to learn the fundamental of machine
            learning and predictive analysis using Python programming. I
            finished my master's degree and came back to Thailand in 2022.
          </p>

          <br />
          <p className="text-xl  ">
            After that, I intend to start my career as developer. Thus, I am
            learning and taking online courses regarding Web development and
            making some mini projects using HTML, CSS, Javascript and frontend
            frameworks such as jQuery, React.Js. I am also interested in backend
            technology and learning backend framework such as Node.Js and
            database like MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
