import React from "react";
import { Link } from "react-router-dom";
import bg from "../../asset/img/image 1.png";

const Home = () => {
  return (
    <div className="bg-[#F6F2FF]">
      <div className="grid grid-cols-2 p-[9.5rem] items-center">
        <img src={bg} alt="" />

        <div>
          <h1 className=" text-[6.4rem] font-bold leading-[7rem]">
            Imagine if <br />{" "}
            <span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
              Snapchat
            </span>
            <br /> had events.
          </h1>
          <p className="mt-[1.5rem] text-[2.4rem] ">
            Easily host and share events with your friends across any social
            media.
          </p>
          <Link to="./create">
            <button
              className="mt-[5.2rem] w-[32rem] h-[5.5rem] text-[2rem] font-bold
            text-white rounded-3xl bg-gradient-to-r from-[#8456EC] to-[#E87BF8]"
            >
              {" "}
              🎉 Create my event
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
