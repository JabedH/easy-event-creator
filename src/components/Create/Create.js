import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate("");
  const [eventLocation, setEventLocation] = useState();
  const handleLocation = (e) => {
    const location = e.target.value;
    setEventLocation(location);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {};
  return (
    <div className="p-20">
      <div className="flex flex-col md:flex-row justify-start my-10 items-center pb-3 md:pb-5 border-b-2 drop-shadow-xl">
        <button
          onClick={() => window.history.back()}
          className=" w-[6rem] h-[2.5rem] text-[1rem] font-bold
          text-white rounded-3xl bg-[#8456EC]"
        >
          Back
        </button>
        <h4 className="text-center w-full font-semibold text-2xl">
          Create event
        </h4>
      </div>
      <div className=" lg:border-2 rounded-md border-sky-800 flex justify-center">
        {/* react hook form */}
        <div className="pl-0 md:pl-10 my-10 md:my-10 m-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full  mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Event name</span>
              </label>
              <input
                type="text"
                placeholder=""
                class="input input-bordered w-96 "
                {...register("eventName", { required: true, maxLength: 40 })}
              />
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Host name</span>
              </label>
              <input
                type="text"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("eventName", { required: true, maxLength: 40 })}
              />
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Start Event date</span>
              </label>
              <input
                type="date"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("eventDate", { required: true })}
              />
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Event date</span>
              </label>
              <input
                type="date"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("eventDate", { required: true })}
              />
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">End Event time</span>
              </label>
              <input
                type="time"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("eventTime", { required: true })}
              />
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Location</span>
              </label>
              <input
                type="text"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("eventName", { required: true, maxLength: 40 })}
              />
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Event photo</span>
              </label>
              <input
                type="file"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("eventName", { required: true, maxLength: 40 })}
              />
            </div>
            <div class="form-control w-full max-w-md mt-3 md:mt-5">
              <label class="label">
                <span class="label-text font-semibold">Description</span>
              </label>
              <textarea
                rows="20"
                type="text"
                placeholder=""
                class="input input-bordered w-full max-w-md"
                {...register("description", { required: true, maxLength: 400 })}
              />
            </div>
            <Link to="/event">
              <input
                className="bg-[#8456EC] text-white px-4 py-2 rounded-3xl mt-5 md:mt-5 ml-20 cursor-pointer "
                type="submit"
                value="Next"
              />
            </Link>
          </form>
          <div className="mt-[-32px] mr-[5rem]">
            <button onClick={() => window.history.back()} className="">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
