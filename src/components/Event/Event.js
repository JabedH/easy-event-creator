import React from "react";
import bg from "../../asset/img/Event image.png";
import {
  AiOutlineCalendar,
  FaAngleUp,
  FaCalendar,
  FaLocationArrow,
} from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
const Event = () => {
  return (
    <div className="bg-[#FBFAFF] h-screen">
      <div className="grid grid-cols-2 items-center  justify-items-center ">
        <div className="px-[10rem] my-[17rem]">
          <h3 className="text-[4.8rem] font-bold">Birthday Bash</h3>
          <p className="text-[#828282] text-[1.8rem] text-start mb-[6.5rem]">
            Hosted by Elysia
          </p>
          <div>
            <div className="flex gap-5">
              <div>
                <p className=" shadow-md text-[#8456EC]  bg-white p-3 rounded-lg text-[1.5rem]">
                  <FaCalendar />
                </p>
              </div>
              <div className="text-start">
                <p className="text-[1.8rem] font-bold text-[#240D57]">
                  18 August 6:00PM
                </p>
                <p className="text-[1.8rem]">
                  to 19{" "}
                  <span className="font-bold font-[#4F4F4F]">
                    August 1:00PM
                  </span>{" "}
                  UTC +10
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-10">
              <div>
                <h3 className="shadow-md text-[#8456EC]  bg-white p-3 rounded-lg text-[1.5rem]">
                  {" "}
                  <BsFillGeoAltFill />{" "}
                </h3>
              </div>
              <div className="text-start">
                <p className="text-[1.8rem] font-bold text-[#240D57]">
                  Street name
                </p>
                <p className="text-[1.8rem]">Suburb, State, Postcode</p>
              </div>
            </div>
          </div>
        </div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Event;
