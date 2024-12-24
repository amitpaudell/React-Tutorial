import { useState } from "react";

function Layout() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="whole-container h-screen w-full" style={{ backgroundColor: color }}>
        <div className="container">
          <button
            className="box one bg-red-700"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="box two bg-green-700"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="box three bg-blue-700 "
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="box four bg-[#808000]"
            onClick={() => {
              setColor("olive");
            }}
          >
            Olive
          </button>
          <button
            className="box five bg-gray-700"
            onClick={() => {
              setColor("gray");
            }}
          >
            Gray
          </button>
          <button
            className="box six bg-yellow-700"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="box seven bg-pink-700"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="box eight bg-purple-700"
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="box nine  bg-[#E6E6FA]"
            onClick={() => {
              setColor("lavender");
            }}
          >
            Lavender
          </button>
          <button
            className="box ten  bg-white"
            onClick={() => {
              setColor("white");
            }}
          >
            White
          </button>
          <button
            className="box eleven  bg-black"
            onClick={() => {
              setColor("black");
            }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default Layout;
