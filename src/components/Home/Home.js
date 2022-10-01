import React from "react";
import { Link } from "react-router-dom";
import bg from "../../asset/img/image 1.png";

const Home = () => {
  return (
    <div className="bg-[#F6F2FF]">
      <div className="lg:grid grid-cols-2 lg:p-[9.5rem] items-center pb-20">
        <img src={bg} alt="" />

        <div>
          <h1 className=" lg:text-[6.4rem] text-[3.4rem] font-bold lg:leading-[7rem]">
            Imagine if <br />{" "}
            <span className="font-extrabold text-transparent lg:text-8xl bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
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
              className="mt-[5.2rem] lg:w-[32rem] w-[15rem] lg:h-[5.5rem] h-[3.5rem] lg:text-[2rem] text-[1rem] font-bold
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
