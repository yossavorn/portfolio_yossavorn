import React from "react";
import drumKit from "../asset/Portfolio/DrumKit.png";
import expense from "../asset/Portfolio/Expense.png";
import Simon from "../asset/Portfolio/Simon.png";
import Shopping from "../asset/Portfolio/Shopping.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: drumKit,
      dlink: "https://yossavorn.github.io/Drumkit-Web/",
      ghlink: "https://github.com/yossavorn/Drumkit-Web",
    },
    {
      id: 2,
      src: Simon,
      dlink: "https://yossavorn.github.io/The-Simon-Game/",
      ghlink: "https://github.com/yossavorn/The-Simon-Game",
    },
    {
      id: 3,
      src: expense,
      dlink: "https://yossavorn.github.io/ExpenseApp-react-/",
      ghlink: "https://github.com/yossavorn/ExpenseApp-react-",
    },
    {
      id: 4,
      src: Shopping,
      dlink: "https://yossavorn.github.io/FoodCartApp_React/",
      ghlink: "https://github.com/yossavorn/FoodCartApp_React",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, dlink, ghlink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-2/3"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 text-center px-6 py-3 mt-3  duration-200 hover:scale-105">
                  <a href={dlink} target="_blank" rel="noreferrer">
                    Deployed Website
                  </a>
                </button>
                <button className="w-1/2 text-center px-6 py-3 mt-3  duration-200 hover:scale-105">
                  <a href={ghlink} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
